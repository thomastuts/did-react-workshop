import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.css';

export default function Avatar(props) {
  // TODO: add image to backgroundImage styles below
  return (
    <div className="avatar"></div>
  );
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
};