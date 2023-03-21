import "../styles/Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ConnectWalletButton from "./ConnectWalletButton";

const Header = () => {
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
        <Link className="link" to="/reviewpage">
          Review
        </Link>
        <Link className="link" to="/explore">
          Explore
        </Link>
        <Link className="link" to="/uploadpage">
          Upload
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <ConnectWalletButton />
      </div>
    </div>
  );
};

export default Header;
