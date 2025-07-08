import { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import SignUp from "./components/SignUp/SignUp.jsx/SignUp";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import './Landing-Page.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Landing_Page() {


  return (
    <Router>
      <div className="App-root">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route
              path="/home"
              element={
                <Home />
              }
            />
            <Route
              path="/about"
              element={
                <About />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact />
              }
            />
            <Route
              path="/sign-up"
              element={
                <SignUp />
              }
            />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default Landing_Page;
