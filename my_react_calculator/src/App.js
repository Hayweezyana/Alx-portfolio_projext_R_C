// App.js
import React, { useState } from "react";
import ScientificCalculator from "./ScientificCalculator";
import AccountingCalculator from "./AccountingCalculator";
import "./App.css"; // Main CSS file

function App() {
  const [isScientific, setIsScientific] = useState(true);

  const toggleCalculatorType = () => {
    setIsScientific((prev) => !prev);
  };

  return (
    <div className="app">
      <div className="calculator-switch">
        <button onClick={toggleCalculatorType}>
          {isScientific ? "Switch to AccountingCalculator" : "Switch to ScientificCalculator"}
        
        </button>
      </div>

      {isScientific ? (
        <ScientificCalculator />
      ) : (
        <AccountingCalculator />
      )}
    </div>
  );
}

export default App;
