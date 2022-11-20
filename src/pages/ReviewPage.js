import React from "react";
import "../styles/ReviewPage.css";
import UploadForm from "../components/UploadForm";
import proPic from "../assets/proPic.png";
import { flexbox } from "@mui/system";
import { ContentCopy } from "@mui/icons-material";

const ReviewPage = () => {
  return (
    <div className="ReviewPage">
      <h1 className="ReviewPageHeader">
        Reviewing paper by
        <span style={{ color: "#FFBE24" }}>:</span>
      </h1>
      {/*<UploadForm /> */}
      <div
        className="MiniProfile"
        style={{
          padding: "2rem 3rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="ProfileCard">
          <div className="ProfileImageWrapper">
            <img src={proPic} style={{ margin: "auto", width: "70%" }}></img>
          </div>
          <div className="ProfileTile">
            <div
              style={{
                margin: "auto auto -6rem auto",
                transform: "translate(0rem, -6.5rem",
              }}
            >
              <p style={{ fontWeight: "800" }}>Chris Nestor Prenk</p>
              <p>Web3 Philosopher</p>
              <p style={{ fontWeight: "800" }}>Reputation 73/100</p>
            </div>
          </div>
        </div>
        <div style={{ color: "#FFFFFF" }}>
          <p>Web3 University</p>
          <p style={{ margin: "0rem 0rem 2rem 0rem" }}>Post-Graduate</p>

          <p style={{ margin: "0rem 0rem 2rem 0rem" }}>
            Title: Giraffes or Crypto?
          </p>

          <p style={{ margin: "0rem 0rem 2rem 0rem" }}>
            {" "}
            Contact information: chris@web3.com{" "}
          </p>
          <p>Papers awaiting review 1 </p>
          <p>Reviewed papers 15 </p>

          <p>Papers published 0</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
