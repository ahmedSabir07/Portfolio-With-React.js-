import './Footer.css';
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

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
                  <FaInstagram className='insta' size={20} style={{color: '#fff'}} />
                  <FaLinkedin className='linkedin' size={20} style={{color: '#fff'}} />
                   <FaFacebook className='facebook' size={20} style={{color: '#fff'}} />
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
