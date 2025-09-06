# YMCA Volunteer Dashboard

A comprehensive React web application serving as a one-stop hub for all YMCA volunteer management tools and resources.

## Overview

This dashboard consolidates three key volunteer management wishlists into a unified platform:

1. **Monthly Statistics Dashboard** - Track volunteer engagement metrics across YMCA branches
2. **Milestone Tracker** - Recognize volunteer achievements in real-time  
3. **AI PathFinder Assistant** - Match volunteers with opportunities using AI guidance

## Features

### 🏠 Homepage
- Welcome message with YMCA mission and values
- Overview of Youth Development, Wellness, and Community Impact programs
- Quick access to all volunteer tools
- Key statistics dashboard

### 📊 Statistics Dashboard (Wishlist #1)
- Monthly volunteer engagement reports
- Project category breakdowns
- Branch-specific metrics
- Integration with VolunteerMatters data
- Export functionality for PowerPoint reports

### 🏆 Milestone Tracker (Wishlist #2)
- Real-time milestone detection and recognition
- Badge system: First Impact (10hrs) → Service Star (25hrs) → Commitment Champion (50hrs) → Passion In Action (100hrs) → Guiding Light (500hrs)
- Recent achievements tracking
- Upcoming milestones monitoring
- Email notification system integration

### 🤖 AI PathFinder (Wishlist #3 & #4)
- Interactive AI chat assistant
- Personalized volunteer opportunity matching
- Step-by-step onboarding guidance
- Integration with VolunteerMatters and YMCA resources
- Quick question templates for common inquiries

## Technology Stack

- **Frontend**: React 18 with React Router
- **Styling**: Custom CSS with YMCA brand colors and responsive design
- **Icons**: Lucide React icon library
- **Build Tool**: Vite for fast development and building

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository and navigate to the common folder:
```bash
cd common
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Integration Points

### VolunteerMatters API
- Volunteer History Report data extraction
- Real-time hour tracking
- Project catalog integration
- User registration flow

### Daxko Engage
- Email notification templates
- Badge recognition system
- Member communication

### External Resources
- YMCA Cincinnati volunteer page: https://www.myy.org/volunteering
- VolunteerMatters project catalog: https://cincinnatiymca.volunteermatters.org/project-catalog
- Interest form: https://ymcacincinnati.qualtrics.com/jfe/form/SV_0JklTjQEJTQmS2i

## YMCA Brand Colors

The application uses official YMCA brand colors:
- YMCA Red: `#e31837`
- YMCA Blue: `#0071ce`
- YMCA Green: `#009639`
- YMCA Orange: `#ff6900`
- Additional supporting colors for enhanced visual hierarchy

## Project Structure

```
common/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── StatisticsDashboard.jsx
│   │   ├── MilestoneTracker.jsx
│   │   └── AIPathfinder.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── README.md
```

## Future Enhancements

- Real API integration with VolunteerMatters
- Advanced data visualization charts
- Mobile app companion
- Push notification system
- Advanced AI conversation capabilities
- Multi-language support

## Contributing

This project supports the YMCA's mission of building belonging through purpose and passion. Contributions should align with YMCA values of caring, honesty, respect, and responsibility.

## License

Developed for YMCA of Greater Cincinnati volunteer management.