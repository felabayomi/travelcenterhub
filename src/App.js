import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Flights from './pages/Flights';
import Hotels from './pages/Hotels';
import VacationPackages from './pages/VacationPackages';
import Cruises from './pages/Cruises';
import BookTravel from './pages/BookTravel';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
        <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
        <Link to="/flights" style={{ margin: '0 1rem' }}>Flights</Link>
        <Link to="/hotels" style={{ margin: '0 1rem' }}>Hotels</Link>
        <Link to="/vacation-packages" style={{ margin: '0 1rem' }}>Vacation Packages</Link>
        <Link to="/cruises" style={{ margin: '0 1rem' }}>Cruises</Link>
        <Link to="/book-travel" style={{ margin: '0 1rem' }}>Book Travel</Link>
        <Link to="/contact" style={{ margin: '0 1rem' }}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/vacation-packages" element={<VacationPackages />} />
        <Route path="/cruises" element={<Cruises />} />
        <Route path="/book-travel" element={<BookTravel />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
