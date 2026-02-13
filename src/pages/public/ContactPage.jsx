import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle, ArrowLeft } from 'lucide-react';
import SEO from "../../components/SEO";

const ContactPage = () => {
  // Your specific WhatsApp details
  const whatsappNumber = "60132881679"; 
  const message = encodeURIComponent("Hi KebunData! Saya berminat dengan solusi smart farming anda.");

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-green-100">
      <SEO 
        title="Hubungi Kami | Robot People Industries" 
        description="Hubungi Robot People Industries & KebunData di Bengkel Seri Sembilan, Batu 8 Mambau. Pakar IoT Pertanian dan Odoo 18."
      />

      {/* Header Navigation */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg group-hover:rotate-6 transition-transform text-xl shadow-green-200">K</div>
          <span className="text-xl font-black tracking-tighter italic">Kebun<span className="text-green-600">Data</span></span>
        </Link>
        <Link to="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition">
          <ArrowLeft size={14} /> Kembali ke Laman Utama
        </Link>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Contact Methods */}
        <div className="space-y-10">
          <div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 italic leading-[0.85] text-slate-900">
              Jom <span className="text-green-600 font-black">Mula.</span>
            </h1>
            <p className="text-slate-500 text-lg font-medium max-w-md leading-relaxed">
              Lawati ladang kami yang bertempat di <span className="text-slate-900 font-bold underline decoration-green-300">Bengkel Seri Sembilan</span>, Batu 8 Mambau untuk melihat teknologi KebunData secara live.
            </p>
          </div>

          <div className="grid gap-4">
            {/* Primary WhatsApp Action */}
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-8 bg-green-600 text-white rounded-[2.5rem] shadow-2xl shadow-green-200 hover:scale-[1.02] transition-all group"
            >
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70 mb-1">WhatsApp Terus</p>
                <p className="text-2xl font-bold">+60 13 288 1679</p>
              </div>
              <MessageCircle size={44} className="group-hover:rotate-12 transition-transform" />
            </a>

            {/* Social Media Row */}
            <div className="grid grid-cols-3 gap-4">
              <a 
                href="https://www.facebook.com/share/17g5Zcvdy4/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex items-center justify-center text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-all shadow-sm"
              >
                <Facebook size={32} strokeWidth={2.5} />
              </a>
              <a 
                href="https://www.instagram.com/robot.people" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex items-center justify-center text-slate-800 hover:bg-pink-50 hover:text-pink-600 transition-all shadow-sm"
              >
                <Instagram size={32} strokeWidth={2.5} />
              </a>
              <a 
                href="https://www.tiktok.com/@kebun_data" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex items-center justify-center text-slate-800 hover:bg-black hover:text-white transition-all shadow-sm"
              >
                <span className="font-black text-xl tracking-tighter italic">TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Google Maps Embed (Fixed Connection Issue) */}
        <div className="relative h-[550px] w-full bg-slate-100 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.706140504627!2d101.90302387588636!3d2.665526955913254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdf53643f00ef1%3A0xda02cf468ec28100!2sBengkel%20Seri%20Sembilan!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="group-hover:scale-105 transition-all duration-700 grayscale-[0.2] group-hover:grayscale-0"
          ></iframe>
          
          {/* Address Overlay */}
          <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20">
            <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-1">Pintu Masuk Ladang</p>
            <p className="text-sm font-bold text-slate-800">Bengkel Seri Sembilan, Batu 8 Mambau, 70300 Seremban, Negeri Sembilan</p>
          </div>
        </div>
      </main>

      {/* Small Footer Branding */}
      <footer className="py-12 text-center">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Siliau • Seremban • Negeri Sembilan</p>
      </footer>
    </div>
  );
};

export default ContactPage;