import React from "react";
import '../style/StatCard.css'
export default function StatCard({ label, value, color }) {
  return (
    <div className="stat-card" style={{ borderLeft: `6px solid ${color}` }}>
      <h3>{label}</h3>
      <p>{value}</p>
    </div>
  );
}
