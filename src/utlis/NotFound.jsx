import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // if using React Router

export default function NotFound() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-6xl font-bold text-blue-600 mb-4"
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        404
      </motion.h1>
      <motion.h2
        className="text-2xl font-semibold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Page Not Found
      </motion.h2>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl shadow transition">
        Go back home
      </Link>
    </motion.div>
  );
}
