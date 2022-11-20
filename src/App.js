import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Header from './components/Header'
import UploadPage from './pages/UploadPage'
import Explore from './pages/Explore'
import Reviewing from './pages/Reviewing'
import { createArticleTable, insertRow } from './tl_interface'
import { SUPPORTED_CHAINS, connect } from "@tableland/sdk";
var ethers = require('ethers')

const App = () => {
  const [wallet, setWallet] = useState('')

  const [tblLand, setTblLand] = useState('')
  console.log("tblLand", tblLand)
  const [artclTable, setArtclTable] = useState('')
  console.log("artclTable", artclTable)

  async function createArticleTable() {
    const localTestnet = SUPPORTED_CHAINS.custom
    //tableland = await connect({ network: "testnet", chain: "custom", chainId: 31415}); // connecting to wallabey
      // NOTE -- to use wallaby we will probably need to deploy tableland contracts!! 
    const tableland = await connect({chain: "local-tableland"})  // connecting to local hardhat chain
    setTblLand(tableland)
    await tableland.siwe();
    const article_table = await tableland.create(
      `id integer primary key, title text, description text, author text, cid text`, // Table schema definition, id is auto incrementing 
      {
        prefix: `my_sdk_table` // Optional `prefix` used to define a human-readable string
      }
    );
    setArtclTable(article_table)

    // save tableland and article table varaibles to local storage 
    //localStorage.setItem("tableland", Flatted.stringify(tableland));
    //localStorage.setItem("article_table", Flatted.stringify(article_table));
}

async function insertRow(id, title, description, author, cid) {
    // grab table info from local storage 
    //const tableland = Flatted.parse(localStorage.getItem("tableland"));
    //const article_table = Flatted.parse(localStorage.getItem("article_table"));
    console.log('strings')
    const writeRes = await tblLand.write(`INSERT INTO ${artclTable} (title, description, author, cid) VALUES ('${title}', '${description}', '${author}', '${cid}');`);
    return writeRes
}

  const connectWallet = async () => {
    let connection = new Promise(async (resolve, reject) => {
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
      await provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()
      resolve(signer.getAddress())
      console.log('Account: ', await signer.getAddress())
    })
    let result = await connection
    setWallet(result)
    createArticleTable()
  }

  /*
  useEffect(() => {
    createArticleTable();
  }, []);
  //insertRow('test-title', 'test-description', 'test-author', 'test-cid')
  */

  return (
    <BrowserRouter>
      <Header connectWallet={connectWallet} wallet={wallet} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage insertRow={ insertRow }/>}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/reviewing/:postId" element={<Reviewing />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
