import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
//import { supabase } from "../lib/supabase_api";
import { isConnected } from "../lib/metamask_helper";

const ConnectWalletButton = () => {
  //const [account, setAccount] = useState("");
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState("Connect Wallet");

  window.onload = () => {
    isConnected();
  };

  const connectedMessage = (accts) => {
    return accts[0].substring(2, 6) + "...";
  };

  const connectWallet = async () => {
    if (!connected) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      //setAccount(accounts[0]);
      setConnected(true);
      setMessage(connectedMessage(accounts));
    } else {
      console.log("already connected");
    }
  };

  // TODO: fix this
/*
  const authenticate = async () => {
    // use wallet address as email and password for supabase authentication
    // kind of a hacky way to do it, but it works until supabase supports web3
    const { user, session, error } = await supabase.auth.signUp({
      email: account + "@supabase.io",
      password: account,
    });
    console.log("user: " + user);
    console.log("session: " + session);
    console.log("error: " + error);
  };
  */


  const login = async () => {
      await connectWallet();

      // need to connect wallet before authenticating
      //await authenticate(); # TODO

  }

  return (
    <Button variant="contained" onClick={login}>
      {message}
    </Button>
  );
};

export default ConnectWalletButton;
