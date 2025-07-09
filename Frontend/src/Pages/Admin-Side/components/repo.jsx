import React from "react";
import "../style/Repo.css"; // Make sure this CSS file exists or adjust path

export default function Repo({ patient, onBack }) {
  return (
    <div className="repo-root">
      <div className="repo-card">
      
        <h2>Rope File (Medical Report)</h2>
        {patient ? (
          <div>
            <p><strong>Name:</strong> {patient.name}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Gender:</strong> {patient.gender}</p>
            <p><strong>Report Details:</strong> {patient.report}</p>
            <p><strong>Medical Notes:</strong> No issues noted. Patient is advised to follow up in 7 days.</p>
            <button onClick={onBack} className="back-btn">
          ⬅ Back to Patient List
        </button>
          </div>
          
        ) : (
          <p>No patient data available.</p>
        )}
      </div>
    </div>
  );
}
