import React from "react";
import { Link } from "react-router-dom";
import Blog1 from "../../assets/products/shadow_pics/Gingelly.png";

const Blog = () => {
  return (
    <React.Fragment>
      <section className="container py-5">
        <div className="text-center py-5">
          <h1 className="display-3 fw-bold font-make-smaller">
            Come, peek into <br /> The
            <span className="text-warning">WOM Journal</span>
          </h1>
        </div>
        <div className="row py-4">
          <div className="col-lg-4 mb-4 p-0">
            <img
              src={Blog1}
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="col-lg-8 mb-4 d-flex flex-column justify-content-between">
            <h2 className="fw-bold">Why Gingely Oil ?</h2>
            <h5 className="text-muted italic">Why Gingely Oil ?</h5>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo. Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo. Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo.
            </p>
            <div className="text-end">
              <button className="btn btn-warning">Read More</button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/blogs">
            <button className="btn btn-warning">More Blogs</button>
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Blog;
