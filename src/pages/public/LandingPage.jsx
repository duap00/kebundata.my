import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-slate-900 overflow-x-hidden">
      {/* Background Ornament */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-green-50/50 to-transparent -z-10" />

      {/* Navigation - UPDATED MENU */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-green-200">K</div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-slate-800">Kebun<span className="text-green-600">Data</span></span>
              <span className="hidden md:inline-block mt-0.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black tracking-widest uppercase">🚀 Empowering Agroprenuer Muda 2026</span>
            </div>
          </div>

          <div className="hidden md:flex space-x-10 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="#features" className="hover:text-green-600 transition">Features</a>
            <Link to="/software" className="hover:text-green-600 transition">Software</Link>
            <Link to="/hardware" className="hover:text-green-600 transition">Hardware</Link>
            <Link to="/blog" className="hover:text-green-600 transition text-green-700 font-black">Blog</Link>
          </div>

          <Link to="/login" className="bg-slate-900 text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-green-600 transition shadow-xl shadow-green-100">
            LOGIN
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 py-20 lg:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-[10px] font-black tracking-widest uppercase">
                  🚀 Empowering Agroprenuer Muda 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tight">
              Grow Your Farm. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                Automate Profit.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Industrial monitoring for **ZipGrow towers**. Integrated with **Odoo 18** for instant **LHDN MyInvois** compliance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button onClick={() => navigate('/login')} className="bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-green-200">
                GET EARLY ACCESS
              </button>
              {/* Secondary CTA now goes to Blog */}
              <button onClick={() => navigate('/blog')} className="bg-white border-2 border-slate-100 text-slate-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all">
                READ OUR BLOG
              </button>
            </div>
          </div>

          <div className="relative w-full group order-1 lg:order-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white border border-slate-200 rounded-[2.5rem] p-3 shadow-2xl overflow-hidden">
              <div className="bg-slate-900 rounded-[2rem] p-6 md:p-10 aspect-video flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-green-400 text-[10px] font-mono mb-1 underline underline-offset-4 tracking-tighter">LIVE FEED: TOWER_32_S1</p>
                    <h4 className="text-white text-2xl md:text-4xl font-black italic">Healthy Growth</h4>
                  </div>
                  <div className="hidden md:block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-[10px] font-bold border border-green-500/30">LHDN ENCRYPTED</div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 md:gap-6">
                   <div className="bg-white/5 p-3 md:p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                     <p className="text-slate-400 text-[9px] uppercase font-bold mb-1">pH Level</p>
                     <p className="text-xl md:text-3xl font-black text-white">6.5</p>
                   </div>
                   <div className="bg-white/5 p-3 md:p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                     <p className="text-slate-400 text-[9px] uppercase font-bold mb-1">EC Level</p>
                     <p className="text-xl md:text-3xl font-black text-white">1.8</p>
                   </div>
                   <div className="bg-white/5 p-3 md:p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                     <p className="text-slate-400 text-[9px] uppercase font-bold mb-1">Temp</p>
                     <p className="text-xl md:text-3xl font-black text-white">28°C</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section id="features" className="bg-slate-900 py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: '📊', title: 'Real-Time IoT', desc: 'Monitor towers instantly via CM4 gateway.' },
            { icon: '⚖️', title: 'LHDN Ready', desc: 'Direct e-invoicing for every harvest sale.' },
            { icon: '🏢', title: 'Odoo 18 ERP', desc: 'Manage stock & contracts in one system.' }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-green-500/50 transition-all cursor-default group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Software Section */}
      <section id="software" className="bg-white py-32 px-6 border-b border-slate-50">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-6">Integrated Software Ecosystem</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Connecting Odoo 18 with real-time sensor data for full farm transparency.</p>
         </div>
      </section>

      {/* Hardware Section */}
      <section id="hardware" className="bg-slate-50 py-32 px-6">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-6">Industrial Hardware</h2>
            <p className="text-slate-500">ZipGrow towers powered by Raspberry Pi CM4 technology.</p>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">K</div>
              <span className="text-white text-xl font-black tracking-tighter">KebunData</span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed font-medium">
              Next-gen vertical farming automation for modern Malaysian agroprenuers.
            </p>
          </div>
          
          <div className="text-left md:text-right">
            <p className="text-white font-black text-xl tracking-tight">Robot People Industries</p>
            <p className="text-sm text-green-500 font-mono mt-1 font-bold">Reg: NS0312683-V</p>
            <p className="text-xs mt-6 tracking-widest uppercase font-black opacity-30">
              Siliau, Negeri Sembilan, Malaysia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;