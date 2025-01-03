import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#1e3c72] shadow-md hidden md:block">
      <ul className="flex gap-12 list-none items-center justify-center m-0 p-4">
        {[
          { path: '/', label: 'Home' },
          { path: '/committees', label: 'Committees' },
          { path: '/call-for-papers', label: 'Call for Papers' },
          { path: '/registration', label: 'Registration' },
          { path: '/contact-us', label: 'Contact Us' },
          { path: '/about-us', label: 'About Us' }
        ].map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`font-bold text-base transition-colors duration-200 ${
                isActive(item.path) 
                  ? 'text-white border-b-2 border-white pb-1' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
