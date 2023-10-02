import React from 'react';
import "../Styles/AboutTab.css"

function AboutTab() {
  return (
    <div className="about-container">
      <div className="center-container">
        <img src={process.env.PUBLIC_URL + "/profile.jpg"} alt="Profile" className="profile-photo" />
      </div>
      <div class="name-container">
        <h1>Anupam Arya</h1>
        <img src={process.env.PUBLIC_URL + "/verified.png"} alt="Verified Badge" class="verified-badge" />
      </div>
      <p className="intro">Hey there! I'm Anupam. Dive into my world of content quirks and coding chronicles. Got a fun project? Reach out to collaborate on content or code. Curious about my recent escapades? Just hit 'Now'. Beware, they might just be the talk of the town soon!</p>
      <p className="email">business@anupamarya.com</p>
      <div className="social-icons">
        <div className="social-main">
          <a href="https://www.youtube.com/@anupamarya" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + "/youtube.png"} alt="YouTube" />
          </a>
        </div>
        <div className="social-row">
          <a href="https://www.instagram.com/_anupamarya" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + "/instagram.png"} alt="Instagram" />
          </a>
          <a href="https://twitter.com/_anupamarya" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + "/twitter.png"} alt="X" />
          </a>
          <a href="https://www.linkedin.com/in/reachanupam" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + "/linkedin.png"} alt="LinkedIn" />
          </a>
          <a href="https://discord.com/channels/@anupamarya" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + "/discord.png"} alt="Discord" />
          </a>
        </div>
      </div>
      <footer>
        <p>Copyright &copy; 2023</p>
      </footer>
    </div>
  );
}

export default AboutTab;