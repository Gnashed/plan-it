'use client';

import { useState, useEffect } from 'react';
import ClassroomCard from '../../../components/classrooms/ClassroomCard';
import AddButton from '../../../components/buttons/AddButton';
import { getClassrooms } from '../../../api/classroomData';
import { useAuth } from '../../../utils/context/authContext';

export default function Page() {
  const { user } = useAuth();

  const [classrooms, setClassrooms] = useState([]);

  const getAllClassrooms = () => {
    getClassrooms(user.uid).then(setClassrooms);
  };

  useEffect(() => {
    getAllClassrooms();
  }, []);

  return (
    <div className="d-flex flex-column my-4 text-center">
      <h1 className="my-3">Manage Classrooms</h1>

      <div className="d-flex flex-row flex-wrap justify-content-center">
        {classrooms.map((classroom) => (
          <ClassroomCard key={classroom.firebaseKey} classroomObj={classroom} onUpdate={getAllClassrooms} />
        ))}
      </div>

      <AddButton buttonProp="classroom" />
    </div>
  );
}
