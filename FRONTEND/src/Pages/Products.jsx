import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductGrid from "../Components/ProductGrid";
import "./Products.css";

const products = [
{
id: 1,
name: "Élan Handbag",
price: 1899,
category: "Handbags",
isNew: true,
image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80"
},
{
id: 2,
name: "Étoile Shoulder Bag",
price: 2199,
category: "Shoulder Bags",
isNew: true,
image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80"
},
{
id: 3,
name: "Maison Crossbody",
price: 1699,
category: "Crossbody Bags",
image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80"
},
{
id: 4,
name: "Amour Mini Bag",
price: 1499,
category: "Mini Bags",
image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80"
},
{
id: 5,
name: "Noir Evening Bag",
price: 2599,
category: "Handbags",
image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80"
},
{
id: 6,
name: "Belle Shoulder Bag",
price: 1999,
category: "Shoulder Bags",
image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80"
},
{
id: 7,
name: "Luna Crossbody",
price: 1799,
category: "Crossbody Bags",
image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80"
},
{
id: 8,
name: "Petite Élise",
price: 1299,
category: "Mini Bags",
image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80"
}
];

const categories = [
"All Bags",
"Handbags",
"Shoulder Bags",
"Crossbody Bags",
"Mini Bags"
];

function Products() {
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All Bags");
const [sort, setSort] = useState("featured");

const filteredProducts = products
.filter((product) => {
const matchesSearch =
product.name.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    category === "All Bags" || product.category === category;

  return matchesSearch && matchesCategory;
})
.sort((a, b) => {
  if (sort === "price-low") return a.price - b.price;
  if (sort === "price-high") return b.price - a.price;
  return a.id - b.id;
});

return (
<div className="products-page">
<section className="products-banner">
<p>THE LUXORA COLLECTION</p>
<h1>Discover Your Signature Bag</h1>
<span>Timeless designs for every occasion.</span>
</section>

  <section className="products-content">
    <div className="products-heading">
      <div>
        <p className="products-eyebrow">CURATED FOR YOU</p>
        <h2>Our Collection</h2>
        <p className="products-count">
          {filteredProducts.length} products
        </p>
      </div>

      <label className="products-sort">
        <SlidersHorizontal size={17} />
        <span>Sort:</span>
        <select
          value={sort}
          onChange={(event) => setSort(event.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </label>
    </div>

    <div className="products-toolbar">
      <div className="products-categories">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "selected" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <label className="products-search">
        <Search size={18} />
        <input
          type="search"
          placeholder="Search bags..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </label>
    </div>

    {filteredProducts.length > 0 ? (
      <ProductGrid products={filteredProducts} />
    ) : (
      <div className="products-empty">
        <h3>No bags found</h3>
        <p>Try another search or choose a different category.</p>
        <button
          onClick={() => {
            setSearch("");
            setCategory("All Bags");
          }}
        >
          Clear filters
        </button>
      </div>
    )}
  </section>
</div>

);
}

export default Products;