import React from 'react';

const Employee = ({ employee }) => {
  return (
    <div>
      <h2>{employee.name}</h2>
      <p>Position: {employee.position}</p>
      <img src={employee.avatar} alt={employee.name} />
    </div>
  );
};

export default Employee;

