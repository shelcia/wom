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
    product_img: "",
    product_mixture: "",
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
                {/* <label for="standard-select">Standard Select</label> */}
                <div className="select">
                  <select id="standard-select">
                    <option>500ml</option>
                    <option>1 Litre</option>
                    <option>5 Litres</option>
                  </select>
                  <span class="focus"></span>
                </div>
                {/* <div className="form-group">
                  <select className="form-control" id="sel1">
                    <option>500ml</option>
                    <option>1 Litre</option>
                    <option>5 Litres</option>
                  </select>
                </div> */}
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
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <img src={product.product_img} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h3 className="mb-2">How do we source our oil seeds ?</h3>
              <p>
                We use high quality groundnuts, sesame seeds and coconut for oil
                production. We source our raw materials from the government
                mandi where farmers directly keep their harvest for open
                bidding. Our team along with the experts identify the high
                quality raw material and bid for the best price. We transport
                the purchased raw material to the manufacturing unit for further
                quality check and cleaning. The cleaned raw material is checked
                for humidity level to ensure the raw material is dried properly.
                After all these processes, we pack the materials in jute bags
                and send them to the cold pressing unit.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <h3 className="mb-2">Our manufacturing process</h3>
              <p>
                The quality oil seeeds are processed in our “Vagai mara Chekku"
                machine. In this process, the raw material is crushed between
                the “Ulakkai” (rice stamper) and “Ural” (Grinding stone) to
                squeeze the oil from the seeds. The low rpm crushing process and
                wooden contact surface generates zero heat which helps in
                retaining the nutritional value of the oil. The extracted oil is
                filtered using normal cloth to remove small particles
                (unsqueezed groundnut). The filtered oil is then kept under
                natural sunlight for natural sedimentation of fine particles
                that escaped the filtering process.
              </p>
            </div>
            <div className="col-md-6">
              <img src={product.product_mixture} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default ProductInfoPage;
