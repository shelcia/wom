import React from "react";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer-bg">
        <div className="container py-4">
          <div className="row py-5">
            <div className="col-md-12 mb-3">
              <img src={Logo} alt="" height="150px" />
              <h1>Welcome Oil Mill</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <h4 className="mb-4">Quick Links</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Products</li>
                <li className="list-group-item">Gallery</li>
                <li className="list-group-item">About WOM</li>
                <li className="list-group-item">Contact Us</li>
              </ul>
            </div>
            <div className="col-md-4 d-flex justify-content-between flex-column mb-3">
              <h4 className="mb-4">Location</h4>
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
                <h4 className="mb-4">Follow us on</h4>

                <div className="text-warning">
                  <i className="fab fa-facebook-f mr-3 fa-lg"></i>
                  <i className="fab fa-twitter mr-3 fa-lg"></i>
                  <i className="fab fa-youtube fa-lg" />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 d-flex justify-content-between flex-column">
              <div>
                <h4 className="mb-4">Our Newsletter</h4>
                <p>
                  I would like to receive communications about WOM products and
                  services.
                </p>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Email ID"
                  />
                </div>

                <div className="text-right mt-4">
                  <button className="btn btn-warning">Subscribe</button>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            ©2021 Welcome Oil Mill All Rights Reserved
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
