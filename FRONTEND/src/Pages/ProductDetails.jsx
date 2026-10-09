import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShoppingBag, ArrowLeft, Minus, Plus, Check } from "lucide-react";
import "./ProductDetails.css";

const products = [
{
id: 1,
name: "Élan Handbag",
price: 1899,
category: "Handbags",
isNew: true,
image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
description: "An elegant everyday handbag designed to complement your personal style. Its timeless silhouette makes it suitable for both special occasions and everyday wear.",
details: ["Elegant, versatile design", "Spacious main compartment", "Designed for everyday styling"]
},
{
id: 2,
name: "Étoile Shoulder Bag",
price: 2199,
category: "Shoulder Bags",
isNew: true,
image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1000&q=85",
description: "A refined shoulder bag with a classic silhouette, made for effortless transitions from day to evening.",
details: ["Classic shoulder style", "Everyday essentials storage", "Versatile styling"]
},
{
id: 3,
name: "Maison Crossbody",
price: 1699,
category: "Crossbody Bags",
image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1000&q=85",
description: "A practical crossbody design that combines freedom of movement with understated elegance.",
details: ["Hands-free styling", "Compact silhouette", "Suitable for everyday outings"]
},
{
id: 4,
name: "Amour Mini Bag",
price: 1499,
category: "Mini Bags",
image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=85",
description: "A compact statement piece that adds a polished finishing touch to your look.",
details: ["Compact design", "Evening-ready styling", "Lightweight silhouette"]
},
{
id: 5,
name: "Noir Evening Bag",
price: 2599,
category: "Handbags",
image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
description: "A sophisticated handbag designed to elevate your evening wardrobe.",
details: ["Elegant silhouette", "Statement styling", "Versatile occasion wear"]
},
{
id: 6,
name: "Belle Shoulder Bag",
price: 1999,
category: "Shoulder Bags",
image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1000&q=85",
description: "An understated shoulder bag for a polished, effortless everyday look.",
details: ["Classic design", "Versatile styling", "Everyday essentials storage"]
},
{
id: 7,
name: "Luna Crossbody",
price: 1799,
category: "Crossbody Bags",
image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1000&q=85",
description: "A contemporary crossbody bag for days when you want to travel light and look elegant.",
details: ["Compact design", "Hands-free carrying", "Easy-to-style silhouette"]
},
{
id: 8,
name: "Petite Élise",
price: 1299,
category: "Mini Bags",
image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=85",
description: "A petite bag with a refined shape for carrying your essentials in style.",
details: ["Mini silhouette", "Lightweight design", "Day-to-evening styling"]
}
];

function ProductDetails() {
const { id } = useParams();
const product = products.find((item) => item.id === Number(id));

const [quantity, setQuantity] = useState(1);
const [added, setAdded] = useState(false);

function addToCart() {
const existingCart = JSON.parse(localStorage.getItem("luxoraCart") || "[]");
const existingItem = existingCart.find((item) => item.id === product.id);

let updatedCart;

if (existingItem) {
  updatedCart = existingCart.map((item) =>
    item.id === product.id
      ? { ...item, quantity: item.quantity + quantity }
      : item
  );
} else {
  updatedCart = [...existingCart, { ...product, quantity }];
}

localStorage.setItem("luxoraCart", JSON.stringify(updatedCart));
setAdded(true);

}

if (!product) {
return (
<section className="product-not-found">
<h1>Product not found</h1>
<p>Sorry, we couldn't find that handbag.</p>
<Link to="/products">Return to collection</Link>
</section>
);
}

return (
<div className="product-details-page">
<div className="details-breadcrumb">
<Link to="/products"><ArrowLeft size={16} /> Back to collection</Link>
<span> / {product.category}</span>
</div>

  <section className="product-details-layout">
    <div className="details-image">
      <img src={product.image} alt={product.name} />
      {product.isNew && <span className="details-badge">NEW ARRIVAL</span>}
    </div>

    <div className="details-information">
      <p className="details-eyebrow">{product.category}</p>
      <h1>{product.name}</h1>
      <p className="details-price">
        R {product.price.toLocaleString("en-ZA")}
      </p>

      <div className="details-divider" />

      <p className="details-description">{product.description}</p>

      <h3 className="details-subheading">Product highlights</h3>
      <ul className="details-highlights">
        {product.details.map((detail) => (
          <li key={detail}><Check size={16} /> {detail}</li>
        ))}
      </ul>

      <div className="details-quantity">
        <span>Quantity</span>
        <div className="quantity-control">
          <button
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            aria-label="Decrease quantity"
          >
            <Minus size={15} />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity((current) => current + 1)}
            aria-label="Increase quantity"
          >
            <Plus size={15} />
          </button>
        </div>
      </div>

      <button className="details-add-button" onClick={addToCart}>
        <ShoppingBag size={18} />
        ADD TO CART — R {(product.price * quantity).toLocaleString("en-ZA")}
      </button>

      {added && (
        <p className="details-success">
          Added to your bag! <Link to="/cart">View cart</Link>
        </p>
      )}

      <p className="details-note">
        Product information and prices are sample data for now.
      </p>
    </div>
  </section>
</div>

);
}

export default ProductDetails;