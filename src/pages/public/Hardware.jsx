import React from 'react';
import { Link } from 'react-router-dom';
import SEO from "../../components/SEO";

const Hardware = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SEO 
        title="Industrial Hardware" 
        description="Industrial-grade IoT gateways for ZipGrow towers. Powered by Raspberry Pi CM4 for reliable farm telemetry."
        keywords="Raspberry Pi CM4, IoT Gateway, ZipGrow Malaysia, Farm Sensors"
      />

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
            <Link to="/" className="text-sm font-bold text-slate-600 hover:text-green-600 transition">Home</Link>
            <Link to="/software" className="text-sm font-bold text-slate-600 hover:text-green-600 transition">Software</Link>
            <Link to="/blog" className="text-sm font-bold text-green-600">Blog</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="max-w-2xl mb-16">
          <h1 className="text-5xl font-black mb-6 tracking-tighter">Industrial Hardware</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            ZipGrow towers powered by **Raspberry Pi CM4** technology. Ruggedized sensors, gateways, and edge compute designed specifically for high-humidity greenhouse environments.
          </p>
        </div>

        {/* Hardware Specs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
            <div className="text-3xl mb-4">📟</div>
            <h3 className="font-black text-lg mb-2">Edge Gateway</h3>
            <p className="text-slate-500 text-sm">Custom RPi CM4 baseboards with industrial power protection and dual-band connectivity.</p>
          </div>

          <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
            <div className="text-3xl mb-4">🧪</div>
            <h3 className="font-black text-lg mb-2">Sensor Suite</h3>
            <p className="text-slate-500 text-sm">Industrial pH, EC, and DO probes with digital isolation to prevent signal interference.</p>
          </div>

          <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
            <div className="text-3xl mb-4">🏗️</div>
            <h3 className="font-black text-lg mb-2">Tower Control</h3>
            <p className="text-slate-500 text-sm">Automated dosing and irrigation valves integrated directly into ZipGrow plumbing systems.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-center text-white">
          <h2 className="text-3xl font-black mb-4">Ready to Automate?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">Deploy industrial-grade monitoring in your farm today. LHDN MyInvois ready.</p>
          <Link to="/contact" className="inline-block bg-green-600 px-8 py-4 rounded-2xl font-black hover:bg-green-500 transition">
            GET A QUOTE
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Hardware;