import React from 'react';
import classnames from 'classnames';
import './buttons.css';

const Button = ({ children, className, ...rest }) => {
  const buttonClasses = classnames('Button', className);
  return (
    /* eslint-disable react/button-has-type */
    <button {...rest} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
