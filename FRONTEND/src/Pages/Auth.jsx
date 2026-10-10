import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import "./Auth.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Your passwords do not match.");
      return;
    }

    if (formData.password.length < 8) {
      alert("Your password must contain at least 8 characters.");
      return;
    }

    const savedUsers = JSON.parse(
      localStorage.getItem("luxoraUsers") || "[]"
    );

    if (isLogin) {
      const user = savedUsers.find(
        (savedUser) =>
          savedUser.email.toLowerCase() === formData.email.toLowerCase() &&
          savedUser.password === formData.password
      );

      if (!user) {
        alert("Invalid email or password. Please try again.");
        return;
      }

      localStorage.setItem(
        "luxoraUser",
        JSON.stringify({
          fullName: user.fullName,
          email: user.email,
        })
      );

      alert("Welcome back to LUXORA!");
      navigate("/");
    } else {
      const emailExists = savedUsers.some(
        (user) =>
          user.email.toLowerCase() === formData.email.toLowerCase()
      );

      if (emailExists) {
        alert("An account with this email already exists.");
        return;
      }

      const newUser = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        password: formData.password,
      };

      savedUsers.push(newUser);

      localStorage.setItem("luxoraUsers", JSON.stringify(savedUsers));

      localStorage.setItem(
        "luxoraUser",
        JSON.stringify({
          fullName: newUser.fullName,
          email: newUser.email,
        })
      );

      alert("Your LUXORA account has been created!");
      navigate("/");
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-image">
        <div className="auth-image-overlay">
          <Link to="/" className="auth-back-home">
            <ArrowLeft size={16} />
            Back to LUXORA
          </Link>

          <div className="auth-image-text">
            <p>THE ART OF ELEGANCE</p>
            <h1>Luxury is in the details.</h1>
            <span>
              Discover timeless pieces made to accompany your
              most beautiful moments.
            </span>
          </div>

          <span className="auth-image-footer">
            LUXORA · TIMELESS LUXURY
          </span>
        </div>
      </div>

      <div className="auth-panel">
        <Link to="/" className="auth-mobile-logo">
          LUXORA
        </Link>

        <div className="auth-form-wrapper">
          <p className="auth-eyebrow">
            {isLogin ? "WELCOME BACK" : "JOIN THE LUXORA WORLD"}
          </p>

          <h2>
            {isLogin ? "Sign in to your account" : "Create your account"}
          </h2>

          <p className="auth-description">
            {isLogin
              ? "Your favourite pieces are waiting for you."
              : "Begin your journey into timeless elegance."}
          </p>

          <div className="auth-tabs">
            <button
              type="button"
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              SIGN IN
            </button>

            <button
              type="button"
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              CREATE ACCOUNT
            </button>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="auth-field">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required={!isLogin}
                  autoComplete="name"
                />
              </div>
            )}

            <div className="auth-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="auth-field">
              <label htmlFor="password">Password</label>

              <div className="auth-password-wrapper">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                  autoComplete={
                    isLogin ? "current-password" : "new-password"
                  }
                />

                <button
                  type="button"
                  className="auth-eye-button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="auth-field">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password again"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required={!isLogin}
                  autoComplete="new-password"
                />
              </div>
            )}

            <button type="submit" className="auth-submit-button">
              {isLogin ? "SIGN IN" : "CREATE ACCOUNT"}
            </button>
          </form>

          <p className="auth-terms">
            By continuing, you agree to our Terms of Service and
            Privacy Policy.
          </p>

          <p className="auth-switch">
            {isLogin ? "New to LUXORA?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Create an account" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Auth;