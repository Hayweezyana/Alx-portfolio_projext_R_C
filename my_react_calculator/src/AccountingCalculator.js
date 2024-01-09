import React, { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa";
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
      <div className="social-links">
        <a href="https://wa.me/message/O7KMBSLAJ3WDM1" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/ayotunde-a-940316a8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXIzfOmLrQI6TokQBF2ax2g%3D%3D" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://youtube.com/@ayotundeadeboyeje9160?si=SmBDzN27lvXwgGOf" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
          </a>
          </div>
    </div>
  );
}

export default AccountingCalculator;
