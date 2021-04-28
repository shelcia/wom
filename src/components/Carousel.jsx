import React from "react";
import Oil1 from "../assets/carousel/anshu-a-7n5_0j7b7Hg-unsplash.jpg";
import Oil2 from "../assets/carousel/chelsea-shapouri-r40EYKVyutI-unsplash.jpg";
import Oil3 from "../assets/carousel/christin-hume-0MoF-Fe0w0A-unsplash.jpg";

const Carousel = () => {
  return (
    <React.Fragment>
      <header id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Oil1}
              alt="Los Angeles"
              style={{ objectFit: "cover", height: "80vh", width: "100%" }}
              loading="eager"
            />
            <div className="carousel-caption">
              <h3>Some Oil</h3>
              Photo by{" "}
              <a href="https://unsplash.com/@anshu18?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Anshu A{" "}
              </a>
              on{" "}
              <a href="https://unsplash.com/s/photos/oil?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Oil2}
              alt="Chicago"
              style={{ objectFit: "cover", height: "80vh", width: "100%" }}
              loading="eager"
            />
            <div className="carousel-caption">
              <h3>Some Oil</h3>
              Photo by{" "}
              <a href="https://unsplash.com/@primal_harmony?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Chelsea shapouri
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/s/photos/sesme-oil?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Oil3}
              alt="New York"
              style={{ objectFit: "cover", height: "80vh", width: "100%" }}
              loading="eager"
            />
            <div className="carousel-caption">
              <h3>Some Oil</h3>
              Photo by{" "}
              <a href="https://unsplash.com/@christinhumephoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Christin Hume{" "}
              </a>
              on{" "}
              <a href="https://unsplash.com/s/photos/essential-oil?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
          </div>
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </header>
    </React.Fragment>
  );
};

export default Carousel;
