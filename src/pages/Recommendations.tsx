import React from 'react';
import './Recommendations.css';
// import biranjayProfilePic from '../images/biranjay.jpg'; // Adjust the path based on your directory structure

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          {/* <img src={biranjayProfilePic} alt="Biranjay Kumar Gupta" className="profile-pic" /> */}
          <div>
            <h3>Air Muse Team</h3>
            <p>Full-stack Development Intern</p>
            <p className="date">October 2024</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "It is with great pleasure that I recommend Biranjay, who joined us as a full-stack development intern at Air Muse in July 2024. Although the internship duration was for two months, Biranjay's contributions were so impactful that we extended their position for an additional four months, during which they played a key role in multiple projects. Despite the short tenure, their work was crucial in helping us reach several milestones ahead of schedule."</p>
          <p>💻 "Biranjay demonstrated strong technical expertise and adaptability, quickly picking up new technologies like React.js, Node.js, and MongoDB, and applying them effectively to the tasks at hand. They contributed to developing key features of our application and demonstrated problem-solving skills that helped resolve critical issues in the system."</p>
          <p>🌱 "Not only did Biranjay excel in technical tasks, but their proactive approach, strong communication, and teamwork made them a pleasure to work with. They collaborated seamlessly with both technical and non-technical teams, always ready to lend a hand and ensure that tasks were completed efficiently."</p>
          <p>🌟 "Though our work with Biranjay was brief, it was clear that they have the potential to make valuable contributions to any team. I wholeheartedly recommend Biranjay for any future opportunities and have no doubt they will continue to grow as a software developer."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
