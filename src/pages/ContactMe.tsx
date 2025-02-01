import React from 'react';
import './ContactMe.css';
import profilePic from '../images/Biranjay.jpg';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactMe: React.FC = () => {
  const userData = {
    name: "Biranjay Kumar Gupta",
    title: "Full-stack Developer",
    summary: "A passionate coder with a love for problem-solving and web development.",
    companyUniversity: "IIIT Ranchi",
    linkedinLink:"https://www.linkedin.com/in/biranjay-kumar-gupta-74941323b/",
    gitHubLink:"https://github.com/Biranjay-Kumar",
    email: "biranjaykumargupta@example.com",
    phoneNumber: "+91 8789082373",
  };

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt="Biranjay Kumar Gupta" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">{userData.summary}</p>
          <p className="badge-company">{userData.companyUniversity}</p>
            {/* LinkedIn Link */}
        <a
          href={userData.linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="badge-link"
        >
          <FaLinkedin className="linkedin-icon" /> View LinkedIn Profile
        </a>

        {/* GitHub Link */}
        <a
          href={userData.gitHubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="badge-link"
        >
          <FaGithub className="github-icon" /> View GitHub Profile
        </a>
        </div>
      </div>

      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>

      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {userData.phoneNumber}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
