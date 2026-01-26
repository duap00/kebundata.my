import React, { useEffect, useState } from 'react';
// Climbing out of /components/dashboard/ (../../) to reach /config/
import { supabase } from "../../config/supabaseClient";

function DataDashboard() {
  const [data, setData] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null);

  useEffect(() => {
    fetchLatestData();
    
    // Live subscription for real-time IoT updates
    const channel = supabase
      .channel('sensor-updates')
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'sensor_logs' }, 
        (payload) => {
          console.log('New data received:', payload.new);
          setData(payload.new);
        }
      )
      .subscribe((status) => {
        if (status === 'CHANNEL_ERROR') setErrorStatus('Real-time sync issues');
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchLatestData = async () => {
    try {
      const { data: dbData, error } = await supabase
        .from('sensor_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1);

      if (error) throw error;

      if (dbData && dbData.length > 0) {
        setData(dbData[0]);
      } else {
        // --- DUMMY DATA FALLBACK ---
        // Vital for your Agroprenuer Muda demo if the CM4 is offline
        setData({
          ph: 6.8,          // High pH (Will trigger red alert)
          ec: 1.8,          
          water_temp: 22.5, 
          air_temp: 28.5,   
          humidity: 65,     
          co2: 850,         
          lux: 12500,       
          tds: 900,         
          water_level: 85   
        });
      }
    } catch (err) {
      console.error("Dashboard fetch error:", err.message);
      setErrorStatus("Database Connection Error");
    }
  };

  if (!data) return (
    <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
      {errorStatus ? `❌ ${errorStatus}` : "Initializing Sensors..."}
    </div>
  );

  // Helper component for the sensor cards
  const SensorCard = ({ label, value, unit, min, max, color }) => {
    const isOutRange = value < min || value > max;
    return (
      <div style={{
        padding: '15px',
        borderRadius: '16px',
        background: isOutRange ? '#fff5f5' : 'white',
        border: '1px solid #eef2f6',
        borderTop: `5px solid ${isOutRange ? '#ff4d4d' : color}`,
        boxShadow: '0 4px 6px rgba(0,0,0,0.03)',
        textAlign: 'center',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ fontSize: '0.7rem', color: '#888', fontWeight: 'bold', marginBottom: '8px', textTransform: 'uppercase' }}>{label}</div>
        <div style={{ fontSize: '1.8rem', fontWeight: '800', color: isOutRange ? '#d32f2f' : '#2c4035' }}>
          {value}<span style={{ fontSize: '0.9rem', color: '#94a3b8', marginLeft: '2px' }}>{unit}</span>
        </div>
        <div style={{ fontSize: '0.6rem', marginTop: '5px', fontWeight: '600', color: isOutRange ? '#d32f2f' : '#94a3b8' }}>
          {isOutRange ? '⚠️ ADJUST REQUIRED' : `Target: ${min}-${max}`}
        </div>
      </div>
    );
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: '15px',
      width: '100%'
    }}>
      <SensorCard label="pH Level" value={data.ph} unit="" min={5.5} max={6.5} color="#3498db" />
      <SensorCard label="EC Level" value={data.ec} unit=" mS" min={1.2} max={2.5} color="#f1c40f" />
      <SensorCard label="Water Temp" value={data.water_temp} unit="°C" min={18} max={24} color="#2ecc71" />
      <SensorCard label="Air Temp" value={data.air_temp} unit="°C" min={22} max={28} color="#e67e22" />
      <SensorCard label="Humidity" value={data.humidity} unit="%" min={40} max={70} color="#9b59b6" />
      <SensorCard label="CO2" value={data.co2} unit=" ppm" min={400} max={1200} color="#1abc9c" />
      <SensorCard label="Light" value={data.lux} unit=" lux" min={5000} max={15000} color="#f39c12" />
      <SensorCard label="TDS" value={data.tds} unit=" ppm" min={600} max={1200} color="#34495e" />
      <SensorCard label="Reservoir" value={data.water_level} unit="%" min={50} max={100} color="#2980b9" />
    </div>
  );
}

export default DataDashboard;