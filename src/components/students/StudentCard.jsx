import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export default function StudentCard({ studentObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
          {studentObj.first_name} {studentObj.last_name}
        </Card.Title>

        <Card.Text>Grade level {studentObj.grade_level}</Card.Text>
        <Card.Text>Average Grade {studentObj.average_grade}</Card.Text>
        {/* TODO: Attendance is stretch goal */}
        <Card.Text>Attendance</Card.Text>

        {/* TODO: These two are for stretch goals */}
        <Card.Link href="#">Mark attendance</Card.Link>
        <Card.Link href="#">Details</Card.Link>
      </Card.Body>
    </Card>
  );
}

StudentCard.propTypes = {
  studentObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    grade_level: PropTypes.number,
    average_grade: PropTypes.number,
  }).isRequired,
};
