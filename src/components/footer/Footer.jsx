import React from 'react';
import './Footer.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Achmad Surur
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com">
          {' '}
          <FaInstagram />{' '}
        </a>
        <a href="https://twitter.com">
          {' '}
          <FaYoutube />{' '}
        </a>
        <a href="https://linkedin.com">
          {' '}
          <FaLinkedinIn />{' '}
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Achmad Surur. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
