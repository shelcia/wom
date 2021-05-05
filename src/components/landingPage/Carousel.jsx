import React, { useState } from "react";
import Oil1 from "../../assets/carousel/groundnut.png";
import Oil2 from "../../assets/carousel/gingelly.png";
import Oil3 from "../../assets/carousel/sesame.png";

const Carousel = () => {
  const [image] = useState([{ image: Oil1 }, { image: Oil2 }, { image: Oil3 }]);

  return (
    <React.Fragment>
      <header id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

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
