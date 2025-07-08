import { useState } from 'react'
import Landing_Page from './Pages/Landing-Page/Landing-Page'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/landing-page" element={<Landing_Page />} />
          <Route path="*" element={<Navigate to="/landing-page" replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
