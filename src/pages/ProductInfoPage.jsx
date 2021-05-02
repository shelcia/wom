import React, { useState } from "react";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import Oil1 from "../assets/products/groundnut.png";

const ProductInfoPage = () => {
  const [number, setNumber] = useState(1);

  const alterNumber = (e, arg) => {
    e.preventDefault();
    if (number + arg === 0) {
      return;
    } else {
      setNumber(number + arg);
    }
  };

  return (
    <React.Fragment>
      <Topbar />
      <section className="container pt-5">
        <div className="row py-4">
          <div className="col-lg-4 mb-3 text-center">
            <img
              src={Oil1}
              alt=""
              style={{ objectFit: "contain", height: "400px" }}
            />
          </div>
          <div className="col-lg-4 mb-3">
            <p className="text-info lead mb-0">Cold Pressed</p>
            <h1 className="font-weight-bolder text-info mb-4 mt-0">
              Groundnut Oil
            </h1>
            <ul className="badge-pills">
              <li>500ml</li>
              <li>1 Litre</li>
              <li>5 Litres</li>
            </ul>

            <div className="d-flex justify-content-between">
              <div>
                <i className="far fa-star text-warning fa-lg" />
                <i className="far fa-star text-warning fa-lg" />
                <i className="far fa-star text-warning fa-lg" />
                <i className="far fa-star text-warning fa-lg" />
                <i className="far fa-star text-warning fa-lg" />
              </div>
              <p className="text-info">write review</p>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <h1 className="display-3 text-danger font-weight-bolder">
                ₹240.00
              </h1>
              <p
                className="text-muted lead"
                style={{ textDecoration: "line-through" }}
              >
                ₹280
              </p>
            </div>

            <div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Delivery Pincode."
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-success btn-green check-btn"
                    type="button"
                  >
                    Check
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <h3 className="mb-0">QTY</h3>
              <button
                type="button"
                className="btn btn-light"
                onClick={(e) => alterNumber(e, -1)}
              >
                -
              </button>
              <h3 className="mb-0">{number}</h3>
              <button
                type="button"
                className="btn btn-light"
                onClick={(e) => alterNumber(e, 1)}
              >
                +
              </button>
            </div>

            <button
              className="btn btn-success btn-green w-100 mb-2"
              type="button"
            >
              Calculate Shipping Cost
            </button>

            <button className="btn btn-danger text-uppercase w-100">
              ADD TO CART
            </button>
          </div>
          <div className="col-lg-4 mb-3 d-flex flex-column justify-content-between">
            <div>
              <p className="text-info lead">Quick Preview</p>
              <p>
                WOM's cold pressed groundnut oil is manufactured using
                traditional wooden chekku and packed with atmost care.
              </p>
            </div>
            <div>
              <p className="text-info lead">Health Benefits</p>
              <ul className="list-unstyled">
                <li className="pb-2">
                  <i className="fas fa-heart text-danger mr-2" />
                  Controls Cholesterol Levels.
                </li>
                <li className="pb-2">
                  <i className="fas fa-heart text-danger mr-2" />
                  Boosts Heart Health.
                </li>
                <li className="pb-2">
                  <i className="fas fa-heart text-danger mr-2" />
                  Lowers Blood Pressure.
                </li>
                <li className="pb-2">
                  <i className="fas fa-heart text-danger mr-2" />
                  Prevents Cognitive Disorders.
                </li>
                <li className="pb-2">
                  <i className="fas fa-heart text-danger mr-2" />
                  Boosts Immune System.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-info lead">Storage</p>
              <p className="mb-0">
                Transfer the oil from PET bottle to a non-plastic container to
                have more shelf life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default ProductInfoPage;
