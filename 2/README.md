## Selvi — Seeing Every Act of Service

### Inspiration

I used to volunteer at a dog shelter. Every weekend I saw people give their time and energy for nothing in return. Retired folks walked dogs that were not theirs. Kids spent their weekends mopping floors and refilling food bowls. They did it because they loved. They did it because they cared. And all they got was a stamp in a sheet of paper and no recognition.

In my two eyes I saw that they felt invisible.

That broke me. Because belonging is not about showing up. It is about being seen. And the very people who carried the weight of community on their backs were being treated like they did not matter.

That is why we built Selvi.

Selvi is not just a system. It is a voice that says every hour matters, every smile matters, every act of service matters. It takes those invisible stamps on a sheet and turns them into stories, milestones, and recognition. It makes sure that the ten year old who shows up to help at an event feels celebrated. It makes sure that the seventy year old planting gardens in the heat feels honored. Selvi makes sure no one walks away unseen.

### What Selvi Does
- **Recognition**: Milestones, badges, and stories from activity logs
- **Insight**: Dashboards for branches, projects, and trends
- **Care**: Surfaces fatigue signals and engagement patterns
- **Guidance**: AI assistant that recommends roles and next steps

---

## Repository Overview
A multi-app workspace combining analytics dashboards, data APIs, and an AI assistant.

```
/1                      # Staff Intelligence Dashboard (React + Vite + Tailwind)
  src/components        # Charts, tabs, and UI modules (Recharts, Framer Motion)
  src/hooks             # Data ingestion (CSV/XLSX) + processing hooks

/2                      # Volunteer Hours API + Milestones (FastAPI), and a simple tracker UI
  app/main.py           # CSV analytics & milestone endpoints
  volunteer-tracker/    # Lightweight celebratory tracker UI (React)

/3                      # Volunteer PathFinder AI Assistant (FastAPI + ML)
  main.py               # AI chat, matching engine, analytics endpoints
  start.py              # Bootstraps deps/env and runs the app

/common                 # Dev orchestrator and lightweight portal shell
  package.json          # Runs all UIs/APIs together with concurrently
  scripts/run_2_api.sh  # Starts service in /2 on port 8080
  scripts/run_3_api.sh  # Starts service in /3 on port 8000
```
---

## Tech Stack (In Depth)

### Frontend
- **React 19 + Vite 7**: Fast dev server and modern tooling
- **Tailwind CSS 3**: Utility-first styling for consistent, responsive UI
- **Recharts 3**: Interactive visualizations (trend lines, breakdowns)
- **Framer Motion 12**: Micro-interactions and motion for feedback
- **Lucide Icons**: Clean, accessible iconography
- **CSV/XLSX ingestion**: `papaparse`, `xlsx`, `react-dropzone` for local files

### Data + Analytics
- **Pandas**: Cleansing, normalization, and aggregations
- **Milestone engine**: Hours-based awards computed server-side
- **Storyworlds**: Keyword-driven project/tag mapping for meaningful grouping
- **Derived KPIs**: Engagement rate, avg hours per volunteer, category/branch shares

### Backend Services
- **FastAPI + Uvicorn**: Two services
  - Service 2 (Hours + Milestones): CSV-driven insights and recognition
  - Service 3 (PathFinder AI): AI chat, ML matching, analytics
- **Pydantic v2**: Typed models for crisp request/response contracts
- **scikit-learn + sentence-transformers** (Service 3): Matching and embeddings
- **Supabase (optional)**: Storing preferences, matches, analytics (Service 3)

### Tooling & Dev Experience
- **Concurrently**: Orchestrate all apps in one command
- **Node + Python**: Polyglot setup to meet each need with the right tool

### inference.net + Llama 3.2 (Service 3): Real-time AI inference for intelligent chat responses
- **Mode**: meta-llama/llama-3.2-11b-instruct/fp-16
- OpenAI-compatible API integration via https://api.inference.net/v1/chat/completions
- Dataset-grounded responses combining AI inference with volunteer data context
- Fallback system for graceful degradation when API is unavailable

---

## Architecture & Flow

- `1/` dashboard ingests CSV/XLSX locally in-browser for instant analytics
- `2/` API provides normalized aggregates, achievements, and detail lookups
- `3/` AI assistant provides chat, matching, and analytics; integrates optional persistence

--

## What’s Next (Roadmap)
- **VolunteerMatters integrations**
  - Real-time triggers via webhooks/API for immediate milestone awards
  - Two-way sync for status, credentials, and onboarding steps
- **Automated recognition**
  - Badges, emails, and YMCA perks automatically issued at thresholds
  - Printable certificates and shareable links for resumes/LinkedIn
- **Wellbeing & retention**
  - Burnout risk indicators from cadence/variance in hours
  - Nudge engine for healthy workload distribution across branches
- **Personalized journeys**
  - Preference modeling + narrative summaries of impact over time
  - Cross-opportunity recognition so nothing is missed
- **Org-wide scale**
  - Multi-branch and multi-association rollout (beyond Cincinnati)
  - Role-based access control, SSO, and audit trails
- **Data governance & quality**
  - Data contracts with VolunteerMatters exports
  - Ingestion pipeline to normalize tags and fix inconsistencies

---

## Security & Privacy
- Store secrets in environment variables; avoid committing API keys
- PII such as emails is processed for recognition and matching; protect datasets at rest
- Enable HTTPS and proper CORS in production environments

--

### You are seen. You matter. You belong.
Selvi exists to celebrate the people who carry community on their backs — from the ten-year-old helping at an event to the seventy-year-old planting gardens in the summer heat.

