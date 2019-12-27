import React from 'react';
import './simple.css';

import iconCheckmark from './images/icon-checkmark.svg';
import Button from '../buttons';

const SimpleModal = () => {
  return (
    <div className="simple-modal-container">
      <img className="simple-modal-icon" src={iconCheckmark} />
      <h1 className="simple-modal-title">
        Are you sure you want to remove Acme Inc.?
      </h1>
      <Button>Done</Button>
    </div>
  );
};

export default SimpleModal;
