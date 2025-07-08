import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.5,
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
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-blue-800 p-6 sm:p-8">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Terms of Service
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-2 text-blue-100"
            >
              Effective Date: {new Date().toLocaleDateString()}
            </motion.p>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            <motion.section variants={itemVariants} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using the services provided by ARC Computer Institute, 
                you agree to be bound by these Terms of Service. If you do not agree 
                with any part of these terms, you must not use our services.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">2. User Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>You must provide accurate and complete registration information</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You agree not to engage in any activity that disrupts or interferes with our services</li>
                <li>You will not use our services for any illegal or unauthorized purpose</li>
                <li>You must comply with all applicable laws and regulations</li>
              </ul>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">3. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All course materials, including but not limited to lectures, videos, 
                exercises, and documentation, are the property of [Computer Institute Name] 
                and are protected by copyright laws. Unauthorized distribution or 
                reproduction of these materials is strictly prohibited.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">4. Payment and Refunds</h2>
              <p className="text-gray-600 leading-relaxed">
                Course fees must be paid in full prior to accessing materials. 
                Refund requests must be submitted within 7 days of purchase and 
                are subject to our refund policy. We reserve the right to modify 
                pricing at any time.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">5. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to suspend or terminate your access to our 
                services at any time, without notice, for conduct that we believe 
                violates these Terms or is harmful to other users, the institute, 
                or third parties.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">6. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We may modify these Terms at any time. The updated version will be 
                indicated by an updated "Effective Date" at the top of this page. 
                Your continued use of our services after any changes constitutes 
                acceptance of the new Terms.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">7. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For any questions regarding these Terms of Service, please contact us at:
              </p>
              <p className="text-blue-600 font-medium">
                <a href="mailto:legal@computerinstitute.edu" className="hover:text-blue-800 transition-colors">
                   sefdel333@gmail.com
                </a>
              </p>
            </motion.section>

            <motion.div variants={itemVariants} className="pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                By using our services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms of Service.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;