import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function AddButton({ buttonProp }) {
  return (
    <div className="d-flex justify-content-end m-3">
      {/* <button type="button" id="add-classroom-btn" title="Add a classroom">+</button> */}
      <Link href={`/${buttonProp}/new`} id="add-classroom-btn" title="Add a classroom" passHref>
        +
      </Link>
    </div>
  );
}

AddButton.propTypes = {
  buttonProp: PropTypes.string.isRequired,
};
