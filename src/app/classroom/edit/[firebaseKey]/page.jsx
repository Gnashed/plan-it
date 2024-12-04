'use client';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSingleClassroom } from '../../../../api/classroomData';
import ClassroomForm from '../../../../components/forms/ClassroomForm';

export default function EditClassroom({ params }) {
  const [editFormData, setEditFormData] = useState({});

  const { firebaseKey } = params;
  // console.log(editFormData);

  useEffect(() => {
    getSingleClassroom(firebaseKey).then(setEditFormData);
    // console.log("Saved form data: ", editFormData);
    // console.log("Params: ", params);
    // console.log("FirebaseKey: ", firebaseKey);
  }, [firebaseKey]);

  return (
    <div className="d-flex justify-content-center m-5" style={{ backgroundColor: '#222' }}>
      <ClassroomForm obj={editFormData} />
    </div>
  );
}

EditClassroom.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
