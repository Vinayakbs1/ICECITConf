import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTop from "../components/ScrollToTop";
import { 
  NetworkIcon, 
  PaperclipIcon, 
  CodeIcon, 
  RadarIcon, 
  AwardIcon, 
  GlobeIcon 
} from 'lucide-react';

const styles = `
  .hero-bg {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    position: relative;
    overflow: hidden;
    will-change: transform;
    min-height: 100vh;
    padding: clamp(1rem, 5vw, 4rem) 0;
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

  .hero-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: clamp(15px, 2vw, 20px);
    box-shadow: 
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05),
      inset 0 -2px 0 0 rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    transform-style: preserve-3d;
    perspective: 1000px;
    padding: clamp(1.5rem, 3vw, 2rem);
    margin-bottom: clamp(1.5rem, 3vw, 2rem);
    width: 100%;
    max-width: 100%;
  }

  .track-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: clamp(10px, 1.5vw, 15px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    padding: clamp(1rem, 2vw, 1.5rem);
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .track-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  .track-title {
    font-size: clamp(1.1rem, 2vw, 1.25rem);
    line-height: 1.4;
  }

  .track-icon {
    width: clamp(1.5rem, 3vw, 2rem);
    height: clamp(1.5rem, 3vw, 2rem);
    margin-right: clamp(0.5rem, 1vw, 0.75rem);
  }

  @media (max-width: 640px) {
    .hero-card {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
`;

const colorPalette = {
  primary: '#1e3c72',      // Deep royal blue
  secondary: '#2a5298',    // Medium royal blue
  accent: '#4a90e2',       // Bright royal blue
  white: '#ffffff',
  text: '#2d3748',
  lightBlue: '#e8f1fd'
};

const CallForPapers = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const detailsRef = useRef(null);

  const handleTrackClick = (track) => {
    setSelectedTrack(track);
    // Wait for state update and DOM render
    setTimeout(() => {
      if (detailsRef.current) {
        detailsRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 100);
  };

  const tracks = [
    { 
      title: "Track 1: Gen AI and ML Applications", 
      topics: [
        "Large Language Models and Foundation Models",
        "Generative AI for Content Creation",
        "Machine Learning in Business Applications",
        "AI-Driven Decision Support Systems",
        "Computer Vision and Image Generation",
        "Natural Language Processing Applications",
        "Responsible AI and Ethics"
      ]
    },
    { 
      title: "Track 2: Computing Paradigms", 
      topics: [
        "Cloud Computing Architecture",
        "Edge and Fog Computing",
        "Quantum Computing Applications",
        "Distributed Systems",
        "Green Computing Solutions",
        "High-Performance Computing",
        "Serverless Computing"
      ]
    },
    { 
      title: "Track 3: 5G and Next-Generation Networks", 
      topics: [
        "5G Network Architecture",
        "Network Virtualization",
        "Software-Defined Networking",
        "Network Slicing",
        "Mobile Edge Computing",
        "6G Vision and Research",
        "IoT Network Integration"
      ]
    },
    { 
      title: "Track 4: AR/VR Technologies", 
      topics: [
        "Augmented Reality Applications",
        "Virtual Reality Systems",
        "Mixed Reality Solutions",
        "Metaverse Technologies",
        "AR/VR in Education",
        "Immersive Gaming",
        "Extended Reality (XR) Platforms"
      ]
    },
    { 
      title: "Track 5: Security", 
      topics: [
        "Cybersecurity and Threat Detection",
        "Blockchain Applications",
        "Zero Trust Architecture",
        "Cloud Security Solutions",
        "IoT Security Frameworks",
        "AI-Powered Security Systems",
        "Privacy-Preserving Technologies"
      ]
    },
    { 
      title: "Track 6: Cyber Physical Systems", 
      topics: [
        "CPS Architecture and Design",
        "Real-time Systems and Control",
        "Embedded Systems Integration",
        "Industrial Control Systems",
        "Smart Manufacturing Systems",
        "Sensor Networks and IoT",
        "CPS Security and Safety"
      ]
    }
  ];

  const trackIcons = [NetworkIcon, CodeIcon, RadarIcon, PaperclipIcon, GlobeIcon, AwardIcon];

  return (
    <div className="relative">
      <ScrollToTop />
      <style>{styles}</style>
      <div className="hero-bg min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Conference Introduction */}
          <motion.div 
            className="hero-card max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6" style={{ color: colorPalette.primary }}>
              Call For Papers
            </h1>
            <p className="text-base sm:text-lg text-center mb-4 sm:mb-6" style={{ color: colorPalette.text }}>
            The 3rd International Conference on Emerging Computation and Information Technologies (ICECIT-2025) will be organized on 14th and 15th November, 2025.

The main objective of the conference is to explore advances and innovations in Gen AI, ML Applications, Computing Paradigms, 5G, Next-Generation Networks, AR/VR Technologies, Security, and Cyber Physical Systems.            </p>
          </motion.div>

          {/* Paper Submission Guidelines */}
          <motion.div 
            className="hero-card max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6" style={{ color: colorPalette.primary }}>
              Paper Submission
            </h2>
            <p className="text-base sm:text-lg text-center" style={{ color: colorPalette.text }}>
              Papers intended for ICECIT - 2025 should be up to six pages of text. Paper submission must conform to the format defined in the paper presentation guidelines on the conference webpage. Papers must be submitted via online paper submission system.
            </p>
          </motion.div>

          {/* Track Details */}
          <motion.div 
            className="hero-card max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8" style={{ color: colorPalette.primary }}>
              Track Details
            </h2>
            <div className="flex flex-col space-y-4 sm:space-y-6">
              {/* First row - 2 tracks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                {tracks.slice(0, 2).map((track, index) => (
                  <motion.div 
                    key={index}
                    className="track-card cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleTrackClick(track)}
                  >
                    <div className="flex items-center mb-3 sm:mb-4">
                      {React.createElement(trackIcons[index % trackIcons.length], { 
                        className: "track-icon",
                        style: { color: colorPalette.primary }
                      })}
                      <h3 className="track-title font-bold" style={{ color: colorPalette.primary }}>
                        {track.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base" style={{ color: colorPalette.text }}>
                      Click to view topics
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Second row - 2 tracks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                {tracks.slice(2, 4).map((track, index) => (
                  <motion.div 
                    key={index + 2}
                    className="track-card cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleTrackClick(track)}
                  >
                    <div className="flex items-center mb-3 sm:mb-4">
                      {React.createElement(trackIcons[(index + 2) % trackIcons.length], { 
                        className: "track-icon",
                        style: { color: colorPalette.primary }
                      })}
                      <h3 className="track-title font-bold" style={{ color: colorPalette.primary }}>
                        {track.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base" style={{ color: colorPalette.text }}>
                      Click to view topics
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Third row - 2 tracks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {tracks.slice(4, 6).map((track, index) => (
                  <motion.div 
                    key={index + 4}
                    className="track-card cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleTrackClick(track)}
                  >
                    <div className="flex items-center mb-3 sm:mb-4">
                      {React.createElement(trackIcons[(index + 4) % trackIcons.length], { 
                        className: "track-icon",
                        style: { color: colorPalette.primary }
                      })}
                      <h3 className="track-title font-bold" style={{ color: colorPalette.primary }}>
                        {track.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base" style={{ color: colorPalette.text }}>
                      Click to view topics
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Track Details Modal */}
      {selectedTrack && (
        <motion.div
          ref={detailsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => setSelectedTrack(null)}
        >
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-4 my-8"
            onClick={e => e.stopPropagation()}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold" style={{ color: colorPalette.primary }}>
                {selectedTrack.title}
              </h3>
              <button
                onClick={() => setSelectedTrack(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="space-y-3">
              {selectedTrack.topics.map((topic, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}

      <ScrollToTop />
    </div>
  );
};

export default CallForPapers;