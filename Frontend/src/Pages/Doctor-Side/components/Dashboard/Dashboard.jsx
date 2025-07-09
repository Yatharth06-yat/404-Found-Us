import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import defaultDoctorAvatar from '../../assets/istockphoto-2077095666-612x612.jpg';
import DoctorDashboardGreeting from "./DoctorDashboardGreeting";
import DoctorNotificationBell from "./DoctorNotificationBell";

const doctorQuotes = [
  "The art of medicine consists of amusing the patient while nature cures the disease.",
  "Wherever the art of medicine is loved, there is also a love of humanity.",
  "The good physician treats the disease; the great physician treats the patient who has the disease.",
  "Medicine is a science of uncertainty and an art of probability.",
];

function TopAppointmentsList({ appointments }) {
  if (!appointments.length) {
    return <p>No upcoming appointments.</p>;
  }
  return (
    <div className="top-appointments-grid">
      {appointments.map(app => (
        <div
          key={app.id}
          className={`appointment-box${app.isNew ? " new-appointment-box" : ""}`}
        >
          <div className="appointment-name">{app.patientName}</div>
          <div className="appointment-time">{app.formatted_time}</div>
          {app.isNew && <span className="appointment-new-badge">New</span>}
        </div>
      ))}
    </div>
  );
}

export default function DoctorDashboardPage({ user, alerts = [] }) {
  const [appointments, setAppointments] = useState([]);
  const quote = doctorQuotes[Math.floor(Math.random() * doctorQuotes.length)];

  useEffect(() => {
    fetch("http://localhost:3000/appointments")
      .then(res => res.json())
      .then(data => setAppointments(data));
  }, []);

  const upcomingAppointments = appointments
    .filter(a => a.active)
    .map(a => ({
      id: a.id,
      patientName: a.patientName,
      formatted_time: a.formatted_time,
      isNew: a.isNew || false,
    }))
    .slice(0, 3);

  return (
    <div className="container">
      <div className="home-container">
        <div className="home-left">
          <DoctorDashboardGreeting
            user={user}
            avatar={user.avatarUrl || defaultDoctorAvatar}
            quote={quote}
          />
        </div>
        <div className="home-right">
          <DoctorNotificationBell appointments={upcomingAppointments} />
          <div className="top-appointments-section">
            <h3>Top Upcoming Appointments</h3>
            <TopAppointmentsList appointments={upcomingAppointments} />
          </div>
        </div>
      </div>
    </div>
  );
}
