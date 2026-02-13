// src/pages/AboutPage.jsx
import React from 'react';
import SEO from '../components/SEO'; // Import our SEO tool

function AboutPage() {
  return (
    <div className="page-content">
      {/* 1. SEO METADATA */}
      <SEO 
        title="About Our Mission" 
        description="Learn how KebunData combines decades of farming experience with IoT and Odoo 18 to empower sustainable agriculture in Malaysia."
        keywords="Agrotech Malaysia company, sustainable farming Siliau, IoT agriculture experts, Robot People Industries"
      />

      {/* 2. SEMANTIC CONTENT */}
      <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 className="section-title" style={{ fontSize: '3rem', fontWeight: '900', textAlign: 'center' }}>
          About <span style={{ color: '#16a34a' }}>KebunData</span>
        </h1>
        
        <p style={{ maxWidth: '800px', margin: '40px auto', fontSize: '1.2em', lineHeight: '1.8', color: '#475569', textAlign: 'center' }}>
          KebunData was founded on the principle that **data and nature** can coexist 
          harmoniously. Our mission is to provide local farmers with the cutting-edge 
          insights needed to maximize yield, minimize waste, and practice truly 
          sustainable agriculture.
        </p>

        {/* 3. E-E-A-T Section: Proving expertise */}
        <div style={{ display: 'grid', md: 'grid-cols-2', gap: '40px', marginTop: '60px' }}>
          <div style={{ padding: '30px', backgroundColor: '#f8fafc', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontWeight: '900', marginBottom: '10px', color: '#0f172a' }}>Expertise</h3>
            <p style={{ fontSize: '0.95em', color: '#64748b' }}>Combining decades of traditional farming experience with the latest in **IoT (Internet of Things)** and **predictive analytics**.</p>
          </div>
          <div style={{ padding: '30px', backgroundColor: '#f8fafc', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontWeight: '900', marginBottom: '10px', color: '#0f172a' }}>Location</h3>
            <p style={{ fontSize: '0.95em', color: '#64748b' }}>Proudly based in **Siliau, Negeri Sembilan**, supporting the Malaysian agroprenuer ecosystem.</p>
          </div>
        </div>
      </section>
      
      {/* Visual Placeholder */}
      <div style={{ height: '400px', backgroundColor: '#e9f5e9', borderRadius: '40px', margin: '0 20px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a', fontWeight: 'bold' }}>
        [Image: Our Farm History & Technology Timeline]
      </div>

      <div style={{ paddingBottom: '100px' }}></div>
    </div>
  );
}

export default AboutPage;