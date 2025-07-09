import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./components/Profile/Profile";
import AppointmentsPage from "./components/Appointment/AppointmentsPage";
import DashboardPage from "./components/Dashboard/DashboardPage";
import MedicalHistoryPage from "./components/MedicalHistory/MedicalHistoryPage";
import ReportsPage from "./components/Reports_Pres/ReportsPage";
import './Patient-Side.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { buildReminders } from "./utils/reminder";
import Footer from './components/footer/footer';

function Patient_Side() {
  const [user, setUser] = useState({ id: 1, name: "JaneDoe", email: "janedoe@gmail.com", avatarUrl: "", phone: "" });
  const [appointments, setAppointments] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [bloodReports, setBloodReports] = useState([]);
  const [medicalHistory, setMedicalHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users/1")
      .then(res => res.json())
      .then(data => setUser(data));
    fetch("http://localhost:3000/appointments")
      .then(res => res.json())
      .then(data => setAppointments(data));
    fetch("http://localhost:3000/prescriptions")
      .then(res => res.json())
      .then(data => setPrescriptions(data));
    fetch("http://localhost:3000/reports")
      .then(res => res.json())
      .then(data => setBloodReports(data));
    fetch("http://localhost:3000/medicalHistory")
      .then(res => res.json())
      .then(data => setMedicalHistory(data));
  }, []);

  const reminders = buildReminders(appointments);

  return (
    <>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="home" element={<DashboardPage user={user} appointments={appointments} reminders={reminders} />} />
            <Route path="appointments" element={<AppointmentsPage appointments={appointments} setAppointments={setAppointments} />} />
            <Route path="medicalHistory" element={<MedicalHistoryPage medicalHistory={medicalHistory} />} />
            <Route path="reports" element={<ReportsPage prescriptions={prescriptions} bloodReports={bloodReports} />} />
            <Route path="profile" element={<ProfilePage user={user} setUser={setUser} />} />
            <Route path="*" element={<Navigate to="home" replace />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default Patient_Side;
