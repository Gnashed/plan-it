'use client';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { getGrades } from '../../../api/gradesData';

export default function GradeBook({ params }) {
  // The classroom id
  const { firebaseKey } = params;
  const router = useRouter();

  const [categories, setCategories] = useState([]);
  const [students, setStudents] = useState([]);

  // Added a search param so I can access the firebaseKey on the destination page (GradeForm.jsx).
  const handleClick = () => {
    router.push(`/grade/new/?classroomId=${firebaseKey}`);
  };

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
          // In the student's grades object, if grade.assignment_category doesn't exist, initialize it.
          acc[grade.student_id].grades[grade.assignment_category] = {
            totalScore: 0,
            count: 0,
            average: 0,
          };
        }

        // Update total score and count
        const categoryData = acc[grade.student_id].grades[grade.assignment_category];
        categoryData.totalScore += grade.score;
        categoryData.count += 1;

        // Calculate the average.
        categoryData.average = categoryData.totalScore / categoryData.count;

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
              <p className="col">
                <Link href={`/grade/student/${student.student_id}`} passHref>
                  {student.student_name}
                </Link>
              </p>
              {categories.map((category) => (
                <p key={`${student.student_id}_${category}`} className="col">
                  {student.grades[category]?.average?.toFixed(1) || '--'}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Button variant="warning" onClick={handleClick}>
        Add a grade
      </Button>
    </div>
  );
}

GradeBook.propTypes = {
  params: PropTypes.shape({
    firebaseKey: PropTypes.string.isRequired,
  }).isRequired,
};
