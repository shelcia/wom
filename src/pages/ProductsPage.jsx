import React from "react";
import BuyProducts from "../components/BuyProducts";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

const ProductsPage = () => {
  return (
    <React.Fragment>
      <Topbar />
      <BuyProducts />
      <Footer />
    </React.Fragment>
  );
};

export default ProductsPage;
