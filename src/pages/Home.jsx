// Home.jsx
import React from "react";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";

const styles = `
  .hero-bg {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    position: relative;
    overflow: hidden;
    will-change: transform;
    padding: 1rem;
  }

  .hero-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    box-shadow: 
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05),
      inset 0 -2px 0 0 rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    transform-style: preserve-3d;
    perspective: 1000px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    .hero-card {
      margin: 0.5rem;
      padding: 0.75rem;
    }
  }

  .logo-container {
    position: relative;
    transition: transform 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    .logo-container {
      padding: 0.5rem;
      max-width: 250px;
    }
  }

  .timeline-content {
    width: 100%;
    max-width: calc(50% - 3rem);
    background: white;
    border-radius: 20px;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    .timeline-content {
      max-width: 100%;
      margin: 1rem 0;
    }
  }

  .registration-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    .registration-form {
      padding: 0.5rem;
    }
  }

  .form-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .form-field {
    flex: 1 1 300px;
  }

  @media (max-width: 640px) {
    .form-field {
      flex: 1 1 100%;
    }
  }

  .logo-container {
    position: relative;
    transition: transform 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .logo-container img {
    max-width: 100%;
    height: auto;
    transition: transform 0.3s ease;
  }

  .logo-container:hover img {
    transform: scale(1.05);
  }

  .section-divider {
    height: 100px;
    background: linear-gradient(to right bottom, #ffffff 49%, #f7fafc 50%);
  }

  .campus-section {
    position: relative;
    overflow: hidden;
    background: white;
  }

  .campus-section::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, #f0f7ff 0%, transparent 70%);
    animation: rotate 30s linear infinite;
    pointer-events: none;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .campus-content {
    position: relative;
    z-index: 2;
    padding: 2rem;
  }

  .campus-image {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    transform: perspective(1000px) rotateY(-5deg);
    transition: transform 0.5s ease;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  .campus-image:hover {
    transform: perspective(1000px) rotateY(0deg);
  }

  .campus-image img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 15px;
    transition: transform 0.3s ease;
  }

  .campus-image:hover img {
    transform: scale(1.05);
  }

  .campus-text {
    position: relative;
    z-index: 2;
  }

  .campus-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e3c72;
    margin-bottom: 1.5rem;
  }

  .campus-description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #4a5568;
  }

  .track-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    perspective: 1000px;
  }

  .track-card {
    background: white;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transform-style: preserve-3d;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .track-card:hover {
    transform: translateZ(20px);
    box-shadow: 
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .track-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1e3c72, #2a5298);
    border-radius: 15px 15px 0 0;
  }

  .timeline-section {
    position: relative;
    background: white;
    overflow: hidden;
  }

  .timeline-container {
    position: relative;
    padding: 4rem 0;
    max-width: 1200px;
    margin: 0 auto;
  }

  .timeline-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 6px;
    background: linear-gradient(to bottom, 
      transparent 0%,
      #1e3c72 10%,
      #1e3c72 90%,
      transparent 100%
    );
    transform: translateX(-50%);
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(30, 60, 114, 0.2);
  }

  .timeline-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    position: relative;
  }

  .timeline-item {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .timeline-item:nth-child(odd) .timeline-content {
    margin-left: auto;
    margin-right: 4rem;
  }

  .timeline-item:nth-child(even) .timeline-content {
    margin-right: auto;
    margin-left: 4rem;
  }

  .timeline-content {
    width: calc(50% - 3rem);
    background: white;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    position: relative;
    border: 1px solid rgba(30, 60, 114, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    will-change: transform;
  }

  .timeline-content:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 25px 30px -5px rgba(0, 0, 0, 0.15),
      0 15px 15px -5px rgba(0, 0, 0, 0.08);
  }

  .timeline-dot {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 32px;
    height: 32px;
    background: #1e3c72;
    border: 6px solid white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    box-shadow: 0 0 0 6px rgba(30, 60, 114, 0.2);
    will-change: transform;
  }

  .timeline-dot::before {
    content: '';
    position: absolute;
    inset: -15px;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(30, 60, 114, 0.2), transparent);
    animation: pulse 2s infinite;
    will-change: transform;
  }

  .timeline-date {
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 30px;
    font-weight: 600;
    font-size: 1.1rem;
    display: inline-block;
    margin-bottom: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .timeline-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e3c72;
    margin-bottom: 0.5rem;
  }

  .timeline-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .timeline-description {
    color: #4a5568;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .timeline-content {
      width: calc(100% - 3rem);
      margin: 0 auto !important;
    }

    .timeline-line {
      left: 2rem;
    }

    .timeline-dot {
      left: 2rem;
    }
  }
`;

function Home() {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <style>{styles}</style>
      
      {/* Hero Section */}
      <div className="hero-bg min-h-[80vh] flex items-center justify-center py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="hero-card p-4 sm:p-8 md:p-12"
            initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ 
              duration: 0.8,
              filter: { duration: 0.4 }
            }}
          >
            {/* Logo Section */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mb-8 sm:mb-12">
              <motion.div 
                className="logo-container w-32 sm:w-40 md:w-48"
                initial={{ opacity: 0, x: -50, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ 
                  duration: 0.8,
                  filter: { duration: 0.4 }
                }}
              >
                <img 
                  src="/images/swamiji.jpg"
                  alt="SIT Logo" 
                  className="w-full h-auto object-contain"
                />
　　 　 　 　
              </motion.div>
              <motion.div 
                className="logo-container w-32 sm:w-40 md:w-48"
                initial={{ opacity: 0, x: -50, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ 
                  duration: 0.8,
                  filter: { duration: 0.4 }
                }}
              >
                <img 
                  src="/images/logo.png"
                  alt="SIT Logo" 
                  className="w-full h-auto object-contain"
                />
　　 　 　 　
              </motion.div>
              <motion.div 
                className="logo-container w-32 sm:w-40 md:w-48"
                initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ 
                  duration: 0.8,
                  filter: { duration: 0.4 }
                }}
              >
                <img 
                  src="/images/swamiji2.0.jpg"
                  alt="SIT Tribute" 
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </div>
            
            {/* Title Section */}
            <div className="text-center space-y-4 sm:space-y-6">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ 
                  delay: 0.3,
                  filter: { duration: 0.5 }
                }}
              >
                3<sup>rd</sup> International Conference on
                
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 leading-relaxed pb-2">
                  Emerging Computation and Information Technologies
                </span>
                <span className="block text-2xl sm:text-3xl mt-4 text-blue-600">ICECIT-2025</span>
              </motion.h1>
　　 　 　 　
              <motion.h2 
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-600 max-w-3xl mx-auto px-4"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ 
                  delay: 0.5,
                  filter: { duration: 0.4 }
                }}
              >
                Association of Computer Science & Engineering, Information Science & Engineering, Master of Computer Application
              </motion.h2>
　　 　 　 　
              <motion.p 
                className="text-3xl sm:text-4xl font-extrabold text-blue-700"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ 
                  delay: 0.7,
                  filter: { duration: 0.4 }
                }}
              >
                14th & 15th November, 2025
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* Campus Section */}
      <section className="campus-section py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div 
              className="campus-image relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
            >
              <img 
                src="./images/sit.jpg" 
                alt="SIT College" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
            
            <motion.div 
              className="campus-text space-y-4 sm:space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                About Our
                <span className="block text-blue-600">Institution</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                Siddaganga Institute of Technology (SIT) in Tumkur, Karnataka, is a prestigious institution established in 1963. Renowned for its excellence in engineering and technology education, it offers undergraduate, postgraduate, and doctoral programs in various disciplines. Affiliated with Visvesvaraya Technological University, SIT is well-known for its state-of-the-art infrastructure, experienced faculty, and vibrant campus life.
              </p>
              <ul className="space-y-2 text-base sm:text-lg text-gray-600">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  NAAC Accredited with 'A++' grade
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  Diamond College rating by QS I-Gauge
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  Ranked 100th place in NIRF Engineering Colleges in 2024
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Tracks Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Conference
            <span className="block text-blue-600">Tracks</span>
          </motion.h2>

          <div className="flex flex-col items-center space-y-6 sm:space-y-8">
            {/* First Row - 3 tracks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
              {tracks.slice(0, 3).map((track, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-4 sm:mb-6">{track.title}</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {track.topics.map((topic, topicIndex) => (
                      <li 
                        key={topicIndex}
                        className="text-sm sm:text-base text-gray-600 flex items-start space-x-3"
                      >
                        <span className="text-blue-500">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Second Row - 3 tracks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
              {tracks.slice(3, 6).map((track, index) => (
                <motion.div
                  key={index + 3}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 3) * 0.1 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-4 sm:mb-6">{track.title}</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {track.topics.map((topic, topicIndex) => (
                      <li 
                        key={topicIndex}
                        className="text-sm sm:text-base text-gray-600 flex items-start space-x-3"
                      >
                        <span className="text-blue-500">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Timeline Section */}
      <section className="timeline-section py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Important
            <span className="block text-blue-600">Dates</span>
          </motion.h2>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            <div className="timeline-wrapper grid gap-6 sm:gap-8">
              {[
                {
                  title: "Submission protal Opens",
                  date: "May 5th, 2025",
                  icon: "📝",
                 // description: "Start submitting your research papers"
                },
                {
                  title: "Full Paper Submission Deadline",
                  date: "July 30th, 2025",
                  icon: "✉️",
                  //description: "Last date to submit your complete paper"
                },
                {
                  title: "Acceptance/Rejection Notification",
                  date: "September 25th, 2025",
                  icon: "📄",
                 // description: "Last date to submit your abstract"
                },
               
                {
                  title: "Submission of camera ready paper",
                  date: "September 30th, 2025",
                  icon: "📎",
                 // description: "Results will be announced"
                },
                {
                  title: "Payment and Registration Deadline",
                  date: "October 15th, 2025",
                  icon: "💳",
                  //description: "Complete your registration and payment"
                },
                {
                  title: "Conference Dates",
                  date: "November 14th & 15th, 2025",
                  icon: "🎓",
                  //description: "Join us for the main conference"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="timeline-item p-4 sm:p-6 bg-white rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                >
                  <div className="timeline-content">
                    <span className="text-sm sm:text-base font-semibold text-blue-600">{item.date}</span>
                    <div className="text-2xl sm:text-3xl my-2">{item.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;