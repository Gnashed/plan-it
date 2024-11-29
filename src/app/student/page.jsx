'use client';

import { useState, useEffect } from 'react';
import StudentCard from '../../components/students/StudentCard';
import { useAuth } from '../../utils/context/authContext';
import { getAllStudents } from '../../api/studentData';

export default function ViewAllStudents() {
  const [students, setStudents] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getAllStudents(user.uid).then(setStudents);
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center text-center my-5">
      <h1>View all Students</h1>

      <div className="d-flex flex-row flex-wrap justify-content-center my-4">
        {students.map((student) => (
          <StudentCard key={student.firebaseKey} studentObj={student} />
        ))}
      </div>
    </div>
  );
}