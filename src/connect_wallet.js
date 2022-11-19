var ethers = require('ethers');

async function ConnectWallet() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Account: ", await signer.getAddress());
}

export default ConnectWallet;