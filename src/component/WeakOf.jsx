 import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUsers, FaStar, FaTrophy, FaExclamationTriangle } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const performanceLevels = {
  Excellent: { 
    color: "bg-emerald-100 text-emerald-800",
    borderColor: "border-emerald-300",
    icon: <FaTrophy className="text-yellow-500" />,
    gradient: "from-emerald-400 to-emerald-200",
    percentage: 95
  },
  Good: { 
    color: "bg-blue-100 text-blue-800",
    borderColor: "border-blue-300",
    icon: <FaStar className="text-blue-500" />,
    gradient: "from-blue-400 to-blue-200",
    percentage: 75
  },
  Average: { 
    color: "bg-amber-100 text-amber-800",
    borderColor: "border-amber-300",
    icon: <FaStar className="text-amber-500" />,
    gradient: "from-amber-400 to-amber-200",
    percentage: 60
  },
  Poor: { 
    color: "bg-red-100 text-red-800",
    borderColor: "border-red-300",
    icon: <FaExclamationTriangle className="text-red-500" />,
    gradient: "from-red-400 to-red-200",
    percentage: 40
  }
};

export default function StudentDetails() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStudent() {
      try {
        setLoading(true);
        const response = await axios.get("https://maxbackend.onrender.com/api/student/");
        setStudent(response.data);
        setError("");
      } catch (err) {
        setError("No student data available");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchStudent();
  }, []);

  if (loading) {
    return (
      <div className="w-full">
        <div className="bg-[#0C0950] py-4 text-center">
          <h1 className="text-2xl font-bold text-white">ARC Computer Institute STUDENT</h1>
        </div>
        <div className="max-w-md mx-auto p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl space-y-4 animate-pulse mt-8">
          <div className="flex justify-center">
            <div className="w-36 h-36 rounded-full bg-gray-200"></div>
          </div>
          <div className="space-y-3">
            <div className="h-7 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-5 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full">
        <div className="bg-[#0C0950] py-4 text-center">
          <h1 className="text-2xl font-bold text-white">ARC Computer Institute STUDENT</h1>
        </div>
        <div className="max-w-md mx-auto p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl text-center mt-8">
          <p className="text-red-500 font-medium">{error}</p>
        </div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="w-full">
        <div className="bg-[#0C0950] py-4 text-center">
          <h1 className="text-2xl font-bold text-white">ARC Computer Institute STUDENT</h1>
        </div>
        <div className="max-w-md mx-auto p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl text-center mt-8">
          <p className="text-gray-500">No student data found</p>
        </div>
      </div>
    );
  }

  const performanceData = performanceLevels[student.performance] || performanceLevels.Average;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-[#0C0950] py-4 text-center">
        <h1 className="text-2xl font-bold text-white">ARC Computer Institute STUDENT</h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left Side Text (Desktop only) */}
          <div className="hidden lg:block flex-1 max-w-lg mb-98">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-[#0C0950] mb-4">Student Performance Analysis</h2>
              <p className="text-gray-700 mb-4">
                At Max Education, we closely monitor each student's progress to ensure they reach their full potential.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaUsers className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Batch Performance</h3>
                    <p className="text-gray-600">Compare with your batchmates' average performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <FaStar className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Improvement Areas</h3>
                    <p className="text-gray-600">Personalized suggestions based on your performance</p>
                  </div>
                </div>
                {student.performance === "Poor" && (
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                    <h4 className="flex items-center text-sm font-medium text-red-700 mb-2">
                      <FaExclamationTriangle className="mr-2" />
                      Focus Areas
                    </h4>
                    <p className="text-sm text-gray-700">
                      This student needs additional support in core concepts and regular practice sessions.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Student Card */}
          <div className="w-full  lg:flex-1 max-w-md">
            <div className="bg-gradient-to-br bg-[#0C0950] rounded-2xl shadow-xl overflow-hidden p-8 transition-all duration-300 hover:shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-white bg-red-600 px-4 py-1 rounded-full mb-4">Performance Analysis</h1>
                
                {/* Student Photo with Glow Effect */}
                <div className="relative mb-6 group mt-2">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <img
                    src={student.photo || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"}
                    alt="Student"
                    className="w-60 h-60 rounded-full object-cover border-4 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute -bottom-2 -right-2 p-3 rounded-full ${performanceData.color} border-2 ${performanceData.borderColor} shadow-md`}>
                    {performanceData.icon}
                  </div>
                </div>

                {/* Student Name and Batch */}
                <h2 className="text-3xl font-bold text-red-400 mb-2">{student.name}</h2>
                <div className="flex items-center justify-center text-gray-300 mb-6">
                  <FaUsers className="mr-2 text-red-400 text-lg" />
                  <span className="text-white text-lg">{student.batchName}</span>
                </div>

                {/* Performance Display with Gradient Background */}
                <div className={`bg-gradient-to-r ${performanceData.gradient} text-white px-6 py-2 rounded-full mb-6 shadow-md`}>
                  <div className="flex items-center justify-center">
                    <span className="font-semibold text-lg mr-2">{student.performance}</span>
                    {React.cloneElement(performanceData.icon, { className: "text-white text-xl" })}
                  </div>
                </div>

                {/* Performance Progress Circle with Glow Effect */}
                <div className="w-48 h-48 mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-40 h-40 rounded-full ${performanceData.color} bg-opacity-20 blur-md animate-pulse`}></div>
                  </div>
                  <CircularProgressbar
                    value={performanceData.percentage}
                    text={`${performanceData.percentage}%`}
                    styles={buildStyles({
                      pathColor: performanceData.color.split('-')[2],
                      textColor: performanceData.color.split('-')[2],
                      trailColor: '#f3f4f6',
                      textSize: '32px',
                      pathTransitionDuration: 1.5,
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}