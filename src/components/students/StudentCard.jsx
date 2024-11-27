import React from 'react';
import Card from 'react-bootstrap/Card';

export default function StudentCard() {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Student Name</Card.Title>

          <Card.Text>Grade level</Card.Text>
          <Card.Text>Average Grade</Card.Text>
          <Card.Text>Attendance</Card.Text>

          {/* TODO: These two are for stretch goals */}
          <Card.Link href="#">Mark attendance</Card.Link>
          <Card.Link href="#">Details</Card.Link>
        </Card.Body>
      </Card>
  );
}
