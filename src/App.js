import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";
import LandingPage from "./pages/LandingPage";
import ProductInfoPage from "./pages/ProductInfoPage";
import ProductsPage from "./pages/ProductsPage";
import "./styles/style.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isLoading = null;
    isLoading = setTimeout(() => setLoading(false), 4000);
    return () => clearInterval(isLoading);
  });
  return loading ? (
    <Loading />
  ) : (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route component={LandingPage} exact path="/" />
          <Route component={ProductsPage} exact path="/products" />
          <Route component={ProductInfoPage} path="/products/:id" />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
