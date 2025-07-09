import React, { useState } from "react";
import "../style/su.css"; // ✅ Correct path

// ✅ Optional: import Admin if you have that component
import Admin from "./admin"; // Make sure Admin.jsx exists in the same folder

export default function SignUp() {
  const [userType, setUserType] = useState("doctor");
  const [currentPage, setCurrentPage] = useState("signup");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(userType); // Navigate to admin/doctor/patient dashboard
  };

  const handleLogout = () => {
    setCurrentPage("signup");
  };

  const renderFormFields = () => (
    <>
      <input type="text" placeholder="Full Name" className="input" required />
      <input type="email" placeholder="Email" className="input" required />
      <input type="password" placeholder="Password" className="input" required />

      {userType === "doctor" && (
        <>
          <input type="text" placeholder="Specialization" className="input" required />
          <input type="text" placeholder="License Number" className="input" required />
        </>
      )}

      {userType === "patient" && (
        <input type="number" placeholder="Age" className="input" required />
      )}
    </>
  );

  // Render dashboard after signup
  if (currentPage === "admin") return <Admin />;
  if (currentPage === "doctor")
    return (
      <div className="dashboard">
        <h1>Welcome Doctor</h1>
        <button className="submit-btn" onClick={handleLogout}>Logout</button>
      </div>
    );

  if (currentPage === "patient")
    return (
      <div className="dashboard">
        <h1>Welcome Patient</h1>
        <button className="submit-btn" onClick={handleLogout}>Logout</button>
      </div>
    );

  // Default SignUp form
  return (
    <div className="signup-container">
      <div className="tabs">
        {["doctor", "admin", "patient"].map((type) => (
          <button
            key={type}
            className={`tab ${userType === type ? "active" : ""}`}
            onClick={() => setUserType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up as {userType.charAt(0).toUpperCase() + userType.slice(1)}</h2>
        {renderFormFields()}
        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
}
