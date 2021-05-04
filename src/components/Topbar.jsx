import React from "react";
import Logo from "../assets/logo.png";
import Search from "../assets/icons/search-icon.svg";
import Cart from "../assets/icons/shopping-cart.svg";
import User from "../assets/icons/user.svg";
import { Link, NavLink } from "react-router-dom";

const Topbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-light">
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
          <ul className="navbar-nav nav-fill w-100">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
            {/* ICONS */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                <span className="hide-when-small">Search</span>
                <span className="hide-when-big">
                  <img src={Search} alt="" style={{ width: "20px" }} />
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                <span className="hide-when-small">Profile</span>
                <span className="hide-when-big">
                  <img src={User} alt="" style={{ width: "20px" }} />
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                <span className="hide-when-small">Cart</span>
                <span className="hide-when-big">
                  <img src={Cart} alt="" style={{ width: "20px" }} />
                </span>

                <span className="badge badge-warning">0</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Topbar;
