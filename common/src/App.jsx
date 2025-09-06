import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import StatisticsDashboard from './pages/StatisticsDashboard'
import MilestoneTracker from './pages/MilestoneTracker'
import AIPathfinder from './pages/AIPathfinder'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/statistics" element={<StatisticsDashboard />} />
          <Route path="/milestones" element={<MilestoneTracker />} />
          <Route path="/pathfinder" element={<AIPathfinder />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App