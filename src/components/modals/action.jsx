import React from 'react';
import './action.css';

import iconWarning from './images/icon-warning.svg';
import Button from '../Button';

const ActionModal = ({
  question,
  secondaryButtonCaption,
  primaryButtonCaption,
  onResult,
}) => {
  const onClickButton = event => onResult && onResult(event.target.name);

  return (
    <div className="action-modal-container">
      <img className="action-modal-icon" src={iconWarning} alt="Warning" />
      <h1 className="action-modal-title">{question}</h1>
      <Button
        name="primary"
        style={{ backgroundColor: '#c70b0b' }}
        onClick={onClickButton}
      >
        {primaryButtonCaption}
      </Button>
      <Button
        name="secondary"
        style={{ backgroundColor: '#acb0b3' }}
        onClick={onClickButton}
      >
        {secondaryButtonCaption}
      </Button>
    </div>
  );
};

export default ActionModal;
