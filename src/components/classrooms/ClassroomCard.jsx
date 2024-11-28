'use client';

import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export default function ClassroomCard({ classroomObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{classroomObj.classroom_name}</Card.Title>
        <Card.Text>Subject: {classroomObj.subject}</Card.Text>
        <Card.Text>Grade level: {classroomObj.grade_level}</Card.Text>

        <Card.Link href={`/classroom/${classroomObj.firebaseKey}`}>View</Card.Link>
        <Card.Link href={`/classroom/edit/${classroomObj.firebaseKey}`}>Edit</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
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
};