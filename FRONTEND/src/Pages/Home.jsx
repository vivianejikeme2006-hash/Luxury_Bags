import React from "react";

import Hero from "../Components/Hero";
import CategoryCard from "../Components/CategoryCard";
import ProductGrid from "../Components/ProductGrid";

import "./Home.css";

const featuredProducts = [
  {
    id: 1,
    name: "Élan Handbag",
    price: 1899,
    category: "Handbags",
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "Étoile Shoulder Bag",
    price: 2199,
    category: "Shoulder Bags",
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    name: "Maison Crossbody",
    price: 1699,
    category: "Crossbody Bags",
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    name: "Amour Mini Bag",
    price: 1499,
    category: "Mini Bags",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80"
  }
];

function Home() {
  return (
    <div className="home">

      <Hero />

      {/* Introduction */}
      <section className="home-intro">

        <p className="section-label">
          LUXORA
        </p>

        <h2>
          Designed to be remembered.
        </h2>

        <p>
          Luxury is more than an accessory.
          It is an expression of individuality,
          confidence and timeless beauty.
        </p>

      </section>


      {/* Categories */}
      <section className="categories-section">

        <div className="section-heading">

          <p className="section-label">
            DISCOVER
          </p>

          <h2>
            Shop by Category
          </h2>

        </div>


        <div className="categories-grid">

          <CategoryCard
            title="Handbags"
            image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80"
          />

          <CategoryCard
            title="Shoulder Bags"
            image="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1000&q=80"
          />

          <CategoryCard
            title="Crossbody Bags"
            image="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1000&q=80"
          />

        </div>

      </section>

      {/* Featured Collection */}

<section className="featured-section">

  <div className="section-heading">

    <p className="section-label">
      THE COLLECTION
    </p>

    <h2>
      Featured Bags
    </h2>

  </div>

  <ProductGrid products={featuredProducts} />

</section>

    </div>
  );
}

export default Home;