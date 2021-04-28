import React from "react";

const Topbat = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="!#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="!#">
              Disabled
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Topbat;
