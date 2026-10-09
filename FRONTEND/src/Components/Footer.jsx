import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="luxury-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            LUXORA
          </Link>

          <p>
            Timeless handbags. Thoughtful craftsmanship.
            A signature of your personal style.
          </p>

          <div className="footer-socials">
           <a
             href="https://instagram.com"
             aria-label="Instagram"
             target="_blank"
            rel="noreferrer"
            >
            <FontAwesomeIcon icon={faInstagram} />
         </a>

        <a
             href="https://facebook.com"
             aria-label="Facebook"
             target="_blank"
             rel="noreferrer"
        >
             <FontAwesomeIcon icon={faFacebookF} />
         </a>

         <a href="mailto:hello@luxora.co.za" aria-label="Email us">
        <Mail size={19} />
         </a>
        </div>
        </div>

        <div className="footer-column">
          <h3>EXPLORE</h3>
          <Link to="/">Home</Link>
          <Link to="/about">Our Story</Link>
          <Link to="/products">All Products</Link>
          <Link to="/bags">Bag Collection</Link>
        </div>

        <div className="footer-column">
          <h3>CUSTOMER CARE</h3>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faq">FAQs</Link>
          <Link to="/orders">My Orders</Link>
          <Link to="/profile">My Account</Link>
        </div>

        <div className="footer-column footer-contact">
          <h3>GET IN TOUCH</h3>

          <p>
            <Mail size={16} />
            <a href="mailto:hello@luxora.co.za">
              hello@luxora.co.za
            </a>
          </p>

          <p>
            <Phone size={16} />
            Contact us by email
          </p>

          <p>
            <MapPin size={16} />
            South Africa
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} LUXORA. All rights reserved.
        </p>

        <div>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

