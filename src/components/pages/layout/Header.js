import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from './logo192.png';

const Header = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <img src={Logo}></img>
      </Link>
    </div>
  );
};

export default Header;
