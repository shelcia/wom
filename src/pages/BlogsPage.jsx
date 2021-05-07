import React, { useContext } from "react";
import Footer from "../components/common/Footer";
import Topbar from "../components/common/Topbar";
import { BlogContext } from "../context/BlogContext";
import LinesEllipsis from "react-lines-ellipsis";

const BlogsPage = () => {
  const [blogs] = useContext(BlogContext);
  return (
    <React.Fragment>
      <Topbar />
      <section className="container my-5">
        {blogs.map((blog, index) => (
          <div className="row mb-4" key={index}>
            <div className="col-sm-3 mb-2">
              <img
                src={blog.image}
                alt=""
                style={{ objectFit: "cover", height: "250px", width: "100%" }}
              />
            </div>
            <div className="col-sm-9 d-flex flex-column justify-content-between mb-2">
              <h4 className="fw-bold">{blog.title}</h4>
              <p className="lead text-muted italic fw-bolder">
                {blog.subtitle}
              </p>
              <LinesEllipsis
                text={blog.content}
                maxLine="5"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
              <div className="text-end">
                <button className="btn btn-warning">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default BlogsPage;
