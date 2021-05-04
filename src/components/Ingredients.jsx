import React, { useState } from "react";
import Chemical from "../assets/icons/chemical.png";
import Heart from "../assets/icons/heart.png";
import Acorn from "../assets/icons/acorn.png";

const Ingredients = () => {
  const [content] = useState([
    {
      image: Chemical,
      heading: "Chemical Free",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    },
    {
      image: Heart,
      heading: "Less Medication",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    },
    {
      image: Acorn,
      heading: "100% Vegan",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    },
  ]);

  return (
    <React.Fragment>
      <section className="bg-lighter">
        <div className="container py-5 text-center">
          <h1 className="font-weight-bold mb-5">
            Honest Ingredients and Products
          </h1>
          <div className="row mt-5">
            {content.map((content, index) => (
              <div className="col-sm-4 mb-5" key={index}>
                <img
                  src={content.image}
                  alt=""
                  style={{ height: "50px" }}
                  className="my-5"
                />
                <h3>{content.heading}</h3>
                <p className="mt-5">{content.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Ingredients;
