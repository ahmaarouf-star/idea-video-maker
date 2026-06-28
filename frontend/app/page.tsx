'use client';

import { Video, Zap, Brain, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Video className="w-8 h-8" />
          Idea VideoMaker
        </div>
        <button className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
          Get Started
        </button>
      </nav>

      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <h1 className="text-6xl font-bold mb-6">
          Create Videos with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">AI Magic</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Turn your ideas, scripts, and articles into stunning videos in minutes. No video editing skills required.
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-lg font-bold hover:shadow-lg hover:shadow-purple-500/50">
          Start Creating Free
        </button>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Idea VideoMaker?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Zap, title: 'Lightning Fast', desc: 'Generate videos in minutes' },
            { icon: Brain, title: 'AI-Powered', desc: 'Smart script generation' },
            { icon: Sparkles, title: 'Professional Quality', desc: '4K export included' },
            { icon: Video, title: 'Easy Editor', desc: 'Intuitive timeline editor' }
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="bg-white/10 p-6 rounded-lg border border-white/20">
                <Icon className="w-8 h-8 mb-4 text-purple-400" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
