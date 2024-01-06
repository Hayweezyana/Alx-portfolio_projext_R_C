import React, { useState } from "react";
import "./LoginPage.css"; // Login page CSS

function LoginPage({ handleLogin, toggleSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

    const handleButtonClick = () => {
    // Here you can add your authentication logic
    // For simplicity, let's assume the login is successful if both username and password are non-empty
    console.log("Login button clicked");
    if (username && password) {
      handleLogin(); // Notify the App component that the user is logged in
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <div className="input-container">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button onClick={handleButtonClick}>Login</button>
      <p>
        Don't have an account?{" "}
        <span className="link" onClick={toggleSignup}>
          Sign up
        </span>
      </p>
    </div>
  );
}

export default LoginPage;
