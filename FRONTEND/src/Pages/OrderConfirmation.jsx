import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CheckCircle,
  Package,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import "./OrderConfirmation.css";

function OrderConfirmation() {
  const navigate = useNavigate();

  let order = null;

  try {
    order = JSON.parse(localStorage.getItem("luxoraLastOrder"));
  } catch {
    order = null;
  }

  if (!order) {
    return (
      <section className="confirmation-empty">
        <ShoppingBag size={42} strokeWidth={1} />
        <h1>No recent order found</h1>
        <p>Once you place an order, its confirmation will appear here.</p>
        <Link to="/products" className="confirmation-button">
          EXPLORE COLLECTION
        </Link>
      </section>
    );
  }

  const customer = order.customer || {};

  return (
    <section className="confirmation-page">
      <div className="confirmation-success-icon">
        <CheckCircle size={48} strokeWidth={1.3} />
      </div>

      <p className="confirmation-eyebrow">THANK YOU FOR CHOOSING LUXORA</p>

      <h1>Your Order Is Confirmed</h1>

      <p className="confirmation-intro">
        Thank you for your purchase. We've recorded your order
        details for your reference.
      </p>

      <div className="confirmation-order-number">
        <span>ORDER NUMBER</span>
        <strong>{order.id}</strong>
        <p>
          Placed on{" "}
          {new Date(order.createdAt).toLocaleDateString("en-ZA", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      <div className="confirmation-layout">
        <div className="confirmation-card">
          <div className="confirmation-card-heading">
            <Package size={20} />
            <h2>Order Details</h2>
          </div>

          {order.items?.map((item) => (
            
            <div className="confirmation-product" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="confirmation-product-info">
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <span>Quantity: {item.quantity}</span>
              </div>

              <strong>
                R{" "}
                (
                {Number(item.price) * item.quantity
                  .toLocaleString?.("en-ZA") ?? item.price}
                )
              </strong>
            </div>
          ))}

          <div className="confirmation-total-row">
            <span>Subtotal</span>
            <span>R {Number(order.subtotal || 0).toLocaleString("en-ZA")}</span>
          </div>

          <div className="confirmation-total-row">
            <span>Delivery</span>
            <span>R {Number(order.deliveryFee || 0).toLocaleString("en-ZA")}</span>
          </div>

          <div className="confirmation-grand-total">
            <span>Total</span>
            <strong>R {Number(order.total || 0).toLocaleString("en-ZA")}</strong>
          </div>
        </div>

        <div className="confirmation-card">
          <h2>Delivery Information</h2>

          <div className="confirmation-address">
            <strong>{customer.fullName}</strong>
            <p>{customer.address}</p>
            <p>{customer.suburb}</p>
            <p>
              {customer.city}, {customer.province}
            </p>
            <p>{customer.postalCode}</p>
            <p>{customer.phone}</p>
            <p>{customer.email}</p>
          </div>

          <div className="confirmation-delivery">
            <span>Delivery Method</span>
            <strong>
              {customer.deliveryMethod === "express"
                ? "Express Delivery"
                : "Standard Delivery"}
            </strong>
          </div>

          {customer.deliveryNotes && (
            <div className="confirmation-notes">
              <span>Delivery Notes</span>
              <p>{customer.deliveryNotes}</p>
            </div>
          )}

          <p className="confirmation-status">
            Order status: <strong>{order.status}</strong>
          </p>
        </div>
      </div>

      <div className="confirmation-actions">
        <Link to="/products" className="confirmation-button">
          CONTINUE SHOPPING <ArrowRight size={16} />
        </Link>

        <button
          type="button"
          className="confirmation-secondary-button"
          onClick={() => navigate("/orders")}
        >
          VIEW MY ORDERS
        </button>
      </div>

      <p className="confirmation-footer-note">
        Keep your order number for future reference.
      </p>
    </section>
  );
}

export default OrderConfirmation;