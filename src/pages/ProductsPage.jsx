import React from "react";
import BuyProducts from "../components/products/BuyProducts";
import Footer from "../components/common/Footer";
import Topbar from "../components/common/Topbar";

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
