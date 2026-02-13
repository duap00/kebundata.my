import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { supabase } from './config/supabaseClient'; 

// --- PUBLIC PAGES ---
import LandingPage from './pages/public/LandingPage';
import Login from './pages/public/Login';
import BlogList from './pages/public/BlogList';
import BlogPost from './pages/public/BlogPost';
import Software from './pages/public/Software';
import Hardware from './pages/public/Hardware';
import ContactPage from './pages/public/ContactPage'; // [1] Ensure this is imported

// --- FARM DASHBOARD PAGES ---
import FarmDashboard from './pages/farm/FarmDashboard';
import Analytics from './pages/farm/Analytics'; 
import CropSettings from './pages/farm/CropSettings';
import BlogEditor from './pages/farm/BlogEditor';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // LOGIC: Check if current path belongs to the dashboard area
  const isDashboardArea = location.pathname.startsWith('/dashboard') || 
                          location.pathname.startsWith('/analytics') || 
                          location.pathname.startsWith('/settings');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, _session) => {
      setSession(_session);
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

  if (loading) return <div className="h-screen flex items-center justify-center">Loading KebunData...</div>;

  return (
    <div className="app-container font-sans text-slate-900">
      
      {!isDashboardArea ? (
        <main className="w-full">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/software" element={<Software />} />
            <Route path="/hardware" element={<Hardware />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<ContactPage />} /> {/* [2] New Route Added */}
            <Route path="/login" element={!session ? <Login /> : <Navigate to="/dashboard" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      ) : (
        /* DASHBOARD LAYOUT */
        <div className="flex flex-col h-screen w-full overflow-hidden bg-[#f8fafc]">
          <header className="z-[1100] flex justify-between items-center px-5 h-[70px] bg-white border-b border-gray-100 shadow-sm">
            <div className="flex items-center gap-3">
              {isMobile && (
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-[#2c4035] p-2">
                  {isOpen ? '✕' : '☰'}
                </button>
              )}
              <img src="/logos/KebunData_logo-LG(2).png" alt="Logo" className="h-[35px]" />
              <span className="font-extrabold text-xl text-[#2c4035] hidden sm:inline">
                Kebun<span className="text-[#d4af37]">Data</span>
              </span>
            </div>

            <div className="flex items-center gap-4">
               {session && (
                 <>
                   <button 
                     onClick={() => supabase.auth.signOut()} 
                     className="text-[10px] font-bold text-red-600 bg-red-50 px-3 py-2 rounded-lg hover:bg-red-100 transition"
                   >
                     LOGOUT
                   </button>
                   <div className="w-9 h-9 rounded-full bg-[#2c4035] text-white flex items-center justify-center text-sm font-bold shadow-inner">
                     {session.user.email.charAt(0).toUpperCase()}
                   </div>
                 </>
               )}
            </div>
          </header>

          <div className="flex flex-1 overflow-hidden">
            <nav className={`
              ${isMobile ? 'fixed inset-y-0 left-0 w-64 shadow-2xl' : 'relative w-[75px]'} 
              bg-[#2c4035] transition-transform duration-300 z-[1050]
              ${isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'}
            `}>
              <div className="mt-5 flex flex-col items-center gap-2">
                <NavItem to="/" icon="🏠" label="Home" isMobile={isMobile} />
                <NavItem to="/dashboard" icon="📊" label="Dashboard" isMobile={isMobile} />
                <NavItem to="/analytics" icon="📈" label="Analytics" isMobile={isMobile} />
                <NavItem to="/settings/blog/new" icon="✍️" label="Write Blog" isMobile={isMobile} />
                <NavItem to="/settings" icon="⚙️" label="Settings" isMobile={isMobile} />
              </div>
            </nav>

            <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#f8fafc]">
              <Routes>
                <Route path="/dashboard" element={session ? <FarmDashboard /> : <Navigate to="/login" />} />
                <Route path="/analytics" element={session ? <Analytics /> : <Navigate to="/login" />} />
                <Route path="/settings" element={session ? <CropSettings /> : <Navigate to="/login" />} />
                <Route path="/settings/blog/new" element={session ? <BlogEditor /> : <Navigate to="/login" />} />
              </Routes>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}

const NavItem = ({ to, icon, label, isMobile }) => (
  <Link 
    to={to} 
    className="flex items-center gap-4 p-4 text-white hover:bg-white/10 w-full transition-colors"
  >
    <span className="text-xl">{icon}</span>
    {isMobile && <span className="font-medium">{label}</span>}
  </Link>
);

export default App;