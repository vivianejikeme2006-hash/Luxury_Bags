import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import CheckoutForm from "../Components/CheckoutForm";
import "./Checkout.css";

const initialForm = {
  email: "",
  fullName: "",
  phone: "",
  address: "",
  suburb: "",
  city: "",
  province: "",
  postalCode: "",
  deliveryNotes: "",
  deliveryMethod: "standard",
};

function Checkout() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialForm);

  const [cartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("luxoraCart")) || [];
    } catch {
      return [];
    }
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  const deliveryFee =
    formData.deliveryMethod === "express" ? 150 : 80;

  const total = subtotal + deliveryFee;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();

    if (cartItems.length === 0) {
      alert("Your shopping bag is empty.");
      navigate("/products");
      return;
    }

    const order = {
      id: `LUX-${Date.now()}`,
      items: cartItems,
      customer: formData,
      subtotal,
      deliveryFee,
      total,
      status: "Order Placed",
      createdAt: new Date().toISOString(),
    };

    let existingOrders = [];

    try {
      existingOrders =
        JSON.parse(localStorage.getItem("luxoraOrders")) || [];
    } catch {
      existingOrders = [];
    }

    localStorage.setItem(
      "luxoraOrders",
      JSON.stringify([order, ...existingOrders])
    );

    localStorage.setItem("luxoraLastOrder", JSON.stringify(order));
    localStorage.removeItem("luxoraCart");

    navigate("/order-confirmation");
  };

  if (cartItems.length === 0) {
    return (
      <section className="checkout-empty">
        <h1>Your shopping bag is empty</h1>
        <p>Add something beautiful before checking out.</p>
        <Link to="/products" className="checkout-button">
          EXPLORE COLLECTION
        </Link>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <div className="checkout-heading">
        <p className="checkout-eyebrow">LUXORA · CHECKOUT</p>
        <h1>Complete Your Order</h1>
        <p>You're one step closer to timeless elegance.</p>
      </div>

      <div className="checkout-layout">
        <div className="checkout-details">
          <CheckoutForm
            formData={formData}
            onChange={handleChange}
          />
        </div>

        <aside className="checkout-summary">
          <h2>Your Order</h2>

          <div className="checkout-products">
            {cartItems.map((item) => (
              <div className="checkout-product" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="checkout-product-info">
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <span>
                    R{" "}
                    {(Number(item.price) * item.quantity).toLocaleString(
                      "en-ZA"
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-price-row">
            <span>Subtotal</span>
            <span>R {subtotal.toLocaleString("en-ZA")}</span>
          </div>

          <div className="checkout-price-row">
            <span>Delivery</span>
            <span>R {deliveryFee.toLocaleString("en-ZA")}</span>
          </div>

          <div className="checkout-price-total">
            <span>Total</span>
            <strong>R {total.toLocaleString("en-ZA")}</strong>
          </div>

          <p className="checkout-delivery-note">
            Standard delivery: R80 · Express delivery: R150
          </p>

          <button
            type="submit"
            form="checkout-form"
            className="checkout-button"
            onClick={handlePlaceOrder}
          >
            PLACE ORDER
          </button>

          <p className="checkout-secure">
            <ShieldCheck size={17} />
            Your details are handled with care.
          </p>

          <Link to="/cart" className="checkout-back">
            <ArrowLeft size={15} />
            Return to shopping bag
          </Link>
        </aside>
      </div>
    </section>
  );
}

export default Checkout;