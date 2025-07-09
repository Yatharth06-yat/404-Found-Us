import React, { useState, useEffect } from "react";
import "../style/pl.css";
import Repo from "./Repo"; // Double-check the actual filename's capitalization (Repo.jsx or repo.jsx)
import BillingFile from "./BillingFile";
export default function Pl() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showActionChoices, setShowActionChoices] = useState(false);
  const [showYat, setShowYat] = useState(false);
  const [showBillingFile, setShowBillingFile] = useState(false);

  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    gender: "",
    report: ""
  });

  useEffect(() => {
    const savedPatients = localStorage.getItem("patients");
    if (savedPatients) {
      setPatients(JSON.parse(savedPatients));
    } else {
      setPatients([
        { name: "Yatharth Sharma", age: 32, gender: "Male", report: "Visited Dr. Smith for General Checkup. Advised to bring previous reports." },
        { name: "Ananya Verma", age: 28, gender: "Female", report: "Visited Dr. Johnson for General Checkup. Annual physical recommended." },
        { name: "Ravi Mehta", age: 40, gender: "Male", report: "Visited Dr. Williams for Dental Cleaning. Avoid food before visit." },
        { name: "Sneha Kapoor", age: 35, gender: "Female", report: "Visited Dr. Brown for Eye Exam. Asked to bring eyeglasses." },
        { name: "Aman Kumar", age: 25, gender: "Male", report: "Visited Dr. Davis for Skin Rash. Affected area is spreading." },
        { name: "Priya Singh", age: 30, gender: "Female", report: "Visited Dr. Wilson for Back Pain. Chronic pain for 2 weeks." },
        { name: "Karan Desai", age: 45, gender: "Male", report: "Visited Dr. Moore for ENT Checkup. Mild hearing loss noted." },
        { name: "Ritika Joshi", age: 27, gender: "Female", report: "Visited Dr. Taylor for Follow-up after surgery." },
        { name: "Manoj Patel", age: 55, gender: "Male", report: "Visited Dr. Anderson for Diabetes Management. Checked glucose logs." },
        { name: "Pooja Rana", age: 22, gender: "Female", report: "Visited Dr. Thomas for Vaccination. COVID-19 booster dose administered." },
        { name: "Aakash Jain", age: 38, gender: "Male", report: "Visited Dr. Jackson for Chest Pain. Urgent consultation required." },
        { name: "Neha Malhotra", age: 33, gender: "Female", report: "Visited Dr. White for Thyroid Test. Fasting required." },
        { name: "Rajiv Sharma", age: 36, gender: "Male", report: "Visited Dr. Harris for Migraine. Frequent headaches observed." },
        { name: "Tanya Bansal", age: 31, gender: "Female", report: "Visited Dr. Martin for Stomach Ache. Symptoms began 3 days ago." }
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const handleAddPatient = (e) => {
    e.preventDefault();
    setPatients([...patients, { ...newPatient }]);
    setNewPatient({ name: "", age: "", gender: "", report: "" });
  };

  const handleDelete = (indexToDelete) => {
    const updated = patients.filter((_, i) => i !== indexToDelete);
    setPatients(updated);
    if (selectedPatient && patients[indexToDelete] === selectedPatient) {
      setSelectedPatient(null);
      setShowActionChoices(false);
    }
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setShowActionChoices(true);
  };

  const handleRopeFile = () => {
    setShowYat(true);
    setShowActionChoices(false);
  };

  const handleBillingFile = () => {
    setShowBillingFile(true);
    setShowActionChoices(false);
  };

  return (
    <div className="PatientsPage-root">
      {!showYat && !showBillingFile ? (
        <>
          <div className="pp">
            <h2>Patient List</h2>
            <form onSubmit={handleAddPatient} style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "8px" }}>
                <input type="text" placeholder="Name" value={newPatient.name} onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })} required />
                <input type="number" placeholder="Age" value={newPatient.age} onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })} required />
                <select value={newPatient.gender} onChange={(e) => setNewPatient({ ...newPatient, gender: e.target.value })} required>
                  <option value="">Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <textarea rows="3" placeholder="Report (e.g. BP, sugar...)" value={newPatient.report} onChange={(e) => setNewPatient({ ...newPatient, report: e.target.value })} required style={{ width: "100%", maxWidth: "400px", marginBottom: "12px", padding: "8px" }} />
              <br />
              <button type="submit">Add Patient</button>
            </form>
          </div>

          <div className="patient-list">
            {patients.map((patient, index) => (
              <div key={index} className="patient-card" onClick={() => handlePatientClick(patient)}>
                <strong>{patient.name}</strong>
                <span>Age: {patient.age}</span>
                <span>Gender: {patient.gender}</span>
                <button className="delete-btn" onClick={(e) => { e.stopPropagation(); handleDelete(index); }}>Delete</button>
              </div>
            ))}
          </div>

          {showActionChoices && selectedPatient && (
            <div className="ppp">
              <div className="report-modal" onClick={() => setShowActionChoices(false)}>
                <div className="report-content" onClick={(e) => e.stopPropagation()}>
                  <h3>Select Action for {selectedPatient.name}</h3>
                  <button onClick={handleRopeFile} style={{  color: "white" }}>Open Rope File</button>
                  <button onClick={handleBillingFile} style={{ margin: "10px" }}>Open Billing File</button>
                  <button onClick={() => { setSelectedPatient(null); setShowActionChoices(false); }} style={{ marginTop: "10px" }}>Close</button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : showYat ? (
        <Repo patient={selectedPatient} onBack={() => { setShowYat(false); setSelectedPatient(null); }} />
      ) : (
        <BillingFile patient={selectedPatient} onBack={() => { setShowBillingFile(false); setSelectedPatient(null); }} />
      )}
    </div>
  );
}
