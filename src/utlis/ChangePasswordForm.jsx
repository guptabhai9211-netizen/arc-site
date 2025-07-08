 import React, { useState, lazy, Suspense } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiKey, FiLoader, FiCheckCircle, FiAlertCircle, FiX } from "react-icons/fi";
import { toast, Toaster } from "react-hot-toast";

// Lazy load components for better performance
const PasswordStrengthMeter = lazy(() => import("./PasswordStrengthMeter"));

const ChangePasswordForm = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://arc-portal-backend.onrender.com/admin/change-password", {
        email,
        code,
        newPassword,
      });

      // Show success toast
      toast.success(response.data.message || "Password changed successfully!", {
        duration: 5000,
        position: "top-center",
        icon: <FiCheckCircle className="text-green-500" />,
      });

      // Clear form on success
      setEmail("");
      setCode("");
      setNewPassword("");
    } catch (err) {
      let errorMsg = "An unexpected error occurred.";
      let toastType = "error";
      
      if (err.response) {
        if (err.response.status === 404) {
          errorMsg = "Email not found. Please check your email address.";
        } else if (err.response.status === 400) {
          if (err.response.data.error === "invalid_code") {
            errorMsg = "Invalid verification code. Please check the code and try again.";
          } else if (err.response.data.error === "password_requirements") {
            errorMsg = "Password doesn't meet requirements. Please choose a stronger password.";
          } else {
            errorMsg = err.response.data.message || "Invalid request. Please check your inputs.";
          }
        } else if (err.response.status === 401) {
          errorMsg = "Verification failed. The code may have expired.";
          toastType = "error";
        }
      }

      // Show error toast
      toast[toastType](errorMsg, {
        duration: 6000,
        position: "top-center",
        icon: <FiAlertCircle className="text-red-500" />,
      });
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      {/* Toast Notifications */}
      <Toaster
        toastOptions={{
          className: "",
          style: {
            padding: "16px",
            color: "#1F2937",
            maxWidth: "500px",
          },
          success: {
            style: {
              background: "#ECFDF5",
              borderLeft: "4px solid #10B981",
            },
          },
          error: {
            style: {
              background: "#FEF2F2",
              borderLeft: "4px solid #EF4444",
            },
          },
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-md mx-auto mt-10 p-8 bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-2xl border border-gray-100"
      >
        <div className="text-center mb-8">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-800 mb-2"
          >
            Change Password
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-500"
          >
            Enter your email, verification code, and new password
          </motion.p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input
                type="email"
                required
                className="pl-10 w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Verification Code
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiKey className="text-gray-400" />
              </div>
              <input
                type="text"
                required
                className="pl-10 w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter 6-digit code"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                minLength="8"
                className="pl-10 w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FiLock className="text-gray-400 hover:text-gray-600" />
              </button>
            </div>
            
            <Suspense fallback={<div className="h-2 mt-2 bg-gray-100 rounded"></div>}>
              <PasswordStrengthMeter password={newPassword} />
            </Suspense>
          </motion.div>

          <motion.div variants={itemVariants}>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <FiLoader className="animate-spin mr-2" />
                  Changing Password...
                </>
              ) : (
                "Change Password"
              )}
            </button>
          </motion.div>
        </form>

        <motion.div 
          variants={itemVariants}
          className="mt-6 text-center text-sm text-gray-500"
        >
          Remember your password?{" "}
           
        </motion.div>
      </motion.div>
    </>
  );
};

export default ChangePasswordForm;