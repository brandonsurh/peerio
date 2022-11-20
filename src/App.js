import { useState } from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Header from './components/Header'
import UploadPage from './pages/UploadPage'
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

  return (
    <BrowserRouter>
      <Header connectWallet={connectWallet} wallet={wallet} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
