import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CoursesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 15, mass: 0.5 },
    },
  };

  // Beautiful, relevant icons for each course
  const courses = useMemo(() => [
    { id: 1, slug: "basic-computer", title: "Basic Computer", duration: "3 Months", category: "General", icon: "https://cdn-icons-png.flaticon.com/512/3606/3606645.png", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-50", level: "Beginner", students: 1250 },
    { id: 2, slug: "graphic-designing", title: "Graphic Designing", duration: "5 Months", category: "Design", icon: "https://cdn-icons-png.flaticon.com/512/4668/4668243.png", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-50", level: "Intermediate", students: 890 },
    { id: 3, slug: "web-designing", title: "Web Designing", duration: "5 Months", category: "Web", icon: "https://cdn-icons-png.flaticon.com/512/9414/9414296.png", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-50", level: "Intermediate", students: 1100 },
    { id: 4, slug: "caad", title: "CAAD", duration: "10 Months", category: "Accounting", icon: "https://cdn-icons-png.flaticon.com/512/6550/6550611.png", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-50", level: "Advanced", students: 650 },
    { id: 5, slug: "cca", title: "CCA", duration: "6 Months", category: "Accounting", icon: "https://cdn-icons-png.flaticon.com/512/1908/1908618.png", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-50", level: "Beginner", students: 720 },
    { id: 6, slug: "aca", title: "ACA", duration: "8 Months", category: "Accounting", icon: "https://www.vhv.rs/dpng/d/577-5779702_icon-2-accounting-software-icon-hd-png-download.png", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-50", level: "Intermediate", students: 580 },
    { id: 7, slug: "adca", title: "ADCA", duration: "12 Months", category: "Diploma", icon: "https://cdn-icons-png.flaticon.com/512/1875/1875518.png", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-50", level: "Advanced", students: 1420 },
    { id: 8, slug: "digital-marketing", title: "Digital Marketing", duration: "4 Months", category: "Marketing", icon: "https://www.vhv.rs/dpng/d/418-4182524_digital-marketing-png-icon-png-download-ngong-forest.png", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-50", level: "Intermediate", students: 940 },
    { id: 9, slug: "python", title: "Python", duration: "4 Months", category: "Programming", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-50", level: "Intermediate", students: 1050 },
    { id: 10, slug: "advanced-excel", title: "Advanced Excel", duration: "1 Month", category: "Tools", icon: "https://cdn.imgbin.com/19/21/6/imgbin-microsoft-excel-computer-icons-exel-mmUhy3ZdwweVqrYa5VGW9aPHi.jpg", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-50", level: "Advanced", students: 2100 },
    { id: 11, slug: "busy", title: "Busy", duration: "1 Month", category: "Tools", icon: "https://www.altisinfonet.com/wp-content/themes/altisinfonet/assets/images/solution_image/management_7185495.svg", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-50", level: "Intermediate", students: 450 },
    { id: 12, slug: "tally-prime", title: "Tally Prime", duration: "3 Months", category: "Accounting", icon: "https://compcraft.in/wp-content/uploads/2024/06/7090080-removebg-preview.png", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-50", level: "Intermediate", students: 1850 },
    { id: 13, slug: "ccc", title: "CCC", duration: "4 Months", category: "General", icon: "https://cdn-icons-png.flaticon.com/256/2436/2436874.png", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-50", level: "Beginner", students: 980 },
    { id: 14, slug: "full-stack-development", title: "Full Stack Development", duration: "9 Months", category: "Web", icon: "https://image.pngaaa.com/519/4835519-middle.png", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-50", level: "Beginner", students: 980 },

  ], []);

  const categories = useMemo(() => ["All Courses", ...new Set(courses.map(c => c.category))], [courses]);

  const filteredCourses = useMemo(() =>
    selectedCategory === "All Courses" ? courses : courses.filter(c => c.category === selectedCategory),
    [selectedCategory, courses]
  );

  // Get category icon (beautiful emojis for category filter)
  const getCategoryIcon = (category) => {
    const icons = {
      "All Courses": "🎯",
      "General": "💻",
      "Design": "🎨",
      "Web": "🌐",
      "Accounting": "📊",
      "Diploma": "📜",
      "Marketing": "📢",
      "Programming": "🐍",
      "Tools": "🔧"
    };
    return icons[category] || "📚";
  };

  return (
    <>
      <Helmet>
        <title>Best Computer Courses in Delhi | ARC Institute - IT Training Center</title>
        <meta name="description" content="Professional computer courses at ARC Institute Delhi. Learn Graphic Design, Web Development, Python, Tally, Digital Marketing & more with 95% placement support." />
        <meta name="keywords" content="computer courses Delhi, IT training center, graphic design course, web development course, tally prime training, python programming, digital marketing course, best computer institute Delhi" />
        <link rel="canonical" href="https://www.arcinstitute.in/courses" />
      </Helmet>

      <section
        id="courses"
        className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50"
        ref={ref}
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl opacity-5 animate-bounce">🎓</div>
          <div className="absolute bottom-20 right-10 text-8xl opacity-5 animate-spin">⭐</div>
          <div className="absolute top-1/2 left-1/4 text-7xl opacity-5 animate-pulse">🚀</div>
          <div className="absolute bottom-1/3 right-1/4 text-6xl opacity-5 animate-bounce">💡</div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full mb-4"
            >
              <span className="text-2xl">✨</span>
              <span className="text-sm font-semibold text-blue-700">Learn & Grow with ARC</span>
              <span className="text-2xl">✨</span>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
              itemProp="name"
            >
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">Awesome Courses</span> 🚀
            </motion.h1>
            
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={itemVariants}
              itemProp="description"
            >
              Choose your favorite course and start your exciting learning journey with us!
            </motion.p>
          </motion.div>

          {/* Category Filter with Animation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg scale-105" 
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md"
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2 text-lg">{getCategoryIcon(category)}</span>
                {category}
                {selectedCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-700 to-indigo-800 -z-10"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Courses Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
          >
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onHoverStart={() => setHoveredCard(course.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative"
              >
                {/* Floating Animation on Hover */}
                {hoveredCard === course.id && (
                  <motion.div
                    layoutId="hoverGlow"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                
                <div className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${hoveredCard === course.id ? 'shadow-2xl' : 'shadow-lg'}`}>
                  {/* Consistent Blue Top Bar */}
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600" />
                  
                  <div className="p-6">
                    {/* Header with Icon and Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div 
                        className={`w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl p-2 ${hoveredCard === course.id ? 'animate-bounce' : ''}`}
                        animate={{ rotate: hoveredCard === course.id ? [0, 5, -5, 0] : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={course.icon} 
                          alt={course.title} 
                          className="w-12 h-12 object-contain"
                        />
                      </motion.div>
                      <div className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700">
                        {course.level}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1" itemProp="name">
                      {course.title}
                      {course.title === "ADCA" && " 🎓"}
                      {course.title === "Python" && " 🐍"}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      Master {course.title} with hands-on projects and expert guidance. Perfect for {course.level.toLowerCase()} level students!
                    </p>

                    {/* Course Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-gray-500">
                        <span className="text-lg">⏰</span>
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <span className="text-lg">👨‍🎓</span>
                        <span>{course.students}+ students</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link 
                        to={`/courses/${course.slug}`}
                        className="flex-1"
                      >
                        <motion.button 
                          whileHover={{ x: 5 }}
                          className="w-full px-4 py-2 border-2 border-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:border-blue-300 transition-all"
                        >
                          View Details →
                        </motion.button>
                      </Link>
                      <Link to="/contactSection" className="flex-1">
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                        >
                          Enroll Now ✨
                        </motion.button>
                      </Link>
                    </div>
                  </div>

                  {/* Hover Reveal Footer */}
                  <motion.div 
                    className="px-6 py-3 bg-blue-50 border-t border-gray-100"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: hoveredCard === course.id ? 1 : 0.8 }}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 text-gray-600">
                        <span>🏆</span> Certificate Included
                      </span>
                      <span className="flex items-center gap-1 text-gray-600">
                        <span>💯</span> 95% Placement Rate
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          {filteredCourses.length === courses.length && (
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1 }}
            >
              {/* <Link to="/all-courses">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-700 to-indigo-800 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
                >
                  <span>🎯</span>
                  View All {courses.length} Courses
                  <span>🚀</span>
                </motion.button>
              </Link> */}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default React.memo(CoursesSection);