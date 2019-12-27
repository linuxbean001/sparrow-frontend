import React, { useEffect } from 'react';

import './loading.css';
import iconSpinner from './images/icon-spinner.svg';

const LoadingSpinner = () => {
  const loaderViewRef = React.createRef();

  useEffect(() => {
    if (loaderViewRef.current.parentNode !== document.body)
      document.body.appendChild(loaderViewRef.current);
    return function() {
      if (loaderViewRef.current)
        document.body.removeChild(loaderViewRef.current);
    };
  });

  return (
    <div className="loading-backdrop" ref={loaderViewRef}>
      <div className="loading-container">
        <img className="rotating indicator" src={iconSpinner} alt="spinner" />
        <div className="loading-caption">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
