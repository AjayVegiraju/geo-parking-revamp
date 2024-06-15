import React from 'react';
import '../styles/Header.css';
import logo from '../assets/GeoParking.png';
import { Link } from 'react-scroll';

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={logo} alt="GeoParking Technologies" />
    </div>
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="who-are-we" smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="contact-us" smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
    <div className="auth-buttons">
      <button className="sign-up">Sign Up</button>
      <button className="login">Login</button>
    </div>
  </header>
);

export default Header;

