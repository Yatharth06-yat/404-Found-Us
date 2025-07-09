import React from 'react';

export default function PendingPaymentFile({ doctor, onBack }) {
  return (
    <div className="pending-file">
      <h2>Pending Payment File</h2>
      <p><strong>Doctor:</strong> {doctor.name}</p>
      <p><strong>Specialization:</strong> {doctor.specialization}</p>
      <p>This is where pending billing or payment info would go.</p>
      <button onClick={onBack} className="back-btn">⬅ Back</button>
    </div>
  );
}
