import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';

import './Designer.css';

export default function Designer(props) {
  return (
    <div className="designer">
      <div className="designer__visual">
        <Avatar image={props.designer.avatar} />
      </div>
      <div className="designer__content">
        <p className="designer__quote">
          {props.designer.quote}
        </p>
        <Button
          label="♥️"
          style={{ opacity: props.isLiked ? 1 : 0.4 }}
          onClick={props.onToggleLikedStatus}
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