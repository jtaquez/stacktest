import React from 'react';

const EmployeeSkills = ({ skills }) => {
  return (
    <div>
      <h3>Skills:</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeSkills;
