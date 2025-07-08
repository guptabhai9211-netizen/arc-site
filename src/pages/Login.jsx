 import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import planeAnimation from "../assets/animation3.json";

function Login() {
  const [email, setEmail] = useState("");
  const [rollPrefix, setRollPrefix] = useState("NC");
  const [rollSuffix, setRollSuffix] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const navigate = useNavigate();

  const motivationalLines = [
    "Unlocking your student portal...",
    "Connecting to institute servers...",
    "Verifying your credentials...",
    "Welcome to ARC Institute!",
    "Your education journey starts here",
    "Preparing your dashboard..."
  ];

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setCurrentLineIndex((prevIndex) => (prevIndex + 1) % motivationalLines.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullRollNumber = rollPrefix + rollSuffix;

    if (!/^\d+$/.test(rollSuffix)) {
      toast.error("Roll number must be numeric.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`https://arc-portal-backend.onrender.com/api/user/login`, {
        email,
        rollNumber: fullRollNumber,
      });

      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/profileq=blue+ocoor+withaskjfakljkladsjf&rlz=1C1CHBD_enIN1138IN1138&oq=blue+ocoor+withaskjfakljkladsjf&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCQgDEAAYDRiABDIJCAQQABgNGIAEMgkIBRAAGA0YgAQyCQgG");
      } else {
        toast.error("Credentials do not match!", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Your credentials are incorrect.", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 p-4 relative overflow-hidden">
      {/* Tech background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48cGF0aCBkPSJNMjUgMTVMMTUgMjVMMjUgMzVMMzUgMjVMMjUgMTVaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgLz48L3N2Zz4=')]"></div>
      </div>

      {/* Loading Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0  backdrop-blur-sm z-50 flex flex-col justify-center items-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Lottie animationData={planeAnimation} className="w-64 h-64" loop={true} />
            </motion.div>
            <motion.p
              key={currentLineIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-xl font-medium text-blue-300 text-center"
            >
              {motivationalLines[currentLineIndex]}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Box */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`relative z-10 bg-white bg-opacity-90 backdrop-blur-sm shadow-2xl rounded-xl p-8 w-full max-w-md border border-white/20 ${
          loading ? "opacity-50 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="">
               <img src="/logo.jpg"  className="h-20 w-20 rounded-full"/>
               
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-1">ARC STUDENT PORTAL</h1>
          <p className="text-gray-600">Computer Institute Login</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <input
                type="email"
                placeholder="student@arc.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400 transition-all"
              />
            </motion.div>
          </div>

          {/* Roll Number Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Roll Number</label>
            <div className="flex gap-3">
              <motion.div whileHover={{ scale: 1.01 }} className="w-1/3">
                <select
                  value={rollPrefix}
                  onChange={(e) => setRollPrefix(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                >
                  <option value="NC">ARC</option>
                </select>
              </motion.div>
              <motion.div whileHover={{ scale: 1.01 }} className="w-2/3">
                <input
                  type="text"
                  placeholder="123456"
                  value={rollSuffix}
                  onChange={(e) => setRollSuffix(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                />
              </motion.div>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-60 flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Authenticating...</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Login to Portal</span>
              </>
            )}
          </motion.button>
        </form>

        {/* Admin login link */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="mt-6 text-center"
        >
          <Link 
            to="/admin-login" 
            className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 text-sm font-medium rounded-md duration-200"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 mr-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" 
                clipRule="evenodd" 
              />
            </svg>
            Admin Access
          </Link>
        </motion.div>
      </motion.div>

      {/* Footer */}
       

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="bg-gray-800 text-white"
        bodyClassName="text-sm font-medium"
        progressClassName="bg-blue-500"
      />
    </div>
  );
}

export default Login;