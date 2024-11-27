'use client';

import React from 'react';
import Card from 'react-bootstrap/Card';

export default function ClassroomCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Classroom Name</Card.Title>
        <Card.Text>Grade Level</Card.Text>

        <Card.Link href="#">View</Card.Link>
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
      </Card.Body>
    </Card>
  );
}
