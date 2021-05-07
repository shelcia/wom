import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Search from "../../assets/icons/search-icon.svg";
import Cart from "../../assets/icons/shopping-cart.svg";
import User from "../../assets/icons/user.svg";
import Close from "../../assets/icons/x.svg";
import { Link, NavLink } from "react-router-dom";

const Topbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" style={{ width: "40px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-fill w-100">
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
                <NavLink className="nav-link" to="/blogs">
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link pointer"
                  onClick={() => setOpen(!isOpen)}
                >
                  <span className="hide-when-small">Search</span>
                  <span className="hide-when-big">
                    <img src={Search} alt="" style={{ width: "20px" }} />
                  </span>
                </span>
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
                      className="badge bg-warning"
                      style={{ fontSize: "0.8rem" }}
                    >
                      0
                    </span>
                  </sup>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal isOpen={isOpen} setOpen={setOpen} />
    </React.Fragment>
  );
};

const Modal = ({ isOpen, setOpen }) => {
  return (
    <React.Fragment>
      <div
        className={
          isOpen
            ? `custom-modal modal fade show d-block`
            : `custom-modal fade d-none`
        }
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Search Any Product</h4>
              <button
                type="button"
                className="close"
                onClick={() => setOpen(false)}
              >
                <img src={Close} alt="" />
              </button>
            </div>
            <div className="modal-body">
              <label htmlFor="oil">Type Atleast three letters:</label>
              <input
                type="text"
                className="form-control"
                id="oil"
                placeholder="Search"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => setOpen(false)}
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
