'use client';

import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
// import { useRouter } from 'next/navigation';
import deleteClassroomStudentRelationship from '../../api/mergeData';

export default function ClassroomCard({ classroomObj, onUpdate }) {
  // const router = useRouter();

  const deleteClassroomFromView = () => {
    if (window.confirm(`Are you sure you want to delete ${classroomObj.classroom_name}? Deleting this classroom will also delete the students.`)) {
      deleteClassroomStudentRelationship(classroomObj.firebaseKey).then(() => {
        // router.push(`/classroom/manage/`);
        onUpdate();
      });
    }
  };

  return (
    <Card style={{ width: '18rem', backgroundColor: '#222', color: '#fff' }} className="m-3">
      <Card.Body>
        <Card.Title>{classroomObj.classroom_name}</Card.Title>
        <Card.Text>Subject: {classroomObj.subject}</Card.Text>
        <Card.Text>Grade level: {classroomObj.grade_level}</Card.Text>

        <Card.Link href={`/classroom/${classroomObj.firebaseKey}`}>View</Card.Link>
        <Card.Link href={`/classroom/edit/${classroomObj.firebaseKey}`}>Edit</Card.Link>
        <Card.Link onClick={deleteClassroomFromView}>Delete</Card.Link>
      </Card.Body>
    </Card>
  );
}

ClassroomCard.propTypes = {
  classroomObj: PropTypes.shape({
    classroom_name: PropTypes.string,
    subject: PropTypes.string,
    grade_level: PropTypes.number,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
