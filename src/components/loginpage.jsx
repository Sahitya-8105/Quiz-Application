// src/components/LoginPage.jsx
import React, { useState } from "react";
import "./LoginPage.css"; // Import the CSS file for styling

function LoginPage({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    // Basic email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      setIsLoggedIn(true); // Proceed if the email is valid
    } else {
      window.alert("Please enter a valid email address."); // Show an alert if the email is invalid
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Welcome to the Quiz App</h1>
        <input
          type="email"
          className="login-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
