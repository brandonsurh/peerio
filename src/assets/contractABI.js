export const abi = `[ { "inputs": [ { "internalType": "uint256", "name": "articleId", "type": "uint256" } ], "name": "makeDownvote", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "articleId", "type": "uint256" } ], "name": "makeUpvote", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "title", "type": "string" } ], "name": "proposeReview", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "subscribe", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "uint256", "name": "_minPeerReviews", "type": "uint256" } ], "name": "updateMinNumberOfPeerreviews", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "articles", "outputs": [ { "internalType": "string", "name": "title", "type": "string" }, { "internalType": "uint256", "name": "articleId", "type": "uint256" }, { "internalType": "address", "name": "uploader", "type": "address" }, { "internalType": "enum Peerio.ArticleStatus", "name": "status", "type": "uint8" }, { "internalType": "uint256", "name": "upvoteIndex", "type": "uint256" }, { "internalType": "uint256", "name": "downvoteIndex", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_addr", "type": "address" } ], "name": "isUserSubscribed", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minPeerReviews", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address payable", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rounds", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "users", "outputs": [ { "internalType": "uint256", "name": "membershipExpiration", "type": "uint256" }, { "internalType": "uint256", "name": "reputationScore", "type": "uint256" }, { "internalType": "uint256", "name": "numberOfRounds", "type": "uint256" }, { "internalType": "bool", "name": "hasSubmittedArticle", "type": "bool" }, { "internalType": "bool", "name": "registered", "type": "bool" } ], "stateMutability": "view", "type": "function" } ]`;