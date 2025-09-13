import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"
import HumanResource from "./Pages/HumanResource"
import ServiceDetail from "./Pages/ServiceDetail"
import AboutPage from "./Pages/AboutPage"
import ContactPage from "./Pages/ContactPage"
import OurTeam from "./Pages/OurTeam"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation speed (in ms)
      offset: 100,      // distance before triggering animation
      once: false,      // ❌ false = animate every time (scroll up & down)
      mirror: true,     // ✅ triggers animation when scrolling back up
    })
  }, [])

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HumanResource />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
