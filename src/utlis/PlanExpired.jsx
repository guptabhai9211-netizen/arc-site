 import { motion } from "framer-motion";
import { FiAlertTriangle, FiMail, FiRefreshCw } from "react-icons/fi";

export default function PlanExpired() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.6
        }}
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center border border-gray-100 overflow-hidden relative"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-orange-500"></div>
        
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2
            }}
            className="bg-red-100 p-4 rounded-full"
          >
            <FiAlertTriangle className="text-red-500 text-4xl" />
          </motion.div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Plan <span className="text-red-500">Expired</span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg mb-6 leading-relaxed"
        >
          Your <span className="font-semibold text-gray-800">Free Plan</span> has expired. 
          Upgrade now to continue enjoying all features without interruption.
        </motion.p>

        <div className="space-y-4">
          <motion.a
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 5px 15px rgba(239, 68, 68, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            href="mailto:support@yourdomain.com"
            className="inline-flex items-center justify-center w-full bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <FiMail className="mr-2" />
            Contact Support
          </motion.a>

          <motion.button
            whileHover={{ 
              scale: 1.03,
              backgroundColor: "rgba(249, 250, 251, 1)"
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center w-full bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-medium border border-gray-200 hover:bg-gray-100 transition-all"
          >
            <FiRefreshCw className="mr-2" />
            View Plan Options
          </motion.button>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-gray-500 mt-6"
        >
          Need immediate assistance? Call us at +91 (9718) 659-236
        </motion.p>
      </motion.div>
    </motion.div>
  );
}