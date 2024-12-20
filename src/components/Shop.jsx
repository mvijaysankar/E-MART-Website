import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { products as productData } from "../Data"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);  // Cart state to hold added products

  const filteredProducts = productData.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.productName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    toast.success(`${product.productName} added to cart!`);
  };

  return (
    <div className="shop-container" style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Shop</h2>

      <div
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: "#003366",
            color: "#fff",
            marginLeft: "20px",
            fontSize: "16px",
          }}
        >
          <option value="all">All Categories</option>
          <option value="sofa">Sofa</option>
          <option value="chair">Chair</option>
          <option value="mobile">Mobile</option>
          <option value="watch">Watch</option>
        </select>

        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            width: "100%",
            maxWidth: "600px",
            fontSize: "16px",
            margin: "50px",
          }}
        />
      </div>

      <div
        className="p-5"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          border: "none",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              className="card"
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  fontSize: "1.5rem",
                  color: "#ff4d4d",
                  cursor: "pointer",
                }}
              >
                <FaRegHeart />
              </span>

              <img
                src={product.imgUrl}
                alt={product.productName}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h5 style={{ margin: "0 0 10px" }}>{product.productName}</h5>
                <p style={{ margin: "0 0 10px" }}>
                  <strong>⭐⭐⭐⭐⭐</strong>
                </p>
                <p style={{ margin: "0 0 10px" }}>
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
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Shop;
