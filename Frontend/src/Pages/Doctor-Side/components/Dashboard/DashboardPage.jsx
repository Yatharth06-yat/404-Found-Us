import React, { useEffect, useState } from "react";
import "./DashboardPage.css";
import defaultAvatar from '../../assets/istockphoto-610003972-612x612.jpg';
import DashboardGreeting from "./DashboardGreeting";
import NotificationBell from "./NotificationBell";
import DailyReminders from "./DailyReminders";
import StatsCards from "./StatsCards";
import HealthSummaryCard from "./HealthSummaryCard";
import HealthTrackingSection from "./HealthTrackingSection";
import HealthTrendsSection from "./HealthTrendsSection";

const healthQuotes = [
  "The groundwork for all happiness is good health.",
  "It is health that is real wealth and not pieces of gold and silver.",
  "Health is a state of complete harmony of the body, mind and spirit.",
  "Take care of your body. It’s the only place you have to live."
];

export default function DashboardPage({
  user = { name: "User", avatarUrl: defaultAvatar },
  alerts = [],
}) {
  const [appointments, setAppointments] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [bloodReports, setBloodReports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/appointments")
      .then(res => res.json())
      .then(data => setAppointments(data));
    fetch("http://localhost:3000/prescriptions")
      .then(res => res.json())
      .then(data => setPrescriptions(data));
    fetch("http://localhost:3000/reports")
      .then(res => res.json())
      .then(data => setBloodReports(data));
  }, []);

  const selectedQuote = healthQuotes[Math.floor(Math.random() * healthQuotes.length)];

  return (
    <>
      <div className="home-container">
        <div className="home-left">
          <DashboardGreeting user={user} avatar={user.avatarUrl || defaultAvatar} quote={selectedQuote} />
        </div>
        <div className="home-right">
          <NotificationBell
            alerts={alerts}
            appointments={appointments}
            prescriptions={prescriptions}
          />
          <DailyReminders prescriptions={prescriptions} />
        </div>
      </div>
      <StatsCards
        appointments={appointments}
        prescriptions={prescriptions}
        bloodReports={bloodReports}
      />
      <div className="health-summary-container">
        <HealthSummaryCard bloodReports={bloodReports} />
      </div>
      <HealthTrackingSection />
      <HealthTrendsSection reportsData={bloodReports} />
    </>
  );
}
