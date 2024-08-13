import './Footer.css';
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() { 
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left-container"> 
          <div className="location">
            <FaHome size={20} style={{color: '#fff', marginRight:"2rem"}} />
            <div>
                <p>Red Hills, Lakhdi-Ka-Pool.</p>
                <p>Hyderabad, Telangana.</p>
            </div>
          </div>
          <div className='phone'>
            <FaPhone size={20} style={{color: '#fff', marginRight:"2rem"}} />
            <p>+91-6303-213-958</p>
          </div>
          <div className='email'>
            <FaMailBulk size={20} style={{color: '#fff', marginRight:'2rem'}} />
            <p>ahmedsabir2417@gmail.com</p>
          </div>
        </div>
        <div className="right-container">
        <h4>Follow Me</h4>
<div className="social-icons">
  <a href="https://instagram.com/_ahmed_ahmoo" target="_blank" rel="noopener noreferrer">
    <FaInstagram className='insta' size={20} style={{color: '#fff'}} />
  </a>
  <a href="https://www.linkedin.com/in/ahmedsabir2417" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className='linkedin' size={20} style={{color: '#fff'}} />
  </a>
  <a href="https://github.com/ahmedSabir07" target="_blank" rel="noopener noreferrer">
    <FaGithub className='facebook' size={20} style={{color: '#fff'}} />
  </a>
</div>

                <div class="footer-section">
                 <p>&copy; 2024 Your Website. All rights reserved.</p>
                 </div>
          </div>

          

      </div>
    </div>
  );
}

export default Footer;
