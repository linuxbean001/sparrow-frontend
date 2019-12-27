import React from 'react';
import logo from './images/logo-sparrow-icon.svg';

import './header.css';

const Header = () => {
  return (
    <div className="HeaderWithLogo">
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
};

export default Header;
