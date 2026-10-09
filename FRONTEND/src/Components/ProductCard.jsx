import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <article className="product-card">

      <Link
        to={`/products/${product.id}`}
        className="product-image-container"
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        {product.isNew && (
          <span className="product-badge">
            NEW
          </span>
        )}
      </Link>

      <div className="product-info">

        <div>
          <p className="product-category">
            {product.category}
          </p>

          <h3>
            {product.name}
          </h3>

          <p className="product-price">
            R {product.price.toLocaleString()}
          </p>
        </div>

        <Link
          to={`/products/${product.id}`}
          className="product-cart-button"
          aria-label={`View ${product.name}`}
        >
          <ShoppingBag size={18} />
        </Link>

      </div>

    </article>
  );
}

export default ProductCard;