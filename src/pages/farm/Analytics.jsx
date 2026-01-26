import React, { useEffect, useState } from 'react';
// Climbing out of /pages/farm/ (../../) to find /components/dashboard/
import DataDashboard from '../../components/dashboard/DataDashboard';
// Climbing out of /pages/farm/ (../../) to find /config/
import { supabase } from '../../config/supabaseClient';

function Analytics() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setLoading(true);
    try {
      // Fetch last 10 completed batches from your batch_history table
      const { data, error } = await supabase
        .from('batch_history')
        .select('*')
        .order('harvest_date', { ascending: false })
        .limit(10);

      if (error) throw error;
      if (data) setHistory(data);
    } catch (error) {
      console.error("Error fetching history:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="analytics-container" style={{ padding: isMobile ? '10px' : '30px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: '#2c4035', fontWeight: '800', margin: 0 }}>📊 Analytics & History</h2>
        {loading && <span style={{ fontSize: '0.8rem', color: '#27ae60', fontWeight: 'bold' }}>Syncing Data...</span>}
      </div>
      
      {/* 1. LIVE METRICS SECTION */}
      <section style={{ marginBottom: '40px' }}>
        <h3 style={sectionLabel}>Real-Time Sensor Data (IoT CM4)</h3>
        <DataDashboard /> 
      </section>

      {/* 2. BATCH HISTORY TABLE SECTION */}
      <section style={cardStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ ...sectionLabel, margin: 0 }}>Completed Batches</h3>
          <button onClick={fetchHistory} style={refreshBtn}>
            {loading ? '...' : '↻ Refresh History'}
          </button>
        </div>

        <div style={{ overflowX: 'auto', border: '1px solid #f1f5f9', borderRadius: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '2px solid #edf2f7' }}>
                <th style={thStyle}>Crop Name</th>
                <th style={thStyle}>Station</th>
                <th style={thStyle}>Growing Days</th>
                <th style={thStyle}>Harvested On</th>
              </tr>
            </thead>
            <tbody>
              {history.length > 0 ? history.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #f8fafc' }} className="table-row-hover">
                  <td style={{ ...tdStyle, fontWeight: 'bold', color: '#27ae60' }}>{item.crop_name}</td>
                  <td style={tdStyle}>{item.location_name}</td>
                  <td style={tdStyle}>{item.total_days} Days</td>
                  <td style={tdStyle}>{new Date(item.harvest_date).toLocaleDateString()}</td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="4" style={{ padding: '60px', textAlign: 'center', color: '#94a3b8' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🍃</div>
                    {loading ? "Reading from database..." : "No archived batches found in the library yet."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// PREMIUM STYLING OBJECTS
const sectionLabel = { 
  fontSize: '0.75rem', 
  color: '#64748b', 
  textTransform: 'uppercase', 
  letterSpacing: '1.5px', 
  fontWeight: '700', 
  marginBottom: '15px',
  display: 'block' 
};

const cardStyle = { 
  background: 'white', 
  padding: '24px', 
  borderRadius: '20px', 
  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.04)', 
  border: '1px solid #eef2f6' 
};

const thStyle = { 
  padding: '16px', 
  textAlign: 'left', 
  fontSize: '0.7rem', 
  color: '#475569', 
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
};

const tdStyle = { 
  padding: '16px', 
  fontSize: '0.85rem', 
  color: '#1e293b' 
};

const refreshBtn = { 
  background: '#f8fafc', 
  border: '1px solid #e2e8f0', 
  padding: '8px 16px', 
  borderRadius: '10px', 
  fontSize: '0.75rem', 
  cursor: 'pointer', 
  fontWeight: '600',
  color: '#475569',
  transition: 'all 0.2s'
};

export default Analytics;