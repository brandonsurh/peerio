var ethers = require('ethers');

const ConnectWallet = async () =>  {
    let connection = new Promise(async (resolve, reject) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        resolve(signer.getAddress());
        console.log("Account: ", await signer.getAddress());
    });

    let result = await connection

    alert("connected to: " + result);
}

const MenuBar = () => {
    return (
        <>
            <button>home</button>
            <button>explore</button>
            <button>about</button>
            <button onClick={ConnectWallet}>connect wallet</button>
        </>
    )
}

export default MenuBar;