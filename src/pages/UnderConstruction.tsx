import React from 'react';
import './UnderConstruction.css';

const UnderConstruction: React.FC = () => {
  return (
    <div className="under-construction-page">
      <div className="construction-message">
        <h1>🎬 Coming Soon...</h1>
        <p>We're busy crafting something extraordinary! Stay tuned for the big reveal! 🚀</p>
      </div>
      <div className="construction-animation">
        <div className="construction-icon">📅</div>
        <div className="construction-icon">🎥</div>
        <div className="construction-icon">🍿</div>
      </div>
    </div>
  );
};

export default UnderConstruction;
