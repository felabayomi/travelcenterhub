import React, { useState } from 'react';

export default function AppointmentSection() {
  const [showEmbed, setShowEmbed] = useState(true);
  const appointmentUrl = 'https://appointment.expeditionamerica.us/';

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Book Your Appointment</h2>
      <p style={descriptionStyle}>Schedule your travel appointment with our team</p>
      
      {showEmbed ? (
        <div style={iframeContainerStyle}>
          <iframe
            src={appointmentUrl}
            title="Book Appointment"
            style={iframeStyle}
            onError={() => setShowEmbed(false)}
          />
        </div>
      ) : (
        <div style={fallbackContainerStyle}>
          <p>If the booking system is not loading, click the button below:</p>
          <a href={appointmentUrl} target="_blank" rel="noopener noreferrer">
            <button style={buttonStyle}>
              Book Appointment Now
            </button>
          </a>
        </div>
      )}
      
      <div style={alternativeStyle}>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          Having trouble? You can also{' '}
          <a href={appointmentUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            open the booking system in a new tab
          </a>
        </p>
      </div>
    </div>
  );
}

const containerStyle = {
  padding: '3rem 2rem',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: '#fff',
  borderRadius: '12px',
  margin: '3rem auto',
  maxWidth: '900px',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '0.5rem',
  textAlign: 'center',
};

const descriptionStyle = {
  fontSize: '1rem',
  textAlign: 'center',
  marginBottom: '2rem',
  opacity: 0.95,
};

const iframeContainerStyle = {
  position: 'relative',
  paddingBottom: '66.67%',
  height: 0,
  overflow: 'hidden',
  borderRadius: '8px',
  background: '#fff',
  marginBottom: '1.5rem',
};

const iframeStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 'none',
  borderRadius: '8px',
};

const fallbackContainerStyle = {
  background: 'rgba(255, 255, 255, 0.1)',
  padding: '2rem',
  borderRadius: '8px',
  textAlign: 'center',
  marginBottom: '1.5rem',
};

const buttonStyle = {
  padding: '1rem 2rem',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  borderRadius: '8px',
  border: 'none',
  background: '#ff6b6b',
  color: '#fff',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  transition: 'background 0.3s ease',
};

const alternativeStyle = {
  textAlign: 'center',
  marginTop: '1rem',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'underline',
};
