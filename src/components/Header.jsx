import '../styles/Header.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Button } from '@mui/material'

const Header = ({ connectWallet, wallet }) => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/profile">
          Profile
        </Link>
        <Link className="link" to="/review">
          Review
        </Link>
        <Link className="link" to="/explore">
          Explore
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Button onClick={connectWallet} className="yellow-btn ">
          {wallet
            ? `${wallet.substring(0, 6)}...${wallet.substring(38)}`
            : 'connect wallet'}
        </Button>
      </div>
    </div>
  )
}

export default Header
