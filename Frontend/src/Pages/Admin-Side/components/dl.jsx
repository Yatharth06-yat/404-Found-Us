import React, { useState, useEffect } from "react";
import "../style/dl.css";
import PendingPaymentFile from "./PendingPaymentFile";

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showActionChoices, setShowActionChoices] = useState(false);
  const [showPaymentFile, setShowPaymentFile] = useState(false);
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    age: "",
    gender: "",
    education: "",
    specialization: "",
    bio: ""
  });

  useEffect(() => {
    fetch("http://localhost:3000/doctors")
      .then(res => res.json())
      .then(data => {
        setDoctors(data);
        setSelectedDoctor(data[0]);
      })
      .catch(() => {});
  }, []);

  const handleAddDoctor = (e) => {
    e.preventDefault();
    const updatedDoctors = [...doctors, { ...newDoctor }];
    setDoctors(updatedDoctors);
    setNewDoctor({
      name: "",
      age: "",
      gender: "",
      education: "",
      specialization: "",
      bio: ""
    });
    fetch("http://localhost:3000/doctors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDoctor)
    });
  };

  const handleDelete = (indexToDelete) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      const doctorToDelete = doctors[indexToDelete];
      const updated = doctors.filter((_, i) => i !== indexToDelete);
      setDoctors(updated);
      if (selectedDoctor && doctors[indexToDelete] === selectedDoctor) {
        setSelectedDoctor(null);
        setShowActionChoices(false);
        setShowPaymentFile(false);
      }
      fetch(`http://localhost:3000/doctors/${doctorToDelete.id}`, {
        method: "DELETE"
      });
    }
  };

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    setShowActionChoices(true);
  };

  const handlePaymentFile = () => {
    setShowPaymentFile(true);
    setShowActionChoices(false);
  };

  return (
    <div className="DoctorsPage-root">
      {!showPaymentFile ? (
        <>
          <div className="dp">
            <h2>Doctor Directory</h2>
            <form onSubmit={handleAddDoctor} style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "8px" }}>
                <input
                  type="text"
                  placeholder="Name"
                  value={newDoctor.name}
                  onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
                  required
                />
                <input
                  type="number"
                  placeholder="Age"
                  value={newDoctor.age}
                  onChange={(e) => setNewDoctor({ ...newDoctor, age: e.target.value })}
                  required
                />
                <select
                  value={newDoctor.gender}
                  onChange={(e) => setNewDoctor({ ...newDoctor, gender: e.target.value })}
                  required
                >
                  <option value="">Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <input
                  type="text"
                  placeholder="Education"
                  value={newDoctor.education}
                  onChange={(e) => setNewDoctor({ ...newDoctor, education: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Specialization"
                  value={newDoctor.specialization}
                  onChange={(e) => setNewDoctor({ ...newDoctor, specialization: e.target.value })}
                  required
                />
              </div>
              <textarea
                rows="3"
                placeholder="Short bio..."
                value={newDoctor.bio}
                onChange={(e) => setNewDoctor({ ...newDoctor, bio: e.target.value })}
                required
                style={{ width: "100%", maxWidth: "600px", padding: "8px" }}
              />
              <br />
              <button type="submit">Add Doctor</button>
            </form>
          </div>
          <div className="doctor-list">
            {doctors.map((doctor, index) => (
              <div
                key={doctor.id || index}
                className="doctor-card"
                onClick={() => handleDoctorClick(doctor)}
              >
                <strong>{doctor.name}</strong>
                <span>Age: {doctor.age}</span>
                <span>Gender: {doctor.gender}</span>
                <span className="specialization">{doctor.specialization}</span>
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(index);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          {showActionChoices && selectedDoctor && (
            <div className="doctor-popup">
              <div className="modal-overlay" onClick={() => setShowActionChoices(false)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <h3>Select Action for {selectedDoctor.name}</h3>
                  <button onClick={handlePaymentFile}>Open Pending Payment File</button>
                  <button
                    onClick={() => {
                      setSelectedDoctor(null);
                      setShowActionChoices(false);
                    }}
                    style={{ margin: "10px" }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : selectedDoctor ? (
        <PendingPaymentFile
          doctor={selectedDoctor}
          onBack={() => {
            setShowPaymentFile(false);
            setSelectedDoctor(null);
          }}
        />
      ) : (
        <div style={{ textAlign: "center", padding: "2rem", color: "red" }}>
          <p>No doctor selected.</p>
          <button onClick={() => setShowPaymentFile(false)}>Back to Directory</button>
        </div>
      )}
    </div>
  );
}
