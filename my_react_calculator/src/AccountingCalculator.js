import React, { useState } from "react";
import * as math from "mathjs"; // Import the math library

import "./AccountingCalculator.css"; // Create a new CSS file for styling

function AccountingCalculator() {
  const [display, setDisplay] = useState("");
  const [memory, setMemory] = useState(0);

  const handleButtonClick = (value) => {
    switch (value) {
      case "=":
        try {
          const result = math.evaluate(display); // Use mathjs to evaluate expressions
          setDisplay(result.toString());
        } catch (error) {
          setDisplay("Error");
        }
        break;
      case "C":
        setDisplay("");
        break;
      case "CE":
        setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
        break;
      case "M+":
        setMemory((prevMemory) => prevMemory + parseFloat(display));
        break;
      case "M-":
        setMemory((prevMemory) => prevMemory - parseFloat(display));
        break;
      case "MR":
        setDisplay(memory.toString());
        break;
      default:
        setDisplay((prevDisplay) => prevDisplay + value);
        break;
    }
  };

  const calculatorButtons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C", "CE", "M+", "M-",
    "MR"
  ];

  return (
    <div className="accounting-calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {calculatorButtons.map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AccountingCalculator;
