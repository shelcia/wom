import React from "react";
import Footer from "../components/common/Footer";
import Topbar from "../components/common/Topbar";

const AboutPage = () => {
  return (
    <React.Fragment>
      <Topbar />
      <section className="container-fluid pt-5 px-0">
        <div className="container">
          <h1 className="font-weight-bold">
            About <span className="text-warning">WOM</span>{" "}
          </h1>
          <div className="row my-5">
            <div className="col-md-4">
              <iframe
                title="video"
                src={`https://www.youtube.com/embed/zgak4T-eD4E?playlist=NsHS6F2bjII&loop=1`}
                className="w-100 h-100 border-0"
              ></iframe>
            </div>
            <div className="col-sm-7">
              <p>
                Welcome Oil Mill aims to deliver 100% authentic cold pressed oil
                to our customers at the lowest possible price in the market. our
                main focus is to ensure customer satisfaction and to develop a
                long term relationship with them.each and every step we
                take,(from choosing raw materials to packaging) is under our
                direct supervision keeping in mind the health and well being of
                our customers.
              </p>
            </div>
          </div>
        </div>

        <div className="my-5 bg-lighter text-center">
          <div className="container py-5">
            <h2 style={{ textDecoration: "underline" }}>
              Why Use Cold Pressed Oil
            </h2>
            <p className="mt-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default AboutPage;
