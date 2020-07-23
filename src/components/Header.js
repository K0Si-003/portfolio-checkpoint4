import React from 'react';
import Navbar from './Navbar';
import '../styles/header.css';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header>
      <a href='/'><img src={logo} alt=' logo-valiris' className='logo-header' /></a>
      <Navbar />
    </header>
  )
}

export default Header;
