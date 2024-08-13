import React from 'react';
import './InitialBackGroundImage.css';
import backgroundImage from '../assets/BackGroundImage.jpg';
import { Link } from 'react-router-dom';
function InitialBackGroundImage() {
  return (
    <div>
      <div className="home" id="home">
        <div className="home-content">
          <img src={backgroundImage} className='backGroundImage' alt='background'/>
          <div className='content'>
          <h1> AHMED SABIR</h1>
          <h3>Software Developer</h3>
          <p>
            As a Mechanical Engineer with a deep-seated passion for software engineering, I am fueled by a genuine desire to learn and thrive within the dynamic landscape of the industry. My transition into software engineering is marked by a sincere dedication to growth and a willingness to embrace new challenges. In this journey, I aim to build knowledge, collaborate with industry experts, and contribute meaningfully to the growth of projects and teams. I look forward to the opportunities that lie ahead as I embark on this enriching exploration within the realm of software engineering.
          </p>
          <div className="btn-box">
           <Link to='/Projects' className='btn'>Projects</Link>
           <Link to='/Contact' className='btn-lite'>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitialBackGroundImage;
