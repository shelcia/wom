import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./styles/style.css";

const App = () => {
  return (
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
