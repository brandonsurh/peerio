import ETHGlobal1 from "../assets/ETHGlobal1.png";

const Footer = () => {
  //console.log("FOOTER LOADED ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
  return (
    <div
      className="footer"
      style={{
        float: "right",
        margin: "0rem -3.5rem 1rem 0rem",
      }}
    >
      <span style={{ fontWeight: "600" }}> Peerio </span> was created at Hack
      FEVM 2022, powered by
      <img
        src={ETHGlobal1}
        style={{ transform: "scale(.5) translate(-4rem, 1.6rem)" }}
      ></img>
    </div>
  );
};

export default Footer;
