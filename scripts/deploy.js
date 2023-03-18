
require("hardhat-deploy")
require("hardhat-deploy-ethers")

const { networkConfig } = require("../helper-hardhat-config")


const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

const main = async () => {
    console.log("Wallet Ethereum Address:", wallet.address)

    //deploy Simplecoin
    const Peerio = await ethers.getContractFactory('Peerio', wallet);
    console.log('Deploying Peerio...');
    const peerio = await Peerio.deploy();
    await peerio.deployed()
    console.log('Peerio deployed to:', peerio.address);

    // update front end with contract information
    await updateFrontend(peerio)

}

const updateFrontend = async (contractRef) => {
    // write contract address to front end
    const fs = require('fs');
    const contractInfo = {
        address: contractRef.address,
        abi: contractRef.interface.format('json')
    }
    const filePath = "./src/contractInfo.json"
    fs.writeFile(filePath, JSON.stringify(contractInfo) , function(err) {
        if (err) {
            return console.log(err);
        }
        console.log(`contract information saved to ${filePath}`);
    });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
