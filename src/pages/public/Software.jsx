import React from 'react';
import { Link } from 'react-router-dom';
import SEO from "../../components/SEO";

const Software = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO 
        title="Software Ecosystem" 
        description="Connect Odoo 18 with real-time IoT sensor data. Automated LHDN MyInvois compliance for Malaysian vertical farms."
        keywords="Odoo 18 Malaysia, Agrotech ERP, LHDN MyInvois Agrotech, Farm Monitoring Software"
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
            <Link to="/hardware" className="text-sm font-bold text-slate-600 hover:text-green-600 transition">Hardware</Link>
            <Link to="/blog" className="text-sm font-bold text-green-600">Blog</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-black mb-6 tracking-tighter">Integrated Software Ecosystem</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Connecting **Odoo 18** with real-time sensor data for full farm transparency. 
            Our software stack provides the "brain" for your vertical farm, managing 
            everything from nutrient dosing to tax-compliant invoicing.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-green-200 transition-colors">
            <div className="text-4xl mb-6">📉</div>
            <h3 className="text-xl font-black mb-3">Odoo 18 Integration</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Don't just farm; manage. Track seeds, labor, and yield in the world's 
              most powerful ERP, customized specifically for ZipGrow hydroponic cycles.
            </p>
          </div>

          <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-green-200 transition-colors">
            <div className="text-4xl mb-6">⚖️</div>
            <h3 className="text-xl font-black mb-3">LHDN MyInvois Ready</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Automatic e-invoicing for every B2B sale. Our system generates LHDN 
              compliant digital invoices the moment your harvest is weighed and logged.
            </p>
          </div>

          <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-green-200 transition-colors">
            <div className="text-4xl mb-6">🔔</div>
            <h3 className="text-xl font-black mb-3">Real-Time Alerts</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Get notified via WhatsApp or Email if pH or EC levels drift outside 
              your ZipGrow tower's optimal range, preventing crop loss before it happens.
            </p>
          </div>

          <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-green-200 transition-colors">
            <div className="text-4xl mb-6">📊</div>
            <h3 className="text-xl font-black mb-3">Predictive Yield</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Use historical sensor data to predict your next harvest date and 
              volume, allowing you to secure B2B buyers weeks in advance.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Software;