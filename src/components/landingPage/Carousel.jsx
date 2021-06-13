import React, { useState } from "react";
import Oil1 from "../../assets/carousel/groundnut.JPG";
import Oil2 from "../../assets/carousel/gingelly.JPG";
import Oil3 from "../../assets/carousel/sesame.JPG";

const Carousel = () => {
  const [image] = useState([{ image: Oil1 }, { image: Oil2 }, { image: Oil3 }]);
  return (
    <React.Fragment>
      <header id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="0"
            className="active circle"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="circle"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="circle"
          ></button>
        </div>
        <div className="carousel-inner">
          {image.map((img, index) => (
            <div
              className={index === 0 ? "carousel-item active" : "carousel-item"}
              key={index}
            >
              <img
                src={img.image}
                alt=""
                style={{ objectFit: "cover", width: "100%" }}
                loading="eager"
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </header>
    </React.Fragment>
  );
};

export default Carousel;
