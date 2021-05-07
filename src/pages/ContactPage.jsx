import React from "react";
import Footer from "../components/common/Footer";
import Topbar from "../components/common/Topbar";

const ContactPage = () => {
  return (
    <React.Fragment>
      <Topbar />
      <section className="container my-5">
        <div className="row">
          <div className="col-sm-6">
            <form></form>
          </div>
          <div className="col-sm-6"></div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default ContactPage;
