import React from 'react';
import { Link } from 'react-router-dom';

const Hardware = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">K</div>
            <div>
              <div className="text-xl font-black">KebunData</div>
              <div className="text-xs text-green-600 font-black">Empowering Agroprenuer Muda 2026</div>
            </div>
          </div>
          <nav className="space-x-4">
            <Link to="/" className="text-sm font-bold text-slate-600">Home</Link>
            <Link to="/software" className="text-sm font-bold text-slate-600">Software</Link>
            <Link to="/blog" className="text-sm font-bold text-green-600">Blog</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h1 className="text-4xl font-black mb-6">Industrial Hardware</h1>
        <p className="text-slate-600 max-w-2xl">ZipGrow towers powered by Raspberry Pi CM4 technology. Ruggedized sensors, gateways, and edge compute for reliable farm telemetry.</p>
      </main>
    </div>
  );
};

export default Hardware;
