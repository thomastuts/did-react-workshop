import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';

import './Designer.css';

export default function Designer(props) {
  return (
    <div className="designer">
      <div className="designer__visual">
        {/*TODO: add Avatar component here*/}
      </div>
      <div className="designer__content">
        <p className="designer__quote">
          {/*TODO: add quote here}*/}
        </p>
        <Button
          label="♥️"
        />
      </div>
    </div>
  )
}

Designer.propTypes = {
  designer: PropTypes.object.isRequired,
  isLiked: PropTypes.bool,
  onToggleLikedStatus: PropTypes.func,
};