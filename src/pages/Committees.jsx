import React from 'react'
import { motion } from 'framer-motion'

const styles = `
  .page-container {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    min-height: 100vh;
    padding: 1rem;
    position: relative;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .page-container {
      padding: 0.5rem;
    }
  }

  .section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    margin: 1.5rem 0;
    padding: 2rem 1.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
  }

  @media (max-width: 640px) {
    .section {
      margin: 1rem 0;
      padding: 1.5rem 1rem;
    }
  }

  .card {
    background: white;
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform-style: preserve-3d;
    perspective: 1000px;
    width: 100%;
  }

  @media (max-width: 768px) {
    .card {
      padding: 1rem;
    }
  }

  .section-title {
    font-size: 2rem;
    font-weight: bold;
    color: #1e3c72;
    text-align: center;
    margin-bottom: 1.5rem;
    position: relative;
    padding: 0 1rem;
  }

  @media (max-width: 640px) {
    .section-title {
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }
  }

  .profile-image {
    border: 4px solid #1e3c72;
    transition: all 0.3s ease;
    max-width: 200px;
    width: 100%;
    height: auto;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    .profile-image {
      max-width: 150px;
      border-width: 3px;
    }
  }

  .committee-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
  }

  @media (max-width: 640px) {
    .committee-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
      padding: 0.5rem;
    }
  }

  .member-list-item {
    background: white;
    border-radius: 10px;
    padding: 1rem;
    margin: 0.5rem 0;
    transition: all 0.3s ease;
    border-left: 4px solid #1e3c72;
  }

  @media (max-width: 480px) {
    .member-list-item {
      padding: 0.75rem;
      font-size: 0.9rem;
    }
  }

  .committee-section {
    margin: 2rem 0;
  }

  @media (max-width: 768px) {
    .committee-section {
      margin: 1.5rem 0;
    }
  }

  .member-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    .member-info {
      gap: 0.25rem;
    }
  }

  .nav-menu {
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    background: rgba(255, 255, 255, 0.9);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .nav-dot {
    width: 12px;
    height: 12px;
    background: #cbd5e1;
    border-radius: 50%;
    margin: 8px 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .nav-dot:hover {
    background: #1e3c72;
    transform: scale(1.2);
  }

  .nav-dot.active {
    background: #1e3c72;
  }

  .nav-tooltip {
    position: absolute;
    right: 30px;
    background: #1e3c72;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    white-space: nowrap;
  }

  .nav-dot:hover .nav-tooltip {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .nav-menu {
      display: none;
    }
  }
`;

const colorPalette = {
  primary: '#1e3c72',      // Deep royal blue for headings
  secondary: '#2a5298',    // Medium royal blue for subtext
  accent: '#4a90e2',       // Bright royal blue for highlights
  white: '#ffffff',
  background: '#f8fafc',   // Very light gray-blue
  shadow: 'rgba(0, 0, 0, 0.1)'
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const hoverEffect = {
  scale: 1.05,
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05)",
  transition: { duration: 0.3 }
};

const listItemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const patrons = [
  {
    name: "Shri T. K. Nanjundappa",
    role: "Honorary Secretary",
    org: "Sree Siddaganga Education Society, Siddaganga Math, Tumakuru",
    img: "/images/nanju.jpg"
  },
  {
    name: "Dr. Shivakumaraiah",
    role: "Joint Secretary",
    org: "Sree Siddaganga Education Society, Siddaganga Math, Tumakuru",
    img: "/images/shivkumar.jpeg"
  },
    {
    name: "Dr. M. N. Channabasappa",
    role: "Director",
    org: "SIT, Tumakuru",
    img: "/images/chanu.gif"
  }
];

const organizingCommittee = [
  "Dr. N R Sunitha, Professor & Head, Dept. of Computer Science & Engineering",
  "Dr. R Aparna, Professor & Head, Dept. of Information Science and Engineering",
  "Dr. B G Premasudha, Professor & Head, Dept. of Master of Computer Applications",
  "Dr. R Sumathi, Professor, Dept. of Computer Science & Engineering",
  "Dr. Y S Nijagunarya, Professor, Dept. of Computer Science & Engineering",
  "Dr. A S Poornima, Professor, Dept. of Computer Science & Engineering",
  "Dr. H S Jayanna, Professor & Dean (Academic), Dept. of Computer Science & Engineering"
];

const advisoryCommittee = [
  {
    name: "Dr. Mahadeva Prasanna",
    role: "Director, IIIT Dharwad, Karnataka, India"
  },
//   Dr. Parameshachari B D, SAC Chair, IEEE Bangalore Section
// Mr. Gajendra Deshpande, Execom Member,IEEE Bangalore Section
{
  name: " Dr. Parameshachari B D",
  role:" SAC Chair, IEEE Bangalore Section"
},
{
  name: " Mr. Gajendra Deshpande",
  role:" Execom Member,IEEE Bangalore Section"
},
  {
    name: "Dr. Shashidhar Patil",
    role: "Assistant Manager (Research & Development), Seokyoung Systems, Seoul, South Korea"
  },
  {
    name: "Dr. C B Akki",
    role: "Registrar, IIIT Dharwad, Karnataka, India"
  },
  {
    name: "Dr. P. Santhi Thilagam",
    role: "Professor, Dept. of Computer Science and Engineering, National Institute of Technology-Karnataka, Surathkal, Karnataka, India"
  },
  {
    name: "Dr. Shashidhar G Koolagudi",
    role: "Professor, Dept. of Computer Science and Engineering, NITK Surathkal, Karnataka, India"
  },
  {
    name: "Dr. C.R.S. Kumar",
    role: "Professor, DIAT, DRDO, Pune, India"
  },
  {
    name: "Dr. Mahesha BR Pandit",
    role: "Chief Technology Officer (CTO), Canarys Automations Limited, Bengaluru, Karnataka, India"
  },
  {
    name: "Dr. Alwyn Roshan Pais",
    role: "Professor, Dept. of Computer Science and Engineering, National Institute of Technology-Karnataka, Surathkal, Karnataka, India"
  },
  {
    name: "Dr. Annappa",
    role: "Professor, Dept. of Computer Science and Engineering, National Institute of Technology-Karnataka, Surathkal, Karnataka, India"
  },
  {
    name: "Dr. Madhu Mutyam",
    role: "Professor, Dept. of Computer Science and Engineering, Indian Institute of Technology, Madras"
  },
  {
    name: "Mr. Gurucharan H C",
    role: "Senior Lead Software Engineer, Apple Inc, San Francisco Bay Area, US"
  },
  {
    name: "Dr. Varun M Deshpande",
    role: "Senior Global Cybersecurity Manager, Schneider Electric"
  }
];

const technicalCommittee = [
  {
    name: "Dr. Bheemappa Halavar",
    role: "Assistant Professor, Indian Institute of Information Technology, Sri City, Chittoor, India"
  },
  {
    name: "Dr. Pavan Kumar BN",
    role: "Assistant Professor, Indian Institute of Information Technology, Sri City, Chittoor, India"
  },
  {
    name: "Dr. B Sathish Babu",
    role: "Professor, RVCE, Bengaluru, Karnataka, India"
  },
  {
    name: "Dr. Chidananda Murthy P",
    role: "Consultant, Celabal Technologies, Bengaluru, Karnataka, India"
  },
  {
    name: "Dr. Mahesh Kumar K M",
    role: "Information Security Engineer, Jio Platforms Ltd., Bengaluru, Karnataka, India"
  },
  {
    name: "Dr. G T Raju",
    role: "Principal, SJC Institute of Technology, Chickballapur, Bengaluru, Karnataka, India"
  },
  {
    name: "Mr. Sandeep Moonka",
    role: "Fintech and Payments Partnership Lead, Google Pay India"
  },
  {
    name: "Dr. Thejas G S",
    role: "Assistant Professor, Tarleton State University, USA"
  },
  {
    name: "Dr. Jaidhar C D",
    role: "Professor, Department of Information Technology, National Institute of Technology-Karnataka, Surathkal, Karnataka, India"
  },
  {
    name: "Dr. Purushothama B R",
    role: "Assistant Professor, Dept. of Computer Science and Engineering, National Institute of Technology-Karnataka, Surathkal, Karnataka, India"
  },
  {
    name: "Dr. Akshay Deepak",
    role: "Associate Professor, Dept. of Computer Science and Engineering, National Institute of Technology-Patna, Patna, India"
  },
  {
    name: "Mr. Shiva Abhishek",
    role: "Citibank UK, London"
  }
];

const publicationChairs = [
  {
    name: "Dr. K N Shreenath",
    role: "Associate Professor, Dept. of Computer Science & Engineering"
  },
  {
    name: "Devendra Gowda",
    role: "Execom Member, IEEE Bangalore Section"
  },
  {
    name: "Dr. M B Nirmala",
    role: "Associate Professor, Dept. of Computer Science & Engineering"
  },
  {
    name: "Dr. Asha Gowda Karegowda",
    role: "Associate Professor, Dept. of Master of Computer Applications"
  },
  {
    name: "Dr. H D Kallinatha",
    role: "Assistant Professor, Dept. of Computer Science & Engineering"
  },
  {
    name:"Dr. S Sharath Kumar",
    role:"Assistant Professor, Dept. of Information Science & Engineering"
  }
];



const publicityChairs = [
  {
    name: "Dr. K Bhargavi",
    role: "Associate Professor, Dept. of Computer Science & Engineering"
  },
  {
    name: "Dr. G Jagadamba",
    role: "Assistant Professor, Dept. of Information Science & Engineering"
  },
  {
    name: "Dr. R M Savithramma",
    role: "Assistant Professor, Dept. of Computer Science & Engineering"
  },
  {
    name: "Dr. B P Ashwini",
    role: "Assistant Professor, Dept. of Computer Science & Engineering"
  },
  {
    name: "Dr.C Bhanuprakash",
    role: "Assistant Professor, Dept. of Master of Computer Applications"
  },
  {
    name: "Mr. Keerthan Kumar T G",
    role: "Assistant Professor, Dept. of Information Science & Engineering"
  }
];

const financeChairs = [
  {
    name: "Dr. Purohit Srinivasacharya",
    role: "Associate Professor, Dept. of Information Science & Engineering"
  },
  {
    name: "Dr. Prashanth G K",
    role: "Assistant Professor, Dept. of Master of Computer Applications"
  },
  {
    name: "Dr. K Srinivasa",
    role: "Assistant Professor, Dept. of Computer Science & Engineering"
  },
  {
    name: "Dr. Bharathi P T",
    role: "Assistant Professor, Dept. of Computer Science & Engineering"
  },
  {
    name: "Dr. T M Kiran Kumar",
    role: "Assistant Professor, Dept. of Computer Science & Engineering"
  }
];

const Committees = () => {
  const [activeSection, setActiveSection] = React.useState('');

  const sections = [
    { id: 'founder', label: 'Founder President' },
    { id: 'patron', label: 'Chief Patron' },
    { id: 'patrons', label: 'Our Patrons' },
    { id: 'chair', label: 'General Chairs' },
    { id: 'organizing', label: 'Organizing Committee' },
    { id: 'advisory', label: 'Advisory Committee' },
    { id: 'technical-chairs', label: 'Technical Program Chairs' },
    { id: 'publication', label: 'Publication Chairs' },
    { id: 'publicity', label: 'Publicity Chairs' },
    { id: 'finance', label: 'Finance Chairs' },
    { id: 'committee', label: 'Technical Committee' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.pageYOffset;
          if (currentPosition >= elementTop && currentPosition <= elementTop + bottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-container">
      <style>{styles}</style>
      
      {/* Navigation Dots */}
      <div className="nav-menu">
        {sections.map((section) => (
          <div
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
          >
            <span className="nav-tooltip">{section.label}</span>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Founder President Section */}
        <motion.section id="founder" className="section mb-12">
          <h1 className="section-title">
            With the divine blessings of our Founder President
          </h1>
          <motion.div 
            className="flex flex-col items-center card max-w-2xl mx-auto p-8"
            whileHover={{ scale: 1.02 }}
          >
            <img
              className="w-64 h-64 rounded-full shadow-2xl mb-8 profile-image"
              src="/images/swamiji.jpg"
              alt="Founder President"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 name">
              Sree Sree Sree Dr. Shivakumara Swamiji
            </h2>
            <p className="text-xl text-center mb-2 role">Founder President</p>
            <p className="text-lg text-center organization">
              Sree Siddaganga Education Society, Siddaganga Math, Tumakuru
            </p>
          </motion.div>
        </motion.section>

        {/* Chief Patron Section */}
        <motion.section id="patron" className="section mb-12">
          <h2 className="section-title">
            Chief Patron
          </h2>
          <motion.div 
            className="flex flex-col items-center card max-w-2xl mx-auto p-8"
            whileHover={{ scale: 1.02 }}
          >
            <img
              className="w-64 h-64 rounded-full shadow-2xl mb-8 profile-image"
              src="/images/swamiji2.0.jpg"
              alt="Chief Patron"
            />
            <p className="text-2xl md:text-3xl font-bold text-center mb-2 name">
              Sree Siddalinga Swamiji
            </p>
            <p className="text-xl font-semibold text-center mb-2 role">President</p>
            <p className="text-lg text-center organization">
              Sree Siddaganga Education Society, Siddaganga Math, Tumakuru
            </p>
          </motion.div>
        </motion.section>

        {/* Patrons Section */}
        <motion.section id="patrons" className="section mb-12">
          <h2 className="section-title">
            Our Patrons
          </h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {patrons.map((patron, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center text-center card p-6"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  className="w-48 h-48 rounded-full shadow-2xl mb-6 profile-image"
                  src={patron.img || "/placeholder.svg?height=192&width=192"}
                  alt={patron.name}
                />
                <p className="text-2xl font-bold mb-2 name">{patron.name}</p>
                <p className="text-lg font-semibold mb-2 role">{patron.role}</p>
                <p className="text-md organization">{patron.org}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* General Chair Section */}
        <motion.section id="chair" className="section mb-12">
          <h2 className="section-title">
            General Chairs
          </h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {[
              
              {
                name: "Dr. S. V. Dinesh",
                role: "Professor",
                title: "SIT, Tumakuru",
                img: "/images/dinesh.jpg"
              },
              {
                name: "Dr. Sajjan G Shiva",
                role: "Professor",
                title: "University of Memphis, USA",
                img: "/images/DrSajjan.jpg"
              },
              {
                name: "Dr. S. S. Iyengar",
                role: "Professor",
                title: "Florida International University, Miami",
                img: "/images/ssiyengar.jpeg"
              }
            ].map((chair, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center"
              >
                <img
                  className="w-64 h-64 rounded-full shadow-2xl mb-8 profile-image"
                  src={chair.img}
                  alt={chair.name}
                />
                <p className="text-2xl md:text-3xl font-bold text-center mb-2 name">
                  {chair.name}
                </p>
                <p className="text-xl font-semibold text-center mb-2 role">{chair.role}</p>
                <p className="text-lg text-center organization">{chair.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Organizing Committee */}
        <motion.section id="organizing" className="section mb-12">
          <h2 className="section-title">
            Organizing Committee
          </h2>
          <motion.ul 
            className="space-y-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {organizingCommittee.map((member, index) => (
              <motion.li 
                key={index} 
                className="member-list-item"
                whileHover={{ x: 10 }}
              >
                <span className="text-lg text-gray-800">{member}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Advisory Committee */}
        <motion.section id="advisory" className="section mb-12">
          <h2 className="section-title">
            Advisory Committee
          </h2>
          <div className="committee-grid">
            {advisoryCommittee.slice(0, 12).map((member, index) => (
              <motion.div 
                key={index}
                className="text-center card p-6"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >
                <p className="text-xl font-bold mb-2 name">{member.name}</p>
                <p className="text-md text-gray-700">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technical Program Chairs */}
        <motion.section id="technical-chairs" className="section mb-12">
          <h2 className="section-title">
            Technical Program Chairs
          </h2>
          <div className="committee-grid">
            {[
              {
                name: "Dr G S Javed",
                role: "EXECOM Member-2024"
              },
              {
                name: "Dr. Chengappa M R",
                role: "EXECOM Vice Chair Industry Engagement & Open/IEEE Standard, IEEE Bangalore Section-2024"
              },
              {
                name: "Dr. T C Pramod",
                role: "Associate Professor, Dept. of Computer Science & Engineering"
              },
              {
                name: "Dr. Sumalatha Aradhya",
                role: "Associate Professor, Dept. of Computer Science & Engineering"
              },
              {
                name: "Dr. H Kavitha",
                role: "Associate Professor, Dept. of Information Science & Engineering"
              },
              {
                name: "Dr. H S Vijaya Kumar",
                role: " Assistant Professor, Dept. of Master of Computer Applications"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="text-center card p-6"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >
                <p className="text-xl font-bold mb-2 name">{member.name}</p>
                <p className="text-md text-gray-700">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Publication Chairs */}
        <motion.section id="publication" className="section mb-12">
          <h2 className="section-title">
            Publication Chairs
          </h2>
          <div className="committee-grid">
            {publicationChairs.map((member, index) => (
              <motion.div 
                key={index}
                className="text-center card p-6"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >
                <p className="text-xl font-bold mb-2 name">{member.name}</p>
                <p className="text-md text-gray-700">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Publicity Chair */}
        <motion.section id="publicity" className="section mb-12">
          <h2 className="section-title">
            Publicity Chairs
          </h2>
          <div className="committee-grid">
            {publicityChairs.map((member, index) => (
              <motion.div 
                key={index}
                className="text-center card p-6"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >
                <p className="text-xl font-bold mb-2 name">{member.name}</p>
                <p className="text-md text-gray-700">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Finance Chair */}
        <motion.section id="finance" className="section mb-12">
          <h2 className="section-title">
            Finance Chairs
          </h2>
          <div className="committee-grid">
            {financeChairs.map((member, index) => (
              <motion.div 
                key={index}
                className="text-center card p-6"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >
                <p className="text-xl font-bold mb-2 name">{member.name}</p>
                <p className="text-md text-gray-700">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technical Committee */}
        <motion.section id="committee" className="section mb-12">
          <h2 className="section-title">
            Technical Committee
          </h2>
          <div className="committee-grid">
            {technicalCommittee.slice(0, 15).map((member, index) => (
              <motion.div 
                key={index}
                className="text-center card p-6"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >
                <p className="text-xl font-bold mb-2 name">{member.name}</p>
                <p className="text-md text-gray-700">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default Committees
