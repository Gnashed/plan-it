'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { getStudentsByClassroomId } from '../../api/studentData';
import { createGrade, updateGrade } from '../../api/gradesData';

// Info to collect from the user
const initialFormState = {
  select_student: '',
  assignment_category: '',
  assignment_name: '',
  score: Number(),
  student_first_name: '',
  student_last_name: '',
  student_id: '',
  classroom_id: '',
};

export default function GradeForm({ obj = initialFormState }) {
  const [formInput, setFormInput] = useState(obj);
  const [students, setStudents] = useState([]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const classroomId = searchParams.get('classroomId');

  useEffect(() => {
    getStudentsByClassroomId(classroomId).then((grades) => {
      setStudents(grades);
      if (obj.firebaseKey) setFormInput(obj);
    });
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (obj.firebaseKey) {
      updateGrade(formInput).then(() => router.push(`/grade/${classroomId}`));
      console.log('This record exist: ', formInput);
    } else {
      const splitStudentName = formInput.select_student.split(' ');
      const findSelectedStudent = students.find((student) => student.first_name === splitStudentName[0] && student.last_name === splitStudentName[1]);

      const payload = {
        ...formInput,
        student_first_name: splitStudentName[0],
        student_last_name: splitStudentName[1],
        classroom_id: classroomId,
        student_id: findSelectedStudent ? findSelectedStudent.firebaseKey : '',
      };
      createGrade(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateGrade(patchPayload).then(() => router.push(`/grade/${classroomId}`));
      });
    }

    // console.log('The data you submitted: ', formInput);
  };

  return (
    <div className="d-flex flex-column justify-content-center text-center my-5 w-75">
      <h1>Grade Form</h1>

      <Form className="my-5" onSubmit={handleSubmit}>
        {/* SELECT Student */}
        <Form.Group controlId="">
          <Form.Label>Select student</Form.Label>
          <Form.Select onChange={handleChange} name="select_student" value={formInput.select_student || ''} required>
            <option value="">Select...</option>
            {students.map((student) => (
              <option key={student.firebaseKey}>
                {student.first_name} {student.last_name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        {/* SELECT Assigment Category */}
        <Form.Group controlId="">
          <Form.Label>Which category?</Form.Label>
          <Form.Select onChange={handleChange} name="assignment_category" value={formInput.assignment_category || ''} required>
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
          {obj.firebaseKey ? 'Update ' : 'Add '} grade
        </Button>
      </Form>
    </div>
  );
}

GradeForm.propTypes = {
  obj: PropTypes.shape({
    select_student: PropTypes.string,
    assignment_category: PropTypes.string,
    assignment_name: PropTypes.string,
    score: PropTypes.number,
    classroom_id: PropTypes.string,
    student_first_name: PropTypes.string,
    student_last_name: PropTypes.string,
    student_id: PropTypes.string,
    date: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};
