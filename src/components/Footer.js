import React from 'react';
import '../styles/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <a href='https://github.com/K0Si-003' target='_blank' rel='noreferrer noopener'><i className='fab fa-github-square' /></a>
      <a href='https://www.linkedin.com/in/hugo-pioda/' target='_blank' rel='noreferrer noopener'><i className='fab fa-linkedin' /></a>
    </footer>
  )
}

export default Footer;
