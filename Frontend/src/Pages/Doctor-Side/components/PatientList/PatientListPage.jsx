import React, { useState, useEffect } from "react";
import PatientTabs from "./PatientTabs";
import PatientList from "./PatientList";
import NotesModal from "./NotesModal";
import "./PatientListPage.css";

const TABS = [
  { key: "active", label: "Active" },
  { key: "inactive", label: "No Appointment" }
];

export default function PatientListPage() {
  const [tab, setTab] = useState("active");
  const [isFading, setIsFading] = useState(false);
  const [patients, setPatients] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [showNotes, setShowNotes] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/patients")
      .then(res => res.json())
      .then(data => setPatients(data));
  }, []);

  useEffect(() => {
    setIsFading(true);
    const timer = setTimeout(() => {
      const filtered = patients.filter(p => {
        if (tab === "active") {
          return p.appointment && p.appointment.active;
        }
        return !p.appointment || !p.appointment.active;
      });
      setDisplayed(filtered);
      setIsFading(false);
    }, 350);
    return () => clearTimeout(timer);
  }, [tab, patients]);

  const handleCardClick = id => {
    setPatients(prev =>
      prev.map(p =>
        p.id === id && p.appointment && p.appointment.isNew
          ? { ...p, appointment: { ...p.appointment, isNew: false } }
          : p
      )
    );
  };

  const handleMarkNoAppointmentClick = id => {
    setSelectedId(id);
    setShowNotes(true);
  };

  const handleSaveNotes = notes => {
    const updatedPatients = patients.map(p =>
      p.id === selectedId
        ? { ...p, appointment: null, notes }
        : p
    );
    setPatients(updatedPatients);
    setShowNotes(false);
    setSelectedId(null);

    // Update backend
    const patientToUpdate = updatedPatients.find(p => p.id === selectedId);
    fetch(`http://localhost:3000/patients/${selectedId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patientToUpdate)
    });
  };

  const handleCancelNotes = () => {
    setShowNotes(false);
    setSelectedId(null);
  };

  return (
    <div className="AppointmentsPage-root">
      <h2>Patient List</h2>
      <PatientTabs tabs={TABS} activeTab={tab} onTabChange={setTab} />
      <PatientList
        patients={displayed}
        isFading={isFading}
        onCardClick={handleCardClick}
        onMarkNoAppointmentClick={handleMarkNoAppointmentClick}
      />
      {showNotes && (
        <NotesModal
          onSave={handleSaveNotes}
          onCancel={handleCancelNotes}
        />
      )}
    </div>
  );
}
