import React from 'react';
import { products } from "../Data";
import { useCart } from "../components/CartContext";
import { FaRegHeart } from "react-icons/fa";  
import { ToastContainer, toast } from 'react-toastify'; 
import "react-toastify/dist/ReactToastify.css";
import "./Addtocart.css";

const Products = () => {
  const { addToCart } = useCart();  

  const handleAddToCart = (product) => {
    addToCart(product); 
    toast.success(`${product.productName} added to cart!`);
  };

  const nonSofaProducts = products.filter((product) => product.category === "sofa");

  return (
    <div className="container my-4 p-5 m-5">
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      <h2 className="text-center" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
        Best Sales
      </h2>
      <div className="row">
        {nonSofaProducts.map((product) => (
          <div className="col-md-4 col-lg-4 mb-4" key={product.id}>
            <div className="card h-100 position-relative">
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
              <img
                src={product.imgUrl}
                className="card-img-top"
                alt={product.productName}
              />
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
}

export default Products;
