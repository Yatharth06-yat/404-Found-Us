import React, { useState } from "react";
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
import initialAppointments from "./data/appointments";
import initialPrescriptions from "./data/prescriptions";
import initialBloodReports from "./data/Reports";
import initialMedicalHistory from "./data/medicalHistory";
import Footer from './components/footer/footer';

function Patient_Side() {
  const [user, setUser] = useState({ name: "JaneDoe", email: "janedoe@gmail.com", avatarUrl: "", phone: "" });
  const [appointments, setAppointments] = useState(initialAppointments);
  const [prescriptions, setPrescriptions] = useState(initialPrescriptions);
  const [bloodReports, setBloodReports] = useState(initialBloodReports);
  const [medicalHistory, setMedicalHistory] = useState(initialMedicalHistory);

  const reminders = buildReminders(appointments);

  return (
    <>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="dashboard" element={<DashboardPage user={user} appointments={appointments} reminders={reminders} />} />
            <Route path="appointments" element={<AppointmentsPage appointments={appointments} setAppointments={setAppointments} />} />
            <Route path="medicalHistory" element={<MedicalHistoryPage medicalHistory={medicalHistory} />} />
            <Route path="reports" element={<ReportsPage prescriptions={prescriptions} bloodReports={bloodReports} />} />
            <Route path="profile" element={<ProfilePage user={user} setUser={setUser} />} />
            <Route path="*" element={<Navigate to="dashboard" replace />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default Patient_Side;