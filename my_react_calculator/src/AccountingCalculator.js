import React, { useState } from "react";
import * as math from "mathjs";
import "./AccountingCalculator.css";

function AccountingCalculator() {
  const [display, setDisplay] = useState("");
  const [memory, setMemory] = useState(0);
  const [shouldClear, setShouldClear] = useState(false);

  const handleButtonClick = (value) => {
    if (shouldClear) {
      // If shouldClear is true, clear the display
      setDisplay("");
      setShouldClear(false);
    }

    switch (value) {
      case "=":
        try {
          const result = math.evaluate(display);
          setDisplay(result.toString());
          setShouldClear(true);
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
        setShouldClear(true);
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
