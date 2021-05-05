import React, { useState } from "react";
import Product1 from "../../assets/products/GDB_shadow.png";
import Product2 from "../../assets/products/SSB_shadow.png";
import Product3 from "../../assets/products/CCB_shadow.png";

const Products = () => {
  const [products] = useState([
    {
      name: "Groundnut Oil",
      image: Product1,
    },
    {
      name: "Gingelly Oil",
      image: Product2,
    },
    {
      name: "Sesame Oil",
      image: Product3,
    },
  ]);

  return (
    <React.Fragment>
      <section className="container pt-5">
        {/* <h1 className="display-4 font-weight-bolder text-info mb-4">
          Our Products
        </h1> */}
        <div className="row mt-4">
          {products.map((product, index) => (
            <div className="col-sm-4 mb-5" key={index}>
              <div className="card border-0 p-0 rounded-0">
                <div className="card-body text-center px-2 py-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-weight-bolder">{product.name}</h4>{" "}
                <p className="text-muted">Starting with $35</p>
                <button
                  className="btn btn-warning"
                  onClick={(e) => e.preventDefault()}
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Products;
