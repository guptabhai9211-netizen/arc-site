import React from "react";
import { motion } from "framer-motion";

const PasswordStrengthMeter = ({ password }) => {
  const calculateStrength = () => {
    if (!password) return 0;
    
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    
    // Complexity checks
    if (/[A-Z]/.test(password)) strength += 1; // Uppercase
    if (/[a-z]/.test(password)) strength += 1; // Lowercase
    if (/[0-9]/.test(password)) strength += 1; // Numbers
    if (/[^A-Za-z0-9]/.test(password)) strength += 1; // Special chars
    
    return Math.min(strength, 5); // Max strength of 5
  };

  const strength = calculateStrength();
  const strengthPercentage = (strength / 5) * 100;

  const getStrengthColor = () => {
    if (strength <= 1) return "bg-red-500";
    if (strength <= 3) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getStrengthText = () => {
    if (!password) return "";
    if (strength <= 1) return "Very Weak";
    if (strength <= 2) return "Weak";
    if (strength <= 3) return "Moderate";
    if (strength <= 4) return "Strong";
    return "Very Strong";
  };

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-medium text-gray-500">
          Password Strength
        </span>
        <span className="text-xs font-medium text-gray-700">
          {getStrengthText()}
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <motion.div
          className={`h-1.5 rounded-full ${getStrengthColor()}`}
          initial={{ width: 0 }}
          animate={{ width: `${strengthPercentage}%` }}
          transition={{ duration: 0.5, type: "spring" }}
        />
      </div>
      
      {password && (
        <ul className="mt-2 text-xs text-gray-500 space-y-1">
          <li className={`flex items-center ${password.length >= 8 ? 'text-green-500' : ''}`}>
            {password.length >= 8 ? '✓' : '•'} At least 8 characters
          </li>
          <li className={`flex items-center {/[A-Z]/.test(password) ? 'text-green-500' : ''}`}>
            {/[A-Z]/.test(password) ? '✓' : '•'} Uppercase letter
          </li>
          <li className={`flex items-center {/[0-9]/.test(password) ? 'text-green-500' : ''}`}>
            {/[0-9]/.test(password) ? '✓' : '•'} Number
          </li>
          <li className={`flex items-center {/[^A-Za-z0-9]/.test(password) ? 'text-green-500' : ''}`}>
            {/[^A-Za-z0-9]/.test(password) ? '✓' : '•'} Special character
          </li>
        </ul>
      )}
    </div>
  );
};

export default PasswordStrengthMeter;