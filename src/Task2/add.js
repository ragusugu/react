
import React, { useState } from 'react';
import './add.css'



const AddButton = ({ onClick }) => (
  <button onClick={onClick}>Open Task 3</button>
);
const openTask3 = () => {
  window.open('/j2t', '_blank');
};
const App1 = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  const submit1 = () => {
    // Get the values from the input fields, defaulting to 0 if no value is provided
    const num1 = parseFloat(number1) || 0;
    const num2 = parseFloat(number2) || 0;

    // Perform addition
    const additionResult = num1 + num2;

    // Set the result in the state
    setResult(additionResult);
  };

  return (
    <div>
     <h1>Addition</h1>
      <form>
        <label>Number 1</label>
        <input
          type="text"
          name="number1"
          placeholder="Enter number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
        <br />
        <br />
        <label>Number 2</label>
        <input
          type="text"
          name="number2"
          placeholder="Enter number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
        <br />
        <button
          type="button"
          className="btn btn-info"
          onClick={() => submit1()}
        >
          Submit
        </button>
      </form>
      <br />
      {result !== null && <p>Result: {result}</p>}
      <AddButton onClick={openTask3} />
    </div>
  );
};

export default App1;

