import React, { useState } from 'react'
import { BarChart3, Users, Clock, MapPin, Download, FileSpreadsheet } from 'lucide-react'

const StatisticsDashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('August 2025')
  const [activeView, setActiveView] = useState('overview')

  const monthlyStats = {
    totalHours: 4250,
    activeVolunteers: 325,
    memberVolunteers: 180,
    projects: 45,
    branches: 12
  }

  const projectCategories = [
    { name: 'Youth Development', hours: 1250, volunteers: 85, projects: 15, color: 'var(--ymca-blue)' },
    { name: 'Wellness Programs', hours: 980, volunteers: 72, projects: 12, color: 'var(--ymca-green)' },
    { name: 'Community Services', hours: 850, volunteers: 65, projects: 8, color: 'var(--ymca-orange)' },
    { name: 'Early Learning Centers', hours: 720, volunteers: 58, projects: 6, color: 'var(--ymca-purple)' },
    { name: 'Out of School Time', hours: 450, volunteers: 45, projects: 4, color: 'var(--ymca-red)' }
  ]

  const branchData = [
    { name: 'Clippard YMCA', hours: 450, volunteers: 32, members: 18 },
    { name: 'R.C. Durre YMCA', hours: 380, volunteers: 28, members: 16 },
    { name: 'Gamble Branch', hours: 320, volunteers: 24, members: 14 },
    { name: 'Beckett Ridge', hours: 290, volunteers: 22, members: 13 },
    { name: 'Blue Ash', hours: 280, volunteers: 21, members: 12 },
    { name: 'Butler County', hours: 270, volunteers: 20, members: 11 }
  ]

  const handleDataExport = () => {
    alert('Export functionality would integrate with VolunteerMatters API to generate Excel reports')
  }

  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>Monthly Volunteer Statistics Report</h1>
          <p>Clear, accurate snapshot of monthly volunteer engagement across the YMCA association</p>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2>Report Controls</h2>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <select 
                  value={selectedMonth} 
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }}
                >
                  <option>August 2025</option>
                  <option>July 2025</option>
                  <option>June 2025</option>
                  <option>May 2025</option>
                </select>
                <button onClick={handleDataExport} className="btn">
                  <Download size={16} style={{ marginRight: '0.5rem' }} />
                  Export Report
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <button 
                onClick={() => setActiveView('overview')}
                className={`btn ${activeView === 'overview' ? '' : 'btn-secondary'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveView('categories')}
                className={`btn ${activeView === 'categories' ? '' : 'btn-secondary'}`}
              >
                Project Categories
              </button>
              <button 
                onClick={() => setActiveView('branches')}
                className={`btn ${activeView === 'branches' ? '' : 'btn-secondary'}`}
              >
                Branch Breakdown
              </button>
            </div>
          </div>

          {activeView === 'overview' && (
            <>
              <section>
                <h2 style={{ marginBottom: '1.5rem', color: 'var(--ymca-red)' }}>
                  {selectedMonth} - Key Metrics
                </h2>
                <div className="dashboard-grid">
                  <div className="stat-card">
                    <Clock size={24} style={{ color: 'var(--ymca-blue)', marginBottom: '0.5rem' }} />
                    <div className="stat-number">{monthlyStats.totalHours.toLocaleString()}</div>
                    <div className="stat-label">Total Hours Served</div>
                  </div>
                  <div className="stat-card">
                    <Users size={24} style={{ color: 'var(--ymca-green)', marginBottom: '0.5rem' }} />
                    <div className="stat-number">{monthlyStats.activeVolunteers}</div>
                    <div className="stat-label">Active Volunteers</div>
                  </div>
                  <div className="stat-card">
                    <Users size={24} style={{ color: 'var(--ymca-orange)', marginBottom: '0.5rem' }} />
                    <div className="stat-number">{monthlyStats.memberVolunteers}</div>
                    <div className="stat-label">YMCA Member Volunteers</div>
                  </div>
                  <div className="stat-card">
                    <BarChart3 size={24} style={{ color: 'var(--ymca-purple)', marginBottom: '0.5rem' }} />
                    <div className="stat-number">{monthlyStats.projects}</div>
                    <div className="stat-label">Active Projects</div>
                  </div>
                </div>
              </section>

              <section className="card">
                <h3>Data Processing Workflow</h3>
                <div className="grid">
                  <div style={{ padding: '1rem', background: 'var(--ymca-light-gray)', borderRadius: '8px' }}>
                    <h4 style={{ color: 'var(--ymca-blue)', marginBottom: '0.5rem' }}>Step 1: Data Extraction</h4>
                    <p>Download Volunteer History Report from VolunteerMatters with date filters (Jan 1, 2025 - Month End)</p>
                  </div>
                  <div style={{ padding: '1rem', background: 'var(--ymca-light-gray)', borderRadius: '8px' }}>
                    <h4 style={{ color: 'var(--ymca-green)', marginBottom: '0.5rem' }}>Step 2: Data Preparation</h4>
                    <p>Remove entries with 0 hours, apply deduplication logic by activity, person, and location</p>
                  </div>
                  <div style={{ padding: '1rem', background: 'var(--ymca-light-gray)', borderRadius: '8px' }}>
                    <h4 style={{ color: 'var(--ymca-orange)', marginBottom: '0.5rem' }}>Step 3: Statistical Analysis</h4>
                    <p>Generate pivot tables for project categories, branch breakdowns, and special reports</p>
                  </div>
                </div>
              </section>
            </>
          )}

          {activeView === 'categories' && (
            <section>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--ymca-red)' }}>
                Project Category Statistics
              </h2>
              <div className="grid">
                {projectCategories.map((category) => (
                  <div key={category.name} className="card">
                    <div style={{ borderLeft: `4px solid ${category.color}`, paddingLeft: '1rem' }}>
                      <h3 style={{ color: category.color }}>{category.name}</h3>
                      <div className="dashboard-grid" style={{ marginTop: '1rem' }}>
                        <div>
                          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--ymca-gray)' }}>
                            {category.hours}
                          </div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--ymca-gray)' }}>Hours</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--ymca-gray)' }}>
                            {category.volunteers}
                          </div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--ymca-gray)' }}>Volunteers</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--ymca-gray)' }}>
                            {category.projects}
                          </div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--ymca-gray)' }}>Projects</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeView === 'branches' && (
            <section>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--ymca-red)' }}>
                Branch/Site Breakdown
              </h2>
              <div className="grid">
                {branchData.map((branch) => (
                  <div key={branch.name} className="card">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                      <MapPin size={20} style={{ color: 'var(--ymca-blue)', marginRight: '0.5rem' }} />
                      <h3>{branch.name}</h3>
                    </div>
                    <div className="dashboard-grid">
                      <div className="stat-card" style={{ margin: 0 }}>
                        <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--ymca-red)' }}>
                          {branch.hours}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--ymca-gray)' }}>Total Hours</div>
                      </div>
                      <div className="stat-card" style={{ margin: 0 }}>
                        <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--ymca-green)' }}>
                          {branch.volunteers}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--ymca-gray)' }}>Active Volunteers</div>
                      </div>
                      <div className="stat-card" style={{ margin: 0 }}>
                        <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--ymca-blue)' }}>
                          {branch.members}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--ymca-gray)' }}>Member Volunteers</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="card">
            <h3>Integration with VolunteerMatters</h3>
            <div className="grid">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FileSpreadsheet size={24} style={{ color: 'var(--ymca-blue)', marginRight: '1rem' }} />
                <div>
                  <h4>Excel Export Integration</h4>
                  <p>Automated data pulls from VolunteerMatters API with proper filtering and deduplication</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BarChart3 size={24} style={{ color: 'var(--ymca-green)', marginRight: '1rem' }} />
                <div>
                  <h4>PowerPoint Reports</h4>
                  <p>Generates monthly statistical reports compatible with existing Y Volunteer presentation formats</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default StatisticsDashboard