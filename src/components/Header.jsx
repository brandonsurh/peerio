import '../styles/Header.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Button } from '@mui/material'

var ethers = require('ethers')

const ConnectWallet = async () => {
  let connection = new Promise(async (resolve, reject) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    resolve(signer.getAddress())
    console.log('Account: ', await signer.getAddress())
  })

  let result = await connection

  alert('connected to: ' + result)
}

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/explore">
          Explore
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Button onClick={ConnectWallet} className="yellow-btn ">
          {}
          connect wallet
        </Button>
      </div>
    </div>
  )
}

export default Header
