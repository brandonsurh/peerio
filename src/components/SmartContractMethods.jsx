import "../styles/Header.css";
import { abi } from "../assets/contractABI";

const ethers = require("ethers");

// The Contract interface
const contractABIJson = JSON.parse(abi);

// Connect to the network
//let provider = ethers.getDefaultProvider();
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

// The address from the above deployment example
let contractAddress = "0x01818484aB22F029a8EE691Aa9c6b6EEcBdF4c5A";

// We connect to the Contract using a Provider, so we will only
// have read-only access to the Contract
let contract = new ethers.Contract(contractAddress, contractABIJson, provider);

// **************************************************************
// ***************   SMART CONTRACT METHODS  ********************
// **************************************************************

// Upvote Function
export const Upvote = async (_articleId) => {
  //console.log("Contract ABI", contractABIJson);
  let currentValue = await contract.makeUpvote(String(_articleId));
  console.log("checking", currentValue);

  return currentValue;
};

// Down Function
export const Downvote = async (_articleId) => {
  // Get the current value
  console.log("Contract ABI", contractABIJson);
  let currentValue = await contract.makeDownvote(String(_articleId));
  console.log("checking", currentValue);

  return currentValue;
};

// Articles Function
export const Articles = async (_articleId) => {
  // Get the current value
  console.log("Contract ABI", contractABIJson);
  let currentValue = await contract.articles(String(_articleId));
  console.log("checking", currentValue);

  return currentValue;
};

// Propose Review
// * Param = Document Name
export const ProposeReview = async (_ArticleName) => {
  // Get the current value
  console.log("Contract ABI", contractABIJson);
  let currentValue = await contract.proposeReview(String(_ArticleName));
  console.log("checking", currentValue);

  return currentValue;
};

// Subscribe
// 1 month membership = 2 TFIL
export const Subscribe = async (_ArticleName) => {
  // Get the current value
  console.log("Contract ABI", contractABIJson);
  let currentValue = await contract.subscribe({
    value: ethers.utils.parseEther("2"),
  });
  console.log("checking", currentValue);

  return currentValue;
};
