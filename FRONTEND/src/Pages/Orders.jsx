import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Package,
  ArrowRight,
  Clock,
} from "lucide-react";
import "./Orders.css";

function Orders() {
  const user = JSON.parse(
    localStorage.getItem("luxoraUser") || "null"
  );

  const allOrders = JSON.parse(
    localStorage.getItem("luxoraOrders") || "[]"
  );

  const lastOrder = JSON.parse(
    localStorage.getItem("luxoraLastOrder") || "null"
  );

  // Show only orders associated with the signed-in email.
  const orders = allOrders.filter(
    (order) =>
      order.customer?.email?.toLowerCase() ===
      user?.email?.toLowerCase()
  );

  // Include the latest order if checkout hasn't added it to luxoraOrders yet.
  const hasLastOrder = orders.some(
    (order) => order.id === lastOrder?.id
  );

  if (
    user &&
    lastOrder &&
    !hasLastOrder &&
    lastOrder.customer?.email?.toLowerCase() ===
      user.email.toLowerCase()
  ) {
    orders.unshift(lastOrder);
  }

  if (!user) {
    return (
      <section className="orders-empty">
        <ShoppingBag size={45} strokeWidth={1.2} />

        <p className="orders-eyebrow">YOUR LUXORA ACCOUNT</p>

        <h1>Your orders await.</h1>

        <p>Sign in to view your purchase history.</p>

        <Link to="/login" className="orders-primary-button">
          SIGN IN
        </Link>
      </section>
    );
  }

  return (
    <section className="orders-page">
      <div className="orders-heading">
        <p className="orders-eyebrow">YOUR ACCOUNT</p>

        <h1>My Orders</h1>

        <p>
          Welcome back, {user.fullName || "LUXORA customer"}.
          Here you can review your recent purchases.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="orders-no-items">
          <ShoppingBag size={42} strokeWidth={1.2} />

          <h2>No orders yet</h2>

          <p>
            Your next favourite piece is waiting to be discovered.
          </p>

          <Link to="/products" className="orders-primary-button">
            EXPLORE COLLECTION <ArrowRight size={16} />
          </Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders
            .slice()
            .reverse()
            .map((order) => (
              <article className="order-card" key={order.id}>
                <div className="order-card-header">
                  <div>
                    <span className="order-label">ORDER NUMBER</span>
                    <h2>{order.id}</h2>
                  </div>

                  <span className="order-status">
                    <Clock size={14} />
                    {order.status || "Order Placed"}
                  </span>
                </div>

                <div className="order-card-meta">
                  <span>
                    <Package size={16} />
                    {order.items?.length || 0} product(s)
                  </span>

                  <span>
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleDateString(
                          "en-ZA",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )
                      : "Date unavailable"}
                  </span>
                </div>

                <div className="order-card-products">
                  {(order.items || []).map((item, index) => (
                    <div
                      className="order-mini-product"
                      key={`${order.id}-${item.id}-${index}`}
                    >
                      <img src={item.image} alt={item.name} />

                      <div>
                        <h3>{item.name}</h3>
                        <p>Quantity: {item.quantity}</p>
                      </div>

                      <strong>
                        R{" "}
                        {(
                          Number(item.price) *
                          Number(item.quantity)
                        ).toLocaleString("en-ZA")}
                      </strong>
                    </div>
                  ))}
                </div>

                <div className="order-card-footer">
                  <div>
                    <span>Total paid</span>
                    <strong>
                      R {Number(order.total || 0).toLocaleString("en-ZA")}
                    </strong>
                  </div>

                  <Link
                    to="/order-confirmation"
                    className="order-view-link"
                    onClick={() =>
                      localStorage.setItem(
                        "luxoraLastOrder",
                        JSON.stringify(order)
                      )
                    }
                  >
                    VIEW DETAILS <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
        </div>
      )}

      <div className="orders-bottom-link">
        <Link to="/profile">RETURN TO MY PROFILE</Link>
      </div>
    </section>
  );
}

export default Orders;