 import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

const AdvantageSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const advantages = [
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "Placement Guarantee",
      description: "Our dedicated placement cell ensures every student gets placed in top tech companies",
      color: "bg-gradient-to-br from-blue-100 to-blue-50",
      iconColor: "text-[#3A36DB]"
    },
    {
      icon: <FaUserTie className="text-3xl" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with 8+ years of real-world experience",
      color: "bg-gradient-to-br from-purple-100 to-purple-50",
      iconColor: "text-[#0C0950]"
    },
    {
      icon: <FaBookOpen className="text-3xl" />,
      title: "Industry Curriculum",
      description: "Courses designed with input from tech leaders to match current industry needs",
      color: "bg-gradient-to-br from-cyan-100 to-cyan-50",
      iconColor: "text-[#3A36DB]"
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl" />,
      title: "Hands-on Training",
      description: "Practical sessions with real-world projects and case studies",
      color: "bg-gradient-to-br from-emerald-100 to-emerald-50",
      iconColor: "text-[#0C0950]"
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art labs with high-performance systems and software",
      color: "bg-gradient-to-br from-amber-100 to-amber-50",
      iconColor: "text-[#3A36DB]"
    },
    {
      icon: <FaLaptop className="text-3xl" />,
      title: "Flexible Learning",
      description: "Choose between online, hybrid, or in-person learning formats",
      color: "bg-gradient-to-br from-violet-100 to-violet-50",
      iconColor: "text-[#0C0950]"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Alumni Network",
      description: "Access to our community of 9758+ successful graduates",
      color: "bg-gradient-to-br from-rose-100 to-rose-50",
      iconColor: "text-[#3A36DB]"
    },
    {
      icon: <FaCertificate className="text-3xl" />,
      title: "Certification",
      description: "Earn industry-recognized certificates upon course completion",
      color: "bg-gradient-to-br from-teal-100 to-teal-50",
      iconColor: "text-[#0C0950]"
    }
  ];
 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
    }
  };

  return (
    <section
      id="advantages"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      ref={ref}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C0950] to-[#3A36DB] mask mask-circle mix-blend-overlay"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0C0950] to-[#3A36DB]">ARC Advantage</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0C0950] to-[#3A36DB] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Why thousands of students choose ARC Computer Institute for their tech education
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl ${advantage.color} shadow-md hover:shadow-lg transition-all`}
              variants={itemVariants}
              whileHover="hover"
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${advantage.iconColor}`}>
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 1 }}
        >
          <Link to="/contactSection">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
            Start Your Tech Journey Today
          </motion.button>
            </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantageSection;