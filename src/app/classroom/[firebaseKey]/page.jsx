'use client';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AddButton from '../../../components/buttons/AddButton';
import StudentCard from '../../../components/students/StudentCard';
import { getStudentsByClassroomId } from '../../../api/studentData';

export default function ViewClassroom({ params }) {
  const { firebaseKey } = params;
  const [students, setStudents] = useState([]);

  const fetchAllStudents = () => {
    getStudentsByClassroomId(firebaseKey).then(setStudents);
  };

  useEffect(() => {
    fetchAllStudents();
  }, []);

  return students.length === 0 ? (
    <div className="d-flex flex-column align-items-center">
      <h1 className="text-center my-5">Classroom</h1>
      <p>It&apos;s looking pretty empty here. Ready to add a student?</p>

      <AddButton buttonProp="student" />
    </div>
  ) : (
    <div className="d-flex flex-column">
      <h1 className="text-center my-4">Classroom</h1>

      <div className="d-flex flex-row flex-wrap my-5 justify-content-center">
        {/* TODO: Render dynamically */}
        {students.map((student) => (
          <StudentCard key={student.firebaseKey} studentObj={student} onUpdate={fetchAllStudents} />
        ))}
      </div>
    </div>
  );
  // <div className="d-flex flex-column">
  //   <h1 className="text-center my-4">Classroom</h1>

  //   <div className="d-flex flex-row flex-wrap my-5 justify-content-center">
  //     {/* TODO: Render dynamically */}
  //     {students.map((student) => (
  //       <StudentCard key={student.firebaseKey} studentObj={student} onUpdate={fetchAllStudents} />
  //     ))}
  //   </div>
  // </div>
}

ViewClassroom.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
