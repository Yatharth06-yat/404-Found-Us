import React from "react";
import "../style/BillingFile.css"; // ✅ Fix path if in styles folder

export default function BillingFile({ patient, onBack }) {
  return (
    <div className="bf">
      <div className="lk">
     
        <h2>Billing File</h2>
        {patient ? (
          <div className="bilhling-info">
            <p><strong>Name:</strong> {patient.name}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Gender:</strong> {patient.gender}</p>
            <p><strong>Report:</strong> {patient.report}</p>
            <p><strong>Total Charges:</strong> ₹750 (example)</p>
            <button onClick={onBack} className="bpl">
          ⬅ Back to Patient List
        </button>
          </div>
        ) : (
          <p>No patient data found.</p>
        )}
      </div>
    </div>
  );
}
