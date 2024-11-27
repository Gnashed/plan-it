import React from 'react';
import ClassroomCard from '../../../components/classrooms/ClassroomCard';

export default function page() {
  return (
    <div className="d-flex flex-column my-4 text-center">
      <h1 className="my-3">Manage Classrooms</h1>

      {/* TODO: Render Classroom components dynamically. */}
      <div className="d-flex flex-row flex-wrap justify-content-center">
        <ClassroomCard />
        <ClassroomCard />
        <ClassroomCard />
        <ClassroomCard />
        <ClassroomCard />
      </div>
    </div>
  );
}
