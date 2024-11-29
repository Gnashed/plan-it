import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export default function StudentCard({ studentObj }) {
  return (
    <Card
      style={{
        width: '18rem',
        backgroundColor: '#222222',
        color: '#fff',
      }}
      className="text-center m-3"
    >
      <Card.Body>
        <Card.Title>
          {studentObj.first_name} {studentObj.last_name}
        </Card.Title>

        <Card.Text>Grade {studentObj.grade_level}</Card.Text>
        {/* TODO: Stretch Goal */}
        <Card.Text>Average Grade</Card.Text>
        {/* TODO: Attendance is stretch goal */}
        <Card.Text>Attendance</Card.Text>

        {/* TODO: These two are for stretch goals */}
        <Card.Link href="#">Mark attendance</Card.Link>
        <Card.Link href="#">View</Card.Link>
        <Card.Link href={`/student/edit/${studentObj.firebaseKey}`}>Edit</Card.Link>
      </Card.Body>
    </Card>
  );
}

StudentCard.propTypes = {
  studentObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    grade_level: PropTypes.string,
    average_grade: PropTypes.number,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
