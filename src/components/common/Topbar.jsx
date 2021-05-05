import React from "react";
import Logo from "../../assets/logo.png";
import Search from "../../assets/icons/search-icon.svg";
import Cart from "../../assets/icons/shopping-cart.svg";
import User from "../../assets/icons/user.svg";
import Close from "../../assets/icons/x.svg";
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
              <a
                className="nav-link"
                href="/"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span className="hide-when-small">Search</span>
                <span className="hide-when-big">
                  <img src={Search} alt="" style={{ width: "20px" }} />
                </span>
              </a>
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
                <sup>
                  <span
                    className="badge badge-warning"
                    style={{ fontSize: "1rem" }}
                  >
                    0
                  </span>
                </sup>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Modal />
    </React.Fragment>
  );
};

const Modal = () => {
  return (
    <React.Fragment>
      <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Search Any Product</h4>
              <button type="button" className="close" data-dismiss="modal">
                {/* &times; */}
                <img src={Close} alt="" />
              </button>
            </div>

            <div className="modal-body">
              <label for="oil">Type Atleast three letters:</label>
              <input
                type="text"
                class="form-control"
                id="oil"
                placeholder="Search"
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Topbar;
