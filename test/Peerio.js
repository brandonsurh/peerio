const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const { networkConfig } = require("../helper-hardhat-config")

// for hyperspace
//const private_key = network.config.accounts[0]
//const wallet = new ethers.Wallet(private_key, ethers.provider)

const wallet = ethers.provider.getSigner(0)

describe("Peerio", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployPeerioFixture() {
    // Contracts are deployed using the first signer/account by default

    const Peerio = await ethers.getContractFactory("Peerio", wallet);
    //const peerio = await Peerio.deploy();
    //deploy to Hardhat hardhat network
    const peerio = await Peerio.deploy();
    await peerio.deployed();

    return { peerio };
  }

  describe("Deployment", function () {
    it("Should set the right id iterator", async function () {
      const { peerio } = await loadFixture(deployPeerioFixture);

      expect(await peerio.getCurrentId()).to.equal(0);
    });
  });
});
