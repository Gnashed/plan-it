'use client';

import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';

const initialFormState = {
  classroom_name: '',
  subject: '',
  grade_level: '',
};

export default function ClassroomForm({ obj = initialFormState }) {
  const { user } = useAuth();
  // const { router } = useRouter();
  const [formInput, setFormData] = useState(obj);

  useEffect(() => {
    if (obj.firebaseKey) setFormData(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // TODO: Finish adding logic to submit the form. Get ready to import some promises from /api
  const handleSubmit = (e) => {
    e.preventDefault();

    console.warn(formInput);
  };

  return (
    <div className="d-flex flex-column justify-content-center text-center my-5">
      <h1>Classroom Form</h1>

      <Form className="my-5" onSubmit={handleSubmit}>
        {/* Classroom Name */}
        <Form.Group>
          <Form.Label>Give your classroom a name:</Form.Label>
          <Form.Control type="text" name="classroom_name" placeholder="1st Period English" value={formInput.classroom_name || ''} onChange={handleChange} required />
        </Form.Group>

        {/* Subject */}
        <Form.Group>
          <Form.Label>Which subject?</Form.Label>
          <Form.Control type="text" name="subject" placeholder="4th Grade English" value={formInput.subject} onChange={handleChange} required />
        </Form.Group>

        {/* SELECT Grade Level */}
        <Form.Group>
          <Form.Label>Grade level: </Form.Label>
          <Form.Select onChange={handleChange} name="grade_level" value={formInput.grade_level || ''} required>
            <option value="">select ...</option>
            <option>Kindergarten</option>
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

        {/* SUBMIT BUTTON  */}
        <Button type="submit" variant="success" className="my-5">
          {obj.firebaseKey ? 'Update ' : 'Create '} classroom
        </Button>
      </Form>
    </div>
  );
}

ClassroomForm.propTypes = {
  obj: PropTypes.shape({
    classroom_name: PropTypes.string,
    subject: PropTypes.string,
    grade_level: PropTypes.string,
  }).isRequired,
};
