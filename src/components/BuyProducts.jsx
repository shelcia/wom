import React, { useState } from "react";
import Product1 from "../assets/products/groundnut.png";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const BuyProducts = () => {
  const [products] = useState([
    {
      name: "Groundnut Oil",
      image: Product1,
      rate: 120,
      litre: "500 ml",
      link: "ground-nut",
    },
    {
      name: "Groundnut Oil",
      image: Product1,
      rate: 240,
      litre: "1000 ml",
      link: "ground-nut",
    },
    {
      name: "Groundnut Oil",
      image: Product1,
      rate: 1200,
      litre: "5 Litres",
      link: "ground-nut",
    },
  ]);

  const addToCart = (event) => {
    event.preventDefault();
    swal("Hurray! Product is added to Cart", {
      icon: "success",
    });
  };
  return (
    <React.Fragment>
      <section className="container py-5">
        <h1 className="display-4 font-weight-bolder text-info mb-4">
          Cold Pressed Oils
        </h1>
        <div className="row mt-4 py-4">
          {products.map((product, index) => (
            <div className="col-md-4 mb-5" key={index}>
              <div className="card shadow-lg border-0 rounded-lg">
                <div className="card-header pt-4 border-0 bg-white">
                  <p className="text-danger mb-1">Cold Pressed</p>
                  <Link to={`/products/${product.link}`}>
                    <h4 className="card-title text-info">
                      {product.name} - {product.litre}
                    </h4>
                  </Link>{" "}
                </div>
                <div className="card-body text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ height: "250px", objectFit: "contain" }}
                  />
                </div>
                <div className="card-footer py-3 bg-info text-center d-flex justify-content-center flex-column align-items-center">
                  <button
                    className="btn btn-danger"
                    onClick={(e) => e.preventDefault()}
                  >
                    <small>Rs </small>{" "}
                    <h3 className="d-inline">{product.rate}</h3>
                  </button>
                  <div className="d-flex justify-content-between mt-4 w-100 px-4">
                    <button
                      className="btn btn-warning"
                      onClick={(e) => addToCart(e)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-orange"
                      onClick={(e) => e.preventDefault()}
                    >
                      Buy Now
                    </button>
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

export default BuyProducts;
