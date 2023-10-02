import React from 'react';
import "../Styles/AboutTab.css"

function AboutTab() {
  return (
    <div className="about-container">
      <img src="path_to_default_image.jpg" alt="Profile" className="profile-photo" />
      <h2>Anupam Arya</h2>
      <p>Dummy text line 1.</p>
      <p className="email">business@anupamarya.com</p>
      <div className="social-icons">
        <div className="single-icon">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="path_to_linkedin_icon.jpg" alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="multi-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="path_to_linkedin_icon.jpg" alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="path_to_linkedin_icon.jpg" alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="path_to_linkedin_icon.jpg" alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="path_to_linkedin_icon.jpg" alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <footer>
        Copyright 2023
      </footer>
    </div>
  );
}

export default AboutTab;
