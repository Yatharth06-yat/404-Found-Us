import React, { useEffect, useState } from "react";
import "../style/dashboard.css";
import StatCard from "./StatCard";
import Charts from "./Charts";

export default function Dashboard() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/patients")
      .then(response => response.json())
      .then(data => setPatients(data))
      .catch(error => {});
    fetch("http://localhost:3000/doctors")
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => {});
  }, []);

  const stats = {
    totalPatients: patients.length,
    totalDoctors: doctors.length,
    malePatients: patients.filter(p => p.gender === "Male").length,
    femalePatients: patients.filter(p => p.gender === "Female").length,
    maleDoctors: doctors.filter(d => d.gender === "Male").length,
    femaleDoctors: doctors.filter(d => d.gender === "Female").length,
  };

  return (
    <div className="dashboard-root">
      <h1>Analytics Dashboard</h1>
      <div className="stats-grid">
        <StatCard label="Total Patients" value={stats.totalPatients} color="#2563eb" />
        <StatCard label="Total Doctors" value={stats.totalDoctors} color="#10b981" />
        <StatCard label="Male Patients" value={stats.malePatients} color="#6366f1" />
        <StatCard label="Female Patients" value={stats.femalePatients} color="#ec4899" />
        <StatCard label="Male Doctors" value={stats.maleDoctors} color="#0ea5e9" />
        <StatCard label="Female Doctors" value={stats.femaleDoctors} color="#f43f5e" />
      </div>
      <Charts patients={patients} doctors={doctors} />
    </div>
  );
}
