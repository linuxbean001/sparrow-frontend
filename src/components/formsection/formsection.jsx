import React from 'react';
import './formsection.css';

const FormSection = ({ title, description, children }) => (
  <div className="FormSection">
    <div className="FormSection__inner">
      <div className="FormSection__left">
        <h2 className="FormSection__title">{title}</h2>
        <p className="FormSection__description">{description}</p>
      </div>
      <div className="FormSection__right">{children}</div>
    </div>
  </div>
);

export default FormSection;
