import React, { useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const validateInputs = () => {
    if (!firstNumber || !secondNumber) {
      setError('Both fields are required!');
      return false;
    }
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      setError('Please enter a valid number!');
      return false;
    }
    setError(null);
    return true;
  };

  const performOperation = (operation) => {
    if (!validateInputs()) return;

    const firstNum = parseFloat(firstNumber);
    const secondNum = parseFloat(secondNumber);

    switch (operation) {
      case 'add':
        setResult(firstNum + secondNum);
        break;
      case 'subtract':
        setResult(firstNum - secondNum);
        break;
      case 'multiply':
        setResult(firstNum * secondNum);
        break;
      case 'divide':
        setResult(firstNum / secondNum);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter first number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter second number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
      />
      {error && (
        <div style={{ color: 'red' }}>
          Error: {error}
        </div>
      )}
      {result !== null && (
        <div style={{ color: 'green' }}>
          Result: {result}
        </div>
      )}
      <button onClick={() => performOperation('add')}>+</button>
      <button onClick={() => performOperation('subtract')}>-</button>
      <button onClick={() => performOperation('multiply')}>*</button>
      <button onClick={() => performOperation('divide')}>/</button>
    </div>
  );
};

export default Calculator;

