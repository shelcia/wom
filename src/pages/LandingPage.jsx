import React from "react";
import Blog from "../components/Blogs";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Ingredients from "../components/Ingredients";
// import Goals from "../components/Goals";
import Products from "../components/Products";
import Topbar from "../components/Topbar";
import ArrowUp from "../assets/icons/arrow-up.svg";

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
        <h3 className="text-uppercase m-0">
          Back to top
          <img src={ArrowUp} alt="" height="25px" className="ml-2 mb-1" />
        </h3>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
