 import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const CoursesScroll = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const courses = [
    { id: 1, slug: "basic-computer", title: "Basic Computer", duration: "3 Months", category: "General", icon: "🖥️" },
    { id: 2, slug: "graphic-designing", title: "Graphic Designing", duration: "5 Months", category: "Design", icon: "🎨" },
    { id: 3, slug: "web-designing", title: "Web Designing", duration: "5 Months", category: "Web", icon: "🌐" },
    { id: 4, slug: "caad", title: "CAAD", duration: "10 Months", category: "Accounting", icon: "📊" },
    { id: 5, slug: "cca", title: "CCA", duration: "6 Months", category: "Accounting", icon: "🧾" },
    { id: 6, slug: "aca", title: "ACA", duration: "8 Months", category: "Accounting", icon: "📈" },
    { id: 7, slug: "adca", title: "ADCA", duration: "12 Months", category: "Diploma", icon: "📘" },
    { id: 8, slug: "digital-marketing", title: "Digital Marketing", duration: "4 Months", category: "Marketing", icon: "📢" },
    { id: 9, slug: "python", title: "Python", duration: "4 Months", category: "Programming", icon: "🐍" },
    { id: 10, slug: "advanced-excel", title: "Advanced Excel", duration: "1 Month", category: "Tools", icon: "📊" },
    { id: 11, slug: "busy", title: "Busy", duration: "1 Month", category: "Tools", icon: "🧮" },
    { id: 12, slug: "tally-prime", title: "Tally Prime", duration: "3 Months", category: "Accounting", icon: "📒" },
    { id: 13, slug: "ccc", title: "CCC", duration: "4 Months", category: "General", icon: "💡" },
  ];

  const categories = ["All Courses", ...new Set(courses.map((c) => c.category))];

  const filteredCourses =
    selectedCategory === "All Courses"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <section id="courses" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" variants={itemVariants}>
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0C0950] to-[#3A36DB]">Courses</span>
          </motion.h2>
          <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
            Career-focused programs designed for real-world success
          </motion.p>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-[#0C0950] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Marquee Style Auto Scroll */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex space-x-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
          >
            {[...filteredCourses, ...filteredCourses].map((course, index) => (
              <div
                key={`${course.id}-${index}`}
                className="min-w-[20rem] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
              >
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">Duration: {course.duration}</p>
                <div className="flex justify-between items-center">
                  <Link
                    to={`/courses/${course.slug}`}
                    className="text-sm font-medium text-[#0C0950] hover:text-[#3A36DB] transition-colors"
                  >
                    View Details →
                  </Link>
                  <Link to="/contactSection">
                    <button className="px-4 py-2 bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white text-sm font-medium rounded-lg hover:shadow-md transition-all">
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesScroll;
