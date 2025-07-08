import React from "react";
import { motion } from "framer-motion";

const RefundPolicy = () => {
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
      className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
        >
          <div className="bg-gradient-to-r from-purple-600 to-indigo-800 p-6 sm:p-8">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Refund Policy
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-2 text-indigo-100"
            >
              Last Updated: {new Date().toLocaleDateString()}
            </motion.p>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            <motion.section variants={itemVariants} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">1. General Refund Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                At [Computer Institute Name], we strive to provide quality education and services. 
                If you're not satisfied with your purchase, we offer full refunds within 
                <span className="font-semibold"> 7 days</span> of course enrollment, provided 
                no more than 20% of the course content has been accessed.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">2. Eligibility Criteria</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Refund requests must be made within the specified time period</li>
                <li>The course completion percentage must not exceed 20%</li>
                <li>Certificate issuance will void refund eligibility</li>
                <li>Bundled courses must be refunded as a complete package</li>
                <li>Refunds do not apply to discounted or promotional purchases</li>
              </ul>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">3. Processing Time</h2>
              <p className="text-gray-600 leading-relaxed">
                Approved refunds will be processed within <span className="font-semibold">5-7 business days</span>. 
                The refund will be issued to the original payment method. Depending on your 
                financial institution, it may take additional time for the refund to reflect 
                in your account.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">4. Non-Refundable Items</h2>
              <p className="text-gray-600 leading-relaxed">
                The following items are not eligible for refunds:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Certification exam fees once scheduled</li>
                <li>Downloadable course materials</li>
                <li>Membership or subscription fees after usage</li>
                <li>Services marked as "non-refundable" at purchase</li>
              </ul>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">5. How to Request a Refund</h2>
              <p className="text-gray-600 leading-relaxed">
                To request a refund, please contact our support team with:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Your full name and contact information</li>
                <li>Order number or transaction details</li>
                <li>Reason for refund request</li>
                <li>Screenshots of any technical issues (if applicable)</li>
              </ul>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">6. Technical Issues</h2>
              <p className="text-gray-600 leading-relaxed">
                If you're experiencing technical difficulties with our platform, 
                we encourage you to contact our technical support team before 
                requesting a refund. Many issues can be resolved promptly, allowing 
                you to continue your learning experience.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">7. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For refund requests or questions about our policy:
              </p>
              <div className="mt-2 space-y-1">
                <p className="text-indigo-600 font-medium">
                  <a href="mailto:finance@computerinstitute.edu" className="hover:text-indigo-800 transition-colors">
                    finance@computerinstitute.edu
                  </a>
                </p>
                <p className="text-gray-600">Phone: (123) 456-7890</p>
                <p className="text-gray-600">Hours: Monday-Friday, 9AM-5PM EST</p>
              </div>
            </motion.section>

            <motion.div variants={itemVariants} className="pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                [Computer Institute Name] reserves the right to modify this refund policy at any time. 
                Changes will be effective immediately upon posting to our website.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RefundPolicy;