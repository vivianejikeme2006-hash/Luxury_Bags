import { Link } from "react-router-dom";

// items: [{ price: number, quantity: number }]
export default function OrderSummary({
  items = [],
  shipping = 0,
  currency = "$",
  checkoutLink = "/checkout",
  showCheckoutButton = true,
}) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + shipping;
  const money = (n) => `${currency}${n.toFixed(2)}`;

  return (
    <aside className="cart-summary">
      <h2>Order Summary</h2>

      <div className="cart-summary-row">
        <span>Subtotal</span>
        <span>{money(subtotal)}</span>
      </div>

      <div className="cart-summary-row">
        <span>Shipping</span>
        <span>{shipping === 0 ? "Free" : money(shipping)}</span>
      </div>

      <div className="cart-summary-total">
        <span>Total</span>
        <strong>{money(total)}</strong>
      </div>

      {showCheckoutButton && (
        <Link to={checkoutLink} className="cart-checkout-button">
          PROCEED TO CHECKOUT
        </Link>
      )}

      <p className="cart-secure-note">Secure checkout</p>
    </aside>
  );
}