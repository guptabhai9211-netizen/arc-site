import React, { useState, useMemo, useRef } from 'react';
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

const getCategories = () => {
  const cats = coursesData.map(c => c.category);
  return ['All', ...new Set(cats)];
};

// ─── Course Card ───────────────────────────────────────────────────────────────
const CourseCard = ({ course, onOpenDetail }) => (
  <div
    onClick={() => onOpenDetail(course)}
    className="group relative bg-white rounded-2xl cursor-pointer overflow-hidden flex-shrink-0"
    style={{
      width: '360px',          // ← was 300px, ab 360px
      border: '1px solid rgba(58,54,219,0.12)',
      boxShadow: '0 2px 12px rgba(12,9,80,0.06)',
      transition: 'transform 0.28s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.28s ease, border-color 0.2s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
      e.currentTarget.style.boxShadow = '0 20px 48px rgba(58,54,219,0.18)';
      e.currentTarget.style.borderColor = 'rgba(58,54,219,0.45)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
      e.currentTarget.style.boxShadow = '0 2px 12px rgba(12,9,80,0.06)';
      e.currentTarget.style.borderColor = 'rgba(58,54,219,0.12)';
    }}
  >
    {/* Top accent bar */}
    <div
      className="h-[4px] w-full"
      style={{ background: 'linear-gradient(90deg, #0C0950, #3A36DB)' }}
    />

    {/* Hover glow overlay */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at top, rgba(58,54,219,0.05) 0%, transparent 70%)',
        transition: 'opacity 0.3s ease',
      }}
    />

    <div className="p-6 flex flex-col gap-5 relative">   {/* ← p-5→p-6, gap-4→gap-5 */}

      {/* Icon + Title */}
      <div className="flex items-center gap-4">          {/* ← gap-3→gap-4 */}
        <div
          className={`w-16 h-16 ${course.bgColor || 'bg-blue-50'} rounded-xl flex items-center justify-center p-2 flex-shrink-0`}
          style={{ border: '1px solid rgba(58,54,219,0.1)', transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)' }}
        >
          {/* ← w-14/h-14 → w-16/h-16, icon w-9/h-9 → w-11/h-11 */}
          <img
            src={course.icon}
            alt={course.title}
            className="w-11 h-11 object-contain group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          {/* ← text-base → text-lg, font-bold stays */}
          <h3 className="text-lg font-bold text-gray-800 leading-tight truncate">{course.title}</h3>
          <span
            className="inline-block mt-1.5 text-xs font-semibold px-3 py-1 rounded-full"
            style={{ background: 'rgba(58,54,219,0.08)', color: '#3A36DB' }}
          >
            {course.category}
          </span>
        </div>
      </div>

      {/* Description (naya — card pe brief text) */}
      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
        {course.description}
      </p>

      {/* Stats row */}
      <div
        className="grid grid-cols-3 gap-2 pt-3"
        style={{ borderTop: '1px solid rgba(58,54,219,0.08)' }}
      >
        {[
          { icon: 'far fa-calendar-alt', text: course.duration },
          { icon: 'fas fa-chart-line', text: course.level },
          { icon: 'fas fa-user-graduate', text: `${course.students}+` },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-1.5 rounded-lg px-2 py-2"
            style={{ background: 'rgba(58,54,219,0.04)' }}
          >
            <i className={`${item.icon} text-xs`} style={{ color: '#3A36DB' }}></i>
            {/* ← text-[11px] → text-xs */}
            <span className="text-xs font-semibold text-gray-600 truncate">{item.text}</span>
          </div>
        ))}
      </div>

      {/* View Details Button */}
      <button
        className="w-full py-2.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #0C0950 0%, #3A36DB 100%)',
          boxShadow: '0 4px 14px rgba(58,54,219,0.25)',
        }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(58,54,219,0.4)'; e.currentTarget.style.transform = 'scale(1.02)'; }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(58,54,219,0.25)'; e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <i className="fas fa-eye"></i> View Details
      </button>
    </div>
  </div>
);

// ─── Course Detail Modal ───────────────────────────────────────────────────────
const CourseDetailModal = ({ course, onClose }) => {
  if (!course) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      style={{ background: 'rgba(12,9,80,0.65)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        style={{ boxShadow: '0 24px 64px rgba(12,9,80,0.3)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="h-[3px] w-full rounded-t-2xl" style={{ background: 'linear-gradient(90deg, #0C0950, #3A36DB)' }} />

        <div className="p-6 md:p-8">
          <div className="flex items-start gap-5 mb-6">
            <div className={`w-20 h-20 ${course.bgColor || 'bg-blue-50'} rounded-2xl flex items-center justify-center p-2 flex-shrink-0`}
              style={{ border: '1px solid rgba(58,54,219,0.15)' }}>
              <img src={course.icon} alt={course.title} className="w-12 h-12 object-contain" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">{course.title}</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {[course.category, `⏱ ${course.duration}`, `📶 ${course.level}`].map((tag, i) => (
                  <span key={i} className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'rgba(58,54,219,0.08)', color: '#3A36DB' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors text-xl">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold text-gray-800 mb-2 flex items-center gap-2">
              <i className="fas fa-info-circle" style={{ color: '#3A36DB' }}></i> About this Course
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">{course.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
              <i className="fas fa-list-check" style={{ color: '#3A36DB' }}></i> Course Syllabus
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {course.syllabus.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-600 rounded-lg px-3 py-2 text-sm"
                  style={{ background: 'rgba(58,54,219,0.05)', border: '1px solid rgba(58,54,219,0.1)' }}>
                  <i className="fas fa-check-circle text-xs" style={{ color: '#3A36DB' }}></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl"
            style={{ background: 'linear-gradient(135deg, rgba(12,9,80,0.03), rgba(58,54,219,0.06))' }}>
            {[
              { icon: 'fas fa-users', val: `${course.students}+`, label: 'Students Enrolled' },
              { icon: 'fas fa-calendar-alt', val: course.duration, label: 'Duration' },
              { icon: 'fas fa-certificate', val: 'Certified', label: 'On Completion' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <i className={`${s.icon} text-lg mb-1`} style={{ color: '#3A36DB' }}></i>
                <p className="text-xl font-bold text-gray-800">{s.val}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>

          <Link to="/contactSection">
            <div className="flex gap-3">
              <button
                className="flex-1 py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 text-sm transition-all"
                style={{ background: 'linear-gradient(135deg, #0C0950, #3A36DB)', boxShadow: '0 6px 20px rgba(58,54,219,0.3)' }}
              >
                <i className="fas fa-graduation-cap"></i> Enroll Now
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                style={{ border: '2px solid rgba(58,54,219,0.25)', color: '#3A36DB' }}
              >
                Close
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

// ─── Infinite Marquee ─────────────────────────────────────────────────────────
const InfiniteMarquee = ({ courses, onOpenDetail }) => {
  const trackRef = useRef(null);
  const doubled = [...courses, ...courses];

  return (
    <div
      className="relative w-full overflow-hidden py-4"
      onMouseEnter={() => trackRef.current && (trackRef.current.style.animationPlayState = 'paused')}
      onMouseLeave={() => trackRef.current && (trackRef.current.style.animationPlayState = 'running')}
    >
      <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #f3f4f6, transparent)' }} />
      <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #f3f4f6, transparent)' }} />

      <div
        ref={trackRef}
        className="flex gap-6"        /* ← gap-5 → gap-6 to match larger cards */
        style={{
          width: 'max-content',
          animation: `arcMarquee ${courses.length * 4}s linear infinite`,
        }}
      >
        {doubled.map((course, idx) => (
          <CourseCard key={`${course.id}-${idx}`} course={course} onOpenDetail={onOpenDetail} />
        ))}
      </div>

      <style>{`
        @keyframes arcMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const CourseShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = useMemo(() => getCategories(), []);

  const filteredCourses = useMemo(() => (
    activeFilter === 'All' ? coursesData : coursesData.filter(c => c.category === activeFilter)
  ), [activeFilter]);

  const useSlider = filteredCourses.length > 3;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montagu+Slab:opsz,wght@16..48,100..700&display=swap');
        .montagu-heading { font-family: 'Montagu Slab', serif; }
      `}</style>

      <section className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3"
              style={{ background: 'rgba(58,54,219,0.1)', color: '#3A36DB' }}
            >
              <i className="fas fa-graduation-cap mr-2"></i> Find the Right
            </span>
            <h2 className="montagu-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Best Course <span style={{ color: '#3A36DB' }}>for you</span>
            </h2>
            <p className="text-gray-400 mt-3 text-sm flex items-center justify-center gap-2">
              <i className="fas fa-hand-pointer" style={{ color: '#3A36DB' }}></i>
              Click any course card to view complete details
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap"
                style={
                  activeFilter === cat
                    ? { background: 'linear-gradient(135deg, #0C0950, #3A36DB)', color: 'white', boxShadow: '0 4px 14px rgba(58,54,219,0.3)' }
                    : { background: 'white', color: '#555', border: '1px solid rgba(58,54,219,0.15)' }
                }
              >
                {cat === 'All' ? <><i className="fas fa-th-large mr-1"></i> All Courses</> : cat}
              </button>
            ))}
          </div>

          {/* Content */}
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl" style={{ border: '1px solid rgba(58,54,219,0.1)' }}>
              <i className="fas fa-folder-open text-5xl text-gray-300 mb-3"></i>
              <p className="text-gray-500">No courses found.</p>
              <button onClick={() => setActiveFilter('All')} className="mt-3 text-sm font-semibold" style={{ color: '#3A36DB' }}>
                Show all courses
              </button>
            </div>
          ) : useSlider ? (
            <>
              <InfiniteMarquee courses={filteredCourses} onOpenDetail={setSelectedCourse} />
              <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-3">
                <i className="fas fa-arrows-alt-h" style={{ color: '#3A36DB' }}></i>
                <strong>{filteredCourses.length}</strong> courses · Hover to pause
                <i className="fas fa-infinity" style={{ color: '#3A36DB' }}></i>
              </p>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} onOpenDetail={setSelectedCourse} />
              ))}
            </div>
          )}

          {/* View All Button */}
          <Link to="/courses">
            <div className="flex justify-center mt-10">
              <motion.button
                whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(58,54,219,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 rounded-xl font-bold text-base text-white flex items-center gap-3"
                style={{ background: 'linear-gradient(135deg, #0C0950, #3A36DB)', boxShadow: '0 6px 20px rgba(58,54,219,0.25)' }}
                onClick={() => { setActiveFilter('All'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                <i className="fas fa-th-large"></i>
                View All Courses
                <i className="fas fa-arrow-right"></i>
              </motion.button>
            </div>
          </Link>
        </div>

        {/* Modal */}
        <CourseDetailModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      </section>
    </>
  );
};

export default CourseShowcase;