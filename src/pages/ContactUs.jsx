import React from 'react';
import { motion } from 'framer-motion';
import ScrollToTop from "../components/ScrollToTop";

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

  .contact-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    box-shadow: 
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05),
      inset 0 -2px 0 0 rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    transform-style: preserve-3d;
    perspective: 1000px;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .contact-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    border-color: #1e3c72;
  }

  .contact-icon {
    width: 3rem;
    height: 3rem;
    background: #1e3c72;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: all 0.3s ease;
  }

  .contact-card:hover .contact-icon {
    transform: scale(1.1) rotate(360deg);
    background: #2a5298;
  }

  .contact-title {
    font-size: 1.5rem;
    color: #1e3c72;
    margin: 1rem 0;
    transition: all 0.3s ease;
  }

  .contact-card:hover .contact-title {
    color: #2a5298;
  }

  .contact-text {
    color: #4a5568;
    transition: all 0.3s ease;
  }

  .contact-card:hover .contact-text {
    color: #2d3748;
  }

  .contact-link {
    color: #1e3c72;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
  }

  .contact-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #2a5298;
    transition: all 0.3s ease;
  }

  .contact-link:hover {
    color: #2a5298;
  }

  .contact-link:hover::after {
    width: 100%;
  }

  .map-container {
    border-radius: 1rem;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .map-container:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
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

function ContactUs() {
  const contacts = [
    {
      name: "Dr. Pramod TC",
      title: "Associate Professor",
      department: "Dept. of CSE",
      institution: "SIT, Tumkur",
      phone: "+91 76676 77891",
      email: "pramodtc@sit.ac.in",
    },
    {
      name: " Dr. Sumalatha Aradhya",
      title: "Associate Professor",
      department: "Dept. of CSE",
      institution: "SIT, Tumkur",
      phone: "+91 9900609254",
      email: " sumaradhya@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <style>{styles}</style>
      
      <div className="hero-bg min-h-[80vh] flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <motion.div 
            className="contact-card p-4 sm:p-8 md:p-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ 
              duration: 0.8,
              filter: { duration: 0.4 }
            }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ 
                delay: 0.3,
                filter: { duration: 0.5 }
              }}
            >
              Contact Us
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {contacts.map((contact, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-sm contact-card"
                  initial={{ opacity: 0, x: -50, filter: "blur(6px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ 
                    delay: 0.4 + index * 0.1,
                    filter: { duration: 0.3 }
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* <div className="contact-icon">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div> */}
                  <h3 className="contact-title" style={{ color: colorPalette.primary }}>{contact.name}</h3>
                  <p className="contact-text">{contact.title}</p>
                  <p className="contact-text">{contact.department}</p>
                  <p className="contact-text">{contact.institution}</p>
                  <div className="mt-4 space-y-2">
                    <p className="contact-text flex items-center">
                      <span className="mr-2">📧</span>
                      <a href={`mailto:${contact.email}`} className="contact-link">
                        {contact.email}
                      </a>
                    </p>
                    {contact.phone && (
                      <p className="contact-text flex items-center">
                        <span className="mr-2">📞</span>
                        <a href={`tel:${contact.phone}`} className="contact-link">
                          {contact.phone}
                        </a>
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-12 sm:mt-16"
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ 
                delay: 0.6,
                filter: { duration: 0.3 }
              }}
            >
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
