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

pragma solidity ^0.8.4;

//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract peerio {

    // amount of money in contract
    //uint totalBalance;

    mapping(address => User) public users;
    mapping(uint256 => Article) public articles;
    uint256[] public articleList;

    // owner of the contract (probably needs to change)
    address payable public owner;

    // maybe put this in user struct/mapping
    uint public rounds;

    // this is used to set the article ids, incremented each time used
    // used as a serial identifier for all Articles 
    uint id;

    //contract settings
    constructor() {
        owner = payable(msg.sender); // setting the contract creator
    }

    /*
    enum ArticleStatus{
        AWAITING,
        APPROVED,
        DEPRECATED
    }
    */ 

    // STRUCTS
    struct User {
        //uint userPayments;
        uint membershipExpiration; 
        uint reputationScore;
        uint numberOfRounds;    // Used to help determine reputation score
        //bool activeMember; // Depreciated Variable - This is replaced by checking if `membershipExpiration` has been reached 
        bool voted;         // !!!!!!people wont vote only once!!!!!!!
        bool hasSubmittedArticle;   // Only one Article may be submitted for peer review at a time
        bool registered;
        //mapping (uint => Article) public article;
    }

    struct Article {
        string title;
        uint articleId;
        uint upvotes;
        uint downvotes;
        address uploader;
        //ArticleStatus status;
        //mapping (uint => Article) public article;
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
        newUser.reputationScore = 5; // 0.5 Rating * 10 Frequency;
        newUser.registered = true;
    }

    // this arg takes in the id of the article that is being voted on
    function makeUpvote(uint articleId) public {
        require(isUserSubscribed(msg.sender), "You haven't subscribed!");
        require(users[msg.sender].voted == false, "You already voted!");
        // need to change vote lines
        articles[articleId].upvotes++;
        users[msg.sender].numberOfRounds++;
        //users[msg.sender].voted = true;
    }

    // this arg takes in the id of the article that is being voted on
    function makeDownvote(uint articleId) public {
        require(isUserSubscribed(msg.sender), "You haven't subscribed!");
        require(users[msg.sender].voted == false, "You already voted!");
        articles[articleId].downvotes++;
        users[msg.sender].numberOfRounds++;
        //users[msg.sender].voted = true;
    }

    // fill arguments with paper struct vars
    function proposeReview(string memory title) public {
        // fill struct with passed args
        // push paper to data structure of papers to be reviewed

        require(users[msg.sender].hasSubmittedArticle == false, "Your article is awaiting approval!");
        Article storage newArticle = articles[id];
        newArticle.articleId = id;
        newArticle.title = title;
        newArticle.uploader = msg.sender;
        users[msg.sender].hasSubmittedArticle = true;
        articleList.push(id);
        id++;
    }

    // should take in Article ID as argument
    function isVotingDone(uint _id) public view returns (bool) {
        // are there enough votes?
        // needs to be at least - 11 peer reviewers -
        // maybe also set results in Article struct
        // if failed review set status to DEPRECIATED
        // reset hasSubmittedArticle to false for uploader
        if(articles[_id].upvotes + articles[_id].downvotes > 10) {
            return true;
        }
        else
            return false;
    }

    // add function to increase/decrease the minumum required number of peer reviews before article is approved
    //function updateMinNumberOfPeerreviews() {}

    // ------------------------------------------------------------------------------------


}
