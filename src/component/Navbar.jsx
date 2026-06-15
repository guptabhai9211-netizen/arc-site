"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { 
  FaHome, 
  FaBook, 
  FaInfoCircle, 
  FaEnvelope, 
  FaUserGraduate, 
  FaBars, 
  FaTimes,
  FaChevronDown,
  FaLaptopCode,
  FaChartLine,
  FaPalette,
  FaDatabase,
  FaSignInAlt,
  FaUser,
  FaLock,
  FaTimesCircle
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [admissionsDropdownOpen, setAdmissionsDropdownOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const location = useLocation();
  const admissionsDropdownRef = useRef(null);
  const loginModalRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "Courses", path: "/courses", icon: FaBook },
    { name: "About", path: "/about", icon: FaInfoCircle },
    { name: "Admissions", path: "/contactSection", icon: FaUserGraduate, hasDropdown: true },
    { name: "Contact", path: "/contactSection", icon: FaEnvelope },
  ];

  const admissionSteps = [
    { step: "1", title: "Apply Now", description: "WhatsApp us, fill the contact form, visit our branches, or call 8860448368", icon: FaUserGraduate },
    { step: "2", title: "Counseling Session", description: "Free career counseling to choose the right course", icon: FaUserGraduate },
    { step: "3", title: "Registration", description: "Complete registration with minimal fee", icon: FaBook },
    { step: "4", title: "Start Learning", description: "Begin your journey with expert trainers", icon: FaLaptopCode },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (admissionsDropdownRef.current && !admissionsDropdownRef.current.contains(event.target)) {
        setAdmissionsDropdownOpen(false);
      }
      if (loginModalRef.current && !loginModalRef.current.contains(event.target)) {
        setShowLoginModal(false);
        setLoginError("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("arcInstituteUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setIsLoggedIn(true);
      setUserName(user.name);
    }
  }, []);

  const isActive = (path) => location.pathname === path;

  // Login Handler
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");
    
    // Demo credentials for testing
    const demoCredentials = {
      email: "student@arc.com",
      password: "student123"
    };

    if (loginEmail === demoCredentials.email && loginPassword === demoCredentials.password) {
      const userData = {
        name: "Student User",
        email: loginEmail,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem("arcInstituteUser", JSON.stringify(userData));
      setIsLoggedIn(true);
      setUserName(userData.name);
      setShowLoginModal(false);
      setLoginEmail("");
      setLoginPassword("");
      setLoginError("");
    } else {
      setLoginError("Invalid email or password. Use student@arc.com / student123");
    }
  };

  // Logout Handler
  const handleLogout = () => {
    localStorage.removeItem("arcInstituteUser");
    setIsLoggedIn(false);
    setUserName("");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const mobileVariants = {
    open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { opacity: 0, x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-xl py-2" : "bg-white/95 backdrop-blur-md shadow-lg py-3"
      }`}>
        {/* Announcement Bar */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white text-sm text-center py-2.5 px-4 overflow-hidden"
        >
          <div className="container mx-auto">
            <motion.p
              animate={{ x: [0, -5, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 5 }}
              className="inline-block"
            >
              🚀 Enroll Now for Summer Batch 2025 - Limited Seats Available! 
              <span className="hidden sm:inline"> Call 8860448368 for Free Counseling</span>
            </motion.p>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="flex items-center group cursor-pointer"
            >
              <Link to="/" className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition" />
                  <img
                    src="/logo.jpg"
                    alt="ARC Computer Institute"
                    className="h-12 w-auto rounded-full relative z-10 transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/48x48?text=ARC"; }}
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                    ARC Computer Institute
                  </h1>
                  <p className="text-xs text-gray-500 hidden sm:block">Innovate • Code • Succeed</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden lg:flex items-center space-x-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => {
                const Icon = link.icon;
                
                // Admissions Dropdown
                if (link.hasDropdown && link.name === "Admissions") {
                  return (
                    <motion.div
                      key={link.name}
                      className="relative"
                      variants={itemVariants}
                      ref={admissionsDropdownRef}
                    >
                      <button
                        onClick={() => setAdmissionsDropdownOpen(!admissionsDropdownOpen)}
                        onMouseEnter={() => setAdmissionsDropdownOpen(true)}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                          isActive(link.path)
                            ? "text-blue-600 bg-blue-50"
                            : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        }`}
                      >
                        <Icon className="text-base" />
                        {link.name}
                        <FaChevronDown className={`text-xs transition-transform duration-300 ${admissionsDropdownOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {admissionsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            onMouseLeave={() => setAdmissionsDropdownOpen(false)}
                            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                          >
                            <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50">
                              <h3 className="text-lg font-bold text-gray-800">Admission Process</h3>
                              <p className="text-sm text-gray-600">4 simple steps to join us</p>
                            </div>
                            <div className="p-4 space-y-3">
                              {admissionSteps.map((step) => {
                                const StepIcon = step.icon;
                                return (
                                  <div key={step.step} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                      {step.step}
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2">
                                        <StepIcon className="text-blue-600 text-sm" />
                                        <h4 className="font-semibold text-sm text-gray-800">{step.title}</h4>
                                      </div>
                                      <p className="text-xs text-gray-600 mt-1">{step.description}</p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            <div className="p-4 bg-gray-50 border-t border-gray-200">
                              <Link
                                to="/contactSection"
                                onClick={() => setAdmissionsDropdownOpen(false)}
                                className="block w-full text-center bg-green-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition"
                              >
                                Apply Now →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                // Regular nav links (no dropdown for Courses now)
                return (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link
                      to={link.path}
                      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                        isActive(link.path)
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      <Icon className="text-base" />
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Student Login Button with Modal */}
              <motion.div variants={itemVariants} className="ml-4">
                {isLoggedIn ? (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                        {userName.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{userName}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 transition"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <FaSignInAlt className="text-base" />
                    Student Login
                  </button>
                )}
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileVariants}
              className="lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center">
                <div>
                  <h2 className="text-white font-bold text-lg">Menu</h2>
                  <p className="text-blue-100 text-xs">ARC Computer Institute</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white p-2 hover:bg-white/20 rounded-lg transition"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              <div className="p-4 space-y-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        isActive(link.path)
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="text-lg" />
                      {link.name}
                    </Link>
                  );
                })}

                {/* Student Login Section in Mobile */}
                {isLoggedIn ? (
                  <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                        {userName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{userName}</p>
                        <p className="text-xs text-gray-500">Logged In</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-md mt-4"
                  >
                    <FaSignInAlt /> Student Login
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={() => {
              setShowLoginModal(false);
              setLoginError("");
            }}
          >
            <motion.div
              ref={loginModalRef}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold">Student Login</h2>
                    <p className="text-blue-100 text-sm mt-1">Access your dashboard and track progress</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowLoginModal(false);
                      setLoginError("");
                    }}
                    className="text-white hover:bg-white/20 p-2 rounded-lg transition"
                  >
                    <FaTimesCircle className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <form onSubmit={handleLogin} className="p-6">
                {loginError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm"
                  >
                    {loginError}
                  </motion.div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaUser className="inline mr-2 text-blue-600" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="student@arc.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaLock className="inline mr-2 text-blue-600" />
                      Password
                    </label>
                    <input
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-blue-600 hover:text-blue-700">Forgot Password?</a>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    Login to Dashboard
                  </motion.button>

                  <p className="text-center text-xs text-gray-500 mt-4">
                    Demo Credentials: student@arc.com / student123
                  </p>
                </div>
              </form>

              {/* Modal Footer */}
              <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600">
                  New Student?{' '}
                  <Link
                    to="/contactSection"
                    onClick={() => setShowLoginModal(false)}
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Register Now
                  </Link>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-[88px] sm:h-[90px] lg:h-[96px]" />
    </>
  );
};

export default Navbar;