'use client';

import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import { updateClassroom, createClassroom } from '../../api/classroomData';

const initialFormState = {
  classroom_name: '',
  grade_level: '',
  subject: '',
};

export default function ClassroomForm({ obj = initialFormState }) {
  const [formInput, setFormInput] = useState(obj);

  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // console.log('Obj received: ', obj);
    // console.log('Firebase Key: ', obj.firebaseKey);
    // console.log(obj);
    if (obj.firebaseKey) {
      console.log('Updating formInput with obj: ', obj);
      setFormInput(obj);
    }
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // TODO: Finish adding logic to submit the form.
  const handleSubmit = (e) => {
    e.preventDefault();

    if (obj.firebaseKey) {
      updateClassroom(formInput).then(() => router.push(`/classroom/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, teacher_id: user.uid };
      createClassroom(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateClassroom(patchPayload).then(() => router.push(`/classroom/manage/`));
      });
    }

    console.warn(formInput);
  };

  return (
    <div className="d-flex flex-column justify-content-center text-center my-5">
      <h1>Classroom Form</h1>

      <Form className="my-5" onSubmit={handleSubmit}>
        {/* Classroom Name */}
        <Form.Group controlId="">
          <Form.Label>Give your classroom a name:</Form.Label>
          <Form.Control type="textbox" name="classroom_name" placeholder="..." value={formInput.classroom_name || ''} onChange={handleChange} required />
        </Form.Group>

        {/* Subject */}
        <Form.Group controlId="">
          <Form.Label>Which subject?</Form.Label>
          <Form.Control type="textbox" name="subject" placeholder="..." value={formInput.subject || ''} onChange={handleChange} required />
        </Form.Group>

        {/* SELECT Grade Level */}
        <Form.Group controlId="">
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
    teacher_id: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};
