import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  Mail,
  Phone,
  MapPin,
  Save,
  LogOut,
  ShoppingBag,
} from "lucide-react";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const savedUser = JSON.parse(
    localStorage.getItem("luxoraUser") || "null"
  );

  const savedProfile = JSON.parse(
    localStorage.getItem("luxoraProfile") || "{}"
  );

  const [formData, setFormData] = useState({
    fullName: savedProfile.fullName || savedUser?.fullName || "",
    email: savedProfile.email || savedUser?.email || "",
    phone: savedProfile.phone || "",
    address: savedProfile.address || "",
    suburb: savedProfile.suburb || "",
    city: savedProfile.city || "",
    province: savedProfile.province || "",
    postalCode: savedProfile.postalCode || "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!savedUser) {
      setMessage("Please sign in to manage your profile.");
      return;
    }

    const updatedProfile = {
      ...formData,
      email: savedUser.email,
    };

    localStorage.setItem(
      "luxoraProfile",
      JSON.stringify(updatedProfile)
    );

    localStorage.setItem(
      "luxoraUser",
      JSON.stringify({
        fullName: updatedProfile.fullName,
        email: updatedProfile.email,
      })
    );

    setMessage("Your profile has been saved successfully.");
  };

  const handleLogout = () => {
    localStorage.removeItem("luxoraUser");
    setMessage("");
    navigate("/login");
  };

  if (!savedUser) {
    return (
      <section className="profile-guest">
        <UserRound size={44} strokeWidth={1.2} />

        <p className="profile-eyebrow">YOUR LUXORA ACCOUNT</p>

        <h1>Welcome to your personal space.</h1>

        <p>Please sign in to view and manage your profile.</p>

        <Link to="/login" className="profile-primary-button">
          SIGN IN
        </Link>
      </section>
    );
  }

  return (
    <section className="profile-page">
      <div className="profile-heading">
        <p className="profile-eyebrow">YOUR ACCOUNT</p>

        <h1>My Profile</h1>

        <p>Manage your personal details and delivery information.</p>
      </div>

      <div className="profile-layout">
        <aside className="profile-sidebar">
          <div className="profile-avatar">
            <UserRound size={34} strokeWidth={1.2} />
          </div>

          <h2>{formData.fullName || "LUXORA Customer"}</h2>

          <p>{formData.email}</p>

          <div className="profile-sidebar-divider" />

          <Link to="/profile" className="profile-sidebar-link active">
            <UserRound size={18} />
            My Profile
          </Link>

          <Link to="/orders" className="profile-sidebar-link">
            <ShoppingBag size={18} />
            My Orders
          </Link>

          <button
            type="button"
            className="profile-sidebar-link profile-logout"
            onClick={handleLogout}
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </aside>

        <div className="profile-form-card">
          <div className="profile-card-heading">
            <h2>Personal Information</h2>

            <p>Keep your account details up to date.</p>
          </div>

          {message && (
            <div className="profile-message" role="status">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="profile-fields">
              <div className="profile-field">
                <label htmlFor="fullName">
                  <UserRound size={15} /> Full Name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="profile-field">
                <label htmlFor="email">
                  <Mail size={15} /> Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  readOnly
                />
              </div>

              <div className="profile-field">
                <label htmlFor="phone">
                  <Phone size={15} /> Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 071 234 5678"
                />
              </div>

              <div className="profile-field">
                <label htmlFor="address">
                  <MapPin size={15} /> Street Address
                </label>

                <input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street address"
                />
              </div>

              <div className="profile-field">
                <label htmlFor="suburb">Suburb</label>

                <input
                  id="suburb"
                  name="suburb"
                  value={formData.suburb}
                  onChange={handleChange}
                  placeholder="Your suburb"
                />
              </div>

              <div className="profile-field">
                <label htmlFor="city">City</label>

                <input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your city"
                />
              </div>

              <div className="profile-field">
                <label htmlFor="province">Province</label>

                <select
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
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

              <div className="profile-field">
                <label htmlFor="postalCode">Postal Code</label>

                <input
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Postal code"
                />
              </div>
            </div>

            <div className="profile-form-actions">
              <button
                type="submit"
                className="profile-primary-button"
              >
                <Save size={17} />
                SAVE CHANGES
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;