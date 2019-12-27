import React from 'react';

import './reportcard.css';

const ReportCard = ({
  className,
  imageURL,
  title,
  reportsCount,
  handleClick,
}) => {
  return (
    <div
      className={`ReportCard ${className}`}
      onClick={handleClick}
      onKeyDown={event => event.key === 'Enter' && handleClick()}
      role="button"
      tabIndex="0"
    >
      <div className="ReportCard__image">
        <img src={imageURL} alt="card" />
      </div>
      <div className="ReportCard__title">{title}</div>
      <div className="ReportCard__reportCount">
        {reportsCount} reports available
      </div>
    </div>
  );
};

export default ReportCard;
