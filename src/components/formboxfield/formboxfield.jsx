import React from 'react';
import classnames from 'classnames';
import './formboxfield.css';

import errorIcon from './images/icon-error.svg';

const FormBoxField = React.forwardRef(
  (
    {
      label,
      type = 'text',
      children,
      disabled,
      error,
      onChange,
      Required,
      className,
      inputClasses,
      ...rest
    },
    ref
  ) => {
    const rootClassNames = classnames('FormField__container', className);
    const inputClassNames = classnames('FormField__input', inputClasses, {
      'FormField__input--error': error,
    });
    return (
      <div className={rootClassNames}>
        <label className="FormField__label">
          {label}
          <input
            placeholder={label}
            disabled={disabled}
            className={inputClassNames}
            type={type}
            ref={ref}
            {...rest}
          />
          {children}
        </label>
        {error ? (
          <div className="FormField__error-container">
            <img src={errorIcon} alt="error icon" />
            <span className="error-message">{error}</span>
          </div>
        ) : null}
      </div>
    );
  }
);

export default FormBoxField;
