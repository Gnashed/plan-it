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
    // console.log("Params: ", params);
    // console.log("FirebaseKey: ", firebaseKey);
  }, [firebaseKey]);

  return <ClassroomForm obj={editFormData} />;
}

EditClassroom.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
