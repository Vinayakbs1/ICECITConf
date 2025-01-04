import React from 'react';
import MobileNavbar from '../components/MobileNavbar';
import { Link } from 'react-router-dom';

function Title() {
  return (
    <div className="bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white shadow-lg">
      <div className="max-w-7xl mx-auto py-4 px-8">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center justify-center space-x-6">
            <Link to="/" className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/logo.png"
                alt="SIT Logo"
                className="h-20 w-20 object-contain bg-white rounded-full p-1"
              />
            </Link>
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                Siddaganga Institute of Technology
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200">Tumakuru</p>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNavbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
