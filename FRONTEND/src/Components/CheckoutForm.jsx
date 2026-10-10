import React from "react";

function CheckoutForm({ formData, onChange }) {
  return (
    <form className="checkout-form" id="checkout-form">
      <h2>Contact Information</h2>

      <div className="checkout-field">
        <label htmlFor="email">Email Address *</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={onChange}
          required
        />
      </div>

      <h2>Delivery Address</h2>

      <div className="checkout-field">
        <label htmlFor="fullName">Full Name *</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Your full name"
          value={formData.fullName}
          onChange={onChange}
          required
        />
      </div>

      <div className="checkout-field">
        <label htmlFor="phone">Phone Number *</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="e.g. 082 123 4567"
          value={formData.phone}
          onChange={onChange}
          required
        />
      </div>

      <div className="checkout-field">
        <label htmlFor="address">Street Address *</label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="House number and street"
          value={formData.address}
          onChange={onChange}
          required
        />
      </div>

      <div className="checkout-field">
        <label htmlFor="suburb">Suburb *</label>
        <input
          id="suburb"
          name="suburb"
          type="text"
          placeholder="Your suburb"
          value={formData.suburb}
          onChange={onChange}
          required
        />
      </div>

      <div className="checkout-two-columns">
        <div className="checkout-field">
          <label htmlFor="city">City *</label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={onChange}
            required
          />
        </div>

        <div className="checkout-field">
          <label htmlFor="province">Province *</label>
          <select
            id="province"
            name="province"
            value={formData.province}
            onChange={onChange}
            required
          >
            <option value="">Select province</option>
            <option value="Eastern Cape">Eastern Cape</option>
            <option value="Free State">Free State</option>
            <option value="Gauteng">Gauteng</option>
            <option value="KwaZulu-Natal">KwaZulu-Natal</option>
            <option value="Limpopo">Limpopo</option>
            <option value="Mpumalanga">Mpumalanga</option>
            <option value="Northern Cape">Northern Cape</option>
            <option value="North West">North West</option>
            <option value="Western Cape">Western Cape</option>
          </select>
        </div>
      </div>

      <div className="checkout-field">
        <label htmlFor="postalCode">Postal Code *</label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          inputMode="numeric"
          placeholder="Postal code"
          value={formData.postalCode}
          onChange={onChange}
          required
        />
      </div>

      <div className="checkout-field">
        <label htmlFor="deliveryNotes">Delivery Notes (Optional)</label>
        <textarea
          id="deliveryNotes"
          name="deliveryNotes"
          rows="3"
          placeholder="Any special instructions for delivery?"
          value={formData.deliveryNotes}
          onChange={onChange}
        />
      </div>

      <div className="checkout-field">
        <label htmlFor="deliveryMethod">Delivery Method *</label>
        <select
          id="deliveryMethod"
          name="deliveryMethod"
          value={formData.deliveryMethod}
          onChange={onChange}
          required
        >
          <option value="standard">Standard Delivery</option>
          <option value="express">Express Delivery</option>
        </select>
      </div>
    </form>
  );
}

export default CheckoutForm;