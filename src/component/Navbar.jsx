  "use client";

import { useState } from "react";
import { motion } from "framer-motion";
import instituteLogo from "/logo.jpg"; // Update this path as needed
import { HoveredLink } from "../component/ui/navbar-menu"; // Ensure this is correct
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Admissions", path: "/contactSection" },
    // { name: "Placements", path: "/placements" },
    { name: "Contact", path: "/contactSection" },
  ];

  const coursesData = [
  {
    name: "Basic Computer",
    path: "/courses/basic-computer",
    image: "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg",
    description: "Fundamentals of computer operations and software tools",
    duration: "3 months",
    level: "Beginner"
  },
  {
    name: "Graphic Designing",
    path: "/courses/graphic-designing",
    image: "https://images.pexels.com/photos/2422286/pexels-photo-2422286.jpeg",
    description: "Photoshop, Corel Draw, InDesign, Illustrator",
    duration: "5 months",
    level: "Intermediate"
  },
  {
    name: "Web Designing",
    path: "/courses/web-designing",
    image: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg",
    description: "HTML, DHTML, CSS, JavaScript, Core Python",
    duration: "5 months",
    level: "Intermediate"
  },
  {
    name: "CAAD",
    path: "/courses/caad",
    image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg",
    description: "Certificate in Advanced Accounting & Designing",
    duration: "10 months",
    level: "Advanced"
  },
  {
    name: "CCA",
    path: "/courses/cca",
    image: "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg",
    description: "Certificate in Computer Accounting",
    duration: "6 months",
    level: "Beginner"
  },
  {
    name: "ACA",
    path: "/courses/aca",
    image: "https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg",
    description: "Advanced Certificate in Accounting",
    duration: "8 months",
    level: "Intermediate"
  },
  {
    name: "ADCA",
    path: "/courses/adca",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
    description: "Advanced Diploma in Computer Application",
    duration: "12 months",
    level: "Advanced"
  },
  {
    name: "Digital Marketing",
    path: "/courses/digital-marketing",
    image: "https://images.pexels.com/photos/4134784/pexels-photo-4134784.jpeg",
    description: "SEO, SMO, Content Marketing, PPC Advertising",
    duration: "4 months",
    level: "Intermediate"
  },
  {
    name: "Python",
    path: "/courses/python",
    image: "https://images.pexels.com/photos/3183202/pexels-photo-3183202.jpeg",
    description: "Core Python programming concepts",
    duration: "4 months",
    level: "Intermediate"
  },
  {
    name: "Advanced Excel",
    path: "/courses/advanced-excel",
    image: "https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg",
    description: "Pivot Tables, Dashboards, Advanced Formulas",
    duration: "1 month",
    level: "Advanced"
  },
  {
    name: "Busy",
    path: "/courses/busy",
    image: "https://images.pexels.com/photos/3183202/pexels-photo-3183202.jpeg",
    description: "Busy Accounting Software training",
    duration: "1 month",
    level: "Intermediate"
  },
  {
    name: "Tally Prime",
    path: "/courses/tally-prime",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
    description: "Tally Prime with GST features",
    duration: "3 months",
    level: "Intermediate"
  },
  {
    name: "CCC",
    path: "/courses/ccc",
    image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg",
    description: "Course on Computer Concept",
    duration: "4 months",
    level: "Beginner"
  }
];
 const admissionSteps = [
  {
    step: "1",
    title: "Apply Now",
    description: "WhatsApp us, fill the contact form, visit our branches, or call 8860448368"
  }
];


  const mobileVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { y: { stiffness: 1000, velocity: -100 } },
    },
  };

  return (
    <nav className="bg-gradient-to-r from-navy-800 to-navy-900 text-white shadow-lg sticky top-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-[#2A1458]  text-white text-sm text-center py-1 px-4">
        🚀 Enroll Now for Summer Batch 2025 - Limited Seats Available!
      </div>

      <div className="container mx-auto px-4 bg-white ">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center group"
          >
            <Link to="/">
              <img
                src={instituteLogo}
                alt="Institute Logo"
                className="h-14 w-auto mr-3 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <Link to="/">
              <div>
                <h1 className="text-xl text-[#0C0950] font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                  ARC Computer Institute
                </h1>
                <p className="text-xs text-[#0C0950]">Innovate • Code • Succeed</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <motion.div
            className="hidden md:flex space-x-1"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {navLinks.map((link) => {
              // Courses Dropdown
              if (link.name === "Courses") {
                return (
                  <motion.div
                    key={link.name}
                    className="relative group"
                    variants={itemVariants}
                  >
                    <Link
                      to={link.path}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer ${
                        activeLink === link.name
                          ? "text-white bg-blue-600 bg-opacity-20 rounded-lg"
                          : "text-[#0C0950] hover:text-blue-600"
                      }`}
                      onMouseEnter={() => setActiveLink(link.name)}
                      onMouseLeave={() => setActiveLink("Home")}
                    >
                      {link.name}
                    </Link>

                    {/* Courses Dropdown */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="fixed top-[88px] left-0 right-0 w-screen bg-white text-[#0C0950] shadow-2xl p-6 z-50 transition-all hidden group-hover:block border-b border-gray-200 overflow-hidden"
                    > 
                      <div className="container mx-auto">
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-gray-800 mb-2">Our Courses</h3>
                          <p className="text-sm text-gray-600">Choose from our comprehensive range of technology courses</p>
                        </div>
                        
                        <div className="grid grid-cols-4 gap-4 max-h-96 overflow-y-auto">
                          {coursesData.map((course) => (
                            <Link to={course.path} key={course.name}>
                              <motion.div
                                className="group/course bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200"
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="mb-3">
                                  <img
                                    src={course.image}
                                    alt={course.name}
                                    className="w-full h-24 object-cover rounded-md shadow-sm group-hover/course:shadow-md transition-shadow"
                                  />
                                </div>
                                <h4 className="font-semibold text-sm text-gray-800 mb-1 group-hover/course:text-blue-600 transition-colors">
                                  {course.name}
                                </h4>
                                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                                  {course.description}
                                </p>
                                <div className="flex justify-between items-center text-xs">
                                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                    {course.duration}
                                  </span>
                                  <span className="text-gray-500">
                                    {course.level}
                                  </span>
                                </div>
                              </motion.div>
                            </Link>
                          ))}
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600">Can't find what you're looking for?</p>
                            <Link 
                              to="/courses" 
                              className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            >
                              View All Courses
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              }

              // Admissions Dropdown
              if (link.name === "Admissions") {
                return (
                  <motion.div
                    key={link.name}
                    className="relative group"
                    variants={itemVariants}
                  >
                    <Link
                      to={link.path}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        activeLink === link.name
                          ? "text-white bg-blue-600 bg-opacity-20 rounded-lg"
                          : "text-[#0C0950] hover:text-blue-600"
                      }`}
                      onClick={() => setActiveLink(link.name)}
                      onMouseEnter={() => setActiveLink(link.name)}
                      onMouseLeave={() => setActiveLink("Home")}
                    >
                      {link.name}
                      {activeLink === link.name && (
                        <motion.span
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>

                    {/* Admissions Process Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-7 left-0 w-[400px] bg-white text-[#0C0950] rounded-xl shadow-2xl p-4 z-50 transition-all hidden group-hover:block border border-gray-200"
                    >
                      <div className="mb-3">
                        <h3 className="text-md font-bold text-gray-800 mb-1">Admission Process</h3>
                        <p className="text-xs text-gray-600">Simple step process to join us</p>
                      </div>
                      
                      <div className="space-y-3">
                        {admissionSteps.map((step) => (
                          <div key={step.step} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                              {step.step}
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm text-gray-800">{step.title}</h4>
                              <p className="text-xs text-gray-600">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Ready to start?</span>
                          <Link
                            to="/contactSection"
                            className="text-xs bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition-colors"
                          >
                            Apply 
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              }

              // Regular nav links
              return (
                <motion.div key={link.name} variants={itemVariants} className="relative">
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activeLink === link.name
                        ? "text-white bg-blue-600 bg-opacity-20 rounded-lg"
                        : "text-[#0C0950] hover:text-blue-600"
                    }`}
                    onClick={() => setActiveLink(link.name)}
                    onMouseEnter={() => setActiveLink(link.name)}
                    onMouseLeave={() => setActiveLink("Home")}
                  >
                    {link.name}
                    {activeLink === link.name && (
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Link 
                to="/loginportalisherefjdfjdklfjdklfjasklfjasfjuw49ru0wr4jowrjeofjfkdjf0eu034uj4ue9rtuej8gerhgnrghrgnersghergnoesghesgo"
                className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-[#0C0950] text-sm font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Student Login
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2 rounded-md bg-blue-600 bg-opacity-30 hover:bg-opacity-50 transition-all"
              whileTap={{ scale: 0.9 }}
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={mobileVariants}
        className="md:hidden fixed top-0 right-0 h-full w-64 bg-navy-900 bg-white z-50 shadow-2xl border-l border-blue-900 text-black"
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-black hover:text-white p-2 rounded-full hover:bg-blue-800 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.path}
                className={`px-4 py-3 text-black rounded-lg transition-all block ${
                  activeLink === link.name
                    ? "bg-blue-800 text-black font-medium"
                    : "hover:bg-blue-900 hover:text-white"
                }`}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsOpen(false);
                }}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/loginportalisherefjdfjdklfjdklfjasklfjasfjuw49ru0wr4jowrjeofjfkdjf0eu034uj4ue9rtuej8gerhgnrghrgnersghergnoesghesgo"
              className="mt-4 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-black font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Student Login
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-blue-800">
          <div className="flex items-center space-x-3">
            <img src={instituteLogo} alt="Institute Logo" className="h-10 w-auto" />
            <div>
              <h3 className="text-sm font-medium text-white">ARC Computer Institute</h3>
              <p className="text-xs text-blue-300">Empowering the next generation of tech leaders</p>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;