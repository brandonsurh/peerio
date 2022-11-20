import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import UploadPage from "./pages/UploadPage";
import ReviewPage from "./pages/ReviewPage";
import { useState } from "react";

import Explore from "./pages/Explore";
import Reviewing from "./pages/Reviewing";
import Submitted from "./pages/Submitted";
import UploadReview from "./pages/UploadReview";
var ethers = require("ethers");

const App = () => {
  const [wallet, setWallet] = useState("");

  const connectWallet = async () => {
    let connection = new Promise(async (resolve, reject) => {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      resolve(signer.getAddress());
      console.log("Account: ", await signer.getAddress());
    });
    let result = await connection;
    setWallet(result);
  };

  return (
    <BrowserRouter>
      <Header connectWallet={connectWallet} wallet={wallet} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/uploadpage" element={<UploadPage />}></Route>
        <Route path="/reviewpage" element={<ReviewPage />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/reviewing/:articleId" element={<Reviewing />}></Route>
        <Route
          path="/upload-review/:articleId"
          element={<UploadReview />}
        ></Route>
        <Route path="/submitted" element={<Submitted />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
