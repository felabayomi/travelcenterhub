import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppointmentSection from '../components/AppointmentSection';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', background: '#f8fafc' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Plan Your Next Adventure</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="https://incity.globaltravel.com" className="cta-button" style={buttonStyle} target="_blank" rel="noopener noreferrer">Search Flights</a>
        <button onClick={() => navigate('/hotels')} style={buttonStyle}>Find Hotels</button>
        <button onClick={() => navigate('/cruises')} style={buttonStyle}>Explore Cruises</button>
        <button onClick={() => navigate('/vacation-packages')} style={buttonStyle}>Vacation Packages</button>
      </div>
      <AppointmentSection />
    </div>
  );
}

const buttonStyle = {
  padding: '1rem 2rem',
  fontSize: '1.1rem',
  borderRadius: '8px',
  border: 'none',
  background: '#0077ff',
  color: '#fff',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  transition: 'background 0.2s',
};
