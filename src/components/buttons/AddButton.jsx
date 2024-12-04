import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

// buttonProp is a string that can be passed to the component's href making it reusable.
export default function AddButton({ buttonProp }) {
  return (
    <div className="d-flex justify-content-end m-5">
      <Link href={`/${buttonProp}/new`} id="add-classroom-btn" title="Add a classroom" passHref>
        +
      </Link>
    </div>
  );
}

AddButton.propTypes = {
  buttonProp: PropTypes.string.isRequired,
};
