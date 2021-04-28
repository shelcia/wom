import React from "react";
import Blog from "../components/Blogs";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Goals from "../components/Goals";
import Products from "../components/Products";
import Topbar from "../components/Topbar";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Carousel />
      <Products />
      <Goals />
      <Blog />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
