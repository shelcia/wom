import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/common/Footer";
import Topbar from "../components/common/Topbar";
import { ProductContext } from "../context/ProductContext";
import ListIcon from "../assets/icons/favorite.svg";
import Minus from "../assets/icons/minus.svg";
import Plus from "../assets/icons/plus.svg";

const ProductInfoPage = ({ match }) => {
  const [number, setNumber] = useState(1);

  const [products] = useContext(ProductContext);

  const [product, setProduct] = useState({
    name: "",
    image: "",
    info_image: "",
    rate: "",
    old_rate: "",
    offer: "",
    quanity: "",
    desc: "",
    benefits: [],
    storage: "",
  });

  useEffect(() => {
    const res = products.filter(
      (product) => product.product_id === match.params.id
    );
    setProduct(res[0]);
    console.log(res);
  }, [match.params.id, products]);

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
      <section>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-6 px-0 mb-3"
              style={{ overflowY: "scroll", height: "80vh" }}
            >
              <img src={product.info_image} alt="" width="100%" />
            </div>
            <div className="col-md-6 pt-4 pl-3 d-flex justify-content-between flex-column mb-3">
              <h1 className="fw-bold mt-4">{product.name}</h1>
              <div>
                <h1 className="d-inline display-4 fw-bold text-warning">
                  ₹{product.rate}
                </h1>{" "}
                <span
                  className="text-muted"
                  style={{ textDecoration: "line-through" }}
                >
                  ₹{product.old_rate}
                </span>
              </div>
              <p>{product.desc}</p>
              <p
                className="text-muted italic"
                style={{ textDecoration: "underline" }}
              >
                Check if we could Deliver at your location
              </p>
              <div className="d-flex justify-content-around align-items-center">
                <div className="form-group">
                  <select className="form-control" id="sel1">
                    <option>500ml</option>
                    <option>1 Litre</option>
                    <option>5 Litres</option>
                  </select>
                </div>
                <div className="d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={(e) => alterNumber(e, -1)}
                  >
                    <img src={Minus} alt="" height="25px" />
                  </button>
                  <h3 className="mb-0 mx-3">{number}</h3>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={(e) => alterNumber(e, 1)}
                  >
                    <img src={Plus} alt="" height="25px" />
                  </button>
                </div>
              </div>
              <div>
                <button className="btn btn-warning me-4 mb-1">
                  Add to Wishlist
                </button>
                <button className="btn btn-warning mb-1">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lighter py-5 product-info">
          <div className="container">
            <ul
              className="nav nav-pills nav-justified mb-5"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Health Benefits
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Storage
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                {product.benefits.map((product, index) => (
                  <p key={index}>
                    <img src={ListIcon} alt="" height="25px" />
                    <span className="ms-2">{product}</span>
                  </p>
                ))}
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                {product.storage}
              </div>
            </div>
            {/* <ul className="nav nav-pills nav-justified mb-5">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="pill"
                  href="#health"
                >
                  Health Benefits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu1">
                  Storage
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane container active" id="health">
                {product.benefits.map((product, index) => (
                  <p key={index}>
                    <img src={ListIcon} alt="" height="25px" />
                    <span className="ms-2">{product}</span>
                  </p>
                ))}
              </div>
              <div className="tab-pane container fade" id="menu1">
                {product.storage}
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default ProductInfoPage;
