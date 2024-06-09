import React from 'react';
import { useRouter } from 'next/router';
import Employee from '../../components/Employee';
import EmployeeSkills from '../../components/Employeeskills';

const EmployeeProfile = ({ employee, skills }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div>
      <Employee employee={employee} />
      <EmployeeSkills skills={skills} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;

  try {
    const employeeResponse = await fetch(`http://localhost:8000/employees/${id}`);
    const employee = await employeeResponse.json();

    const skillsResponse = await fetch(`http://localhost:8000/employees/${id}/skills`);
    const { skills } = await skillsResponse.json();

    return {
      props: {
        employee,
        skills,
      },
    };
  } catch (error) {
    console.error('Error fetching employee data:', error);
    return {
      props: {
        employee: null,
        skills: [],
      },
    };
  }
}

export default EmployeeProfile;