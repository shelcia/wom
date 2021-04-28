import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";
import LandingPage from "./pages/LandingPage";
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
      <BrowserRouter>
        <Switch>
          <Route component={LandingPage} to="/" />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
