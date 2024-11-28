'use client';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ClassroomForm from '../../../../components/forms/ClassroomForm';
import { getSingleClassroom } from '../../../../api/classroomData';

export default function EditClassroom({ params }) {
  const { firebaseKey } = params;
  const [editFormData, setEditFormData] = useState({});

  // TODO: GET single classroom by id, set form data. Pass in id in dependency array.
  useEffect(() => {
    getSingleClassroom(firebaseKey).then(setEditFormData);
  }, [firebaseKey]);

  return (
    <div>
      <ClassroomForm obj={editFormData} />
    </div>
  );
}

EditClassroom.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
