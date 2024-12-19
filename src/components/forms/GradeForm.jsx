'use client';

import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
// import { createGrade, updateGrade } from '../../api/gradesData';

// Info to collect from the user
const initialFormState = {
  assignment_category: '',
  assignment_name: '',
  score: Number(),
};

export default function GradeForm({ obj = initialFormState }) {
  const [formInput, setFormInput] = useState(obj);

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('You clicked the submit button');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="d-flex flex-column justify-content-center text-center my-5 w-75">
      <h1>Grade Form</h1>

      <Form className="my-5" onSubmit={handleSubmit}>
        {/* SELECT Student */}
        <Form.Group controlId="">
          <Form.Label>Select student</Form.Label>
          <Form.Select onChange={handleChange} name="" value={formInput.classroom_name || ''} required>
            <option value="">Select...</option>
            <option>Student 1</option>
            <option>Student 2</option>
            <option>Student 3</option>
          </Form.Select>
        </Form.Group>

        {/* SELECT Assigment Category */}
        <Form.Group controlId="">
          <Form.Label>Which category?</Form.Label>
          <Form.Select onChange={handleChange} name="" value={formInput.classroom_name || ''} required>
            <option value="">Select...</option>
            <option>Homework</option>
            <option>Classwork</option>
            <option>Quiz</option>
            <option>Project</option>
            <option>Exam</option>
          </Form.Select>
        </Form.Group>

        {/* INPUT Assignment name */}
        <Form.Group>
          <Form.Label>Assignment name</Form.Label>
          <Form.Control type="text" name="assignment_name" placeholder="Weekly Review - unit 3" value={formInput.assignment_name || ''} onChange={handleChange} required />
        </Form.Group>

        {/* INPUT Score */}
        <Form.Group>
          <Form.Label>Score</Form.Label>
          <Form.Control type="number" name="score" placeholder="enter a number" value={formInput.score || ''} onChange={handleChange} required />
        </Form.Group>

        {/* SUBMIT BUTTON  */}
        <Button type="submit" variant="success" className="my-5">
          {obj.firebaseKey ? 'Update ' : 'Create '} grade
        </Button>
      </Form>
    </div>
  );
}

// TODO: Remember this should match the same structure that Firebase is expecting the obj to be.
GradeForm.propTypes = {
  obj: PropTypes.shape({}),
};
