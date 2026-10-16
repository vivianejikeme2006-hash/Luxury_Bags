import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
} from "lucide-react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // This confirms the form locally.
    // Connect a backend or email service to send real messages.
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="luxora-contact">
      <section className="contact-hero">
        <span className="contact-eyebrow">WE'RE HERE FOR YOU</span>
        <h1>Let's Talk</h1>
        <p>
          Have a question about your next favourite bag?
          We'd love to hear from you.
        </p>
        <div className="contact-breadcrumb">
          <Link to="/">Home</Link>
          <ArrowRight size={14} />
          <span>Contact</span>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-intro">
          <span className="contact-eyebrow">GET IN TOUCH</span>
          <h2>We're only a message away.</h2>
          <p>
            Whether you need help with an order, a product, or
            anything else, our team is ready to assist you.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-icon">
                <Mail size={21} />
              </div>
              <div>
                <h3>Email Us</h3>
                <p>support@luxora.co.za</p>
                <span>For orders and general enquiries</span>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <Phone size={21} />
              </div>
              <div>
                <h3>Call Us</h3>
                <p>Contact our support team</p>
                <span>Phone support details coming soon</span>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <Clock size={21} />
              </div>
              <div>
                <h3>Customer Care</h3>
                <p>Monday – Friday</p>
                <span>Business hours to be confirmed</span>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <MapPin size={21} />
              </div>
              <div>
                <h3>Our Location</h3>
                <p>South Africa</p>
                <span>Online luxury shopping</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <span className="contact-eyebrow">SEND AN ENQUIRY</span>
          <h2>How can we help?</h2>
          <p className="contact-form-description">
            Fill in the form below and let us know what you need.
          </p>

          {submitted && (
            <div className="contact-success" role="status">
              Thank you! Your form was submitted locally.
              No email has been sent yet.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label>
              Subject
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Choose a subject</option>
                <option value="Order enquiry">Order enquiry</option>
                <option value="Product question">Product question</option>
                <option value="Shipping">Shipping and delivery</option>
                <option value="Returns">Returns and refunds</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label>
              Your Message
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="contact-submit">
              Send Message <Send size={17} />
            </button>
          </form>

          <p className="contact-privacy">
            Your details should be handled with care and privacy.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Contact;