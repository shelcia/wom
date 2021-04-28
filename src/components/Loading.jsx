import React from "react";
import Logo from "../assets/logo.png";

const Loading = () => {
  return (
    <React.Fragment>
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ width: "100%", height: "100vh" }}
      >
        <img src={Logo} alt="" style={{ height: "60vh" }} />
        <h1> Loading ...</h1>
      </div>
    </React.Fragment>
  );
};

export default Loading;
