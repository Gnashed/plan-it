import React from 'react';
import PropTypes from 'prop-types';

export default function ViewStudentGrades({ params }) {
  const { firebaseKey } = params;

  return (
    <div className="d-flex flex-column my-4 text-center">
      <h1>View Grades for {firebaseKey}</h1>
    </div>
  );
}

ViewStudentGrades.propTypes = {
  params: PropTypes.shape({
    firebaseKey: PropTypes.string.isRequired,
  }).isRequired,
};
