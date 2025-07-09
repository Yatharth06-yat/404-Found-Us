import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pl from "./components/pl";
import Dl from "./components/dl";
import Logout from "./components/Logout";
import Dashboard from "./components/dbb";
import Footer from "./components/Footer";
import "./style/App.css";

function Admin_Side() {
  return (
    <>
      <Navbar />
      <div className="main-content" style={{ paddingBottom: "3rem" }}>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="pl" element={<Pl />} />
          <Route path="dl" element={<Dl />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default Admin_Side;
