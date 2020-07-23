import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className='desktop-menu'>
      <ul>
        <li><NavLink className='menu-item-desktop' exact activeClassName='active' to='/'>Accueil</NavLink></li>
        <li><NavLink className='menu-item-desktop' activeClassName='active' to='/realisations'>Réalisations</NavLink></li>
        <li><NavLink className='menu-item-desktop' activeClassName='active' to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;


