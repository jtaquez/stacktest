"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { Container, Typography, Avatar, Box } from '@mui/material';
import { Radar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register the necessary scales
Chart.register(...registerables);

const EmployeeProfile = () => {
  const params = useParams();
  const [employee, setEmployee] = useState(null);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const { id } = params;
        const employeeResponse = await axios.get(`http://localhost:8000/employees/${id}`);
        const skillsResponse = await axios.get(`http://localhost:8000/employees/${id}/skills`);
        setEmployee(employeeResponse.data);
        setSkills(skillsResponse.data.skills);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching employee data:', error);
        setError('Failed to fetch employee data. Please try again.');
        setLoading(false);
      }
    };

    if (params.id) {
      fetchEmployeeData();
    } else {
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!employee) {
    return <div>Employee not found.</div>;
  }

  const chartData = {
    labels: skills,
    datasets: [
      {
        label: 'Skills',
        data: skills.map(() => Math.random() * 5),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };
    return (
      <Container maxWidth="sm">
        <Box mt={4} display="flex" flexDirection="column" alignItems="center">
          <Avatar alt={employee.name} src={employee.avatar} sx={{ width: 120, height: 120 }} />
          <Typography variant="h4" align="center" gutterBottom>
            {employee.name}
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            {employee.position}
          </Typography>
          <Box mt={4}>
            <Radar data={chartData} />
          </Box>
        </Box>
      </Container>
    );
};

export default EmployeeProfile;