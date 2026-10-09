import React from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import "./CartItem.css";

function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="cart-item">
      <Link to={`/products/${item.id}`} className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </Link>

      <div className="cart-item-info">
        <p className="cart-item-category">{item.category}</p>
        <h3>{item.name}</h3>
        <p className="cart-item-price">
          R {Number(item.price).toLocaleString("en-ZA")}
        </p>

        <div className="cart-item-actions">
          <div className="cart-quantity">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() =>
                onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
              }
              disabled={item.quantity <= 1}
            >
              <Minus size={14} />
            </button>

            <span>{item.quantity}</span>

            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() =>
                onUpdateQuantity(item.id, item.quantity + 1)
              }
            >
              <Plus size={14} />
            </button>
          </div>

          <button
            type="button"
            className="cart-remove"
            onClick={() => onRemove(item.id)}
          >
            <Trash2 size={15} />
            Remove
          </button>
        </div>
      </div>

      <p className="cart-item-subtotal">
        R {(Number(item.price) * item.quantity).toLocaleString("en-ZA")}
      </p>
    </div>
  );
}

export default CartItem;