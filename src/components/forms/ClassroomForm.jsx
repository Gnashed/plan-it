'use client';

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ClassroomForm() {
  return (
    <div className="d-flex flex-column justify-content-center text-center my-5">
      <h1>Classroom Form</h1>

      <Form className="my-5">
        {/* Classroom Name */}
        <Form.Group>
          <Form.Label>Give your classroom a name:</Form.Label>
          <Form.Control type="text" placeholder="1st Period English" required />
        </Form.Group>

        {/* Subject */}
        <Form.Group>
          <Form.Label>Which subject?</Form.Label>
          <Form.Control type="text" placeholder="4th Grade English" required />
        </Form.Group>

        {/* Grade Level */}
        <Form.Group>
          <Form.Label>Grade level: </Form.Label>
          <Form.Select required>
            <option value="">select ...</option>
            <option value="K">Kindergarten</option>
            <option value="1">1st grade</option>
            <option value="2">2nd grade</option>
            <option value="3">3rd grade</option>
            <option value="4">4th grade</option>
            <option value="5">5th grade</option>
            <option value="6">6th grade</option>
            <option value="7">7th grade</option>
            <option value="8">8th grade</option>
            <option value="9">9th grade</option>
            <option value="10">10th grade</option>
            <option value="11">11th grade</option>
            <option value="12">12th grade</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="success" className="my-5">
          Create classroom
        </Button>
      </Form>
    </div>
  );
}
