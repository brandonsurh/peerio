var ethers = require('ethers');

const connectWallet = async () =>  {
    let promise = new Promise(async (resolve, reject) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        console.log("Account: ", await signer.getAddress());
    });

    let result = await promise

    alert(result);
}

export default connectWallet;