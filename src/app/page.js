'use client';

import { useAuth } from '../utils/context/authContext';
import ClassroomForm from '../components/forms/ClassroomForm';

function Home() {
  const { user } = useAuth();

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
      <ClassroomForm />
    </div>
  );
}

export default Home;
