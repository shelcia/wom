import React from "react";
// import Logo from "../assets/logo-min.png";
import BounceLoader from "react-spinners/BounceLoader";

const Loading = () => {
  return (
    <React.Fragment>
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ width: "100%", height: "100vh" }}
      >
        <BounceLoader color={"#FED113"} size={180} />
      </div>
    </React.Fragment>
  );
};

export default Loading;
