import React from "react";
import Blog1 from "../assets/blogs/Blog1.png";
// import Heart from "../assets/icons/heart-white.svg";
// import Bookmark from "../assets/icons/bookmark-white.svg";

const Blog = () => {
  return (
    <React.Fragment>
      <section className="container py-5">
        <div className="text-center py-5">
          <h1 className="display-3 font-weight-bold font-make-smaller">
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
            <h2 className="font-weight-bold">Why Gingely Oil ?</h2>
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
            <div className="text-right">
              <button className="btn btn-warning">Read More</button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-warning">More Blogs</button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Blog;
