'use client';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AddButton from '../../../components/buttons/AddButton';
import { getGrades } from '../../../api/gradesData';

export default function GradeBook({ params }) {
  const { firebaseKey } = params;

  const [grades, setGrades] = useState([]);

  useEffect(() => {
    // getGrades(firebaseKey).then(setGrades);

    getGrades(firebaseKey).then((gradesArray) => {
      const copyOfGrades = []; // Need this to concat all filtered arrays that includes the new properties that holds the averages.
      let homeworkAccumulator = 0;
      let classworkAccumulator = 0;
      let quizAccumulator = 0;
      let projectAccumulator = 0;
      let examAccumulator = 0;

      // Filter the results based on assignment category
      const filterByHomework = gradesArray.filter((gradeObj) => gradeObj.assignment_category === 'Homework');
      const filterByClasswork = gradesArray.filter((gradeObj) => gradeObj.assignment_category === 'Classwork');
      const filterByQuizzes = gradesArray.filter((gradeObj) => gradeObj.assignment_category === 'Quiz');
      const filterByProjects = gradesArray.filter((gradeObj) => gradeObj.assignment_category === 'Project');
      const filterByExams = gradesArray.filter((gradeObj) => gradeObj.assignment_category === 'Exam');

      // console.warn('Grades for homework: ', filterByHomework);
      // console.warn('Grades for classwork: ', filterByClasswork);
      // console.warn('Grades for quizzes: ', filterByQuizzes);

      // TODO: Loop through each filtered array to find the scores, add the scores, then render the averages.

      filterByHomework.forEach((gradeObj) => {
        if (gradeObj.score) {
          homeworkAccumulator += gradeObj.score;
          gradeObj.homework_average = homeworkAccumulator; // eslint-disable-line no-param-reassign
          copyOfGrades.push(gradeObj);
        }
      });
      filterByClasswork.forEach((gradeObj) => {
        if (gradeObj.score) {
          classworkAccumulator += gradeObj.score;
          gradeObj.classwork_average = classworkAccumulator; // eslint-disable-line no-param-reassign
          copyOfGrades.push(gradeObj);
        }
      });
      filterByQuizzes.forEach((gradeObj) => {
        if (gradeObj.score) {
          quizAccumulator += gradeObj.score;
          gradeObj.quiz_average = quizAccumulator; // eslint-disable-line no-param-reassign
          copyOfGrades.push(gradeObj);
        }
      });
      filterByProjects.forEach((gradeObj) => {
        if (gradeObj.score) {
          examAccumulator += gradeObj.score;
          gradeObj.exam_average = examAccumulator; // eslint-disable-line no-param-reassign
          copyOfGrades.push(gradeObj);
        }
      });
      filterByExams.forEach((gradeObj) => {
        if (gradeObj.score) {
          projectAccumulator += gradeObj.score;
          gradeObj.project_average = projectAccumulator; // eslint-disable-line no-param-reassign
          copyOfGrades.push(gradeObj);
        }
      });

      // console.warn("Homework score sum: ", homeworkAccumulator);
      // console.warn("Classwork score sum: ", classworkAccumulator);
      // console.warn("Quizzes score sum: ", quizAccumulator);

      setGrades(copyOfGrades);
    });
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
              <p className="col">
                {grade.student_first_name} {grade.student_last_name}
              </p>
              <p className="col">{grade.homework_average === undefined ? '--' : grade.homework_average}</p>
              <p className="col">{grade.classwork_average === undefined ? '--' : grade.classwork_average}</p>
              <p className="col">{grade.quiz_average === undefined ? '--' : grade.quiz_average}</p>
              <p className="col">{grade.project_average === undefined ? '--' : grade.project_average}</p>
              <p className="col">{grade.exam_average === undefined ? '--' : grade.exam_average}</p>
            </div>
          ))}
        </div>
      </div>

      <AddButton buttonProp="grades" />
    </div>
  );
}

GradeBook.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
