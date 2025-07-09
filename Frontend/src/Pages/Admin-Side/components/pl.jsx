import React, { useState, useEffect } from "react";
import "../style/pl.css";
import Repo from "./Repo";
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
    fetch("http://localhost:3000/patients")
      .then(res => res.json())
      .then(data => setPatients(data))
      .catch(() => {});
  }, []);

  const handleAddPatient = (e) => {
    e.preventDefault();
    const updatedPatients = [...patients, { ...newPatient }];
    setPatients(updatedPatients);
    setNewPatient({ name: "", age: "", gender: "", report: "" });
    fetch("http://localhost:3000/patients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPatient)
    });
  };

  const handleDelete = (indexToDelete) => {
    const patientToDelete = patients[indexToDelete];
    const updated = patients.filter((_, i) => i !== indexToDelete);
    setPatients(updated);
    if (selectedPatient && patients[indexToDelete] === selectedPatient) {
      setSelectedPatient(null);
      setShowActionChoices(false);
    }
    fetch(`http://localhost:3000/patients/${patientToDelete.id}`, {
      method: "DELETE"
    });
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
              <div key={patient.id || index} className="patient-card" onClick={() => handlePatientClick(patient)}>
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
                  <button onClick={handleRopeFile} style={{ color: "white" }}>Open Rope File</button>
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
