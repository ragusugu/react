import React, { useState } from 'react';
import './Task1css.css';

// Example of a Table Component
const TableComponent = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>sugan</td>
          <td>sugan@gmail.com</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Rose</td>
          <td>Rose@gmail.com</td>
        </tr>
      </tbody>
    </table>
  );
};

// Example of a Form Component
const FormComponent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <br />
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Email:
        <br />
        <input type="email" name="email" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

// Example of Form Elements
const FormElements = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>
        Type something:
        <br />
        <br />
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <p>You typed: <br /><br /> {inputValue}</p>
    </div>
  );
};

const AddButton = ({ onClick }) => (
  <button onClick={onClick}>Open Task 2</button>
);
const openTask2 = () => {
  // Open the Add component in a new tab
  window.open('/add', '_blank');
};
// Example App Component
const App = () => {
  // const openTask2 = () => {
  //   window.open('/Task2/add', '_blank');
  // };

  return (
    <div>
      <TableComponent />
      <br />
      <FormComponent />
      <br />
      <FormElements />
      <br />
      <AddButton onClick={openTask2} />
    </div>
  );
};

export default App;