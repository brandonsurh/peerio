import '../styles/Header.css'
import { abi } from '../assets/contractABI'

const ethers = require('ethers')

// The Contract interface
const contractABIJson = JSON.parse(abi)

// Connect to the network
//let provider = ethers.getDefaultProvider();
const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')

const signer = provider.getSigner()

// The address from the above deployment example
let contractAddress = '0x01818484aB22F029a8EE691Aa9c6b6EEcBdF4c5A'

// We connect to the Contract using a Provider, so we will only
// have read-only access to the Contract
let contract = new ethers.Contract(contractAddress, contractABIJson, signer)

//contract = contract.connect(window.ethereum.selectedAddress);

// **************************************************************
// ***************   SMART CONTRACT METHODS  ********************
// **************************************************************

// Upvote Function
export const Upvote = async (_articleId) => {
  let currentValue = await contract.makeUpvote(String(_articleId))
  console.log('checking', currentValue)

  return currentValue
}

// Downvote Function
export const Downvote = async (_articleId) => {
  // Get the current value
  console.log('Contract ABI', contractABIJson)
  let currentValue = await contract.makeDownvote(String(_articleId))
  console.log('checking', currentValue)

  return currentValue
}

// Articles Function
export const Articles = async (_articleId) => {
  // Get the current value
  console.log('Contract ABI', contractABIJson)
  let currentValue = await contract.articles(String(_articleId))
  console.log('checking', currentValue)

  return currentValue
}

// Propose Review
// * Param = Document Name
export const ProposeReview = async (_ArticleName) => {
  // Get the current value
  console.log('Contract ABI', contractABIJson)
  let currentValue = await contract.proposeReview(String(_ArticleName))
  console.log('checking ProposeReview', currentValue)

  return currentValue
}

// Subscribe
// 1 month membership = 2 TFIL
export const Subscribe = async () => {
  // Get the current value
  //await provider.send("eth_requestAccounts", []);

  //let signer = nFR.connect(addrs[0]);

  //console.log("signer: ", signer);

  console.log('Contract ABI', contractABIJson)
  let currentValue = await contract.subscribe({
    value: ethers.utils.parseEther('2'),
  })
  console.log('checking', currentValue)

  return currentValue
}

// Owner (View) Function - returns address
export const Owner = async () => {
  // Get the current value
  console.log('Contract ABI', contractABIJson)
  let owner = await contract.owner()
  console.log('checking', owner)

  return owner
}

// users (View) Function - returns a struct
export const Users = async () => {
  // Get the current value
  console.log('My_Address', window.ethereum.selectedAddress)
  let users = await contract.users(String(window.ethereum.selectedAddress))
  console.log('checking', users)

  return users
}

// isUserSubscribed Function - returns a boolean
export const IsUserSubscribed = async () => {
  // Get the current value
  //console.log("My_Address", window.ethereum.selectedAddress);
  let isUserSubscribed = await contract.isUserSubscribed(
    String(window.ethereum.selectedAddress),
  )
  console.log('checking', isUserSubscribed)

  return isUserSubscribed
}
