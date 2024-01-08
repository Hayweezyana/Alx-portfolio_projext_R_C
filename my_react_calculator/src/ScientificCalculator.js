import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa";
import * as math from "mathjs";
import "./ScientificCalculator.css";

function ScientificCalculator() {
  const [buffer, setBuffer] = useState("");
  const [result, setResult] = useState("");
  const [recentCalculations, setRecentCalculations] = useState([]);
  const [resetOnNext, setResetOnNext] = useState(false);

  const handleButtonClick = (value) => {
    if (resetOnNext) {
      // Clear the screen if resetOnNext is true
      setBuffer("");
      setResult("");
      setResetOnNext(false);
    }

    if (value === "=") {
      try {
        const calculatedResult = math.evaluate(buffer);
        setResult(calculatedResult);
        setRecentCalculations((prevCalculations) => [
          { expression: buffer, result: calculatedResult },
          ...prevCalculations,
        ]);
        setResetOnNext(true); // Set resetOnNext to true after evaluating an expression
      } catch (error) {
        setResult("Error");
        setResetOnNext(true);
      }
    } else if (value === "C") {
      setBuffer("");
      setResult("");
      setResetOnNext(false);
    } else if (value === "CE") {
      setBuffer((prevBuffer) => prevBuffer.slice(0, -1));
      setResetOnNext(false);
    } else if (value === "sqrt") {
      setResult(math.sqrt(math.evaluate(buffer)));
      setResetOnNext(false);
    } else if (value === "pow") {
      setResult(math.pow(math.evaluate(buffer)));
      setBuffer((prevBuffer) => prevBuffer + "^");
      setResetOnNext(false);
    } else if (value === "cos") {
      setResult(math.cos(math.evaluate(buffer)));
      setBuffer((prevBuffer) => prevBuffer + "cos(");
      setResetOnNext(false);
    } else if (value === "sin") {
      setResult(math.sin(math.evaluate(buffer)));
      setBuffer((prevBuffer) => prevBuffer + "sin(");
      setResetOnNext(false);
    } else if (value === "tan") {
      setResult(math.tan(math.evaluate(buffer)));
      setBuffer((prevBuffer) => prevBuffer + "tan(");
      setResetOnNext(false);
    } else if (value === "cos⁻¹") {
      setResult(math.acos(math.evaluate(buffer)));
      setBuffer((prevBuffer) => prevBuffer + "acos(");
      setResetOnNext(false);
    } else if (value === "sin⁻¹") {
      setResult(math.asin(math.evaluate(buffer)));
      setBuffer((prevBuffer) => prevBuffer + "asin(");
      setResetOnNext(false);
    } else if (value === "tan⁻¹") {
      setResult(math.atan(math.evaluate(buffer)));
      setBuffer((prevBuffer) => prevBuffer + "atan(");
      setResetOnNext(false);
    } else if (value === "log") {
      setResult(math.log(math.evaluate(buffer)));
      setBuffer((prevBuffer) => prevBuffer + "log(");
      setResetOnNext(false);
    } else if (value === "log⁻¹") {
      setResult(math.LOG2E(math.evaluate(buffer)));
      setBuffer((prevBuffer) => prevBuffer + "log2E(");
      setResetOnNext(false);
    } else if (value === "exp") {
      setResult(math.exp(math.evaluate(buffer)));
      setBuffer((prevBuffer) => prevBuffer + "exp(");
      setResetOnNext(false);
    } else if (value === "reset") {
      setBuffer("");
      setResult("");
      setRecentCalculations([]);
    } else if (value === "pi") {
      setBuffer((prevBuffer) => prevBuffer + "3.14159265358979323846");
    } else if (value === "c") {
      setBuffer((prevBuffer) => prevBuffer + "299792458");
    } else if (value === "mu_0") {
      setBuffer((prevBuffer) => prevBuffer + "1.25663706143592e-06");
    } else if (value === "epsilon_0") {
      setBuffer((prevBuffer) => prevBuffer + "8.854187817e-12");
    } else {
      setBuffer((prevBuffer) => prevBuffer + value);
    }
  };

  useEffect(() => {
    // Additional logic if needed
  }, [recentCalculations]);

  return (
    <div className="scientific-calculator">
      <div className="display">
        <div className="buffer">{buffer}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0,".", "/", "="].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        <button onClick={() => handleButtonClick("C")}>C</button>
        <button onClick={() => handleButtonClick("CE")}>CE</button>
        <button onClick={() => handleButtonClick("sqrt")}>√</button>
        <button onClick={() => handleButtonClick("pow")}>^</button>
        <button onClick={() => handleButtonClick("cos")}>cos</button>
        <button onClick={() => handleButtonClick("sin")}>sin</button>
        <button onClick={() => handleButtonClick("tan")}>tan</button>
        <button onClick={() => handleButtonClick("cos⁻¹")}>cos⁻¹</button>
        <button onClick={() => handleButtonClick("sin⁻¹")}>sin⁻¹</button>
        <button onClick={() => handleButtonClick("tan⁻¹")}>tan⁻¹</button>
        <button onClick={() => handleButtonClick("log")}>log</button>
        <button onClick={() => handleButtonClick("log⁻¹")}>log⁻¹</button>
        <button onClick={() => handleButtonClick("exp")}>exp</button>
        <button onClick={() => handleButtonClick("reset")}>Reset</button>
        <button onClick={() => handleButtonClick("pi")}>π</button>
        <button onClick={() => handleButtonClick("c")}>c</button>
        <button onClick={() => handleButtonClick("mu_0")}>μ₀</button>
        <button onClick={() => handleButtonClick("epsilon_0")}>ε₀</button>
        {/* Add buttons for more constants/functions as needed */}
      </div>
      <div className="recent-calculations">
        <h2>Recent Calculations</h2>
        <ul>
          {recentCalculations.map((calculation, index) => (
            <li key={index}>{`${calculation.expression} = ${calculation.result}`}</li>
          ))}
          </ul>

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

export default ScientificCalculator;

