import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.css';

export default function Avatar(props) {
  return (
    <div className="avatar" style={{ backgroundImage: `url(${props.image})` }}></div>
  );
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
};