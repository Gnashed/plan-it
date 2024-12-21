'use client';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSingleGrade } from '../../../../api/gradesData';
import GradeForm from '../../../../components/forms/GradeForm';

export default function EditGradeForm({ params }) {
  const { firebaseKey } = params;

  const [studentGradeData, setStudentGradeData] = useState({});

  useEffect(() => {
    getSingleGrade(firebaseKey).then(setStudentGradeData);
    console.log(studentGradeData);
  }, [firebaseKey]);

  return (
    <div className="d-flex flex-column justify-content-center text-center my-5 w-75">
      <GradeForm obj={studentGradeData} />
    </div>
  );
}

EditGradeForm.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
