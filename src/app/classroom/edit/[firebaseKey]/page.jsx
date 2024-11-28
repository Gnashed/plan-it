'use client';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSingleClassroom } from '../../../../api/classroomData';
import ClassroomForm from '../../../../components/forms/ClassroomForm';

export default function EditClassroom({ params }) {
  const { firebaseKey } = params;
  const [editFormData, setEditFormData] = useState({});
  // console.log(editFormData);

  // TODO: GET single classroom by id, set form data. Pass in id in dependency array.
  useEffect(() => {
    getSingleClassroom(firebaseKey).then(setEditFormData);
    // FIXME: Line 17 logs an empty object.
    // console.log(editFormData);
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
