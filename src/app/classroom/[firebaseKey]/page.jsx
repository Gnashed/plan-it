'use client';

import { useState, useEffect } from 'react';
import StudentCard from '../../../components/students/StudentCard';
// import { useAuth } from '../../../utils/context/authContext';
import getStudents from '../../../api/studentData';

export default function Page() {
  // const { user } = useAuth();
  const [students, setStudents] = useState([]);

  const getAllStudents = () => {
    getStudents('-OCdhp_JmbDGWSUYn9Fw').then(setStudents);
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <div className="d-flex flex-column">
      <h1 className="text-center my-4">Classroom</h1>

      <div className="d-flex flex-row flex-wrap my-5 justify-content-center">
        {/* TODO: Render dynamically */}
        {students.map((student) => (
          <StudentCard key={student.firebaseKey} studentObj={student} />
        ))}
      </div>
    </div>
  );
}
