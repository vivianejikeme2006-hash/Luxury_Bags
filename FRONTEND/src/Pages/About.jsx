import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Gem, Heart, Sparkles } from "lucide-react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-overlay">
          <p>THE STORY OF LUXORA</p>
          <h1>Elegance that speaks without words.</h1>
          <span>
            Timeless handbags. Thoughtful craftsmanship.
            A signature of your personal style.
          </span>
        </div>
      </section>

      <section className="about-intro">
        <p className="about-eyebrow">OUR PHILOSOPHY</p>

        <h2>Luxury is not just what you carry. It's how you feel.</h2>

        <p>
          At LUXORA, we believe the right handbag is more than
          an accessory. It is an expression of individuality,
          confidence, and the beauty found in life's everyday
          moments.
        </p>
      </section>

      <section className="about-values">
        <article className="about-value-card">
          <Gem size={30} strokeWidth={1.2} />
          <h3>Timeless Style</h3>
          <p>
            Thoughtfully selected designs that complement your
            wardrobe beyond passing trends.
          </p>
        </article>

        <article className="about-value-card">
          <Heart size={30} strokeWidth={1.2} />
          <h3>Personal Expression</h3>
          <p>
            Pieces that help you express your individuality,
            confidence, and unique sense of style.
          </p>
        </article>

        <article className="about-value-card">
          <Sparkles size={30} strokeWidth={1.2} />
          <h3>Everyday Elegance</h3>
          <p>
            From special occasions to daily adventures, find a
            handbag that makes every moment feel special.
          </p>
        </article>
      </section>

      <section className="about-story">
        <div className="about-story-image" />

        <div className="about-story-content">
          <p className="about-eyebrow">THE LUXORA EXPERIENCE</p>

          <h2>Made for the moments that matter.</h2>

          <p>
            We created LUXORA for those who appreciate understated
            beauty, thoughtful details, and accessories that feel
            personal. Our collection is designed to make discovering
            your next favourite handbag a considered and enjoyable
            experience.
          </p>

          <p>
            Whether you're searching for an everyday essential or
            a statement piece, we invite you to discover a style
            that feels unmistakably yours.
          </p>

          <Link to="/products" className="about-button">
            DISCOVER THE COLLECTION <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="about-closing">
        <p className="about-eyebrow">YOUR STYLE. YOUR STORY.</p>

        <h2>Carry what makes you feel extraordinary.</h2>

        <Link to="/products" className="about-button">
          SHOP LUXORA <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}

export default About;