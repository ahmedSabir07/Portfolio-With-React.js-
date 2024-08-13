import React from 'react';
import './Skillsinside.css';

function SkillsInside(props) {
  return (
    <div className='Skills'>
        <h2>{props.headings}</h2>
        <div className="skills-container">
          <div className="skill">
            <i className='bx bxl-html5'></i>
            <h3>HTML</h3>
          </div>
          <div className="skill">
            <i className='bx bxl-css3'></i>
            <h3>CSS</h3>
          </div>
          <div className="skill">
            <i className='bx bxl-javascript'></i>
            <h3>JavaScript</h3>
          </div>
          <div className="skill">
            <i className='bx bxl-react'></i>
            <h3>React</h3>
          </div>
          <div className="skill">
            <i className='bx bxl-nodejs'></i>
            <h3>Node.js</h3>
          </div>
          <div className="skill">
            <i className='bx bxl-expressjs'></i>
            <h3>Express.js</h3>
          </div>
          <div className="skill">
            <i className='bx bxl-mongodb'></i>
            <h3>MongoDB</h3>
          </div>
        </div>
    </div>
  );
}

export default SkillsInside;
