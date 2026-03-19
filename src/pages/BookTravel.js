import React from 'react';
import AppointmentSection from '../components/AppointmentSection';

export default function BookTravel() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Book Travel</h1>
      <p>Ready to book your next adventure? Schedule an appointment with our travel experts.</p>
      <AppointmentSection />
    </div>
  );
}
