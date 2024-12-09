'use client';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import AddButton from '../../../components/buttons/AddButton';
import { getGrades } from '../../../api/gradesData';

export default function GradeBook({ params }) {
  const { firebaseKey } = params;

  const [grades, setGrades] = useState([]);

  useEffect(() => {
    getGrades(firebaseKey).then(setGrades);
  }, []);

  return (
    <div className="d-flex flex-column my-4 text-center">
      <h1>Grades</h1>

      <div className="d-flex flex-row flex-wrap justify-content-center my-4 gradebook-container mb-3">
        {/* TODO: Grid setup for grade book */}
        <div className="container text-center">
          {/* Column headers */}
          <div className="row column-headers mt-5">
            <p className="col">Student</p>
            <p className="col">Homework</p>
            <p className="col">Classwork</p>
            <p className="col">Quizzes</p>
            <p className="col">Projects</p>
            <p className="col">Exams</p>
          </div>

          {/* Student's grades */}
          {grades.map((grade) => (
            <div className="row student-grades" key={grade.firebaseKey}>
              {/* TODO: Figure out how to render the student name */}
              <p className="col">
                {grade.student_first_name} {grade.student_last_name}
              </p>
              <p className="col">--</p>
              <p className="col">--</p>
              <p className="col">--</p>
              <p className="col">--</p>
              <p className="col">--</p>
            </div>
          ))}
        </div>
      </div>

      {/* <AddButton buttonProp="grades" /> */}
    </div>
  );
}

GradeBook.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
