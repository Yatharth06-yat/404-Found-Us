import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import NavbarLinks from "./NavbarLinks";
import NavbarSidebar from "./NavbarSidebar";
import "./Navbar.css";

const navLinks = [
  { to: "/home", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/sign-up", label: "Sign Up" }
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/home" onClick={closeSidebar}>
            <img src="src\assets\react.svg" alt="" />
          </NavLink>
        </div>
        <NavbarLinks links={navLinks} onClick={closeSidebar} />
        <button
          className="menu-toggle"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </nav>
      <NavbarSidebar open={sidebarOpen} links={navLinks} onClose={closeSidebar} />
    </>
  );
}
