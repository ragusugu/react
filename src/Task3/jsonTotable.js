import React from 'react';
import './j2t.css';

const AddButton = ({ onClick }) => (
  <button onClick={onClick}>Open Task 4</button>
);
const openTask4 = () => {
  window.open('/weather', '_blank');
};
const JsonTable = () => {
  const jsonData = [
    { "name": "Name1", "department": "Engg", "dob": "18/12/2000" },
    { "name": "Name2", "department": "Engg", "dob": "18/12/2000" },
    { "name": "Name3", "department": "Engg", "dob": "18/12/2000" },
    { "name": "Name4", "department": "Engg", "dob": "18/12/2000" },
    { "name": "Name5", "department": "Engg", "dob": "18/12/2000" }
  ];

  return (
    <div>
      <h2>JSON Data in HTML Table</h2>
      <table className="json-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.department}</td>
              <td>{item.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddButton onClick={openTask4} />      
    </div>
  );
};

export default JsonTable;
