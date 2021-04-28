import React, { useState } from "react";
import Blog1 from "../assets/blogs/nandhu-kumar-5NGTf4oD8RA-unsplash.jpg";
import Heart from "../assets/icons/heart-white.svg";
import Bookmark from "../assets/icons/bookmark-white.svg";

const Blog = () => {
  const [blogs] = useState([
    {
      title: "Why Cold Pressed Oil is Healthy ?",
      image: Blog1,
      date: "12 August 2020",
    },
    {
      title: "Why Cold Pressed Oil is Healthy ?",
      image: Blog1,
      date: "12 August 2020",
    },
    {
      title: "Why Cold Pressed Oil is Healthy ?",
      image: Blog1,
      date: "12 August 2020",
    },
  ]);
  return (
    <React.Fragment>
      <section className="container py-5">
        <h1 className="display-4 font-weight-bolder text-info mb-4">Blog</h1>
        <div className="row pt-4">
          {blogs.map((blog, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card blog-card shadow-lg">
                <img
                  className="card-img-top"
                  src={blog.image}
                  alt=""
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <div className="card-img-overlay text-white">
                  <div className="d-flex justify-content-between flex-column h-100">
                    <div className="d-flex w-100 justify-content-between">
                      <p>{blog.date}</p>
                      <div>
                        <img
                          src={Heart}
                          alt=""
                          style={{ height: "20px" }}
                          className="mr-2"
                        />
                        <img src={Bookmark} alt="" style={{ height: "20px" }} />
                      </div>
                    </div>
                    <div className="d-flex w-100 flex-column mb-0">
                      <p>Author</p>
                      <h4>{blog.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Blog;
