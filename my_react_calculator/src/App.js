import React, { useState } from "react";
import ScientificCalculator from "./ScientificCalculator";
import AccountingCalculator from "./AccountingCalculator";
import "./App.css"; // Main CSS file

function App() {
  const [isScientific, setIsScientific] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    // For simplicity, assume the login is successful
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
  };

  return (
    <div className="app">
      {!isLoggedIn ? (
        <div className="login-form">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <>
          <div className="calculator-switch">
            <button onClick={() => setIsScientific(true)}>Scientific</button>
            <button onClick={() => setIsScientific(false)}>Accounting</button>
          </div>

          {isScientific ? <ScientificCalculator /> : <AccountingCalculator />}
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;
