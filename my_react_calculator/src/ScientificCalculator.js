import React, { useState, useEffect } from "react";
import * as math from "mathjs";
import "./ScientificCalculator.css";

function ScientificCalculator() {
  const [buffer, setBuffer] = useState("");
  const [result, setResult] = useState("");
  const [recentCalculations, setRecentCalculations] = useState([]);

  const handleButtonClick = (value) => {
    try {
      let expressionToAdd = "";

      switch (value) {
        case "=":
          const calculatedResult = math.evaluate(buffer);
          setResult(calculatedResult);
          setRecentCalculations((prevCalculations) => [
            { expression: buffer, result: calculatedResult },
            ...prevCalculations,
          ]);
          break;

        case "C":
          setBuffer("");
          setResult("");
          break;

        case "CE":
          setBuffer((prevBuffer) => prevBuffer.slice(0, -1));
          break;

        case "sqrt":
          expressionToAdd = "sqrt(";
          break;

        case "pow":
          expressionToAdd = "^";
          break;

        case "cos":
          expressionToAdd = "cos(";
          break;

        case "sin":
          expressionToAdd = "sin(";
          break;

        case "tan":
          expressionToAdd = "tan(";
          break;

        case "cos⁻¹":
          expressionToAdd = "acos(";
          break;

        case "sin⁻¹":
          expressionToAdd = "asin(";
          break;

        case "tan⁻¹":
          expressionToAdd = "atan(";
          break;

        case "log":
          expressionToAdd = "log(";
          break;

        case "ln":
          expressionToAdd = "ln(";
          break;

        case "exp":
          expressionToAdd = "exp(";
          break;

        case "reset":
          setBuffer("");
          setResult("");
          setRecentCalculations([]);
          break;

        case "pi":
          expressionToAdd = "pi";
          break;

        case "c":
          expressionToAdd = "299792458";
          break;

        case "mu_0":
          expressionToAdd = "1.25663706143592e-06";
          break;

        case "epsilon_0":
          expressionToAdd = "8.854187817e-12";
          break;

        default:
          expressionToAdd = value;
          break;
      }

      setBuffer((prevBuffer) => prevBuffer + expressionToAdd);
    } catch (error) {
      setResult("Error");
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
        {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, "/", "="].map((value) => (
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
        <button onClick={() => handleButtonClick("ln")}>ln</button>
        <button onClick={() => handleButtonClick("exp")}>e</button>
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
    </div>
  );
}

export default ScientificCalculator;
