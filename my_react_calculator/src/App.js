// App.js
import React, { useState } from "react";

import  ScientificCalculator  from "./ScientificCalculator.js";
import  AccountingCalculator  from "./AccountingCalculator.js";
import  LoginPage  from "./LoginPage.js";
import  SignupPage  from "./SignupPage.js";
import "./App.css"; // Main CSS file

function App() {
  const [isScientific, setIsScientific] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleCalculatorType = () => {
    setIsScientific((prev) => !prev);
  };

  const toggleSignup = () => {
    setShowSignup((prev) => !prev);
  };

  return (
    <div className="app">
      {!isLoggedIn && (
        <div className="auth-pages">
          {showSignup ? (
            <SignupPage toggleSignup={toggleSignup} />
          ) : (
            <LoginPage
              handleLogin={handleLogin}
              toggleSignup={toggleSignup}
            />
          )}
        </div>
      )}

      {isLoggedIn && (
        <div>
          <div className="calculator-switch">
            <button onClick={toggleCalculatorType}>
              {isScientific ? "Switch to AccountingCalculator" : "Switch to ScientificCalculator"}
            </button>
            <button onClick={handleLogout}>Logout</button>
          </div>

          {isScientific ? (
            <ScientificCalculator />
          ) : (
            <AccountingCalculator />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
