'use client';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StudentForm from '../../../../components/forms/StudentForm';
import { getSingleStudent } from '../../../../api/studentData';

export default function EditStudent({ params }) {
  const [editFormData, setEditFormData] = useState({});

  const { firebaseKey } = params;

  useEffect(() => {
    getSingleStudent(firebaseKey).then(setEditFormData);
  }, [firebaseKey]);

  return (
    <div className="d-flex justify-content-center m-5" style={{ backgroundColor: '#222' }}>
      <StudentForm obj={editFormData} />
    </div>
  );
}

EditStudent.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
