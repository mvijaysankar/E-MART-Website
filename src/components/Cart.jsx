import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalAmount = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="container my-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <div className="d-flex flex-column">
              {cart.map((product) => (
                <div className="mb-4" key={product.id}>
                  <div className="card w-100 h-100 position-relative">
                    <div className="d-flex">
                      <img
                        src={product.imgUrl}
                        className="card-img-top"
                        alt={product.productName}
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                        }}
                      />

                      <div className="card-body d-flex flex-column justify-content-between">
                        <button
                          className="btn fw-bold position-absolute top-0 end-0 m-2"
                          onClick={() => removeFromCart(product.id)}
                        >
                          x
                        </button>
                        <h5 className="card-title">{product.productName}</h5>
                        <p className="card-text">
                          <strong>${product.price}</strong>
                        </p>
                        <div className="d-flex align-items-center">
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() =>
                              updateQuantity(product.id, product.quantity - 1)
                            }
                            disabled={product.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="mx-2">{product.quantity}</span>
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() =>
                              updateQuantity(product.id, product.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-4 mt-4 text-center">
            <div
              className="card"
              style={{
                height: "150px",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
