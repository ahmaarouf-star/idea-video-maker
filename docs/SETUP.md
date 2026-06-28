# Idea Video Maker - Setup Guide

## Prerequisites

- Node.js 18+
- Python 3.9+
- Docker & Docker Compose
- Git

## Installation

### Option 1: Docker (Recommended)

```bash
git clone https://github.com/ahmaarouf-star/idea-video-maker.git
cd idea-video-maker

cp .env.example .env.local
# Edit .env.local with your API keys

docker-compose up
```

Access:
- Frontend: http://localhost:3000
- Backend: http://localhost:8000
- API Docs: http://localhost:8000/docs

### Option 2: Manual Setup

**Backend:**
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Edit `.env.local` with your API keys:

```env
OPENAI_API_KEY=sk-...
ELEVEN_LABS_API_KEY=...
FIREBASE_API_KEY=...
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
```

## Troubleshooting

### Port already in use
```bash
lsof -i :3000
kill -9 <PID>
```

### Database connection error
```bash
# Ensure PostgreSQL is running
psql -U videoadmin -d idea_video_maker
```
