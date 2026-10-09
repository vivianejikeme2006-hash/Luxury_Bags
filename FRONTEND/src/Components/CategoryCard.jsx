import React from "react";
import { Link } from "react-router-dom";

import "./CategoryCard.css";

function CategoryCard({ title, image }) {
  return (
    <Link to="/bags" className="category-card">

      <img src={image} alt={title} />

      <div className="category-overlay">
        <h3>{title}</h3>
        <span>EXPLORE COLLECTION</span>
      </div>

    </Link>
  );
}

export default CategoryCard;