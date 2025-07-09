import React, { useState } from "react";
import "../style/Navbar.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="HealthSync Logo" className="navbar-logo-image" />
        <NavLink
          to="/admin-side/dashboard"
          className="navbar-logo-text"
          onClick={() => setMenuOpen(false)}
        >
          HealthSync Admin
        </NavLink>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span className="menu-icon">&#9776;</span>
      </button>

      <div className={`navbar-links-container mobile ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/admin-side/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Analytics Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin-side/pl"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Patients List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin-side/dl"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Doctor List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin-side/logout"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
