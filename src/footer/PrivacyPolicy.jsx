import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 sm:p-8">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-2 text-blue-100"
            >
              Last updated: {new Date().toLocaleDateString()}
            </motion.p>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed">
                At our computer institute, we collect necessary information including your name, 
                email address, contact number, and course preferences to provide our educational 
                services effectively. This information helps us personalize your learning experience 
                and keep you informed about course updates.
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement industry-standard security measures to protect your personal 
                information. Your data is stored securely and is never shared, sold, or disclosed 
                to third parties without your explicit consent, except as required by law.
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Cookies & Analytics</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website uses cookies to enhance your browsing experience and gather analytics 
                to improve our services. These cookies help us understand how visitors interact with 
                our site and which courses generate the most interest among our students.
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to access, correct, or request deletion of your personal 
                information at any time. You may also opt-out of marketing communications while 
                still receiving essential course-related information.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For any privacy-related inquiries, please contact us at{" "}
                <a 
                  href="mailto:privacy@computerinstitute.edu" 
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  sefdel333@gmail.com
                </a>.
              </p>
            </motion.section>

            <motion.div variants={itemVariants} className="pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                This policy may be updated periodically. We encourage you to review this page 
                regularly to stay informed about how we protect your information.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;