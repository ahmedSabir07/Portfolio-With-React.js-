import './InsideProject.css'; 
import React, { Component } from 'react';
import Image from '../assets/InsideProject.avif';

class InsideProject extends Component {
  render() {
    return (
      <div className="projects" style={{ backgroundImage: `url(${Image})`, backgroundSize: '80%', backgroundPosition: 'center top' }}>
        <h2>{this.props.heading}</h2>
        <br/>
        <div className="projects-container">
          <div className="project">
            <h3>Weather-APP</h3>
            <i className='bx bxl-moon'></i>
            <p>
              Our intuitive app delivers real-time weather updates and detailed forecasts worldwide. Designed for simplicity, it keeps you informed and prepared with accurate weather information, anytime and anywhere.
            </p>
          </div>
          <div className="project">
            <h3>Expense Tracker</h3>
            <i className='bx bx-money'></i>
            <p>
              Manage your expenses efficiently with our intuitive expense tracker. Track spending, categorize transactions, and visualize your budget with detailed charts and reports. Stay in control of your finances with real-time updates and customizable features.
            </p>
          </div>
          <div className="project">
            <h3>Blog Platform</h3>
            <i className='bx bx-pen'></i>
            <p>
              Built a dynamic blogging platform using the MERN stack with robust features for article creation, user authentication, and real-time updates. Engage your audience with interactive content management, seamless publication workflows, and intuitive user experiences.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default InsideProject;
