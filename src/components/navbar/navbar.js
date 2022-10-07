import React from 'react';
import logo from '../../images/logo.jpg';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <img src={logo} className="logo" alt="aretha" />
    </nav>
  );
};

export default Navbar;
