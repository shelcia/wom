import React, { useState } from "react";
import Product1 from "../assets/products/groundnut.png";

const Products = () => {
  const [products] = useState([
    {
      name: "Groundnut Oil",
      image: Product1,
    },
    {
      name: "Groundnut Oil",
      image: Product1,
    },
    {
      name: "Groundnut Oil",
      image: Product1,
    },
  ]);

  return (
    <React.Fragment>
      <section className="container pt-5">
        <h1 className="display-4 font-weight-bolder text-info mb-4">
          Our Products
        </h1>
        <div className="row mt-4">
          {products.map((product, index) => (
            <div className="col-md-4 mb-5" key={index}>
              <div className="card shadow-lg border-0 rounded-lg">
                <div className="card-body text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ height: "250px", objectFit: "contain" }}
                  />
                  <h4 className="card-title text-info mt-3">{product.name}</h4>{" "}
                  <hr />
                  <button
                    className="btn btn-warning"
                    onClick={(e) => e.preventDefault()}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Products;
