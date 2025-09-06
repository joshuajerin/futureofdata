import React, { useState } from 'react'
import { Award, Star, Trophy, Gift, Mail, Bell, Search, Filter } from 'lucide-react'

const MilestoneTracker = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const milestones = [
    {
      hours: 10,
      badge: "First Impact",
      description: "New volunteer milestone - first 10 hours",
      color: 'var(--ymca-yellow)',
      icon: Star,
      reward: "Recognition certificate"
    },
    {
      hours: 25,
      badge: "Service Star",
      description: "Consistent service milestone",
      color: 'var(--ymca-blue)',
      icon: Star,
      reward: "YMCA branded item"
    },
    {
      hours: 50,
      badge: "Commitment Champion",
      description: "Dedicated volunteer milestone",
      color: 'var(--ymca-green)',
      icon: Award,
      reward: "Special recognition event invite"
    },
    {
      hours: 100,
      badge: "Passion In Action Award",
      description: "Major contribution milestone",
      color: 'var(--ymca-orange)',
      icon: Trophy,
      reward: "YMCA t-shirt"
    },
    {
      hours: 500,
      badge: "Guiding Light Award",
      description: "Exceptional service milestone",
      color: 'var(--ymca-purple)',
      icon: Trophy,
      reward: "Glass engraved star"
    }
  ]

  const recentAchievements = [
    {
      volunteer: "Sarah Johnson",
      milestone: "First Impact",
      hours: 10,
      date: "2025-09-05",
      branch: "Clippard YMCA"
    },
    {
      volunteer: "Mike Chen",
      milestone: "Service Star",
      hours: 25,
      date: "2025-09-04",
      branch: "Blue Ash Branch"
    },
    {
      volunteer: "Emily Rodriguez",
      milestone: "Commitment Champion",
      hours: 50,
      date: "2025-09-03",
      branch: "Gamble Branch"
    },
    {
      volunteer: "David Thompson",
      milestone: "Passion In Action Award",
      hours: 100,
      date: "2025-09-02",
      branch: "R.C. Durre YMCA"
    },
    {
      volunteer: "Lisa Wilson",
      milestone: "First Impact",
      hours: 10,
      date: "2025-09-01",
      branch: "Beckett Ridge"
    }
  ]

  const upcomingMilestones = [
    {
      volunteer: "John Smith",
      currentHours: 8,
      nextMilestone: "First Impact",
      hoursNeeded: 2,
      branch: "Butler County"
    },
    {
      volunteer: "Maria Garcia",
      currentHours: 22,
      nextMilestone: "Service Star",
      hoursNeeded: 3,
      branch: "Clippard YMCA"
    },
    {
      volunteer: "Robert Lee",
      currentHours: 45,
      nextMilestone: "Commitment Champion",
      hoursNeeded: 5,
      branch: "Blue Ash Branch"
    }
  ]

  const handleSendRecognition = (volunteer, milestone) => {
    alert(`Recognition notification would be sent to ${volunteer} for achieving ${milestone} milestone via Daxko Engage`)
  }

  const handleDataSync = () => {
    alert('Data sync with VolunteerMatters API would pull latest volunteer hours and flag new milestone achievements')
  }

  const filteredAchievements = recentAchievements.filter(achievement => {
    const matchesSearch = achievement.volunteer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         achievement.branch.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === 'all' || achievement.milestone === selectedFilter
    return matchesSearch && matchesFilter
  })

  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>Volunteer Hours Milestone Tracker</h1>
          <p>Recognize volunteer achievements in real-time across all branches</p>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2>Milestone Recognition System</h2>
              <button onClick={handleDataSync} className="btn">
                <Bell size={16} style={{ marginRight: '0.5rem' }} />
                Sync with VolunteerMatters
              </button>
            </div>

            <div className="grid">
              {milestones.map((milestone) => {
                const IconComponent = milestone.icon
                return (
                  <div key={milestone.hours} className="card" style={{ borderLeft: `4px solid ${milestone.color}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                      <IconComponent size={24} style={{ color: milestone.color, marginRight: '0.5rem' }} />
                      <h3>{milestone.badge}</h3>
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: milestone.color, marginBottom: '0.5rem' }}>
                      {milestone.hours} Hours
                    </div>
                    <p style={{ marginBottom: '1rem' }}>{milestone.description}</p>
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem', color: 'var(--ymca-gray)' }}>
                      <Gift size={16} style={{ marginRight: '0.5rem' }} />
                      {milestone.reward}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <section className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2>Recent Achievements</h2>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ position: 'relative' }}>
                  <Search size={16} style={{ position: 'absolute', left: '0.5rem', top: '0.75rem', color: 'var(--ymca-gray)' }} />
                  <input
                    type="text"
                    placeholder="Search volunteers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ paddingLeft: '2rem', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }}
                  />
                </div>
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }}
                >
                  <option value="all">All Milestones</option>
                  {milestones.map(m => (
                    <option key={m.badge} value={m.badge}>{m.badge}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ymca-light-gray)' }}>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Volunteer</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Milestone</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Hours</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Date</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Branch</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAchievements.map((achievement, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid var(--ymca-light-gray)' }}>
                      <td style={{ padding: '1rem', fontWeight: '600' }}>{achievement.volunteer}</td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{ 
                          padding: '0.25rem 0.5rem', 
                          borderRadius: '4px', 
                          fontSize: '0.8rem',
                          background: 'var(--ymca-light-blue)',
                          color: 'white'
                        }}>
                          {achievement.milestone}
                        </span>
                      </td>
                      <td style={{ padding: '1rem' }}>{achievement.hours}</td>
                      <td style={{ padding: '1rem' }}>{achievement.date}</td>
                      <td style={{ padding: '1rem' }}>{achievement.branch}</td>
                      <td style={{ padding: '1rem' }}>
                        <button
                          onClick={() => handleSendRecognition(achievement.volunteer, achievement.milestone)}
                          className="btn"
                          style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                        >
                          <Mail size={14} style={{ marginRight: '0.25rem' }} />
                          Send Recognition
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="card">
            <h2>Upcoming Milestones</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--ymca-gray)' }}>
              Volunteers who are close to reaching their next milestone
            </p>
            <div className="grid">
              {upcomingMilestones.map((upcoming, index) => (
                <div key={index} className="card" style={{ background: 'var(--ymca-light-gray)' }}>
                  <h4 style={{ color: 'var(--ymca-blue)', marginBottom: '0.5rem' }}>{upcoming.volunteer}</h4>
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--ymca-gray)' }}>
                      {upcoming.branch}
                    </div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>
                      {upcoming.currentHours} / {upcoming.currentHours + upcoming.hoursNeeded} hours
                    </div>
                    <div style={{ width: '100%', background: '#ddd', borderRadius: '4px', marginTop: '0.5rem' }}>
                      <div
                        style={{
                          width: `${(upcoming.currentHours / (upcoming.currentHours + upcoming.hoursNeeded)) * 100}%`,
                          background: 'var(--ymca-green)',
                          height: '8px',
                          borderRadius: '4px'
                        }}
                      ></div>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.9rem' }}>
                    <strong>{upcoming.hoursNeeded} hours</strong> until <strong>{upcoming.nextMilestone}</strong>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="card">
            <h3>Integration Features</h3>
            <div className="grid">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Bell size={24} style={{ color: 'var(--ymca-blue)', marginRight: '1rem' }} />
                <div>
                  <h4>Real-time Notifications</h4>
                  <p>Automatic milestone detection with instant staff notifications via email and dashboard alerts</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Mail size={24} style={{ color: 'var(--ymca-green)', marginRight: '1rem' }} />
                <div>
                  <h4>Recognition Templates</h4>
                  <p>Pre-designed email templates and badge graphics for consistent volunteer recognition via Daxko Engage</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Filter size={24} style={{ color: 'var(--ymca-orange)', marginRight: '1rem' }} />
                <div>
                  <h4>VolunteerMatters Integration</h4>
                  <p>Direct API connection for real-time hour tracking and automated milestone flagging across all branches</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default MilestoneTracker