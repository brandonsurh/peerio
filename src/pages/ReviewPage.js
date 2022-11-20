import React from "react";
import "../styles/ReviewPage.css";
import proPic from "../assets/proPic.png";
import PeerioExample from "../assets/PeerioExample.pdf";
import ReviewButton from "../assets/ReviewButton.png";

const ReviewPage = () => {
  return (
    <div>
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
      <div
        style={{
          height: "80vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            backgroundColor: "#ECECEC",
            display: "flex",
            flexWrap: "wrap",
            width: "90vw",
            padding: "2rem",
            border: "1px solid black",
            borderRadius: ".3rem",
          }}
        >
          <iframe
            src={PeerioExample + "#toolbar=0"}
            style={{ width: "100%", height: "500px" }}
          ></iframe>
        </div>
        <div style={{ margin: "1rem 0rem" }}>
          <button
            onClick={() => {
              console.log("hi");
            }}
            style={{
              border: "none",
              backgroundColor: "rgba(0,0,0,0)",
              transform: "scale(.6) translate(2rem,0rem)",
            }}
          >
            <img src={ReviewButton}></img>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
