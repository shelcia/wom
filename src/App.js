import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "./components/common/Loading";
import { ProductProvider } from "./context/ProductContext";
import LandingPage from "./pages/LandingPage";
import ProductInfoPage from "./pages/ProductInfoPage";
import ProductsPage from "./pages/ProductsPage";
import "./styles/style.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isLoading = null;
    isLoading = setTimeout(() => setLoading(false), 100);
    return () => clearInterval(isLoading);
  });
  return loading ? (
    <Loading />
  ) : (
    <React.Fragment>
      <ProductProvider>
        <BrowserRouter>
          <Switch>
            <Route component={LandingPage} exact path="/" />
            <Route component={ProductsPage} exact path="/products" />
            <Route component={ProductInfoPage} path="/products/:id" />
          </Switch>
        </BrowserRouter>
      </ProductProvider>
    </React.Fragment>
  );
};

export default App;
