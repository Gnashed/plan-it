'use client';

// import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
// import getClassrooms from '../api/classroomData';

function Home() {
  const { user } = useAuth();

  // const [classrooms, setClassrooms] = useState([]);

  // const getAllClassrooms = () => {
  //   getClassrooms(user.uid).then(setClassrooms);
  // }

  // useEffect(() => {
  //   getAllClassrooms();
  // });

  // TODO: Refactor to render either a form if user doesn't have any created classrooms or render the dashboard.
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome, {user.displayName}!</h1>
    </div>
  );
}

export default Home;
