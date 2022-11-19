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


pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract peerio {

    // amount of money in contract
    uint totalBalance;

    // mapping for how much each address has paid
    mapping(address => uint) public payments;
    mapping(address => bool) public voted;
    mapping(address => bool) public hasSubmittedPaper;

    mapping(address => User) public users;

    // owner of the contract (probably needs to change)
    address payable public owner;

    // put these in paper struct
    uint public upvotes;
    uint public downvotes;

    // maybe put this in user struct/mapping
    uint public rounds;

    uint id;

    //contract settings
    constructor() {
        owner = payable(msg.sender); // setting the contract creator
    }

    // STRUCTS
    struct User {
        uint userPayments;
        uint reputationScore;
        uint numberOfRounds;
        bool activeMember;
        bool voted;         // !!!!!!people wont vote only once!!!!!!!
        bool hasSubmittedArticle;
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

    mapping(uint256 => Article) articles;
    uint256[] public articleList;

    // allows users to send money to contract
    function subscribe() public payable {
        if (users[msg.sender].registered == false)
            registerUser();
        totalBalance += msg.value;
        users[msg.sender].userPayments += msg.value;
        users[msg.sender].activeMember = true;
    }
    
    // returns true if an address has paid
    function isUserSubscribed(address _addr) public view returns (bool) {
        if (users[_addr].activeMember)
            return true;
        return false;
    }


    function registerUser() internal {
        User storage newUser = users[msg.sender];
        newUser.reputationScore = 1/2 * 10;
        newUser.registered = true;
    }

    function showMePerson() public view returns (uint) {
        return users[msg.sender].userPayments;
    }

    // public function to return total balance
    function getTotalBalance() view public returns(uint) {
        return totalBalance;
    }

    // this arg takes in the id of the article that is being voted on
    function makeUpvote(uint articleId) public {
        require(isUserSubscribed(msg.sender), "You haven't subscribed!");
        require(users[msg.sender].voted == false, "You already voted!");
        // need to change vote lines
        articles[articleId].upvotes++;
        users[msg.sender].numberOfRounds++;
        users[msg.sender].voted = true;
    }

    // this arg takes in the id of the article that is being voted on
    function makeDownvote(uint articleId) public {
        require(isUserSubscribed(msg.sender), "You haven't subscribed!");
        require(users[msg.sender].voted == false, "You already voted!");
        articles[articleId].downvotes++;
        users[msg.sender].numberOfRounds++;
        users[msg.sender].voted = true;
    }

    // fill arguments with paper struct vars
    function proposeReview(string memory title) public {
        // fill struct with passed args
        // push paper to data structure of papers to be reviewed
        // set mapping hasSubmittedArticle to true
        require(users[msg.sender].hasSubmittedArticle == false, "Your article is awaiting approval!");
        Article storage newArticle = articles[id];
        newArticle.articleId = id;
        newArticle.title = title;
        //newArticle.upvotes = 0;
        //newArticle.downvotes = 0;
        newArticle.uploader = msg.sender;
        users[msg.sender].hasSubmittedArticle = true;
        articleList.push(id);
        id++;
        // push it to the stack of articles in review
    }

    // should take in paper struct as args
    function isVotingDone() public view returns (bool) {
        // are there enough votes?
        // needs to be at least 25 percent of peer reviewers vote
        // maybe also set results in paper struct
        // if failed review then discard paper from data structure
        // set hasSubmittedArticle false for uploader
    }



}
