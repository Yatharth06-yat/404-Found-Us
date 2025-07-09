import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import NavbarLinks from "./NavbarLinks";
import NavbarSidebar from "./NavbarSidebar";
import "./Navbar.css";
import DoctorPortalLogo from "../../assets/WhatsApp_Image_2025-07-08_at_11.17.20_67410e9b-removebg-preview.png";

const navLinks = [
  { to: "/doctor-side/home", label: "Dashboard" },
  { to: "/doctor-side/patientList", label: "PatientList" },
  { to: "/doctor-side/doctorProfile", label: "DoctorProfile" },
  { to: "/doctor-side/profile", label: "Profile" },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            src={DoctorPortalLogo}
            alt="Doctor Portal Logo"
            className="navbar-logo-image"
          />
          <NavLink to="/doctor-side/home" onClick={closeSidebar}>
            Doctor Portal
          </NavLink>
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
