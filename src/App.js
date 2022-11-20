import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Header from './components/Header'
import UploadPage from './pages/UploadPage'
import Explore from './pages/Explore'
import Reviewing from './pages/Reviewing'
import { createArticleTable, insertRow } from './tl_interface'
var ethers = require('ethers')

const App = () => {
  const [wallet, setWallet] = useState('')

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
  }

  useEffect(() => {
    createArticleTable();
  }, []);
  //insertRow('test-title', 'test-description', 'test-author', 'test-cid')

  return (
    <BrowserRouter>
      <Header connectWallet={connectWallet} wallet={wallet} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/reviewing/:postId" element={<Reviewing />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
