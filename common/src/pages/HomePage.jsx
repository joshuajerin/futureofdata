import React from 'react'
import { Link } from 'react-router-dom'
import { BarChart3, Award, Bot, Users, Heart, Target } from 'lucide-react'

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>YMCA Volunteer Dashboard</h1>
          <p>Where Purpose Meets Passion - Building Community Through Belonging</p>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <section className="card">
            <h2>Welcome to the YMCA Volunteer Hub</h2>
            <p>
              At the Y, every program—whether it's sports, swim lessons, childcare, or community outreach—is about more than the activity itself. 
              It's about helping people achieve their potential, belong to something greater, and relate across differences. 
              This is where purpose meets passion, and where community comes alive.
            </p>
            
            <div className="grid">
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <Users size={32} style={{ color: 'var(--ymca-blue)', marginRight: '0.5rem' }} />
                  <h3>Youth Development</h3>
                </div>
                <p>Education, camps, leadership, and sports that prepare young people for life.</p>
              </div>
              
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <Heart size={32} style={{ color: 'var(--ymca-red)', marginRight: '0.5rem' }} />
                  <h3>Wellness</h3>
                </div>
                <p>Group fitness, aquatics, sports leagues, and senior programs that promote health for every stage of life.</p>
              </div>
              
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <Target size={32} style={{ color: 'var(--ymca-green)', marginRight: '0.5rem' }} />
                  <h3>Community Impact</h3>
                </div>
                <p>Affordable childcare, intergenerational activities, and outreach that ensure no one is left out.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--ymca-red)' }}>
              Volunteer Management Tools
            </h2>
            
            <div className="grid">
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <BarChart3 size={40} style={{ color: 'var(--ymca-blue)', marginRight: '1rem' }} />
                  <h3>Monthly Statistics Dashboard</h3>
                </div>
                <p>
                  Comprehensive monthly volunteer engagement reports across the YMCA association. 
                  Track hours served, active volunteers, member involvement, and project types using 
                  data from VolunteerMatters and internal tools.
                </p>
                <Link to="/statistics" className="btn">
                  View Statistics Dashboard
                </Link>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <Award size={40} style={{ color: 'var(--ymca-green)', marginRight: '1rem' }} />
                  <h3>Milestone Tracker</h3>
                </div>
                <p>
                  Recognize volunteer achievements in real-time across all branches. Track service hour 
                  milestones and celebrate contributions as they happen, reinforcing a culture of 
                  recognition, belonging, and purpose.
                </p>
                <Link to="/milestones" className="btn btn-secondary">
                  Track Milestones
                </Link>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <Bot size={40} style={{ color: 'var(--ymca-orange)', marginRight: '1rem' }} />
                  <h3>AI PathFinder Assistant</h3>
                </div>
                <p>
                  AI-powered volunteer matching system that helps individuals explore, understand, and 
                  navigate YMCA volunteer opportunities. Find roles that align with interests, 
                  availability, and skills.
                </p>
                <Link to="/pathfinder" className="btn btn-accent">
                  Find Your Path
                </Link>
              </div>
            </div>
          </section>

          <section className="card" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <h2>Belonging & Connection</h2>
            <p>
              At the Y, belonging is not just a tagline—it's lived. Families connect across generations, 
              cultures, and neighborhoods. Whether in a pool, a gym, a camp cabin, or a community event, 
              relationships are built that strengthen the whole region.
            </p>
            <div className="dashboard-grid">
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Branch Locations</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Active Volunteers</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Annual Volunteer Hours</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-label">Programs Served</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default HomePage