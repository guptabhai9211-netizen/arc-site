import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaUsers, FaStar, FaTrophy, FaExclamationTriangle, FaChartLine, FaCalendarAlt, FaBookOpen, FaUserGraduate } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const performanceLevels = {
  Excellent: { 
    color: "bg-emerald-100 text-emerald-800",
    borderColor: "border-emerald-300",
    icon: <FaTrophy className="text-yellow-500" />,
    gradient: "from-emerald-500 to-emerald-300",
    percentage: 95,
    description: "Outstanding! Top of the class."
  },
  Good: { 
    color: "bg-blue-100 text-blue-800",
    borderColor: "border-blue-300",
    icon: <FaStar className="text-blue-500" />,
    gradient: "from-blue-500 to-blue-300",
    percentage: 75,
    description: "Good progress. Keep it up!"
  },
  Average: { 
    color: "bg-amber-100 text-amber-800",
    borderColor: "border-amber-300",
    icon: <FaStar className="text-amber-500" />,
    gradient: "from-amber-500 to-amber-300",
    percentage: 60,
    description: "Average. Need consistent effort."
  },
  Poor: { 
    color: "bg-red-100 text-red-800",
    borderColor: "border-red-300",
    icon: <FaExclamationTriangle className="text-red-500" />,
    gradient: "from-red-500 to-red-300",
    percentage: 40,
    description: "Needs improvement. Extra help required."
  }
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 12, stiffness: 100 } }
};

export default function StudentDetails() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const progressRef = useRef(null);
  const isProgressInView = useInView(progressRef, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isProgressInView) {
      controls.start("visible");
    }
  }, [isProgressInView, controls]);

  useEffect(() => {
    async function fetchStudent() {
      try {
        setLoading(true);
        const response = await axios.get("https://maxbackend.onrender.com/api/student/");
        setStudent(response.data);
        setError("");
      } catch (err) {
        setError("No student data available");
      } finally {
        setLoading(false);
      }
    }
    fetchStudent();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="bg-[#0C0950] py-4 text-center">
          <h1 className="text-2xl font-bold text-white">ARC Computer Institute STUDENT</h1>
        </div>
        <div className="flex justify-center items-center h-96">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-16 h-16 border-4 border-[#0C0950] border-t-transparent rounded-full"
          />
        </div>
      </div>
    );
  }

  if (error || !student) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="bg-[#0C0950] py-4 text-center">
          <h1 className="text-2xl font-bold text-white">ARC Computer Institute STUDENT</h1>
        </div>
        <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl text-center mt-20">
          <p className="text-red-500 font-medium">{error || "No student data found"}</p>
        </div>
      </div>
    );
  }

  const performanceData = performanceLevels[student.performance] || performanceLevels.Average;

  // Mock additional data (you can replace with actual API fields)
  const additionalMetrics = {
    attendance: student.attendance || 85,
    assignmentsCompleted: student.assignments || 12,
    totalAssignments: 15,
    upcomingTests: 3,
    rank: student.rank || "8th",
    totalStudents: 45
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      {/* Header with animated gradient */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-gradient-to-r from-[#0C0950] to-[#3A36DB] py-6 text-center shadow-lg"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white">ARC Computer Institute STUDENT</h1>
        <p className="text-indigo-200 text-sm mt-1">Personal Performance Dashboard</p>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="flex flex-col lg:flex-row items-stretch justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Performance Insights (Desktop) */}
          <motion.div variants={itemVariants} className="hidden lg:block flex-1 max-w-md">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-indigo-100 h-full">
              <h2 className="text-2xl font-bold text-[#0C0950] mb-4 flex items-center gap-2">
                <FaChartLine className="text-[#3A36DB]" />
                Performance Insights
              </h2>
              <p className="text-gray-600 mb-6">
                Detailed analysis of {student.name}'s academic journey at Max Education.
              </p>

              {/* Metrics Grid */}
              <div className="space-y-5">
                <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl">
                  <div className="bg-white p-2 rounded-full shadow">
                    <FaCalendarAlt className="text-[#3A36DB]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Attendance Rate</h3>
                    <p className="text-2xl font-bold text-[#0C0950]">{additionalMetrics.attendance}%</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <motion.div 
                        className="bg-gradient-to-r from-[#0C0950] to-[#3A36DB] h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${additionalMetrics.attendance}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl">
                  <div className="bg-white p-2 rounded-full shadow">
                    <FaBookOpen className="text-[#3A36DB]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Assignments Completed</h3>
                    <p className="text-2xl font-bold text-[#0C0950]">{additionalMetrics.assignmentsCompleted}/{additionalMetrics.totalAssignments}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <motion.div 
                        className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(additionalMetrics.assignmentsCompleted / additionalMetrics.totalAssignments) * 100}%` }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl">
                  <div className="bg-white p-2 rounded-full shadow">
                    <FaUserGraduate className="text-[#3A36DB]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Class Rank</h3>
                    <p className="text-2xl font-bold text-[#0C0950]">{additionalMetrics.rank} / {additionalMetrics.totalStudents}</p>
                    <p className="text-sm text-gray-500">Out of {additionalMetrics.totalStudents} students</p>
                  </div>
                </div>

                {student.performance === "Poor" && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg"
                  >
                    <h4 className="flex items-center text-sm font-medium text-red-700 mb-2">
                      <FaExclamationTriangle className="mr-2" />
                      Action Required
                    </h4>
                    <p className="text-sm text-gray-700">
                      {student.name} needs additional support in core concepts. Recommended: extra tutoring sessions and daily practice.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Main Student Card */}
          <motion.div variants={itemVariants} className="w-full lg:flex-1 max-w-md mx-auto">
            <motion.div 
              className="bg-gradient-to-br from-[#0C0950] to-[#1a1760] rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8 transition-all duration-300 hover:shadow-3xl"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="bg-red-500 px-4 py-1 rounded-full mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-white text-sm font-semibold">Performance Analysis</span>
                </motion.div>
                
                {/* Photo with animated border glow */}
                <div className="relative mb-6 group">
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-r from-red-400 to-purple-600 rounded-full opacity-75 blur-md group-hover:opacity-100 transition duration-300"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  />
                  <div className="relative">
                    <img
                      src={student.photo || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"}
                      alt={student.name}
                      className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-2xl transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className={`absolute -bottom-2 -right-2 p-3 rounded-full ${performanceData.color} border-2 ${performanceData.borderColor} shadow-md`}>
                      {performanceData.icon}
                    </div>
                  </div>
                </div>

                {/* Name and Batch */}
                <h2 className="text-2xl md:text-3xl font-bold text-red-400 mb-1">{student.name}</h2>
                <div className="flex items-center justify-center text-gray-300 mb-4">
                  <FaUsers className="mr-2 text-red-400" />
                  <span className="text-white">{student.batchName}</span>
                </div>

                {/* Performance Badge */}
                <motion.div 
                  className={`bg-gradient-to-r ${performanceData.gradient} text-white px-5 py-1.5 rounded-full mb-5 shadow-md`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-semibold">{student.performance}</span>
                    {React.cloneElement(performanceData.icon, { className: "text-white" })}
                  </div>
                </motion.div>

                {/* Progress Circle */}
                <div ref={progressRef} className="w-44 h-44 md:w-52 md:h-52 mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-36 h-36 md:w-44 md:h-44 rounded-full ${performanceData.color} bg-opacity-20 blur-md animate-pulse`} />
                  </div>
                  <CircularProgressbar
                    value={performanceData.percentage}
                    text={`${performanceData.percentage}%`}
                    styles={buildStyles({
                      pathColor: performanceData.performance === "Excellent" ? "#10b981" : 
                                performanceData.performance === "Good" ? "#3b82f6" :
                                performanceData.performance === "Average" ? "#f59e0b" : "#ef4444",
                      textColor: "#ffffff",
                      trailColor: "rgba(255,255,255,0.2)",
                      textSize: "28px",
                      pathTransitionDuration: 1.5,
                    })}
                  />
                </div>

                {/* Performance description */}
                <p className="text-indigo-200 text-sm mt-2">{performanceData.description}</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mobile-only metrics (visible only on mobile) */}
        <div className="lg:hidden mt-8">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-bold text-[#0C0950] text-lg mb-4 flex items-center gap-2">
              <FaChartLine className="text-[#3A36DB]" />
              Performance Metrics
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm">
                  <span>Attendance</span>
                  <span className="font-semibold">{additionalMetrics.attendance}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-gradient-to-r from-[#0C0950] to-[#3A36DB] h-2 rounded-full" style={{ width: `${additionalMetrics.attendance}%` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span>Assignments</span>
                  <span className="font-semibold">{additionalMetrics.assignmentsCompleted}/{additionalMetrics.totalAssignments}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full" style={{ width: `${(additionalMetrics.assignmentsCompleted / additionalMetrics.totalAssignments) * 100}%` }} />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Class Rank</span>
                <span className="font-bold text-[#0C0950]">{additionalMetrics.rank} / {additionalMetrics.totalStudents}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}