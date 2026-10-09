import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  User,
  ShoppingBag,
  Menu,
  X
} from "lucide-react";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          LUXORA
        </Link>

        {/* Desktop Navigation */}
        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>

          <Link to="/bags" onClick={() => setMenuOpen(false)}>
            Bags
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <Link to="/faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </Link>
        </nav>

        {/* Icons */}
        <div className="navbar-icons">

          <Link to="/products">
            <Search size={19} />
          </Link>

          <Link to="/login">
            <User size={19} />
          </Link>

          <Link to="/cart">
            <ShoppingBag size={19} />
          </Link>

          {/* Mobile menu */}
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;