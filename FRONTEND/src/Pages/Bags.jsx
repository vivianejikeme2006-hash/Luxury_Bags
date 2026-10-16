import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import ProductGrid from "../Components/ProductGrid";
import "./Bags.css";

const bagProducts = [
  {
    id: 1,
    name: "Élan Handbag",
    category: "Handbags",
    price: 1899,
    image:
      "image/",
    isNew: true,
  },
  {
    id: 2,
    name: "Étoile Shoulder Bag",
    category: "Shoulder Bags",
    price: 2199,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=85",
    isNew: false,
  },
  {
    id: 3,
    name: "Maison Crossbody",
    category: "Crossbody Bags",
    price: 1699,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=85",
    isNew: true,
  },
  {
    id: 4,
    name: "Petite Élise",
    category: "Mini Bags",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=700&q=85",
    isNew: false,
  },
  {
    id: 5,
    name: "Noir Signature",
    category: "Handbags",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85",
    isNew: false,
  },
  {
    id: 6,
    name: "Luna Mini Bag",
    category: "Mini Bags",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=700&q=85",
    isNew: true,
  },
  {
    id: 7,
    name: "Amour Shoulder Bag",
    category: "Shoulder Bags",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=85",
    isNew: false,
  },
  {
    id: 8,
    name: "Céleste Crossbody",
    category: "Crossbody Bags",
    price: 1799,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=85",
    isNew: false,
  },
  {
id: 9,
name: "The Milano Tote",
category: "Tote Bags",
price: 2799,
image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
description: "A spacious everyday tote with a refined, timeless silhouette."
},
{
id: 10,
name: "Velvet Evening Clutch",
category: "Clutch Bags",
price: 1599,
image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
description: "An elegant evening clutch for dinners and special occasions."
},
{
id: 11,
name: "The Heritage Satchel",
category: "Satchel Bags",
price: 2399,
image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
description: "A structured satchel with classic luxury-inspired detailing."
},
{
id: 12,
name: "Amara Bucket Bag",
category: "Bucket Bags",
price: 1899,
image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
description: "A modern bucket bag with a relaxed shape and polished finish."
},
{
id: 13,
name: "The Weekender",
category: "Travel Bags",
price: 3299,
image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
description: "A roomy travel companion for stylish weekend getaways."
},
{
id: 14,
name: "Luna Quilted Bag",
category: "Quilted Bags",
price: 2599,
image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
description: "A quilted statement bag with a sophisticated chain strap."
},
{
id: 15,
name: "The Crescent Hobo",
category: "Hobo Bags",
price: 2199,
image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
description: "A soft crescent-shaped shoulder bag for effortless everyday style."
},
{
id: 16,
name: "Éclipse Phone Bag",
category: "Mini Bags",
price: 999,
image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
description: "A compact crossbody designed for your phone and daily essentials."
},
{
id: 17,
name: "The Executive Briefcase",
category: "Briefcases",
price: 3599,
image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
description: "A sleek structured bag for work, meetings, and business travel."
},
{
id: 18,
name: "Rosé Top-Handle Bag",
category: "Top-Handle Bags",
price: 2299,
image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
description: "A feminine top-handle design with a polished, elegant finish."
}
];

const categories = [
  "All Bags",
  "Handbags",
  "Shoulder Bags",
  "Crossbody Bags",
  "Mini Bags",
  "Tote Bags",
  "Clutch Bags",
  "Satchel Bags",
  "Bucket Bags",
  "Travel Bags",
  "Quilted Bags",
  "Hobo Bags",
  "Briefcases",
  "Top-Handle Bags",
];

function Bags() {
  const [category, setCategory] = useState("All Bags");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  const filteredBags = useMemo(() => {
    let result = [...bagProducts];

    if (category !== "All Bags") {
      result = result.filter((bag) => bag.category === category);
    }

    if (search.trim()) {
      result = result.filter((bag) =>
        `${bag.name} ${bag.category}`
          .toLowerCase()
          .includes(search.trim().toLowerCase())
      );
    }

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "new") {
      result.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    }

    return result;
  }, [category, search, sort]);

  return (
    <div className="bags-page">
      <section className="bags-hero">
        <p>THE LUXORA COLLECTION</p>
        <h1>Find your signature bag.</h1>
        <span>
          Discover timeless silhouettes for every moment and every mood.
        </span>
      </section>

      <section className="bags-content">
        <div className="bags-heading-row">
          <div>
            <p className="bags-eyebrow">CURATED FOR YOU</p>
            <h2>Our Bags</h2>
            <p className="bags-count">
              {filteredBags.length}{" "}
              {filteredBags.length === 1 ? "style" : "styles"} to discover
            </p>
          </div>

          <Link to="/products" className="bags-all-products-link">
            VIEW ALL PRODUCTS
          </Link>
        </div>

        <div className="bags-toolbar">
          <div className="bags-search">
            <Search size={18} />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search bags..."
              aria-label="Search bags"
            />
          </div>

          <div className="bags-sort">
            <ArrowUpDown size={17} />
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              aria-label="Sort bags"
            >
              <option value="featured">Featured</option>
              <option value="new">New arrivals</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="bags-filter-heading">
          <SlidersHorizontal size={17} />
          <span>SHOP BY STYLE</span>
        </div>

        <div className="bags-category-list">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {filteredBags.length > 0 ? (
          <ProductGrid products={filteredBags} />
        ) : (
          <div className="bags-no-results">
            <h3>No bags found</h3>
            <p>Try another search or choose a different style.</p>
            <button
              type="button"
              onClick={() => {
                setCategory("All Bags");
                setSearch("");
                setSort("featured");
              }}
            >
              CLEAR FILTERS
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Bags;