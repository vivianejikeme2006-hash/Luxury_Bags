const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Luxury Bags API is running!"
  });
});

// Test products
app.get("/api/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Élan Handbag",
      price: 1899,
      category: "Handbags"
    },
    {
      id: 2,
      name: "Étoile Shoulder Bag",
      price: 2199,
      category: "Shoulder Bags"
    },
    {
      id: 3,
      name: "Maison Crossbody",
      price: 1699,
      category: "Crossbody Bags"
    }
  ]);
});

// Start server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Luxury Bags API running on http://localhost:${PORT}`);
});