// components/Navbar.jsx
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-rose-600">Liyah Beauty Salon</h1>
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-rose-500">Home</a>
          <a href="#about" className="hover:text-rose-500">About</a>
          <a href="#services" className="hover:text-rose-500">Services</a>
          <a href="#gallery" className="hover:text-rose-500">Gallery</a>
          <a href="#contact" className="hover:text-rose-500">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-2">
          <a href="#home" className="block py-2">Home</a>
          <a href="#about" className="block py-2">About</a>
          <a href="#services" className="block py-2">Services</a>
          <a href="#gallery" className="block py-2">Gallery</a>
          <a href="#contact" className="block py-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Header;
