import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const colorPalette = {
  primary: '#2f6690',
  secondary: '#3a7ca5',
  accent1: '#d9dcd6',
  accent2: '#16425b',
  accent3: '#81c3d7',
  lightBlue: '#E9F1FA',
  brightBlue: '#00ABE4',
  white: '#FFFFFF',
  darkLightBlue: '#C5D8E9'
};

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/committees', label: 'Committees' },
    { path: '/call-for-papers', label: 'Call for Papers' },
    { path: '/registration', label: 'Registration' },
    { path: '/contact-us', label: 'Contact Us' },
    { path: '/about-us', label: 'About Us' }
  ];

  return (
    <div className="relative md:hidden">
      {/* Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-[#1e3c72] text-white hover:bg-[#2a5298] transition-colors duration-200"
      >
        <Menu size={24} />
      </button>

      {/* Full-Screen Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1e3c72]"
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="h-full flex flex-col items-center justify-center p-4">
              {/* Navigation Links */}
              <ul className="space-y-4 w-full max-w-xs">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-6 py-3 rounded-lg text-center transition-colors duration-200 ${
                        isActive(link.path)
                          ? 'bg-white text-[#1e3c72] font-bold'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNavbar;
