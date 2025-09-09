import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-container">
          <Link to="/" className="logo">
            YMCA Volunteer Hub
          </Link>
          <div className="nav-links">
            <Link to="/" className={isActive('/')}>
              Home
            </Link>
            <Link to="/statistics" className={isActive('/statistics')}>
              Statistics Dashboard
            </Link>
            <Link to="/milestones" className={isActive('/milestones')}>
              Milestone Tracker
            </Link>
            <Link to="/pathfinder" className={isActive('/pathfinder')}>
              AI PathFinder
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation