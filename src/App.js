import React, { useState } from "react";
import "./styles.css";

/**
 * Debugging in JavaScript - Exercise 1
 * We have intentionally added some bugs
 * to the VerifyPrimeNumber component.
 * Fix the bugs to make it work.
 * Use debugger/breakpoints for troubleshooting.
 */

export default function App() {
  return <VerifyPrimeNumber />;
}

function VerifyPrimeNumber() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setResult("");
  };

  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  const handleClick = (_) => {
    if (value === "") {
      return setResult("Please enter a number");
    }

    if (!isNaN(value)) {
      const response = isPrime(parseInt(value, 10))
        ? `'${value}' is a prime number`: `'${value}' is not a prime number`;
      debugger;
      setResult(response);
    } else setResult(`'${value}' is not a valid number`);
  };

  return (
    <div className="App">
      <h4 className="heading">Verify prime number</h4>

      <div className="form">
        <input
          type="text"
          className="input"
          placeholder="Enter a number"
          value={value}
          onChange={handleChange}
        />
        <button className="button" onClick={handleClick}>
          Check
        </button>
      </div>

      {!!result && <div className="text">{result}</div>}
    </div>
  );
}
