import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import NavbarLinks from "./NavbarLinks";
import NavbarSidebar from "./NavbarSidebar";
import "./Navbar.css";

const navLinks = [
  { to: "/patient-side/home", label: "Dashboard" },
  { to: "/patient-side/appointments", label: "Appointments" },
  { to: "/patient-side/medicalHistory", label: "MedicalHistory" },
  { to: "/patient-side/reports", label: "Reports&Prescriptions" },
  { to: "/patient-side/profile", label: "Profile" }
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/patient-side/home" onClick={closeSidebar}>PatientPortal</NavLink>
        </div>
        <NavbarLinks links={navLinks} onClick={closeSidebar} />
        <button className="menu-toggle" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
          <MenuIcon />
        </button>
      </nav>
      <NavbarSidebar open={sidebarOpen} links={navLinks} onClose={closeSidebar} />
    </>
  );
}