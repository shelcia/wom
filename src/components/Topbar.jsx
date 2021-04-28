import React from "react";
import Logo from "../assets/logo.png";
import Search from "../assets/icons/search.svg";
import { Link, NavLink } from "react-router-dom";

const Topbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark shadow-lg">
        <Link className="navbar-brand" to="!#">
          <img src={Logo} alt="Logo" style={{ width: "50px" }} />
        </Link>

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
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item dropdown">
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
                    Category 1
                  </a>
                  <a className="dropdown-item" href="!#">
                    Category 2
                  </a>
                  <a className="dropdown-item" href="!#">
                    Category 3
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
