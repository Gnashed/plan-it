'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Modal } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { useAuth } from '../utils/context/authContext';
import getClassrooms from '../api/classroomData';

function Home() {
  const { user } = useAuth();

  // React Bootstrap modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    getClassrooms(user.uid).then(setClassrooms);
  });

  // TODO: Refactor to render either a form if user doesn't have any created classrooms or render the dashboard.
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        margin: '0 auto',
      }}
    >
      <h1 className="mb-5">Welcome, {user.displayName}!</h1>

      <div className="container row">
        <div className="col">
          <Link href="/classroom/new" passHref>
            Create classroom
          </Link>
        </div>
        <div className="col">
          <Button variant="primary" onClick={handleShow}>
            View classroom
          </Button>

          <Modal show={show} onHide={handleClose} data-bs-theme="dark">
            <Modal.Header>
              <Modal.Title>Select a classroom to view</Modal.Title>
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
                      <Link href={`/classroom/${classroom.firebaseKey}`}>{classroom.subject}</Link>
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
        <div className="col">
          <Link href="/classroom/manage" passHref>
            Manage classrooms
          </Link>
        </div>
        {/* <div className="col">
          <button type="button">Add a student</button>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
