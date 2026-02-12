import React from 'react';
import { Link } from 'react-router-dom';
import SEO from "../../components/SEO";

const ContactPage = () => {
  // Replace with your actual WhatsApp number (e.g., 60123456789)
  const whatsappNumber = "60XXXXXXXXX"; 
  const message = encodeURIComponent("Hi KebunData! I'm interested in your smart farming solutions.");

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Robot People Industries in Siliau. Inquire about Odoo 18 integration and ZipGrow hardware."
        keywords="Contact KebunData, Robot People Industries Siliau, Agrotech Support Malaysia"
      />

      <header className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">K</div>
            <div className="text-xl font-black">KebunData</div>
          </div>
          <nav className="space-x-4 text-sm font-bold text-slate-600">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <Link to="/software" className="hover:text-green-600">Software</Link>
            <Link to="/hardware" className="hover:text-green-600">Hardware</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid lg:grid-cols-2 gap-16">
        {/* Left Side: Contact Info */}
        <div>
          <h1 className="text-6xl font-black mb-8 tracking-tighter italic text-green-600">
            Let's Talk.
          </h1>
          <p className="text-lg text-slate-500 mb-12 font-medium">
            Whether you're looking for Odoo 18 implementation or high-tech ZipGrow hardware, 
            our team at Siliau is ready to help you scale.
          </p>

          <div className="space-y-8">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              className="flex items-center gap-6 p-6 bg-green-50 rounded-[2rem] border border-green-100 hover:scale-[1.02] transition-transform"
            >
              <span className="text-4xl">💬</span>
              <div>
                <h3 className="font-black text-green-700">Chat on WhatsApp</h3>
                <p className="text-sm text-green-600/70">Fastest response for inquiries</p>
              </div>
            </a>

            <div className="flex gap-4">
              <a href="https://facebook.com/robotpeople" className="flex-1 p-6 bg-slate-50 rounded-[2rem] text-center font-black hover:bg-slate-100 transition">FB</a>
              <a href="https://instagram.com/robotpeople" className="flex-1 p-6 bg-slate-50 rounded-[2rem] text-center font-black hover:bg-slate-100 transition">IG</a>
            </div>
          </div>
        </div>

        {/* Right Side: Map */}
        <div className="h-[500px] w-full bg-slate-100 rounded-[3rem] overflow-hidden border border-slate-200 shadow-inner">
          <iframe 
            title="KebunData Location"
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight="0" 
            marginWidth="0" 
            src="https://maps.google.com/maps?q=Robot%20People%20Industries%20Siliau&t=&z=15&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;