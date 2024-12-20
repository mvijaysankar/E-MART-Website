import React from "react";
import { Link } from "react-router-dom";
import { discoutProducts } from "../Data";
import { useCart } from "../components/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegHeart } from "react-icons/fa";
import "./Addtocart.css";

const DiscountProduct = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.productName} added to cart!`);
  };

  return (
    <div className="container my-4 p-5 m-5">
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      <div className="text-center mb-5">
        <h2
          className="big-discount-title"
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          Big Discount
        </h2>
      </div>
      <div className="row">
        {discoutProducts.map((product) => (
          <div className="col-md-4 col-lg-4 mb-4" key={product.id}>
            <div className="card h-100 position-relative">
              <span
                className="badge badge-danger position-absolute shadow"
                style={{
                  top: "10px",
                  left: "10px",
                  backgroundColor: "#003366",
                  color: "white",
                  borderRadius: "15px",
                }}
              >
                {product.discount}% OFF
              </span>
              <span
                className="position-absolute"
                style={{
                  top: "10px",
                  right: "10px",
                  fontSize: "1.5rem",
                  color: "#ff4d4d",
                }}
              >
                <FaRegHeart />
              </span>
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.imgUrl}
                  className="card-img-top"
                  alt={product.productName}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">
                  <strong>⭐⭐⭐⭐⭐</strong>
                  <br />
                  <strong>${product.price}</strong>
                </p>
                <button
                  className="btn add-to-cart-btn rounded-circle position-absolute"
                  style={{
                    right: "10px",
                    bottom: "10px",
                    width: "40px",
                    height: "40px",
                    padding: "0",
                    fontSize: "20px",
                  }}
                  onClick={() => handleAddToCart(product)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountProduct;
