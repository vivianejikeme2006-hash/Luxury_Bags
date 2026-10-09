import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import CartItem from "../Components/CartItem";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("luxoraCart")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("luxoraCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id, quantity) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  return (
    <section className="cart-page">
      <div className="cart-heading">
        <p className="cart-eyebrow">YOUR LUXORA SELECTION</p>
        <h1>Shopping Bag</h1>
        <p>Thoughtfully selected pieces, just for you.</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <ShoppingBag size={42} strokeWidth={1} />
          <h2>Your shopping bag is empty</h2>
          <p>Discover a piece that speaks to your style.</p>
          <Link to="/products" className="cart-shop-button">
            EXPLORE COLLECTION
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items-list">
            <div className="cart-list-heading">
              <span>PRODUCT</span>
              <span>{cartItems.length} ITEM(S)</span>
            </div>

            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))}

            <Link to="/products" className="cart-continue">
              <ArrowLeft size={16} />
              Continue shopping
            </Link>
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>R {subtotal.toLocaleString("en-ZA")}</span>
            </div>

            <div className="cart-summary-row">
              <span>Delivery</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="cart-summary-total">
              <span>Estimated total</span>
              <strong>R {subtotal.toLocaleString("en-ZA")}</strong>
            </div>

            <p className="cart-summary-note">
              Delivery charges will be confirmed at checkout.
            </p>

            <Link to="/checkout" className="cart-checkout-button">
              PROCEED TO CHECKOUT
            </Link>

            <p className="cart-secure-note">
              Secure checkout · Luxury, delivered with care
            </p>
          </aside>
        </div>
      )}
    </section>
  );
}

export default Cart;