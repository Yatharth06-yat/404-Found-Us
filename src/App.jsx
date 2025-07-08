import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Landing_Page from './Pages/Landing-Page/Landing-Page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing-page/*" element={<Landing_Page />} />
        <Route path="*" element={<Navigate to="/landing-page/home" replace />} />
      </Routes>
    </Router>
  )
}

export default App
