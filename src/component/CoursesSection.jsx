 import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CoursesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

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

  const courses = useMemo(() => [
    { id: 1, slug: "basic-computer", title: "Basic Computer", duration: "3 Months", category: "General", icon: "🖥️", price: 2000 },
    { id: 2, slug: "graphic-designing", title: "Graphic Designing", duration: "5 Months", category: "Design", icon: "🎨", price: 5000 },
    { id: 3, slug: "web-designing", title: "Web Designing", duration: "5 Months", category: "Web", icon: "🌐", price: 5500 },
    { id: 4, slug: "caad", title: "CAAD (Certificate in Advanced Accounting & Designing)", duration: "10 Months", category: "Accounting", icon: "📊", price: 7000 },
    { id: 5, slug: "cca", title: "CCA (Certificate in Computer Accounting)", duration: "6 Months", category: "Accounting", icon: "🧾", price: 6000 },
    { id: 6, slug: "aca", title: "ACA (Advanced Certificate in Accounting)", duration: "8 Months", category: "Accounting", icon: "📈", price: 6500 },
    { id: 7, slug: "adca", title: "ADCA (Advanced Diploma in Computer Application)", duration: "12 Months", category: "Diploma", icon: "📘", price: 8000 },
    { id: 8, slug: "digital-marketing", title: "Digital Marketing", duration: "4 Months", category: "Marketing", icon: "📢", price: 4500 },
    { id: 9, slug: "python", title: "Python", duration: "4 Months", category: "Programming", icon: "🐍", price: 4000 },
    { id: 10, slug: "advanced-excel", title: "Advanced Excel", duration: "1 Month", category: "Tools", icon: "📊", price: 1500 },
    { id: 11, slug: "busy", title: "Busy", duration: "1 Month", category: "Tools", icon: "🧮", price: 1200 },
    { id: 12, slug: "tally-prime", title: "Tally Prime", duration: "3 Months", category: "Accounting", icon: "📒", price: 2500 },
    { id: 13, slug: "ccc", title: "CCC (Course on Computer Concept)", duration: "4 Months", category: "General", icon: "💡", price: 2000 },
  ], []);

  const categories = useMemo(() => ["All Courses", ...new Set(courses.map(c => c.category))], [courses]);

  const filteredCourses = useMemo(() =>
    selectedCategory === "All Courses" ? courses : courses.filter(c => c.category === selectedCategory),
    [selectedCategory, courses]
  );

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
        className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
        ref={ref}
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
              itemProp="name"
            >
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0C0950] to-[#3A36DB]">Professional Courses</span> in Delhi
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={itemVariants}
              itemProp="description"
            >
              Industry-relevant programs with practical training and placement support
            </motion.p>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }}>
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
                  selectedCategory === category ? "bg-[#0C0950] text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
          >
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
                variants={itemVariants}
                whileHover={{ y: -3 }}
                itemScope
                itemType="https://schema.org/Course"
                itemProp="itemListElement"
              >
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between">
                    <div className="text-3xl md:text-4xl mb-3 md:mb-4" aria-hidden="true">{course.icon}</div>
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2" itemProp="name">
                    {course.title}
                  </h2>

                  <p className="text-gray-600 mb-2 text-sm md:text-base" itemProp="description">
                    {course.title} training course with hands-on practice and industry-oriented curriculum.
                  </p>

                  <p className="text-gray-600 mb-2 text-sm md:text-base">
                    <span className="font-medium">Duration:</span> <span itemProp="timeToComplete">{course.duration}</span>
                  </p>

                  {/* Provider */}
                  <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
                    <meta itemProp="name" content="ARC Computer Institute" />
                    <meta itemProp="sameAs" content="https://www.arcinstitute.in" />
                  </div>

                  {/* Course Instance */}
                  <div itemProp="hasCourseInstance" itemScope itemType="https://schema.org/CourseInstance">
                    <meta itemProp="courseMode" content="Offline" />
                    <meta itemProp="startDate" content="2025-08-01" />
                    <meta itemProp="endDate" content="2026-08-01" />
                    <div itemProp="location" itemScope itemType="https://schema.org/Place">
                      <meta itemProp="name" content="ARC Institute" />
                      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                        <meta itemProp="streetAddress" content="A-14 Main Road, Mukund Pur" />
                        <meta itemProp="addressLocality" content="Delhi" />
                        <meta itemProp="postalCode" content="110042" />
                        <meta itemProp="addressCountry" content="IN" />
                      </div>
                    </div>
                  </div>

                  {/* Offers */}
                  <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <meta itemProp="priceCurrency" content="INR" />
                    <meta itemProp="price" content={course.price} />
                    <meta itemProp="availability" content="https://schema.org/InStock" />
                    <meta itemProp="url" content={`https://www.arcinstitute.in/courses/${course.slug}`} />
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <Link
                      to={`/courses/${course.slug}`}
                      className="text-sm font-medium text-[#0C0950] hover:text-[#3A36DB] transition-colors"
                      itemProp="url"
                    >
                      View Details →
                    </Link>
                    <Link to="/contactSection" className="hover:no-underline">
                      <button 
                        className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white text-xs md:text-sm font-medium rounded-lg hover:shadow-md transition-all"
                      >
                        Enroll Now
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default React.memo(CoursesSection);
