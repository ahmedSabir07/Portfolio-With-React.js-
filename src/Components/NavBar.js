import React, { useState } from 'react';
import './NavBarStyle.css';
import signature from '../assets/Signature2.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
  const [buttonNav, setButtonNav] = useState(false);
  const handleClick = () => setButtonNav(!buttonNav);

  return (
    <div className="header">
      <div className="container">
        <Link to='/'>
          <div className="logo">
            <img className="logo-img" src={signature} alt="Signature Logo" />
          </div>
        </Link>
        <ul className={buttonNav ? "navbar active" : "navbar"}>
          <li>
            <Link to='/' className="nav-link " activeClassName="active">Home</Link>
          </li>
          <li>
            <Link to='/Skills' className="nav-link" activeClassName="active">Skills</Link>
          </li>
          <li>
            <Link to='/Projects' className="nav-link" activeClassName="active">Projects</Link>
          </li>
          <li>
            <Link to='/Contact' className="nav-link" activeClassName="active">Contact</Link>
          </li>
        </ul>
        <div className='button' onClick={handleClick}>
          {buttonNav ? (
            <FaTimes size={30} style={{ color: "#fff", transition: "color 0.3s ease" }} />
          ) : (
            <FaBars size={30} style={{ color: "#fff", transition: "color 0.3s ease" }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
