// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Committees from './pages/Committees';
import AboutUs from './pages/AboutUs';
import Registration from './pages/Registration';
import CallForPapers from './pages/CallForPapers';
import ContactUs from './pages/ContactUs';
import Title from './pages/Title';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';

function App() {
  return (
    <div className="relative">
      {/* Navigation Layer */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Title Section */}
        <div className="bg-white shadow-md">
          <Title />
        </div>

        {/* Navbar for medium and large screens */}
        <div className="hidden md:block">
          <Navbar />
        </div>
      </div>

      {/* Main Content - Add padding to account for fixed header */}
      <div className="pt-[120px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
