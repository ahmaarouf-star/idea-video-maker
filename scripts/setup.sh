#!/bin/bash

echo "🚀 Idea Video Maker - Setup Script"
echo "====================================="

echo "\n📋 Checking prerequisites..."

if ! command -v node &> /dev/null; then
  echo "❌ Node.js is not installed"
  exit 1
fi
echo "✅ Node.js $(node -v)"

if ! command -v python3 &> /dev/null; then
  echo "❌ Python 3 is not installed"
  exit 1
fi
echo "✅ Python $(python3 --version)"

echo "\n🔧 Setting up environment..."
cp .env.example .env.local
echo "✅ Created .env.local - Edit with your API keys"

echo "\n📦 Installing dependencies..."

echo "Frontend dependencies..."
cd frontend
npm install
cd ..
echo "✅ Frontend ready"

echo "Backend dependencies..."
cd backend
python3 -m venv venv
source venv/bin/activate 2>/dev/null || . venv/Scripts/activate
pip install -r requirements.txt
cd ..
echo "✅ Backend ready"

echo "\n✨ Setup complete!"
echo "\nNext steps:"
echo "1. Edit .env.local with your API keys"
echo "2. Run: docker-compose up"
echo "3. Visit: http://localhost:3000"
