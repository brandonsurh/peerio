// SPDX-License-Identifier: MIT

// To do:
// - safe math
// - non reentrancy modifier
// - boolean value

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

    address payable public owner;

    //contract settings
    constructor() {
        owner = payable(msg.sender); // setting the contract creator
    }

    // allows users to send money to contract
    function subscribe() public payable {
        totalBalance += msg.value;
        payments[msg.sender] += msg.value;
    }
    
    // returns true if an address has paid
    function userSubscribed(address _addr) public view returns (bool) {
        if (payments[_addr] > 0)
            return true;
        return false;
    }

    // public function to return total balance
    function getTotalBalance() view public returns(uint) {
        return totalBalance;
    }
}
