import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { supabase } from './config/supabaseClient'; 

// Pages
import LandingPage from './pages/public/LandingPage';
import Login from './pages/public/Login';
import FarmDashboard from './pages/farm/FarmDashboard';
import Analytics from './pages/farm/Analytics'; 
import CropSettings from './pages/farm/CropSettings';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const isLandingPage = location.pathname === '/';

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (event === 'SIGNED_OUT') navigate('/'); 
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false); 
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- UI CLEANUP & ROUTING ---
  // Adding the 'app-container' class here ensures consistency with your repaired index.css
  return (
    <div className={`app-container ${isLandingPage ? 'is-landing' : ''}`}>
      
      {/* 1. PUBLIC ROUTES (Isolating the Landing Page completely) */}
      {isLandingPage ? (
        <main className="w-full">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
      ) : (
        /* 2. DASHBOARD LAYOUT (Only shows for non-landing routes) */
        <div className="flex flex-col h-screen w-full overflow-hidden bg-[#f8fafc]">
          <header className="z-[1100] flex justify-between items-center px-5 h-[70px] bg-white border-b border-gray-100">
            <div className="flex items-center gap-3">
              {isMobile && (
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-[#2c4035]">
                  {isOpen ? '✕' : '☰'}
                </button>
              )}
              <img src="/logos/KebunData_logo-LG(2).png" alt="Logo" className="h-[35px]" />
              <span className="font-extrabold text-xl text-[#2c4035]">Kebun<span className="text-[#d4af37]">Data</span></span>
            </div>

            <div className="flex items-center gap-4">
               {session && (
                 <>
                   <button onClick={() => supabase.auth.signOut()} className="text-[10px] font-bold text-red-600 bg-red-50 px-3 py-2 rounded-lg hover:bg-red-100 transition">LOGOUT</button>
                   <div className="w-8 h-8 rounded-full bg-[#2c4035] text-white flex items-center justify-center text-xs font-bold">
                     {session.user.email.charAt(0).toUpperCase()}
                   </div>
                 </>
               )}
            </div>
          </header>

          <div className="flex flex-1 overflow-hidden">
            <nav className={`
              ${isMobile ? 'fixed inset-y-0 left-0' : 'relative w-[70px]'} 
              bg-[#2c4035] transition-transform duration-300 z-[1050]
              ${isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'}
            `}>
              <div className="mt-5 flex flex-col items-center gap-4">
                <Link to="/" className="p-4 text-white text-xl hover:bg-white/10 w-full text-center" title="Home">🏠</Link>
                <Link to="/dashboard" className="p-4 text-white text-xl hover:bg-white/10 w-full text-center" title="Dashboard">📊</Link>
                <Link to="/analytics" className="p-4 text-white text-xl hover:bg-white/10 w-full text-center" title="Analytics">📈</Link>
                <Link to="/settings" className="p-4 text-white text-xl hover:bg-white/10 w-full text-center" title="Settings">⚙️</Link>
              </div>
            </nav>

            <main className="flex-1 overflow-y-auto p-6 bg-[#f8fafc]">
              <Routes>
                <Route path="/login" element={!session ? <Login /> : <Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={session ? <FarmDashboard /> : <Navigate to="/login" />} />
                <Route path="/analytics" element={session ? <Analytics /> : <Navigate to="/login" />} />
                <Route path="/settings" element={session ? <CropSettings /> : <Navigate to="/login" />} />
              </Routes>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;