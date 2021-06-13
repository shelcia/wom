import React, { useState } from "react";
import Footer from "../components/common/Footer";
import Topbar from "../components/common/Topbar";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const API_KEY = process.env.REACT_APP_GMAPS_API_KEY;
  const QUERY = "A-block,+RH+center+Neyveli,+Cuddalore+Dis";

  return (
    <React.Fragment>
      <Topbar />
      <section className="container my-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-between flex-column mb-3">
            <h3 className="fw-bold ">Feel Free to Contact Us</h3>
            <form className="contact">
              <input
                type="text"
                class="form-control mb-4"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                class="form-control mb-4"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                class="form-control mb-4"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </form>
            <div className="text-center">
              <button className="btn btn-warning">Send Message</button>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <h3 className="mb-3">Location</h3>
            <p>
              A-block, RH center Neyveli, Cuddalore Dist. <br />
              PIN: 607803
            </p>
            <iframe
              title="map"
              frameBorder="0"
              style={{ margin: "auto" }}
              src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${QUERY}`}
              allowFullScreen
              width="100%"
              className="my-4"
            ></iframe>
            <h3 className="mb-3">Follow Us</h3>
            <div className="text-warning">
              <i className="fab fa-facebook-f me-3 fa-lg"></i>
              <i className="fab fa-twitter me-3 fa-lg"></i>
              <i className="fab fa-youtube fa-lg" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default ContactPage;
