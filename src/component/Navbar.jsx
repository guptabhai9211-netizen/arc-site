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
  FaTimesCircle,
  FaBlog,
  FaSun,
  FaMoon
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const contactDropdownRef = useRef(null);
  const loginModalRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "Courses", path: "/courses", icon: FaBook },
    { name: "About", path: "/about", icon: FaInfoCircle },
    { name: "Blog", path: "/blog", icon: FaBlog },
    { name: "Contact", path: "/contactSection", icon: FaEnvelope, hasDropdown: true },
  ];

  const contactSteps = [
    { step: "1", title: "Apply Now", description: "WhatsApp us, fill the contact form, visit our branches, or call 8860448368", icon: FaUserGraduate },
    { step: "2", title: "Counseling Session", description: "Free career counseling to choose the right course", icon: FaUserGraduate },
    { step: "3", title: "Registration", description: "Complete registration with minimal fee", icon: FaBook },
    { step: "4", title: "Start Learning", description: "Begin your journey with expert trainers", icon: FaLaptopCode },
  ];

  // Check for saved theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('arcTheme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('arcTheme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('arcTheme', 'light');
    }
  };

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
      if (contactDropdownRef.current && !contactDropdownRef.current.contains(event.target)) {
        setContactDropdownOpen(false);
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
        scrolled 
          ? isDarkMode ? "bg-gray-900 shadow-xl py-2" : "bg-white shadow-xl py-2"
          : isDarkMode ? "bg-gray-900/95 backdrop-blur-md shadow-lg py-3" : "bg-white/95 backdrop-blur-md shadow-lg py-3"
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
              className="inline-block cursor-pointer"
            >
              🚀 Enroll Now for Summer Batch 2025 - Limited Seats Available! 
              <span className="hidden sm:inline cursor-pointer"> Call 8860448368 for Free Counseling</span>
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
              <Link to="/" className="flex items-center gap-3 cursor-pointer">
                <div className="relative cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition" />
                  <img
                    src="/logo.jpg"
                    alt="ARC Computer Institute"
                    className="h-12 w-auto rounded-full relative z-10 transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/48x48?text=ARC"; }}
                  />
                </div>
                <div className="flex flex-col cursor-pointer">
                  <h1 className={`text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight cursor-pointer`}>
                    ARC Computer Institute
                  </h1>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} hidden sm:block cursor-pointer`}>Innovate • Code • Succeed</p>
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
                
                if (link.hasDropdown && link.name === "Contact") {
                  return (
                    <motion.div
                      key={link.name}
                      className="relative"
                      variants={itemVariants}
                      ref={contactDropdownRef}
                    >
                      <button
                        onClick={() => setContactDropdownOpen(!contactDropdownOpen)}
                        onMouseEnter={() => setContactDropdownOpen(true)}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                          isActive(link.path)
                            ? "text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400"
                            : isDarkMode 
                              ? "text-gray-300 hover:text-blue-400 hover:bg-gray-800" 
                              : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        }`}
                      >
                        <Icon className="text-base" />
                        {link.name}
                        <FaChevronDown className={`text-xs transition-transform duration-300 ${contactDropdownOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {contactDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            onMouseLeave={() => setContactDropdownOpen(false)}
                            className={`absolute top-full left-0 mt-2 w-80 rounded-2xl shadow-2xl border overflow-hidden z-50 ${
                              isDarkMode 
                                ? "bg-gray-800 border-gray-700" 
                                : "bg-white border-gray-200"
                            }`}
                            style={{ cursor: 'default' }}
                          >
                            <div className={`p-4 bg-gradient-to-r from-green-50 to-blue-50 ${
                              isDarkMode ? "bg-gradient-to-r from-green-900/30 to-blue-900/30" : ""
                            }`}>
                              <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} cursor-default`}>Contact & Admission</h3>
                              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} cursor-default`}>4 simple steps to join us</p>
                            </div>
                            <div className="p-4 space-y-3">
                              {contactSteps.map((step) => {
                                const StepIcon = step.icon;
                                return (
                                  <div key={step.step} className="flex items-start gap-3 cursor-default">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold cursor-default">
                                      {step.step}
                                    </div>
                                    <div className="flex-1 cursor-default">
                                      <div className="flex items-center gap-2 cursor-default">
                                        <StepIcon className="text-blue-600 text-sm cursor-default" />
                                        <h4 className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-800'} cursor-default`}>{step.title}</h4>
                                      </div>
                                      <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} cursor-default`}>{step.description}</p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            <div className={`p-4 border-t ${isDarkMode ? 'bg-gray-900/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                              <Link
                                to="/contactSection"
                                onClick={() => setContactDropdownOpen(false)}
                                className="block w-full text-center bg-green-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition cursor-pointer"
                              >
                                Contact Us Now →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link
                      to={link.path}
                      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                        isActive(link.path)
                          ? "text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400"
                          : isDarkMode 
                            ? "text-gray-300 hover:text-blue-400 hover:bg-gray-800" 
                            : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      <Icon className="text-base" />
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Dark/Light Theme Toggle Button */}
              <motion.div variants={itemVariants} className="ml-2">
                <button
                  onClick={toggleTheme}
                  className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 cursor-pointer ${
                    isDarkMode 
                      ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
                </button>
              </motion.div>

              {/* Student Login Button with Modal */}
              <motion.div variants={itemVariants} className="ml-2">
                {isLoggedIn ? (
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                      isDarkMode ? "bg-green-900/30" : "bg-green-50"
                    }`}>
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                        {userName.charAt(0).toUpperCase()}
                      </div>
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{userName}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 transition cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
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
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md cursor-pointer"
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
              className={`lg:hidden fixed top-0 right-0 h-full w-80 shadow-2xl z-50 overflow-y-auto ${
                isDarkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center">
                <div>
                  <h2 className="text-white font-bold text-lg">Menu</h2>
                  <p className="text-blue-100 text-xs">ARC Computer Institute</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white p-2 hover:bg-white/20 rounded-lg transition cursor-pointer"
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
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer ${
                        isActive(link.path)
                          ? "bg-blue-50 text-blue-600 font-medium dark:bg-blue-900/30 dark:text-blue-400"
                          : isDarkMode 
                            ? "text-gray-300 hover:bg-gray-800" 
                            : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="text-lg" />
                      {link.name}
                    </Link>
                  );
                })}

                {/* Dark/Light Theme Toggle in Mobile */}
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all cursor-pointer ${
                    isDarkMode 
                      ? "text-gray-300 hover:bg-gray-800" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {isDarkMode ? <FaSun className="text-lg text-yellow-400" /> : <FaMoon className="text-lg" />}
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>

                {/* Student Login Section in Mobile */}
                {isLoggedIn ? (
                  <div className={`mt-4 p-4 rounded-xl ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                        {userName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{userName}</p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Logged In</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold cursor-pointer"
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
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-md mt-4 cursor-pointer"
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
              className={`rounded-2xl shadow-2xl max-w-md w-full overflow-hidden ${
                isDarkMode ? "bg-gray-900" : "bg-white"
              }`}
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
                    className="text-white hover:bg-white/20 p-2 rounded-lg transition cursor-pointer"
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
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <FaUser className="inline mr-2 text-blue-600" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition cursor-text ${
                        isDarkMode 
                          ? "bg-gray-800 border-gray-700 text-white" 
                          : "bg-white border-gray-300 text-gray-900"
                      }`}
                      placeholder="student@arc.com"
                      required
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <FaLock className="inline mr-2 text-blue-600" />
                      Password
                    </label>
                    <input
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition cursor-text ${
                        isDarkMode 
                          ? "bg-gray-800 border-gray-700 text-white" 
                          : "bg-white border-gray-300 text-gray-900"
                      }`}
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className={`flex items-center gap-2 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    } cursor-pointer`}>
                      <input type="checkbox" className="rounded text-blue-600 cursor-pointer" />
                      Remember me
                    </label>
                    <a href="#" className="text-blue-600 hover:text-blue-700 cursor-pointer">Forgot Password?</a>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    Login to Dashboard
                  </motion.button>

                  <p className={`text-center text-xs mt-4 ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    Demo Credentials: student@arc.com / student123
                  </p>
                </div>
              </form>

              {/* Modal Footer */}
              <div className={`p-4 border-t text-center ${
                isDarkMode ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"
              }`}>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  New Student?{' '}
                  <Link
                    to="/contactSection"
                    onClick={() => setShowLoginModal(false)}
                    className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
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