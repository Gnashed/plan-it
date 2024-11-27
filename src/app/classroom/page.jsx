'use client';

import React from 'react';
import StudentCard from '../../components/students/StudentCard';

export default function page() {
  return (
    <div className="d-flex flex-column">
      <h1 className="text-center my-4">Classroom</h1>

      <div className="d-flex flex-row flex-wrap my-5 justify-content-center">
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </div>
    </div>
  );
}
