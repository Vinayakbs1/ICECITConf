import React from 'react';
import { motion } from 'framer-motion';

const styles = `
  .hero-bg {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    position: relative;
    overflow: hidden;
    will-change: transform;
  }

  .hero-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%);
    animation: pulse 15s infinite;
    will-change: transform;
  }

  @keyframes pulse {
    0% { transform: scale(1) translateZ(0); }
    50% { transform: scale(1.5) translateZ(0); }
    100% { transform: scale(1) translateZ(0); }
  }

  .registration-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    box-shadow: 
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05),
      inset 0 -2px 0 0 rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    transform-style: preserve-3d;
    perspective: 1000px;
  }
`;

const colorPalette = {
  primary: '#1A5F7A',
  secondary: '#159895',
  accent1: '#57C5B6',
  accent2: '#0E2954',
  accent3: '#2C7DA0',
  background: '#F0F9FF',
  white: '#FFFFFF',
  lightBackground: '#E6F7FF',
  gradient: "linear-gradient(135deg, #1A5F7A, #159895)"
};

function Registration() {
  const registrationFees = [
    {
      category: "IEEE Members",
      fees: {
        indian: "₹5,000",
        foreign: "$300"
      }
    },
    {
      category: "Non-IEEE Members",
      fees: {
        indian: "₹6,000",
        foreign: "$350"
      }
    },
    {
      category: "Industry Participants",
      fees: {
        indian: "₹7,000",
        foreign: "$400"
      }
    },
    {
      category: "Student Participants",
      fees: {
        indian: "₹4,000",
        foreign: "$250"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{styles}</style>
      
      <div className="hero-bg min-h-[80vh] flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="registration-card p-8 md:p-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="overflow-x-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <table className="min-w-full bg-white border-collapse border border-black">
                <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left border border-black"></th>
                    <th className="py-4 px-6 text-center border border-black">IEEE Member</th>
                    <th className="py-4 px-6 text-center border border-black">Non IEEE Member</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 px-6 font-medium border border-black" rowSpan="3">Indian Authors</td>
                    <td className="py-4 px-6 text-center border border-black">
                      <div>Rs. 4000</div>
                      <div className="text-sm text-gray-600">(Students & Research Scholars)</div>
                    </td>
                    <td className="py-4 px-6 text-center border border-black">
                      <div>Rs. 6000</div>
                      <div className="text-sm text-gray-600">(Students & Research Scholars)</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-center border border-black">
                      <div>Rs. 5000</div>
                      <div className="text-sm text-gray-600">(Faculty)</div>
                    </td>
                    <td className="py-4 px-6 text-center border border-black">
                      <div>Rs. 7500</div>
                      <div className="text-sm text-gray-600">(Faculty)</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-center border border-black">
                      <div>Rs. 6500</div>
                      <div className="text-sm text-gray-600">(Industry Participants)</div>
                    </td>
                    <td className="py-4 px-6 text-center border border-black">
                      <div>Rs. 9500</div>
                      <div className="text-sm text-gray-600">(Industry Participants)</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium border border-black">Foreign Authors</td>
                    <td className="py-4 px-6 text-center border border-black">80 USD</td>
                    <td className="py-4 px-6 text-center border border-black">120 USD</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium border border-black">Attendees</td>
                    <td className="py-4 px-6 text-center border border-black" colSpan="2">Rs. 2000</td>
                  </tr>
                </tbody>
              </table>

              {/* Category Labels */}
             
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
