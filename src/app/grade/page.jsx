'use client';

import { useState, useEffect } from 'react';
// import AddButton from '../../components/buttons/AddButton';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useAuth } from '../../utils/context/authContext';
import { getClassrooms } from '../../api/classroomData';

export default function GradeBook() {
  // For the React Bootsterap modal.
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [classrooms, setClassrooms] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getClassrooms(user.uid).then(setClassrooms);
  }, []);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-center my-4 mb-3">
      <Button variant="warning" onClick={handleShow} className="mt-3">
        Select classroom
      </Button>

      <Modal show={show} onHide={handleClose} data-bs-theme="dark">
        <Modal.Header>
          <Modal.Title>Select classroom</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* TODO: Dropdown goes here */}
          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select ...
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {classrooms.map((classroom) => (
                <Dropdown.Item key={classroom.firebaseKey}>
                  <Link href={`/grade/${classroom.firebaseKey}`}>{classroom.classroom_name}</Link>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
