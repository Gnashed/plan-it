'use client';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSingleClassroom } from '../../../../api/classroomData';
import ClassroomForm from '../../../../components/forms/ClassroomForm';

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
