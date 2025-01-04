import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const styles = `
  .page-container {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    min-height: 100vh;
    padding: 2rem 0;
    position: relative;
    overflow: hidden;
  }

  .section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    margin: 2rem auto;
    padding: 3rem 2rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    max-width: 1200px;
  }

  @media (max-width: 768px) {
    .section {
      margin: 1rem;
      padding: 2rem 1rem;
    }
  }

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
    padding: 2rem;
    margin: 0 auto;
    max-width: 1200px;
  }

  @media (max-width: 768px) {
    .hero-card {
      margin: 1rem;
      padding: 1.5rem;
    }
  }

  .feature-card {
    background: rgba(255, 255, 255, 0.98);
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    padding: 2rem;
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    .feature-card {
      padding: 1.5rem;
      text-align: center;
    }

    .feature-card ul {
      display: inline-block;
      text-align: left;
    }
  }

  .first-line-indent {
    text-indent: 4em;
    padding-left: 2em;
    margin: 0 auto;
    max-width: 1000px;
  }

  @media (max-width: 768px) {
    .first-line-indent {
      text-indent: 2em;
      padding-left: 1em;
      padding-right: 1em;
      text-align: justify;
    }

    p.first-line-indent {
      margin-bottom: 1.5rem !important;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 0.5rem;
    }
  }

  .text-content {
    max-width: 1000px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .text-content {
      padding: 0 1rem;
    }

    .grid {
      grid-template-columns: 1fr !important;
    }
  }
`;

const colorPalette = {
  primary: '#1e3c72',
  secondary: '#2a5298',
  accent: '#4a90e2',
  text: '#2d3748',
  white: '#ffffff'
};

function AboutUs() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'About SIT' },
    { id: 'departments', label: 'Departments' },
    { id: 'location', label: 'Location' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop - 100;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="page-container">
      <style>{styles}</style>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="hero-bg min-h-screen py-16">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              className="hero-card"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ 
                duration: 0.8,
                filter: { duration: 0.4 }
              }}
            >
              {/* Logo */}
              <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  filter: { duration: 0.3 }
                }}
              >
                <img
                  className="w-40 h-40 object-contain transform transition-transform hover:scale-105"
                  src="/images/logo.png"
                  alt="SIT Logo"
                />
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-center mb-8"
                style={{ color: colorPalette.primary }}
              >
                About Us
              </motion.h1>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-8"
              >
                <style>
                  {`
                    .first-line-indent {
                      text-indent: 4em;
                      padding-left: 2em;
                    }
                  `}
                </style>
                <p className="text-lg leading-relaxed text-justify mb-8 first-line-indent" style={{ color: colorPalette.text }}>
                  Siddaganga Institute of Technology, Tumkur, popularly known as SIT, was established in the year 1963. It was founded and nurtured by His Holiness Dr. Sree Sree Shivakumara Swamiji. The present president of Sree Siddaganga Education Society, Sree Sree Siddalinga Swamiji, is providing directional guidelines.
                </p>

                <p className="text-lg leading-relaxed text-justify mb-6 first-line-indent" style={{ color: colorPalette.text }}>
                  SIT is one among 125 institutions run by Sree Siddaganga Education Society. The institute currently has more than 4500 students pursuing their studies across 14 undergraduate programmes and 06 post graduate programmes. The institute has 15 departments recognized as Research Centres by Visvesvaraya Technological University, Belgaum, with 187 Research scholars pursuing Ph.D. programmes.
                </p>

                <p className="text-lg leading-relaxed text-justify mb-8 first-line-indent" style={{ color: colorPalette.text }}>
                  The institute boasts 290 experienced, qualified, and devoted faculty members, with 155 holding Ph.D. degrees from prestigious institutions like IISc Bangalore, IIT Madras, IIT Bombay, IIT Kharagpur, IIT Guwahati, etc. Another 49 faculty members are pursuing Ph.D. programmes at various reputed institutions. Faculty members have completed 60 projects with a grant of Rs.10 Crore, with 33 ongoing projects worth Rs.8 Crore, funded by organizations like DRDO, DST, ISRO, AICTE, and VGST.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Achievements */}
                  <motion.div
                    className="feature-card p-6"
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    whileHover={{ 
                      scale: 1.02,
                      filter: "blur(0px)"
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      filter: { duration: 0.3 }
                    }}
                  >
                    <h3 className="text-2xl font-bold mb-4" style={{ color: colorPalette.primary }}>
                      Achievements
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                        <span style={{ color: colorPalette.text }}>NAAC Accredited with 'A++' grade</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                        <span style={{ color: colorPalette.text }}>Diamond College rating by QS I-Gauge</span>
                      </li>
                      {/* <li className="flex items-center">
                        <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                        <span style={{ color: colorPalette.text }}>Ranked in top hundred institutions by NIRF since 2016</span>
                      </li> */}
                      <li className="flex items-center">
                        <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                        <span style={{ color: colorPalette.text }}>Ranked 100th place in NIRF Engineering Colleges in 2024</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Programs */}
                  <motion.div
                    className="feature-card p-6"
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    whileHover={{ 
                      scale: 1.02,
                      filter: "blur(0px)"
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      filter: { duration: 0.3 }
                    }}
                  >
                    <h3 className="text-2xl font-bold mb-4" style={{ color: colorPalette.primary }}>
                      Academic Programs
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                        <span style={{ color: colorPalette.text }}>14 Undergraduate Programs</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                        <span style={{ color: colorPalette.text }}>9 Post-Graduate Programs</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                        <span style={{ color: colorPalette.text }}>15 Research Centers for Ph.D. and M.Sc. (Engg.)</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>

                <p className="text-lg leading-relaxed text-justify mb-8 first-line-indent" style={{ color: colorPalette.text }}>
                  The college is an autonomous institution affiliated to Visvesvaraya Technological University (VTU), Belagavi, Karnataka, approved by AICTE, New Delhi and Programmes accredited by NBA, New Delhi. The institute has well-qualified, experienced, and competent faculty members.
                </p>

                <motion.div
                  className="feature-card p-8 mt-8"
                  id="departments"
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  whileHover={{ 
                    scale: 1.02,
                    filter: "blur(0px)"
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    filter: { duration: 0.3 }
                  }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: colorPalette.primary }}>
                    Department of Computer Science & Engineering
                  </h3>
                  <p className="text-lg leading-relaxed text-justify mb-6 first-line-indent" style={{ color: colorPalette.text }}>
                    Established in 1986, the Department of Computer Science & Engineering started with an intake of sixty students. In thirty-eight years of academic services, the department has grown steadily and currently offers four autonomous programs:
                  </p>

                  <ul className="space-y-3 mt-4 mb-6 max-w-md mx-auto">
                    <li className="flex items-center">
                      <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                      <span style={{ color: colorPalette.text }}>B.E. (CSE)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                      <span style={{ color: colorPalette.text }}>B.E. (AI&DS)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                      <span style={{ color: colorPalette.text }}>B.E. CSE (AIML)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                      <span style={{ color: colorPalette.text }}>M.Tech. (CSE)</span>
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed text-justify first-line-indent" style={{ color: colorPalette.text }}>
                    The department is recognized as a research centre by VTU to offer Ph.D. and M.Sc. (Engg.) by research. The program has been accredited four times by NBA, New Delhi. Our experienced faculty members specialize in emerging areas such as Computer Architecture, Computer Networks, Adhoc Networks, Information Security, Cryptography, Wireless Sensor Networks, Artificial Intelligence, Machine Learning, Deep Learning, and Cloud Computing. The faculty members are actively engaged in research through quality publications, research guidance for Ph.D., and sponsored projects.
                  </p>
                </motion.div>

                <motion.div
                  className="feature-card p-8 mt-8"
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  whileHover={{ 
                    scale: 1.02,
                    filter: "blur(0px)"
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    filter: { duration: 0.3 }
                  }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: colorPalette.primary }}>
                    Department of Information Science & Engineering
                  </h3>
                  <p className="text-lg leading-relaxed text-justify mb-6 first-line-indent" style={{ color: colorPalette.text }}>
                    Established in 1999, the Department of Information Science & Engineering began with an intake of 40 students, which increased to 60 in 2000 and 120 in 2022. The department is committed to academic excellence through experiential learning, innovative teaching methods, and state-of-the-art laboratories equipped with advanced computer systems and the latest software tools. Faculty and technical staff work collaboratively to guide students in cutting-edge areas like Data Science, Artificial Intelligence, Machine Learning, and Cybersecurity.
                  </p>

                  <ul className="space-y-3 mb-6 ml-8">
                    <li className="flex items-center">
                      <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                      <span style={{ color: colorPalette.text }}>Offers B.E. in Information Science & Engineering with research opportunities for Ph.D. and M.Sc. (Engg.) under VTU.</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                      <span style={{ color: colorPalette.text }}>Focus areas include emerging technologies, software development, and data security.</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                      <span style={{ color: colorPalette.text }}>Actively organizes workshops, seminars, and industry interactions for holistic learning.</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                      <span style={{ color: colorPalette.text }}>Aims to nurture ethical professionals and lifelong learners equipped to solve real-world problems.</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="feature-card p-8 mt-8"
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  whileHover={{ 
                    scale: 1.02,
                    filter: "blur(0px)"
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    filter: { duration: 0.3 }
                  }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: colorPalette.primary }}>
                    Department of Master of Computer Applications (MCA)
                  </h3>
                  <p className="text-lg leading-relaxed text-justify mb-6 first-line-indent" style={{ color: colorPalette.text }}>
                    Established in 1994 with an initial intake of 30 students, the MCA program at Siddaganga Educational Society bridges the gap between computer theory and real-world applications. Affiliated with Visvesvaraya Technological University and approved by AICTE, the program became autonomous in 2008. Focused on developing efficient, error-free software solutions, it integrates networking technologies, multi-technology systems, and business applications. Students benefit from a robust curriculum supplemented with expert seminars, mini projects, departmental newsletters, and intra-department contests to enhance skills and industry readiness.
                  </p>

                  <ul className="space-y-3 mb-6 ml-8">
                    <li className="flex items-center">
                      <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                      <span style={{ color: colorPalette.text }}>Strong placement record with leading companies like TCS, Infosys, Wipro, and Accenture recruiting students.</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                      <span style={{ color: colorPalette.text }}>Encourages self-learning, communication skills, and research through workshops, newsletters, and contests.</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                      <span style={{ color: colorPalette.text }}>Aims to create industry-ready professionals with a blend of technical expertise and soft skills training.</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                      <span style={{ color: colorPalette.text }}>Vision: To mould quality and responsible computer professionals with a service-oriented mindset.</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                      <span style={{ color: colorPalette.text }}>Mission: Deliver top-tier education to nurture exceptional IT and computational skills.</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="feature-card p-8 mt-8"
                  id="facilities"
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  whileHover={{ 
                    scale: 1.02,
                    filter: "blur(0px)"
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    filter: { duration: 0.3 }
                  }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: colorPalette.primary }}>
                    Campus Facilities
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4" style={{ color: colorPalette.secondary }}>
                        Academic Facilities
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                          <span style={{ color: colorPalette.text }}>State-of-the-art laboratories with modern equipment</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                          <span style={{ color: colorPalette.text }}>Central library with extensive collection of books and journals</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                          <span style={{ color: colorPalette.text }}>Digital learning resources and e-library access</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                          <span style={{ color: colorPalette.text }}>Smart classrooms with modern teaching aids</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4" style={{ color: colorPalette.secondary }}>
                        Student Amenities
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                          <span style={{ color: colorPalette.text }}>Separate hostels for boys and girls</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                          <span style={{ color: colorPalette.text }}>Well-equipped sports complex and gymnasium</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                          <span style={{ color: colorPalette.text }}>24/7 medical facility and ambulance service</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                          <span style={{ color: colorPalette.text }}>Campus-wide Wi-Fi connectivity</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-xl font-semibold mb-4" style={{ color: colorPalette.secondary }}>
                      Research & Innovation
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                        <span style={{ color: colorPalette.text }}>Research centers with advanced equipment and facilities</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                        <span style={{ color: colorPalette.text }}>Innovation and entrepreneurship development cell</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                        <span style={{ color: colorPalette.text }}>Industry collaboration centers</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="feature-card p-8 mt-8"
                  id="contact"
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  whileHover={{ 
                    scale: 1.02,
                    filter: "blur(0px)"
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    filter: { duration: 0.3 }
                  }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: colorPalette.primary }}>
                    Contact Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4" style={{ color: colorPalette.secondary }}>
                        Address
                      </h4>
                      <p className="text-lg mb-4" style={{ color: colorPalette.text }}>
                        Siddaganga Institute of Technology<br />
                        B.H. Road, Tumakuru - 572103<br />
                        Karnataka, India
                      </p>

                      <h4 className="text-xl font-semibold mb-4 mt-6" style={{ color: colorPalette.secondary }}>
                        Phone Numbers
                      </h4>
                      <ul className="space-y-2">
                        <li style={{ color: colorPalette.text }}>Office: +91-816-2214001</li>
                        <li style={{ color: colorPalette.text }}>Fax: +91-816-2282994</li>
                        <li style={{ color: colorPalette.text }}>Admission Cell: +91-816-2214042</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4" style={{ color: colorPalette.secondary }}>
                        Quick Links
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="text-lg mr-2" style={{ color: colorPalette.accent }}>•</span>
                          <a 
                            href="mailto:principal@sit.ac.in"
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                            style={{ color: colorPalette.accent }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Email: principal@sit.ac.in
                          </a>
                        </li>
                      </ul>

                      <h4 className="text-xl font-semibold mb-4 mt-6" style={{ color: colorPalette.secondary }}>
                        Social Media
                      </h4>
                      <div className="flex space-x-4">
                        <a 
                          href="https://www.facebook.com/sittumkur"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          Facebook
                        </a>
                        <a 
                          href="https://www.linkedin.com/school/siddaganga-institute-of-technology"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutUs;
