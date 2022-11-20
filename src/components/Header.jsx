import "../styles/Header.css";
import { IsUserSubscribed } from "./SmartContractMethods";

var ethers = require("ethers");

const ConnectWallet = async () => {
  let connection = new Promise(async (resolve, reject) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    resolve(signer.getAddress());
    console.log("Account: ", await signer.getAddress());
  });

  let result = await connection;

  alert("connected to: " + result);
};

const Header = () => {
  return (
    <div className="header">
      <h1>peerio</h1>
      <button>home</button>
      <button>explore</button>
      <button>about</button>
      <button
        onClick={() => {
          ConnectWallet();
          console.log(IsUserSubscribed());
        }}
      >
        connect wallet
      </button>
    </div>
  );
};

export default Header;
