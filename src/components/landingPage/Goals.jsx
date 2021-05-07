import React from "react";
// import Video from "../assets/videos/wom.mp4";

const Goals = () => {
  return (
    <React.Fragment>
      <section className="container py-5">
        <h1 className="display-4 fw-bold text-info mb-4">Our Goal</h1>
        <div className="row my-4 pt-4">
          <div className="col-lg-5 mb-2">
            <iframe
              title="video"
              src={`https://www.youtube.com/embed/zgak4T-eD4E?playlist=NsHS6F2bjII&loop=1`}
              className="w-100 h-100 border-0 shadow-lg"
            ></iframe>
            {/* <video width="100%" controls>
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>
          <div className="col-lg-7 mb-2">
            <p className="lead">
              Welcome Oil Mill aims to deliver 100% authentic cold pressed oil
              to our customers at the lowest possible price in the market. our
              main focus is to ensure customer satisfaction and to develop a
              long term relationship with them.each and every step we take,(from
              choosing raw materials to packaging) is under our direct
              supervision keeping in mind the health and well being of our
              customers.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Goals;
