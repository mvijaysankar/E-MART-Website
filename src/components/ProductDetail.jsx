import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { discoutProducts, products } from "../Data"; 
import Products from "./Products";
import DiscountProduct from "./DiscountProduct";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  
  const product = discoutProducts.find((p) => p.id === id) || products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container my-4">
        <h3>Product not found</h3>
        <button onClick={() => navigate("/")} className="btn btn-primary">
          Go Back to Products
        </button>
      </div>
    );
  }

  const addToCart = () => {
    console.log("Product added to cart:", product);
  };

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.imgUrl}
              alt={product.productName}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h3>{product.productName}</h3>
            <div>
              ⭐⭐⭐⭐⭐ {product.avgRating} rating
            </div>
            <p><strong>${product.price}</strong> category: {product.category}</p>
            <p>{product.shortDesc}</p>
            <button
              onClick={addToCart}
              className="btn"
              style={{
                color: "#fff",
                background: "#003366"
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <DiscountProduct />
      <Products />
    </>
  );
};

export default ProductDetail;
  