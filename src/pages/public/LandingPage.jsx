import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; 


const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-slate-900 overflow-x-hidden selection:bg-green-100 selection:text-green-900">
      
      {/* [2] SEO METADATA SECTION */}
      <Helmet>
        <title>KebunData | IoT Vertical Farming & Odoo 18 Integration</title>
        <meta name="description" content="Automate your ZipGrow towers with Raspberry Pi IoT and Odoo 18 ERP. LHDN MyInvois compliant smart farming for Malaysian Agroprenuers." />
        <meta name="keywords" content="ZipGrow Malaysia, Agrotech Malaysia, Odoo 18 LHDN, Agroprenuer Muda 2026, IoT Farming" />
        
        {/* Open Graph (WhatsApp/LinkedIn/Facebook) */}
        <meta property="og:title" content="Grow Your Farm. Automate Profit. | KebunData" />
        <meta property="og:description" content="Next-gen vertical farming automation with RPi CM4 & Odoo integration." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kebundata.my" />
      </Helmet>

      {/* Background Ornament */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-gradient-to-b from-green-50/60 to-transparent -z-10" />
    <div className="min-h-screen bg-[#fdfdfd] text-slate-900 overflow-x-hidden selection:bg-green-100 selection:text-green-900">
      {/* Background Ornament */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-gradient-to-b from-green-50/60 to-transparent -z-10" />

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-xl z-[100] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-green-200 rotate-3 hover:rotate-0 transition-transform">K</div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-slate-800">Kebun<span className="text-green-600">Data</span></span>
              <span className="hidden lg:inline-block px-2 py-0.5 bg-green-100 text-green-700 rounded-md text-[9px] font-black tracking-widest uppercase">2026 Edition</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-[11px] font-black uppercase tracking-[0.15em] text-slate-400">
            <a href="#features" className="hover:text-green-600 transition">Features</a>
            <Link to="/software" className="hover:text-green-600 transition">Software</Link>
            <Link to="/hardware" className="hover:text-green-600 transition">Hardware</Link>
            <Link to="/blog" className="px-3 py-1 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition border border-green-100">Blog</Link>
          </div>

          <Link to="/login" className="bg-slate-900 text-white px-8 py-3 rounded-full text-xs font-black tracking-widest hover:bg-green-600 hover:scale-105 transition-all shadow-xl shadow-green-100">
            LOGIN
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 py-16 lg:py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-2xl text-[10px] font-black tracking-widest uppercase shadow-xl">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              🚀 Empowering Agroprenuer Muda 2026
            </div>
            
            <h1 className="text-6xl md:text-[5.5rem] font-black text-slate-900 leading-[0.9] tracking-tighter">
              Grow Your Farm. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-green-400">
                Automate Profit.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Industrial monitoring for <span className="text-slate-900 font-bold">ZipGrow towers</span>. Integrated with <span className="text-green-600 font-bold">Odoo 18</span> for instant <span className="underline decoration-green-300">LHDN MyInvois</span> compliance.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button onClick={() => navigate('/login')} className="bg-green-600 text-white px-10 py-6 rounded-3xl font-black text-lg hover:bg-green-700 hover:shadow-2xl hover:shadow-green-300 transition-all active:scale-95">
                GET EARLY ACCESS
              </button>
              <button onClick={() => navigate('/blog')} className="group bg-white border-2 border-slate-100 text-slate-600 px-10 py-6 rounded-3xl font-black text-lg hover:border-green-200 hover:text-green-600 transition-all flex items-center justify-center gap-2">
                READ OUR BLOG
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          <div className="relative w-full group order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-white border border-slate-200 rounded-[3rem] p-4 shadow-2xl overflow-hidden">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 aspect-square md:aspect-video flex flex-col justify-between relative overflow-hidden">
                {/* Visual Dashboard Mockup */}
                <div className="flex justify-between items-start z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
                      <p className="text-green-400 text-[9px] font-mono tracking-widest uppercase">System: Live_Feed_S1</p>
                    </div>
                    <h4 className="text-white text-3xl md:text-5xl font-black italic tracking-tighter">Healthy Growth</h4>
                  </div>
                  <div className="hidden md:block px-4 py-1.5 bg-green-500/10 text-green-400 rounded-xl text-[9px] font-black border border-green-500/20 tracking-widest">LHDN ENCRYPTED</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 z-10">
                   <div className="bg-white/5 p-5 rounded-3xl border border-white/10 backdrop-blur-md">
                     <p className="text-slate-400 text-[10px] uppercase font-black mb-1 opacity-50 tracking-widest">pH</p>
                     <p className="text-2xl md:text-4xl font-black text-white">6.5</p>
                   </div>
                   <div className="bg-white/5 p-5 rounded-3xl border border-white/10 backdrop-blur-md">
                     <p className="text-slate-400 text-[10px] uppercase font-black mb-1 opacity-50 tracking-widest">EC</p>
                     <p className="text-2xl md:text-4xl font-black text-white">1.8</p>
                   </div>
                   <div className="bg-white/5 p-5 rounded-3xl border border-white/10 backdrop-blur-md">
                     <p className="text-slate-400 text-[10px] uppercase font-black mb-1 opacity-50 tracking-widest">Temp</p>
                     <p className="text-2xl md:text-4xl font-black text-white">28°C</p>
                   </div>
                </div>

                {/* Background Decoration for Mockup */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section id="features" className="bg-slate-900 py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-5"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
          {[
            { icon: '📊', title: 'Real-Time IoT', desc: 'Monitor ZipGrow towers instantly via Raspberry Pi CM4 gateway.' },
            { icon: '⚖️', title: 'LHDN Ready', desc: 'Direct e-invoicing for every harvest sale with Odoo 18.' },
            { icon: '🏢', title: 'Odoo 18 ERP', desc: 'Seamlessly manage stock, labor, and B2B contracts.' }
          ].map((item, i) => (
            <div key={i} className="p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-green-500/30 transition-all cursor-default group">
              <div className="text-6xl mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">{item.icon}</div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase italic">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium text-sm opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Software & Hardware Teasers */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
           <div onClick={() => navigate('/software')} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-green-300 transition-all cursor-pointer group">
              <h4 className="text-[10px] font-black text-green-600 mb-2 tracking-widest uppercase">The Ecosystem</h4>
              <h2 className="text-3xl font-black mb-4 group-hover:text-green-600">Smart Software →</h2>
              <p className="text-slate-500 text-sm font-medium">Connecting Odoo 18 with real-time sensor data.</p>
           </div>
           <div onClick={() => navigate('/hardware')} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-green-300 transition-all cursor-pointer group">
              <h4 className="text-[10px] font-black text-green-600 mb-2 tracking-widest uppercase">The Build</h4>
              <h2 className="text-3xl font-black mb-4 group-hover:text-green-600">Industrial Hardware →</h2>
              <p className="text-slate-500 text-sm font-medium">ZipGrow towers powered by RPi CM4 technology.</p>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">K</div>
              <span className="text-white text-2xl font-black tracking-tighter italic">KebunData</span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed font-semibold opacity-60">
              Next-gen vertical farming automation for modern Malaysian agroprenuers.
            </p>
          </div>
          
          <div className="text-left md:text-right space-y-4">
            <p className="text-white font-black text-2xl tracking-tighter">Robot People Industries</p>
            <div className="inline-block px-3 py-1 bg-green-500/10 text-green-500 rounded-md text-[10px] font-bold border border-green-500/20 font-mono">
              Reg: NS0312683-V
            </div>
            <p className="text-xs mt-8 tracking-widest uppercase font-black opacity-30">
              Siliau, Negeri Sembilan, Malaysia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;