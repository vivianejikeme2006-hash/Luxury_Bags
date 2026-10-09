import React from "react";
import { Link } from "react-router-dom";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-small-title">
          THE ART OF ELEGANCE
        </p>

        <h1>
          TIMELESS
          <br />
          LUXURY
        </h1>

        <p className="hero-description">
          Discover carefully crafted handbags designed
          to become part of your signature style.
        </p>

        <Link to="/products" className="hero-button">
          SHOP COLLECTION
        </Link>

      </div>

    </section>
  );
}

export default Hero;