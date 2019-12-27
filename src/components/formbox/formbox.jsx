import React from 'react';
import './formbox.css';
import classnames from 'classnames';

const FormBox = ({
  title,
  image,
  imageAlt,
  children,
  className,
  contentWrapperClass,
}) => {
  const formBoxContentClasses = classnames(
    'FormBox__contentWrapper',
    contentWrapperClass
  );

  const formBoxClasses = classnames('FormBox', className);
  return (
    <div className={formBoxClasses}>
      <h1>
        {image ? (
          <img src={image} alt={imageAlt} className="titleImage" />
        ) : null}
        {title}
      </h1>
      <div className={formBoxContentClasses}>{children}</div>
    </div>
  );
};

export default FormBox;
