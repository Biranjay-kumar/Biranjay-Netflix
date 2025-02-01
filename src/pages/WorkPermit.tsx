import React from 'react';
import './WorkPermit.css';

const WorkPermit: React.FC = () => {
  const workPermitData = {
    visaStatus: "Indian Citizen",
    expiryDate: "No Expiration",
    availableAt: ["Gurgaon", "Noida", "Bengaluru", "Pune", "Mumbai"],
    additionalInfo: "I am eligible to work anywhere in India without restrictions.",
  };

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Available at</h2>
        <p className="work-permit-summary">
          I'm currently an <strong>{workPermitData.visaStatus}</strong> 🛂, which allows me to work anywhere in India! 🇮🇳
        </p>
        <p className="work-permit-details">Expiry Date: <strong>{workPermitData.expiryDate}</strong> 📅</p>
        <p className="available-at">
          Available at: <strong>{workPermitData.availableAt.join(", ")}</strong>
        </p>
        <p className="additional-info">{workPermitData.additionalInfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;
