import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Course Data
const coursesData = [
  { id: 1, slug: "basic-computer", title: "Basic Computer", duration: "3 Months", category: "General", icon: "https://cdn-icons-png.flaticon.com/512/3606/3606645.png", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-50", level: "Beginner", students: 1250, description: "Learn fundamentals of computers including hardware, software, MS Office, and internet basics. Perfect for beginners starting their digital journey.", syllabus: ["Computer Fundamentals", "MS Word", "MS Excel", "MS PowerPoint", "Internet & Email"] },
  { id: 2, slug: "graphic-designing", title: "Graphic Designing", duration: "5 Months", category: "Design", icon: "https://cdn-icons-png.flaticon.com/512/4668/4668243.png", color: "from-green-600 to-teal-600", bgColor: "bg-green-50", level: "Intermediate", students: 890, description: "Master Adobe Photoshop, Illustrator, and CorelDRAW. Learn logo design, branding, social media graphics, and creative visual communication.", syllabus: ["Photoshop", "Illustrator", "CorelDRAW", "Typography", "Logo Design", "Social Media Graphics"] },
  { id: 3, slug: "web-designing", title: "Web Designing", duration: "5 Months", category: "Web", icon: "https://cdn-icons-png.flaticon.com/512/9414/9414296.png", color: "from-purple-600 to-pink-600", bgColor: "bg-purple-50", level: "Intermediate", students: 1100, description: "Build stunning websites with HTML5, CSS3, JavaScript, and responsive design. Learn modern front-end development techniques.", syllabus: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design", "Flexbox/Grid"] },
  { id: 4, slug: "caad", title: "CAAD", duration: "10 Months", category: "Accounting", icon: "https://cdn-icons-png.flaticon.com/512/6550/6550611.png", color: "from-orange-600 to-red-600", bgColor: "bg-orange-50", level: "Advanced", students: 650, description: "Comprehensive Accounting and Diploma course covering financial accounting, taxation, GST, Tally, and Busy software.", syllabus: ["Financial Accounting", "GST", "Tally Prime", "Busy", "Income Tax", "Auditing"] },
  { id: 5, slug: "cca", title: "CCA", duration: "6 Months", category: "Accounting", icon: "https://cdn-icons-png.flaticon.com/512/1908/1908618.png", color: "from-cyan-600 to-blue-600", bgColor: "bg-cyan-50", level: "Beginner", students: 720, description: "Certificate in Computer Accounting - Learn basic accounting principles, Tally ERP, and manual accounting practices.", syllabus: ["Accounting Principles", "Tally ERP 9", "Manual Accounting", "Bank Reconciliation", "GST Basics"] },
  { id: 6, slug: "aca", title: "ACA", duration: "8 Months", category: "Accounting", icon: "https://www.vhv.rs/dpng/d/577-5779702_icon-2-accounting-software-icon-hd-png-download.png", color: "from-indigo-600 to-purple-600", bgColor: "bg-indigo-50", level: "Intermediate", students: 580, description: "Advanced Computer Accounting - Deep dive into GST, Tally Prime, Busy software, and advanced taxation concepts.", syllabus: ["Advanced Accounting", "GST Filing", "Tally Prime", "Busy Software", "Taxation", "Payroll"] },
  { id: 7, slug: "adca", title: "ADCA", duration: "12 Months", category: "Diploma", icon: "https://cdn-icons-png.flaticon.com/512/1875/1875518.png", color: "from-rose-600 to-orange-600", bgColor: "bg-rose-50", level: "Advanced", students: 1420, description: "Advanced Diploma in Computer Applications - Complete IT package including programming, web design, and accounting.", syllabus: ["C/C++", "Web Design", "Tally", "Digital Marketing", "Python Basics", "Database"] },
  { id: 8, slug: "digital-marketing", title: "Digital Marketing", duration: "4 Months", category: "Marketing", icon: "https://www.vhv.rs/dpng/d/418-4182524_digital-marketing-png-icon-png-download-ngong-forest.png", color: "from-red-600 to-orange-600", bgColor: "bg-red-50", level: "Intermediate", students: 940, description: "Master SEO, Google Ads, Social Media Marketing, Email Marketing, and Content Strategy for business growth.", syllabus: ["SEO", "Google Ads", "Social Media", "Email Marketing", "Content Marketing", "Analytics"] },
  { id: 9, slug: "python", title: "Python", duration: "4 Months", category: "Programming", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", color: "from-yellow-600 to-orange-600", bgColor: "bg-yellow-50", level: "Intermediate", students: 1050, description: "Learn Python programming from basics to advanced - data structures, OOP, file handling, and real-world projects.", syllabus: ["Python Basics", "Data Types", "Functions", "OOP", "File Handling", "Projects"] },
  { id: 10, slug: "advanced-excel", title: "Advanced Excel", duration: "1 Month", category: "Tools", icon: "https://cdn.imgbin.com/19/21/6/imgbin-microsoft-excel-computer-icons-exel-mmUhy3ZdwweVqrYa5VGW9aPHi.jpg", color: "from-emerald-600 to-teal-600", bgColor: "bg-emerald-50", level: "Advanced", students: 2100, description: "Master Excel from basics to advanced - formulas, pivot tables, macros, VBA, and data analysis techniques.", syllabus: ["Formulas", "Pivot Tables", "Charts", "Macros", "VBA", "Data Analysis"] },
  { id: 11, slug: "busy", title: "Busy", duration: "1 Month", category: "Tools", icon: "https://www.altisinfonet.com/wp-content/themes/altisinfonet/assets/images/solution_image/management_7185495.svg", color: "from-slate-600 to-gray-600", bgColor: "bg-slate-50", level: "Intermediate", students: 450, description: "Learn Busy Accounting Software - billing, inventory, GST compliance, and financial management.", syllabus: ["Company Creation", "Billing", "Inventory", "GST", "Reports", "Backup/Restore"] },
  { id: 12, slug: "tally-prime", title: "Tally Prime", duration: "3 Months", category: "Accounting", icon: "https://compcraft.in/wp-content/uploads/2024/06/7090080-removebg-preview.png", color: "from-blue-600 to-indigo-600", bgColor: "bg-blue-50", level: "Intermediate", students: 1850, description: "Complete Tally Prime training - accounting, inventory, GST, payroll, and financial reporting.", syllabus: ["Accounting", "Inventory", "GST", "Payroll", "Banking", "Reports"] },
  { id: 13, slug: "ccc", title: "CCC", duration: "4 Months", category: "General", icon: "https://cdn-icons-png.flaticon.com/256/2436/2436874.png", color: "from-teal-600 to-cyan-600", bgColor: "bg-teal-50", level: "Beginner", students: 980, description: "Course on Computer Concepts - Government certified course covering basic computer knowledge and internet applications.", syllabus: ["Computer Basics", "Software", "Internet", "Email", "Digital Finance", "Cyber Security"] },
];

// Get unique categories
const getCategories = () => {
  const cats = coursesData.map(c => c.category);
  return ['All', ...new Set(cats)];
};

// Course Card Component
const CourseCard = ({ course, onOpenDetail }) => {
  const iconSrc = course.icon || "https://cdn-icons-png.flaticon.com/512/1995/1995576.png";
  
  return (
    <div 
      onClick={() => onOpenDetail(course)}
      className="course-card relative w-[320px] md:w-[350px] bg-white rounded-2xl shadow-xl cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Top gradient bar */}
      <div className={`h-2 w-full bg-gradient-to-r ${course.color || 'from-blue-600 to-blue-800'}`}></div>
      
      {/* Card Content */}
      <div className="p-6 flex flex-col gap-4">
        {/* Icon + Title Row */}
        <div className="flex items-center gap-4">
          <div className={`w-16 h-16 ${course.bgColor || 'bg-blue-50'} rounded-2xl flex items-center justify-center p-2 shadow-md ring-1 ring-gray-100 flex-shrink-0`}>
            <img src={iconSrc} alt={course.title} className="w-10 h-10 object-contain" loading="eager" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-extrabold text-gray-800 leading-tight truncate">{course.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-xs font-semibold text-${course.color?.split('-')[1]}-700 bg-${course.color?.split('-')[1]}-50 px-3 py-0.5 rounded-full`}>
                <i className="fas fa-tag mr-1 text-xs"></i> {course.category}
              </span>
            </div>
          </div>
        </div>
        
        {/* Details Grid */}
        <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1.5 text-gray-700 bg-gray-50 rounded-lg px-2 py-2">
            <i className="far fa-calendar-alt text-blue-500 text-xs"></i>
            <span className="text-xs font-semibold">{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-700 bg-gray-50 rounded-lg px-2 py-2">
            <i className="fas fa-chart-line text-blue-500 text-xs"></i>
            <span className="text-xs font-semibold">{course.level}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-700 bg-gray-50 rounded-lg px-2 py-2">
            <i className="fas fa-user-graduate text-blue-500 text-xs"></i>
            <span className="text-xs font-semibold">{course.students}+</span>
          </div>
        </div>
        
        {/* View Details Button */}
        <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold text-xs hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
          <i className="fas fa-eye"></i> View Details
        </button>
      </div>
    </div>
  );
};

// Course Detail Modal Component
const CourseDetailModal = ({ course, onClose }) => {
  if (!course) return null;
  
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto custom-scroll modal-animate" onClick={(e) => e.stopPropagation()}>
        <div className={`h-2 w-full bg-gradient-to-r ${course.color || 'from-blue-600 to-blue-800'}`}></div>
        
        <div className="p-6 md:p-8">
          <div className="flex items-start gap-5 mb-6">
            <div className={`w-20 h-20 ${course.bgColor || 'bg-blue-50'} rounded-2xl flex items-center justify-center p-2 shadow-md flex-shrink-0`}>
              <img src={course.icon} alt={course.title} className="w-12 h-12 object-contain" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">{course.title}</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className={`text-xs font-semibold text-${course.color?.split('-')[1]}-700 bg-${course.color?.split('-')[1]}-50 px-3 py-1 rounded-full`}>
                  {course.category}
                </span>
                <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  <i className="far fa-clock mr-1"></i> {course.duration}
                </span>
                <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  <i className="fas fa-signal mr-1"></i> {course.level}
                </span>
              </div>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
              <i className="fas fa-info-circle text-blue-500"></i> About this Course
            </h3>
            <p className="text-gray-600 leading-relaxed">{course.description}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <i className="fas fa-list-check text-blue-500"></i> Course Syllabus
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {course.syllabus.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
                  <i className="fas fa-check-circle text-green-500 text-sm"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
            <div className="text-center">
              <i className="fas fa-users text-blue-500 text-xl"></i>
              <p className="text-2xl font-bold text-gray-800">{course.students}+</p>
              <p className="text-xs text-gray-500">Students Enrolled</p>
            </div>
            <div className="text-center">
              <i className="fas fa-calendar-alt text-blue-500 text-xl"></i>
              <p className="text-2xl font-bold text-gray-800">{course.duration}</p>
              <p className="text-xs text-gray-500">Course Duration</p>
            </div>
            <div className="text-center">
              <i className="fas fa-certificate text-blue-500 text-xl"></i>
              <p className="text-2xl font-bold text-gray-800">Certified</p>
              <p className="text-xs text-gray-500">Completion Certificate</p>
            </div>
          </div>
          
          <Link to="/contactSection">
            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <i className="fas fa-graduation-cap"></i> Enroll Now
              </button>
              <button onClick={onClose} className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                Close
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Main Course Showcase Component
const CourseShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isSliderPlaying, setIsSliderPlaying] = useState(true);
  
  const categories = useMemo(() => getCategories(), []);
  
  const filteredCourses = useMemo(() => {
    if (activeFilter === 'All') return coursesData;
    return coursesData.filter(course => course.category === activeFilter);
  }, [activeFilter]);
  
  const duplicatedCourses = useMemo(() => {
    if (filteredCourses.length === 0) return [];
    return [...filteredCourses, ...filteredCourses, ...filteredCourses];
  }, [filteredCourses]);
  
  const useSlider = filteredCourses.length > 3;
  
  const handleOpenDetail = (course) => {
    setSelectedCourse(course);
  };
  
  const handleCloseDetail = () => {
    setSelectedCourse(null);
  };
  
  const handleMouseEnter = () => setIsSliderPlaying(false);
  const handleMouseLeave = () => setIsSliderPlaying(true);
  
  const handleViewAllCourses = () => {
    setActiveFilter('All');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montagu+Slab:opsz,wght@16..48,100..700&display=swap');
          .montagu-heading {
            font-family: 'Montagu Slab', serif;
          }
        `}
      </style>
      
      <section className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section - Clean & Professional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
              <i className="fas fa-graduation-cap mr-2"></i> 
              Find the Right
            </p>
            <h2 className="montagu-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Best Course <span className="text-blue-600">for you</span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm flex items-center justify-center gap-2">
              <i className="fas fa-hand-pointer text-blue-500"></i>
              <span>Click any course card to view complete details</span>
            </p>
          </motion.div>
          
          {/* Filter Tabs - Clean horizontal scroll */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeFilter === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {cat === 'All' ? (
                  <span className="flex items-center gap-2">
                    <i className="fas fa-th-large"></i> 
                    All Courses
                  </span>
                ) : (
                  cat
                )}
              </button>
            ))}
          </div>
          
          {/* Content Area */}
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
              <i className="fas fa-folder-open text-6xl text-gray-300 mb-4"></i>
              <p className="text-gray-500 text-lg">No courses found in this category.</p>
              <button onClick={handleViewAllCourses} className="mt-4 text-blue-600 hover:underline font-medium">Show all courses</button>
            </div>
          ) : useSlider ? (
            <div className="relative w-full overflow-hidden rounded-2xl py-4">
              <div 
                className={`flex gap-5 w-max ${isSliderPlaying ? 'animate-slide-infinite' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ animationPlayState: isSliderPlaying ? 'running' : 'paused' }}
              >
                {duplicatedCourses.map((course, idx) => (
                  <div key={`${course.id}-slide-${idx}`} className="flex-shrink-0">
                    <CourseCard 
                      course={course}
                      onOpenDetail={handleOpenDetail}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-100 to-transparent pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>
              
              <div className="text-center mt-5 text-xs text-gray-400 flex items-center justify-center gap-4">
                <i className="fas fa-arrows-alt-h text-blue-400"></i>
                <span><strong>{filteredCourses.length}</strong> courses available</span>
                <span className="hidden sm:inline">• Hover to pause</span>
                <i className="fas fa-infinity text-blue-400"></i>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {filteredCourses.map(course => (
                <CourseCard 
                  key={course.id}
                  course={course}
                  onOpenDetail={handleOpenDetail}
                />
              ))}
            </div>
          )}
          
          {/* View All Courses Button */}
          <Link to="/courses">
            <div className="flex justify-center mt-10">
              <button 
                onClick={handleViewAllCourses}
                className="group px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 hover:scale-105"
              >
                <i className="fas fa-th-large group-hover:rotate-12 transition-transform"></i>
                <span>View All Courses</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </Link>
          
          {/* Course Detail Modal */}
          <CourseDetailModal 
            course={selectedCourse} 
            onClose={handleCloseDetail} 
          />
        </div>
      </section>
    </>
  );
};

export default CourseShowcase;