import React from 'react';
import AddButton from '../../components/buttons/AddButton';

export default function GradeBook() {
  return (
    <div className="d-flex flex-column my-4 text-center">
      <h1>Grades</h1>

      <div className="d-flex flex-row flex-wrap justify-content-center my-4">
        <h4>Something to render</h4>
      </div>

      <AddButton buttonProp="grades" />
    </div>
  );
}
