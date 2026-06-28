# Idea Video Maker - Free Hosted AI Video Generation App

A complete open-source AI-powered video generation platform built with Next.js, Python FastAPI, and free AI APIs. Turn your ideas, scripts, and articles into stunning videos in minutes.

## ✨ Features

✅ **Text-to-Video Generation** - Convert scripts/articles to professional videos
✅ **AI Voiceover** - Auto-generated speech with multiple voices (ElevenLabs)
✅ **Stock Footage Integration** - Auto-match visuals to content
✅ **Subtitles/Captions** - Automatic transcription & styling
✅ **Video Editor** - Timeline-based editing interface
✅ **Free Hosting** - Deploy on Vercel + Firebase
✅ **User Authentication** - Firebase Auth with profiles
✅ **Video Export** - Download MP4 files in 720p/1080p
✅ **Job Queue** - Background processing with Celery
✅ **Analytics** - Track video views and downloads

## 🏗️ Tech Stack

### Frontend
- **Next.js 14+** - React framework with SSR
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **Firebase SDK** - Authentication
- **Axios** - HTTP client

### Backend
- **Python FastAPI** - High-performance async API
- **PostgreSQL** - Data persistence
- **Redis** - Caching & job queue
- **Celery** - Async task processing
- **SQLAlchemy** - ORM

### AI Services (Free Tier)
- **OpenAI GPT-4** - Script generation
- **ElevenLabs** - Text-to-speech voiceovers
- **Stable Video Diffusion** - Video generation
- **Whisper API** - Speech-to-text subtitles
- **Unsplash API** - Stock footage (free)
- **Pexels API** - Stock videos

## 📁 Project Structure

```
idea-video-maker/
├── frontend/                 # Next.js React app
│   ├── app/
│   │   ├── page.tsx         # Landing page
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/          # Reusable components
│   ├── package.json
│   └── tsconfig.json
├── backend/                 # Python FastAPI
│   ├── main.py             # Entry point
│   ├── config.py           # Configuration
│   ├── models.py           # Database models
│   └── requirements.txt
├── docker-compose.yml       # Local development setup
├── .env.example             # Environment template
└── docs/                    # Documentation
    ├── SETUP.md
    └── API.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.9+
- Docker & Docker Compose (recommended)
- API Keys: OpenAI, ElevenLabs, Firebase

### Option 1: Docker (Recommended)

```bash
# Clone repository
git clone https://github.com/ahmaarouf-star/idea-video-maker.git
cd idea-video-maker

# Setup environment
cp .env.example .env.local

# Edit with your API keys
nano .env.local

# Start all services
docker-compose up
```

Access the app:
- 🌐 **Frontend**: http://localhost:3000
- 🏠 **API**: http://localhost:8000
- 📚 **API Docs**: http://localhost:8000/docs
- 🖥️ **pgAdmin**: http://localhost:5050 (optional)

### Option 2: Manual Setup

**Backend**:
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

**Frontend**:
```bash
cd frontend
npm install
npm run dev
```

## 📖 Documentation

- [Setup Guide](docs/SETUP.md) - Detailed installation
- [API Reference](docs/API.md) - Complete API docs

## 🎬 Workflow

1. **User enters idea/script** → Text input
2. **AI generates storyboard** → OpenAI processes content
3. **Match visuals** → Unsplash/Pexels search
4. **Generate voiceover** → ElevenLabs TTS
5. **Add subtitles** → Whisper transcription
6. **Compose video** → FFmpeg rendering
7. **User customizes** → Timeline editor
8. **Export** → Download MP4

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Submit a Pull Request

## 📋 License

MIT License - See LICENSE file for details.

---

**Built with ❤️ for creators** | [Star ⭐](https://github.com/ahmaarouf-star/idea-video-maker) if you find this useful!
