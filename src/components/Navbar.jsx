import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState("closed");
  const [navToggle, setNavToggle] = useState("no-toggle");

  const handleClick = (e) => {
    setOpen("closed");
    setNavToggle("no-toggle");
  };

  const eatHamburger = () => {
    if (open === "open") {
      setOpen("closed");
      setNavToggle("no-toggle");
    } else {
      setOpen("open");
      setNavToggle("nav-toggle");
    }
  };

  return (
    <nav>
      <img src={logo} alt='Code Card Logo' />
      <ul className='nav-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/signup'>Sign Up</Link>
        </li>
        <li>
          <Link to='/login'>Log In</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <ul id='menu' className={`menu ${navToggle}`}>
        <li>
          <Link to='/' className='menu-link' onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/signup' className='menu-link' onClick={handleClick}>
            Sign Up
          </Link>
        </li>
        <li>
          <Link to='/login' className='menu-link' onClick={handleClick}>
            Log In
          </Link>
        </li>
        <li>
          <Link to='/contact' className='menu-link' onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger icon */}
      <button
        id='menu-btn'
        className={`hamburger ${open}`}
        aria-label='Hamburger Menu'
        onClick={eatHamburger}
      >
        <span className='hamburger-top'></span>
        <span className='hamburger-middle'></span>
        <span className='hamburger-bottom'></span>
      </button>
    </nav>
  );
};

export default Navbar;
