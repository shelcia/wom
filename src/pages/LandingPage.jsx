import React from "react";
import ArrowUp from "../assets/icons/arrow-up.svg";

import Blog from "../components/landingPage/Blogs";
import Carousel from "../components/landingPage/Carousel";
import Ingredients from "../components/landingPage/Ingredients";
// import Goals from "../components/Goals";
import Products from "../components/landingPage/Products";
import Topbar from "../components/common/Topbar";
import Footer from "../components/common/Footer";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Carousel />
      <Products />
      <Ingredients />
      {/* <Goals /> */}
      <Blog />
      <div className="w-100 text-center bg-lighter py-5">
        <a href="#carousel" style={{ textDecoration: "none" }}>
          <h3 className="text-uppercase m-0 text-dark">
            Back to top
            <img src={ArrowUp} alt="" height="25px" className="ms-2 mb-1" />
          </h3>
        </a>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
