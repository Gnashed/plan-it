import React from 'react';
import AddButton from '../../components/buttons/AddButton';

export default function GradeBook() {
  return (
    <div className="d-flex flex-column my-4 text-center">
      <h1>Grades</h1>

      <div className="d-flex flex-row flex-wrap justify-content-center my-4 gradebook-container mb-3">
        <div className="row">
          <h4 className="mt-5">Select classroom</h4>
        </div>

        {/* TODO: Grid setup for grade book */}
        <div className="container text-center">
          {/* Column headers */}
          <div className="row mt-5">
            <p className="col">Student</p>
            <p className="col">Homework</p>
            <p className="col">Classwork</p>
            <p className="col">Quizzes</p>
            <p className="col">Projects</p>
            <p className="col">Exams</p>
          </div>

          {/* Student's grades */}
          <div className="row student-grades">
            <p className="col">Student name</p>
            <p className="col">--</p>
            <p className="col">--</p>
            <p className="col">--</p>
            <p className="col">--</p>
            <p className="col">--</p>
          </div>
        </div>
      </div>

      <AddButton buttonProp="grades" />
    </div>
  );
}
