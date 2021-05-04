import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer-bg">
        <div className="container py-4 text-white">
          <div className="row py-5">
            <div className="col-md-3 mb-3">
              <h4 className="mb-4">Quick Links</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Products</li>
                <li className="list-group-item">Gallery</li>
                <li className="list-group-item">About Us</li>
                <li className="list-group-item">Location</li>
              </ul>
            </div>
            <div className="col-md-4 mb-3 d-flex justify-content-between flex-column">
              <div>
                <h4 className="mb-4">Our Newsletter</h4>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Email ID"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">Subscribe</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-4">Follow us on</h4>
                <div>
                  <i className="fab fa-facebook-f mr-3 fa-lg"></i>
                  <i className="fab fa-twitter mr-3 fa-lg"></i>
                  <i className="fab fa-youtube fa-lg" />
                </div>
              </div>
            </div>
            <div className="col-md-2 mb-3">
              <img src={Logo} alt="" height="150px" />
            </div>
            <div className="col-md-3 d-flex justify-content-between flex-column">
              <h4 className="mb-4">Welcome Oil Mill</h4>
              <div>
                <p>
                  A-block, RH center Neyveli, Cuddalore Dist.
                  <br />
                  PIN: 607803
                </p>
                <a
                  href="mailto:welcomeoilmill@gmail.com"
                  className="text-white"
                >
                  welcomeoilmill@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
