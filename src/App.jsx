import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Landing_Page from './Pages/Landing-Page/Landing-Page'
import Patient_Side from './Pages/Patient-Side/Patient-Side'
import Doctor_Side from './Pages/Doctor-Side/Doctor-Side'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing-page/*" element={<Landing_Page />} />
        <Route path="/patient-side/*" element={<Patient_Side />} />
        <Route path="/doctor-side/*" element={<Doctor_Side />} />
        <Route path="*" element={<Navigate to="/landing-page/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
