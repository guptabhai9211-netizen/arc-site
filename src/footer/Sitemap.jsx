import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sitemap = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 sm:p-8">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Website Sitemap
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-2 text-blue-100"
            >
              Explore all sections of our computer institute
            </motion.p>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Navigation */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Main Navigation
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { label: "Home", path: "/", icon: "🏠" },
                  { label: "About Us", path: "/about", icon: "🏢" },
                  { label: "Our Services", path: "/services", icon: "🛠️" },
                  { label: "Contact Us", path: "/contact", icon: "📞" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="flex items-center text-gray-700 hover:text-blue-600 text-base transition-colors duration-200 group"
                  >
                    <span className="mr-3 group-hover:scale-110 transition-transform">{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Courses & Learning */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Courses & Learning
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { label: "All Courses", path: "/courses", icon: "📚" },
                  { label: "Learning Center", path: "/contactBraches", icon: "🏫" },
                  { label: "Student Projects", path: "/MediaGallery", icon: "🖥️" },
                  { label: "Placement Assistance", path: "/about", icon: "💼" },
                  { label: "Career Guidance", path: "/career", icon: "🧭" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="flex items-center text-gray-700 hover:text-blue-600 text-base transition-colors duration-200 group"
                  >
                    <span className="mr-3 group-hover:scale-110 transition-transform">{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Resources */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resources
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { label: "Free Tutorials", path: "/VideoShowcaseSection", icon: "🎥" },
                  { label: "Student Portal", path: "/loginportalisherefjdfjdklfjdklfjasklfjasfjuw49ru0wr4jowrjeofjfkdjf0eu034uj4ue9rtuej8gerhgnrghrgnersghergnoesghesgo", icon: "🔑" },
                  { label: "FAQs", path: "/faqs", icon: "❓" },
                  { label: "Testimonials", path: "/MediaGallery", icon: "🌟" },
                  { label: "Events & Workshops", path: "/MediaGallery", icon: "🎪" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="flex items-center text-gray-700 hover:text-blue-600 text-base transition-colors duration-200 group"
                  >
                    <span className="mr-3 group-hover:scale-110 transition-transform">{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Policies */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Policies
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { label: "Privacy Policy", path: "/privacy-policy", icon: "🔒" },
                  { label: "Terms of Service", path: "/terms-of-service", icon: "📝" },
                  { label: "Refund Policy", path: "/refund-policy", icon: "↩️" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="flex items-center text-gray-700 hover:text-blue-600 text-base transition-colors duration-200 group"
                  >
                    <span className="mr-3 group-hover:scale-110 transition-transform">{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Quick Links
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { label: "Apply Now", path: "/admissions", icon: "✍️" },
                  { label: "Course Schedule", path: "/schedule", icon: "🗓️" },
                  { label: "Faculty", path: "/faculty", icon: "👩‍🏫" },
                  { label: "Hire Our Students", path: "/hire", icon: "👔" },
                  { label: "Certificate Verification", path: "/verify", icon: "🔍" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="flex items-center text-gray-700 hover:text-blue-600 text-base transition-colors duration-200 group"
                  >
                    <span className="mr-3 group-hover:scale-110 transition-transform">{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sitemap;