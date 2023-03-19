// SPDX-License-Identifier: MIT

// To do:
// - safe math
// - non reentrancy modifier
// - boolean value
// - cant vote more than once
// - article submitter cannot vote
// - peer reviewers var
// - voting on article functionality
// - fraction of subscribed people is required peer review votes needed
// - only one paper per person to be peer reviewed
// - data struct to hold papers to be reviewed (strings?, count?,
// - have someone push to that struct with paper to be reviewed
// - struct for paper data (name, id (hashed from string?), votes (total and separate), states (voting, passed, failed))

// Methods for smart contract:
// subscribe/pay funds to smart contract
// validate if user has subscribed/paid
// request peer review for research paper
// vote for peer review
// did the user vote
// did the peer review pass
// pay contributor if peer review passed
// pay voters for voting (use reputation)

// Preston: Remove User balances - replace with direct payments


pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract Peerio is ReentrancyGuard {

    mapping(address => User) public users;
    mapping(uint256 => Article) public articles;
    //uint256[] public articleList;

    // owner of the contract (probably needs to change)
    address payable public owner;

    // maybe put this in user struct/mapping
    uint public rounds;

    // this is used to set the article ids, incremented each time used
    // used as a serial identifier for all Articles
    uint id;

    uint public minPeerReviews = 10;

    //contract settings
    constructor() {
        owner = payable(msg.sender); // setting the contract creator
    }

    // Modifier to check that the caller is the owner of
    // the contract.
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        // Underscore is a special character only used inside
        // a function modifier and it tells Solidity to
        // execute the rest of the code.
        _;
    }

    enum ArticleStatus{
		AWAITING,
		APPROVED,
		DEPRECIATED
	}

    //ArticleStatus public article

    // STRUCTS
    struct User {
        //uint userPayments;
        uint membershipExpiration;
        uint reputationScore;
        uint numberOfRounds; // Used to help determine reputation score
        bool hasSubmittedArticle; // Only one Article may be submitted for peer review at a time
        bool registered;
        mapping (uint => bool) didUserVote;
        mapping (uint => bool) whatDidUserVote;
    }

    struct Article {
        uint articleId;
        address uploader;
        ArticleStatus status;
        address[10] upvoteList;
        uint upvoteIndex;
        address[10] downvoteList;
        uint downvoteIndex;
    }

    // returns the current id iterator
    function getCurrentId() public view returns (uint) {
        return id;
    }


    // allows users to send money to contract
    function subscribe() public payable {
        require(msg.value >= 2 ether, "One month's membership is 2 FIL. You are sending an insufficienct amount.");
        if (users[msg.sender].registered == false) {
            registerUser();
        }
        if (users[msg.sender].membershipExpiration <= block.timestamp) {
            users[msg.sender].membershipExpiration = block.timestamp + 31 days;
        } else {
            users[msg.sender].membershipExpiration += 31 days;
        }
    }

    // returns true if an address is stillAnActiveMember
    function isUserSubscribed(address _addr) public view returns (bool) {
        if (users[_addr].membershipExpiration > block.timestamp) {
            return true;
        }
        return false;
    }

    function registerUser() internal {
        User storage newUser = users[msg.sender];
        newUser.reputationScore = 50; // 0.5 Rating * 10 Frequency;
        newUser.registered = true;
    }

    // this arg takes in the id of the article that is being voted on
    function makeUpvote(uint articleId) external nonReentrant {
        require(isUserSubscribed(msg.sender), "You haven't subscribed!");
        require(users[msg.sender].didUserVote[articleId] != true, "You already voted!");
        articles[articleId].upvoteList[articles[articleId].upvoteIndex++] = msg.sender;
        users[msg.sender].numberOfRounds++;
        users[msg.sender].whatDidUserVote[articleId] = true;
        users[msg.sender].didUserVote[articleId] = true;
        finishVoting(articleId);
        sendToPeerReviewer(payable(msg.sender));
    }

    // this arg takes in the id of the article that is being voted on
    function makeDownvote(uint articleId) external nonReentrant {
        require(isUserSubscribed(msg.sender), "You haven't subscribed!");
        require(users[msg.sender].didUserVote[articleId] != true, "You already voted!");
        //articles[articleId].downvoteList.push(msg.sender);
        articles[articleId].downvoteList[articles[articleId].downvoteIndex++] = msg.sender;
        users[msg.sender].numberOfRounds++;
        users[msg.sender].whatDidUserVote[articleId] = false;
        users[msg.sender].didUserVote[articleId] = true;
        finishVoting(articleId);
        sendToPeerReviewer(payable(msg.sender));
    }

    // fill arguments with paper struct vars
    function proposeReview() public returns (uint articleId){
        // fill struct with passed args
        require(users[msg.sender].hasSubmittedArticle == false, "Your article is awaiting approval!");
        Article storage newArticle = articles[id];
        newArticle.articleId = id;
        newArticle.uploader = msg.sender;
        newArticle.status = ArticleStatus.AWAITING;
        users[msg.sender].hasSubmittedArticle = true;
        id++;
        return id;
    }

    // this needs to be called for each vote
    // should take in Article ID as argument
    function finishVoting(uint _id) internal {
        // are there enough votes?
        // needs to be at least - `minPeerReviews` -
        // maybe also set results in Article struct
        // if failed review set status to DEPRECIATED
        // reset hasSubmittedArticle to false for uploader
        if(articles[_id].upvoteIndex + articles[_id].downvoteIndex >= minPeerReviews) {
            users[articles[_id].uploader].hasSubmittedArticle = false;
            if (articles[_id].upvoteIndex > articles[_id].downvoteIndex) {
                articles[_id].status = ArticleStatus.APPROVED;
                sendToUploader(payable(articles[_id].uploader));
            } else {
                articles[_id].status = ArticleStatus.DEPRECIATED;
            }
            _handleReputation(_id);
        }
    }

    // add function to increase/decrease the minumum required number of peer reviews before article is approved
    function updateMinNumberOfPeerreviews(uint _minPeerReviews) public onlyOwner {
        minPeerReviews = _minPeerReviews;
    }

    // This function pays out peer reviewers for participating
    //
    // .1 FIL = Maximum amount distributed to peer reviewers
    function _handleReputation(uint articleId) internal {
        //uint listLength;
        bool result;
        address tempUser;
        if (articles[articleId].upvoteList.length > articles[articleId].downvoteList.length) {
            //listLength = articles[articleId].upvoteList.length;
            result = true;
        }
        else {
            //listLength = articles[articleId].downvoteList.length;
            result = false;
        }

        // implement safe math
        for (uint i = 0; i < articles[articleId].upvoteIndex; i++) {
            if (result) {
                tempUser = articles[articleId].upvoteList[i];
                users[tempUser].reputationScore += 1;
            }
            else {
                tempUser = articles[articleId].upvoteList[i];
                users[tempUser].reputationScore -= 1;
            }
        }

        for (uint i = 0; i < articles[articleId].downvoteIndex; i++) {
            if (!result) {
                tempUser = articles[articleId].downvoteList[i];
                users[tempUser].reputationScore += 1;
            }
            else {
                tempUser = articles[articleId].downvoteList[i];
                users[tempUser].reputationScore -= 1;
            }
        }
    }

    // non reentrant
    // require that only owner can call this
    // require there is enough money to send
    function sendToPeerReviewer(address payable _peerReviewer) internal {
        _peerReviewer.transfer(users[_peerReviewer].reputationScore / 100 * 0.1 ether);
        //_peerReviewer.transfer(5 ether);
    }

    // non reentrant
    // require that only owner can call this
    // require there is enough money to send
    function sendToUploader(address payable _uploader) internal {
        _uploader.transfer(4 ether);
    }

    // get article status
    function getArticleStatus(uint _id) public view returns (ArticleStatus) {
        return articles[_id].status;
    }

}
