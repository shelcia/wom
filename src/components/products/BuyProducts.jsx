import React, { useContext } from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import Cart from "../../assets/icons/shopping-cart.svg";

const BuyProducts = () => {
  const [products] = useContext(ProductContext);

  const addToCart = (event) => {
    event.preventDefault();
    swal("Hurray! Product is added to Cart", {
      icon: "success",
    });
  };
  return (
    <React.Fragment>
      <section className="container py-5">
        <div className="row">
          <div className="col-sm-3">
            <h4 className="mb-4">Filters</h4>
            <div id="Categories">
              <div className="checkbox checkbox-warning">
                <input id="Groundnut Oil" type="checkbox" className="styled" />
                <label htmlFor="Groundnut Oil">Groundnut Oil</label>
              </div>
              <div className="checkbox checkbox-warning">
                <input id="Sesame Oil" type="checkbox" className="styled" />
                <label htmlFor="Sesame Oil">Sesame Oil</label>
              </div>
              <div className="checkbox checkbox-warning">
                <input id="Gingelly Oil" type="checkbox" className="styled" />
                <label htmlFor="Gingelly Oil">Gingelly Oil</label>
              </div>
            </div>
            <div id="Quantity" className="mt-4">
              <div className="checkbox checkbox-warning">
                <input id="500 ml" type="checkbox" className="styled" />
                <label htmlFor="500 ml">500 ml</label>
              </div>
              <div className="checkbox checkbox-warning">
                <input id="1 Litre" type="checkbox" className="styled" />
                <label htmlFor="1 Litre">1 Litre</label>
              </div>
              <div className="checkbox checkbox-warning">
                <input id="5 Litre" type="checkbox" className="styled" />
                <label htmlFor="5 Litre">5 Litres</label>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="row">
              {products.map((product, index) => (
                <div className="col-lg-4 mb-5" key={index}>
                  <Link
                    to={`/products/${product.product_id}`}
                    className="text-dark text-decoration-none"
                  >
                    <div className="card border-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "100%", objectFit: "contain" }}
                      />
                      <div className="d-flex  justify-content-between align-items-end">
                        <div>
                          <h3 className="text-warning d-inline">
                            ₹{product.rate}
                          </h3>{" "}
                          <span
                            className="text-muted"
                            style={{ textDecoration: "line-through" }}
                          >
                            ₹{product.old_rate}
                          </span>
                          <h4 className="mb-0">{product.name}</h4>
                        </div>
                        <div>
                          <button
                            className="btn btn-warning px-3 py-2"
                            onClick={(e) => addToCart(e)}
                          >
                            <img src={Cart} alt="" height="20px" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BuyProducts;
