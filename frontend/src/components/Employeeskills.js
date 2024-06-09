import React from 'react';
import { Typography, Box } from '@mui/material';

const EmployeeSkills = ({ skills }) => {
  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Skills:
      </Typography>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </Box>
  );
};

export default EmployeeSkills;