'use client';

import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../utils/context/authContext';
import { getClassrooms } from '../../api/classroomData';
// import { createStudent, updateStudent, getSingleStudent } from "../../api/studentData";

const initialFormState = {
  first_name: '',
  last_name: '',
  grade_level: '',
};

export default function StudentForm({ obj = initialFormState }) {
  // const router = useRouter();
  const { user } = useAuth();

  const [formData, setFormData] = useState(obj);
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    getClassrooms(user.uid).then(setClassrooms);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="d-flex flex-column justify-content-center text-center my-5">
      <h1>Student Form</h1>

      <Form onSubmit={handleSubmit}>
        {/* SELECT Classroom */}
        <Form.Group>
          <Form.Label>Select classroom</Form.Label>
          <Form.Select onChange={handleChange} value={classrooms.classroom_name || ''} name="classroom" required>
            <option value="">... </option>
            {classrooms.map((classroom) => (
              <option key={classroom.firebaseKey} value={classroom}>
                {classroom.classroom_name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        {/* First Name */}
        <Form.Group>
          <Form.Label>First name</Form.Label>
          <Form.Control type="textbox" onChange={handleChange} placeholder="..." value={formData.first_name || ''} name="first_name" required />
        </Form.Group>

        {/* Last Name */}
        <Form.Group>
          <Form.Label>Last name</Form.Label>
          <Form.Control type="textbox" onChange={handleChange} placeholder="..." value={formData.last_name || ''} name="last_name" required />
        </Form.Group>

        {/* SELECT Grade Level */}
        <Form.Group>
          <Form.Label>Grade level</Form.Label>
          <Form.Select onChange={handleChange} value={formData.grade_level || ''} name="grade_level" required>
            <option value="">select a grade ...</option>
            <option>Kindergarden</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="primary">
          Add student
        </Button>
      </Form>
    </div>
  );
}

StudentForm.propTypes = {
  obj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    grade_level: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
