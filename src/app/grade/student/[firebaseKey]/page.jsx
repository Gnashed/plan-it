'use client';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getGradesByStudentId } from '../../../../api/gradesData';

export default function ViewStudentGrades({ params }) {
  const { firebaseKey } = params;
  const [studentGrades, setStudentGrades] = useState([]);

  useEffect(() => {
    getGradesByStudentId(firebaseKey).then(setStudentGrades);
  }, [firebaseKey]);

  return (
    <div className="d-flex flex-column my-4 text-center">
      <h1>View Grades for {firebaseKey}</h1>

      {studentGrades.map((grade) => (
        <div>
          <p>
            {grade.student_first_name} {grade.student_last_name}
          </p>
          <p>
            {grade.assignment_category} - {grade.assignment_name}
          </p>
          <p>Score: {grade.score}</p>
        </div>
      ))}
    </div>
  );
}

ViewStudentGrades.propTypes = {
  params: PropTypes.shape({
    firebaseKey: PropTypes.string.isRequired,
  }).isRequired,
};
