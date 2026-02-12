import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import { HelmetProvider } from 'react-helmet-async'; // Added this
import App from './App.jsx';
import './assets/css/index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* Wraps the whole app for SEO */}
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);