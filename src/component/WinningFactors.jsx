import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import {
  FaCheckCircle,
  FaUserTie,
  FaBookOpen,
  FaChalkboardTeacher,
  FaCogs,
  FaLaptop,
  FaUsers,
  FaCertificate
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Extracted variants to prevent recreating on every render
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const AdvantageSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    threshold: 0.1,
    triggerOnce: false
  });

  // Advantages array with enhanced card data
  const advantages = [
    {
      id: 1,
      icon: <FaCheckCircle />,
      title: "Placement Guarantee",
      description: "Our dedicated placement cell ensures every student gets placed in top tech companies",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-white",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      icon: <FaUserTie />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with 8+ years of real-world experience",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-white",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      id: 3,
      icon: <FaBookOpen />,
      title: "Industry Curriculum",
      description: "Courses designed with input from tech leaders to match current industry needs",
      gradient: "from-cyan-500 to-cyan-600",
      bgGradient: "from-cyan-50 to-white",
      borderColor: "border-cyan-200",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600"
    },
    {
      id: 4,
      icon: <FaChalkboardTeacher />,
      title: "Hands-on Training",
      description: "Practical sessions with real-world projects and case studies",
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-white",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      id: 5,
      icon: <FaCogs />,
      title: "Modern Infrastructure",
      description: "State-of-the-art labs with high-performance systems and software",
      gradient: "from-amber-500 to-amber-600",
      bgGradient: "from-amber-50 to-white",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    {
      id: 6,
      icon: <FaLaptop />,
      title: "Flexible Learning",
      description: "Choose between online, hybrid, or in-person learning formats",
      gradient: "from-violet-500 to-violet-600",
      bgGradient: "from-violet-50 to-white",
      borderColor: "border-violet-200",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600"
    },
    {
      id: 7,
      icon: <FaUsers />,
      title: "Alumni Network",
      description: "Access to our community of 9758+ successful graduates",
      gradient: "from-rose-500 to-rose-600",
      bgGradient: "from-rose-50 to-white",
      borderColor: "border-rose-200",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600"
    },
    {
      id: 8,
      icon: <FaCertificate />,
      title: "Certification",
      description: "Earn industry-recognized certificates upon course completion",
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-white",
      borderColor: "border-teal-200",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600"
    }
  ];

  return (
    <section
      id="advantages"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0C0950]/5 to-[#3A36DB]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#3A36DB]/5 to-[#0C0950]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            The <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0C0950] to-[#3A36DB]">ARC Advantage</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0C0950] to-[#3A36DB] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Why thousands of students choose ARC Computer Institute for their tech education
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {advantages.map((advantage) => (
            <motion.div
              key={advantage.id}
              className={`group relative p-6 rounded-2xl bg-gradient-to-b ${advantage.bgGradient} border ${advantage.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden`}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${advantage.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>

              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-xl ${advantage.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`text-2xl ${advantage.iconColor}`}>
                  {advantage.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0C0950] transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>

              {/* Learn more indicator */}
              <div className="relative mt-4 flex items-center text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0C0950] to-[#3A36DB] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            to="/contactSection"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Your Tech Journey Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantageSection;