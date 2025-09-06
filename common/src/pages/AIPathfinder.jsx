import React, { useState } from 'react'
import { Bot, MessageCircle, Send, User, ExternalLink, Calendar, MapPin, Clock } from 'lucide-react'

const AIPathfinder = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi! I\'m the YMCA Volunteer PathFinder AI. I\'m here to help you explore volunteer opportunities that match your interests, skills, and availability. What would you like to know about volunteering at the YMCA?',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const quickQuestions = [
    'What volunteer opportunities are available?',
    'How do I get started volunteering?',
    'What are the requirements to volunteer?',
    'Can I volunteer with my family?',
    'What training is provided?',
    'How do I sign up for VolunteerMatters?'
  ]

  const volunteerOpportunities = [
    {
      title: 'Youth Sports Coaching',
      category: 'Youth Development',
      location: 'Multiple Branches',
      timeCommitment: '2-3 hours/week',
      skills: 'Sports knowledge, patience with children',
      description: 'Coach youth sports teams and help develop athletic skills and sportsmanship.',
      link: 'https://cincinnatiymca.volunteermatters.org/project-catalog'
    },
    {
      title: 'Childcare Assistant',
      category: 'Family & Community',
      location: 'Early Learning Centers',
      timeCommitment: '4-6 hours/week',
      skills: 'Child development interest, reliability',
      description: 'Support childcare programs and help create safe, nurturing environments.',
      link: 'https://cincinnatiymca.volunteermatters.org/project-catalog'
    },
    {
      title: 'Senior Fitness Programs',
      category: 'Wellness',
      location: 'Senior Centers',
      timeCommitment: '2-4 hours/week',
      skills: 'Patience, enthusiasm for senior wellness',
      description: 'Assist with senior fitness classes and social activities.',
      link: 'https://cincinnatiymca.volunteermatters.org/project-catalog'
    },
    {
      title: 'Community Garden Maintenance',
      category: 'Community Services',
      location: 'Outdoor Spaces',
      timeCommitment: 'Flexible',
      skills: 'Gardening knowledge helpful but not required',
      description: 'Help maintain community gardens and teach gardening skills.',
      link: 'https://cincinnatiymca.volunteermatters.org/project-catalog'
    }
  ]

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    setTimeout(() => {
      const response = generateAIResponse(inputMessage)
      const aiMessage = {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (question) => {
    const lowerQuestion = question.toLowerCase()
    
    if (lowerQuestion.includes('getting started') || lowerQuestion.includes('get started') || lowerQuestion.includes('begin')) {
      return 'Great! Here\'s how to get started volunteering at the YMCA:\n\n1. **Create a VolunteerMatters account** at https://cincinnatiymca.volunteermatters.org/volunteer/register\n2. **Complete the volunteer screening process** (background check, references)\n3. **Browse available opportunities** in our project catalog\n4. **Sign up for orientation** at your preferred branch\n5. **Complete any required training** for your chosen role\n\nWould you like help with any specific step, or do you have questions about particular volunteer opportunities?'
    }
    
    if (lowerQuestion.includes('requirements') || lowerQuestion.includes('screening') || lowerQuestion.includes('background')) {
      return 'YMCA volunteer requirements vary by role, but generally include:\n\n**Basic Requirements:**\n• Background check (we\'ll help you complete this)\n• Personal references\n• Commitment to YMCA values\n• Age requirements (varies by program)\n\n**Additional Requirements** (role-specific):\n• Child protection training for youth programs\n• CPR/First Aid certification for some positions\n• Specialized training for certain activities\n\nDon\'t worry - we provide all necessary training and support! What type of volunteer role interests you most?'
    }
    
    if (lowerQuestion.includes('family') || lowerQuestion.includes('kids') || lowerQuestion.includes('children')) {
      return 'Yes! The YMCA offers many family-friendly volunteer opportunities:\n\n**Family Volunteer Options:**\n• Community service projects\n• Special events and fundraisers\n• Garden maintenance and outdoor activities\n• Holiday celebrations and community gatherings\n• Food drives and community outreach\n\n**Age Guidelines:**\n• Children under 14: Must be accompanied by adult\n• Teens 14-17: Some independent opportunities available\n• Families: Many projects designed for all ages\n\nVolunteering together is a great way to teach children about service and community involvement! What activities interest your family most?'
    }
    
    if (lowerQuestion.includes('opportunities') || lowerQuestion.includes('volunteer') || lowerQuestion.includes('available')) {
      return 'The YMCA offers diverse volunteer opportunities across several areas:\n\n**Youth Development:**\n• Sports coaching and officiating\n• After-school program support\n• Camp counseling and activities\n• Mentoring and tutoring\n\n**Wellness:**\n• Fitness class assistance\n• Senior programs\n• Aquatics support\n• Health and wellness events\n\n**Community Services:**\n• Food assistance programs\n• Community gardens\n• Special events\n• Outreach programs\n\nWhat areas match your interests? I can provide more specific information about any of these programs!'
    }
    
    if (lowerQuestion.includes('time') || lowerQuestion.includes('hours') || lowerQuestion.includes('commitment')) {
      return 'YMCA volunteer time commitments are flexible to fit your schedule:\n\n**Flexible Options:**\n• One-time events (2-4 hours)\n• Weekly commitments (2-6 hours/week)\n• Monthly projects (varies)\n• Seasonal programs (summer camps, etc.)\n• Special events throughout the year\n\n**Popular Schedules:**\n• Before/after work (early morning or evening)\n• Weekends\n• During lunch breaks\n• School holidays\n\nWe work with your availability! What time commitment works best for you?'
    }
    
    return 'I\'d be happy to help you learn more about YMCA volunteer opportunities! I can provide information about:\n\n• Getting started with volunteering\n• Volunteer requirements and screening\n• Available opportunities by category\n• Time commitments and scheduling\n• Family volunteer options\n• Training and support provided\n\nWhat specific aspect would you like to know more about? Or feel free to ask any other questions about volunteering at the YMCA!'
  }

  const handleQuickQuestion = (question) => {
    setInputMessage(question)
  }

  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>AI PathFinder Assistant</h1>
          <p>Find volunteer opportunities that align with your interests, availability, and skills</p>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="grid">
            <div className="card" style={{ height: 'fit-content' }}>
              <h2>
                <Bot size={24} style={{ marginRight: '0.5rem', color: 'var(--ymca-blue)' }} />
                Chat with PathFinder AI
              </h2>
              
              <div 
                style={{ 
                  height: '400px', 
                  overflowY: 'auto', 
                  border: '1px solid #e0e0e0', 
                  borderRadius: '8px', 
                  padding: '1rem', 
                  marginBottom: '1rem',
                  background: '#fafafa'
                }}
              >
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      display: 'flex', 
                      marginBottom: '1rem',
                      justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start'
                    }}
                  >
                    <div 
                      style={{ 
                        maxWidth: '80%',
                        padding: '0.75rem',
                        borderRadius: '12px',
                        background: message.role === 'user' ? 'var(--ymca-blue)' : 'white',
                        color: message.role === 'user' ? 'white' : 'var(--ymca-gray)',
                        border: message.role === 'assistant' ? '1px solid #e0e0e0' : 'none',
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {message.role === 'assistant' && (
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
                          <Bot size={16} style={{ marginRight: '0.25rem' }} />
                          PathFinder AI
                        </div>
                      )}
                      {message.content}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div style={{ display: 'flex', marginBottom: '1rem' }}>
                    <div 
                      style={{ 
                        padding: '0.75rem',
                        borderRadius: '12px',
                        background: 'white',
                        border: '1px solid #e0e0e0',
                        color: 'var(--ymca-gray)'
                      }}
                    >
                      <Bot size={16} style={{ marginRight: '0.5rem' }} />
                      PathFinder is typing...
                    </div>
                  </div>
                )}
              </div>
              
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me about volunteer opportunities..."
                  style={{ 
                    flex: 1, 
                    padding: '0.75rem', 
                    borderRadius: '6px', 
                    border: '1px solid #ddd',
                    fontSize: '1rem'
                  }}
                />
                <button onClick={handleSendMessage} className="btn">
                  <Send size={16} />
                </button>
              </div>
              
              <div style={{ marginTop: '1rem' }}>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--ymca-gray)' }}>Quick Questions:</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      style={{
                        padding: '0.5rem 0.75rem',
                        fontSize: '0.8rem',
                        borderRadius: '20px',
                        border: '1px solid var(--ymca-blue)',
                        background: 'white',
                        color: 'var(--ymca-blue)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = 'var(--ymca-blue)'
                        e.target.style.color = 'white'
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'white'
                        e.target.style.color = 'var(--ymca-blue)'
                      }}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="card">
              <h2>Featured Volunteer Opportunities</h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--ymca-gray)' }}>
                Discover volunteer roles that match your interests and schedule
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {volunteerOpportunities.map((opportunity, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      padding: '1rem', 
                      border: '1px solid #e0e0e0', 
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
                      e.currentTarget.style.borderColor = 'var(--ymca-blue)'
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.borderColor = '#e0e0e0'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <h4 style={{ color: 'var(--ymca-blue)' }}>{opportunity.title}</h4>
                      <span 
                        style={{ 
                          padding: '0.25rem 0.5rem', 
                          fontSize: '0.7rem', 
                          borderRadius: '12px', 
                          background: 'var(--ymca-light-blue)', 
                          color: 'white'
                        }}
                      >
                        {opportunity.category}
                      </span>
                    </div>
                    
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{opportunity.description}</p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--ymca-gray)' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <MapPin size={14} style={{ marginRight: '0.25rem' }} />
                        {opportunity.location}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Clock size={14} style={{ marginRight: '0.25rem' }} />
                        {opportunity.timeCommitment}
                      </div>
                    </div>
                    
                    <div style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
                      <strong>Skills:</strong> {opportunity.skills}
                    </div>
                    
                    <div style={{ marginTop: '1rem' }}>
                      <a 
                        href={opportunity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                      >
                        <ExternalLink size={14} style={{ marginRight: '0.25rem' }} />
                        Apply Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <section className="card">
            <h2>Getting Started Resources</h2>
            <div className="grid">
              <div style={{ textAlign: 'center' }}>
                <User size={32} style={{ color: 'var(--ymca-blue)', marginBottom: '0.5rem' }} />
                <h4>Create Account</h4>
                <p>Sign up for VolunteerMatters to browse opportunities and track your volunteer hours.</p>
                <a 
                  href="https://cincinnatiymca.volunteermatters.org/volunteer/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ marginTop: '0.5rem' }}
                >
                  Register Now
                </a>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <Calendar size={32} style={{ color: 'var(--ymca-green)', marginBottom: '0.5rem' }} />
                <h4>Browse Projects</h4>
                <p>Explore all available volunteer opportunities in our comprehensive project catalog.</p>
                <a 
                  href="https://cincinnatiymca.volunteermatters.org/project-catalog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ marginTop: '0.5rem' }}
                >
                  View Catalog
                </a>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <ExternalLink size={32} style={{ color: 'var(--ymca-orange)', marginBottom: '0.5rem' }} />
                <h4>Interest Form</h4>
                <p>Tell us about your interests and we'll connect you with the right volunteer opportunities.</p>
                <a 
                  href="https://ymcacincinnati.qualtrics.com/jfe/form/SV_0JklTjQEJTQmS2i"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                  style={{ marginTop: '0.5rem' }}
                >
                  Complete Form
                </a>
              </div>
            </div>
          </section>

          <section className="card">
            <h3>AI Assistant Features</h3>
            <div className="grid">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <MessageCircle size={24} style={{ color: 'var(--ymca-blue)', marginRight: '1rem' }} />
                <div>
                  <h4>24/7 Support</h4>
                  <p>Get instant answers to questions about volunteer requirements, processes, and opportunities</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Bot size={24} style={{ color: 'var(--ymca-green)', marginRight: '1rem' }} />
                <div>
                  <h4>Personalized Matching</h4>
                  <p>AI-powered recommendations based on your interests, skills, and availability</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ExternalLink size={24} style={{ color: 'var(--ymca-orange)', marginRight: '1rem' }} />
                <div>
                  <h4>Resource Integration</h4>
                  <p>Direct links to VolunteerMatters, YMCA resources, and volunteer handbook information</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default AIPathfinder