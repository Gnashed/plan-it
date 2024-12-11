'use client';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AddButton from '../../../components/buttons/AddButton';
import { getGrades } from '../../../api/gradesData';

export default function GradeBook({ params }) {
  const { firebaseKey } = params;

  const [categories, setCategories] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getGrades(firebaseKey).then((gradesData) => {
      // Extract unique assignment categories
      const categoriesSet = [...new Set(gradesData.map((grade) => grade.assignment_category))];
      setCategories(categoriesSet);
      console.log('Categories: ', categoriesSet);

      // Group grades by student_id
      // acc = obj that is being built as we iterate.
      // grade = the current grade object we're iterating through.
      const groupedByStudent = gradesData.reduce((acc, grade) => {
        // If acc doesn't already exist as an entry for the current grade.student_id, create a new object for the student and add some values to it.
        if (!acc[grade.student_id]) {
          acc[grade.student_id] = {
            student_id: grade.student_id,
            student_name: `${grade.student_first_name} ${grade.student_last_name}`,
            grades: {},
          };
          console.log('acc obj: ', acc);
        }

        // Add grades under the correct category
        if (!acc[grade.student_id].grades[grade.assignment_category]) {
          // In the student's grades object, if grade.assignment_category doesn't exist, initialize it to zero.
          acc[grade.student_id].grades[grade.assignment_category] = 0;
        }
        // Add the grade.score to the current assignment_category in the student’s grades.
        acc[grade.student_id].grades[grade.assignment_category] += grade.score;

        // So that acc can be used in the next loop.
        return acc;
      }, {});

      setStudents(Object.values(groupedByStudent));
      console.log('Grades by student', groupedByStudent);
    });
  }, [firebaseKey]);

  return (
    <div className="d-flex flex-column my-4 text-center">
      <h1>Grades</h1>

      <div className="d-flex flex-row flex-wrap justify-content-center my-4 gradebook-container mb-3">
        <div className="container text-center">
          {/* Column Headers */}
          <div className="row column-headers mt-5">
            <p className="col">Student</p>
            {categories.map((category) => (
              <p key={category} className="col">
                {category}
              </p>
            ))}
          </div>

          {/* Student Rows */}
          {students.map((student) => (
            <div className="row student-grades" key={student.student_id}>
              <p className="col">{student.student_name}</p>
              {categories.map((category) => (
                <p key={`${student.student_id}_${category}`} className="col">
                  {student.grades[category] || '--'}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <AddButton buttonProp="grades" />
    </div>
  );
}

GradeBook.propTypes = {
  params: PropTypes.shape({
    firebaseKey: PropTypes.string.isRequired,
  }).isRequired,
};
