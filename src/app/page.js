'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Modal } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { useAuth } from '../utils/context/authContext';
import { getClassrooms } from '../api/classroomData';

function Home() {
  const { user } = useAuth();

  // React Bootstrap modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    getClassrooms(user.uid).then(setClassrooms);
  }, []);

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

      <div className="d-flex flex-wrap align-items-center" id="dashboard">
        <div className="col dashboard-columns">
          <Link href="/classroom/new" passHref>
            Create classroom
          </Link>
        </div>

        <div className="col dashboard-columns">
          <Button variant="primary" onClick={handleShow}>
            View classroom
          </Button>

          <div className="col dashboard-columns">
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
                        <Link href={`/classroom/${classroom.firebaseKey}`}>{classroom.classroom_name}</Link>
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
        </div>

        <div className="col dashboard-columns">
          <Link href="/classroom/manage" passHref>
            Manage classrooms
          </Link>
        </div>

        <div className="col dashboard-columns">
          <Link href="/student/new" passHref>
            Add student
          </Link>
        </div>

        <div className="col dashboard-columns">
          <Link href="/student" passHref>
            All students
          </Link>
        </div>
        <div className="col dashboard-columns">
          <Link href="/grade" passHref>
            View grades
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
