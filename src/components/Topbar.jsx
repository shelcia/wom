import React from "react";
import Logo from "../assets/logo.png";
import Search from "../assets/icons/search.svg";

const Topbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark">
        {/* <a className="navbar-brand" href="!#">
          Navbar
        </a> */}
        <a className="navbar-brand" href="!#">
          <img src={Logo} alt="Logo" style={{ width: "50px" }} />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="!#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!#">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                {/* <a className="nav-link" href="!#">
                  Blog
                </a> */}
                <a
                  className="nav-link dropdown-toggle"
                  href="!#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Blog
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="!#">
                    Link 1
                  </a>
                  <a className="dropdown-item" href="!#">
                    Link 2
                  </a>
                  <a className="dropdown-item" href="!#">
                    Link 3
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <img src={Search} alt="" style={{ width: "20px" }} />
                  </span>
                </div>
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Topbar;
