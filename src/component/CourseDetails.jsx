import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Image icon URLs instead of React Icons
const iconImages = {
  FaLaptopCode: "https://cdn-icons-png.flaticon.com/512/3606/3606645.png",
  FaPaintBrush: "https://cdn-icons-png.flaticon.com/512/4668/4668243.png",
  FaCode: "https://cdn-icons-png.flaticon.com/512/9414/9414296.png",
  FaChartBar: "https://cdn-icons-png.flaticon.com/512/6550/6550611.png",
  FaMoneyBillWave: "https://cdn-icons-png.flaticon.com/512/1908/1908618.png",
  FaTrophy: "https://www.vhv.rs/dpng/d/577-5779702_icon-2-accounting-software-icon-hd-png-download.png",
  FaGraduationCap: "https://cdn-icons-png.flaticon.com/512/1875/1875518.png",
  FaSearch: "https://www.vhv.rs/dpng/d/418-4182524_digital-marketing-png-icon-png-download-ngong-forest.png",
  FaPython: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  FaTable: "https://cdn.imgbin.com/19/21/6/imgbin-microsoft-excel-computer-icons-exel-mmUhy3ZdwweVqrYa5VGW9aPHi.jpg",
  FaCalculator: "https://www.altisinfonet.com/wp-content/themes/altisinfonet/assets/images/solution_image/management_7185495.svg",
  FaClipboardList: "https://compcraft.in/wp-content/uploads/2024/06/7090080-removebg-preview.png",
  FaNetworkWired: "https://cdn-icons-png.flaticon.com/256/2436/2436874.png",
  FaBookOpen: "https://cdn-icons-png.flaticon.com/512/1864/1864520.png",
  FaClock: "https://cdn-icons-png.flaticon.com/512/1166/1166113.png",
  FaLayerGroup: "https://cdn-icons-png.flaticon.com/512/937/937306.png",
  FaTag: "https://cdn-icons-png.flaticon.com/512/4526/4526476.png",
  FaRocket: "https://cdn-icons-png.flaticon.com/512/8440/8440675.png",
  FaCheckCircle: "https://cdn-icons-png.flaticon.com/512/845/845646.png",
  FaHeart: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
  FaShieldAlt: "https://cdn-icons-png.flaticon.com/512/1808/1808443.png",
  FaUserGraduate: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  FaWhatsapp: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
  FaArrowLeft: "https://cdn-icons-png.flaticon.com/512/271/271220.png",
  FaStar: "https://cdn-icons-png.flaticon.com/512/616/616490.png",
  FaAward: "https://cdn-icons-png.flaticon.com/512/1820/1820141.png",
  FaUsers: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png",
  FaClipboardList2: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
  FaGraduationCap2: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  FaEnvelope: "https://cdn-icons-png.flaticon.com/512/542/542638.png",
  FaPhoneAlt: "https://cdn-icons-png.flaticon.com/512/724/724664.png"
};

// Icon Component that renders image
const Icon = ({ iconName, className = "w-6 h-6", alt = "icon" }) => {
  const iconUrl = iconImages[iconName] || iconImages.FaLaptopCode;
  return <img src={iconUrl} alt={alt} className={className} />;
};

const mockCourses = [
  {
    id: 1,
    slug: "basic-computer",
    title: "Basic Computer Course",
    description: "Fundamentals of computer operations and software tools.",
    duration: "3 Months",
    level: "Beginner",
    icon: "FaLaptopCode",
    category: "General",
    image: "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg",
    content: `Segment 1st:
• What is Computer, Types of Computers
• Hardware Components, Importance of Computer Education
• Desktop vs Laptop, Folder Operations, MS Paint, Power On/Off

Segment 2nd:
• Keyboard Usage, Notepad & WordPad
• Typing Practice, Internet, PowerPoint, Antivirus, Printer Usage

Segment 3rd:
• MS Word, MS Excel, Google Sheets`,
    syllabus: [
      "Computer Basics",
      "Typing & Notepad",
      "Internet & PowerPoint",
      "MS Word & Excel"
    ]
  },
  {
    id: 2,
    slug: "graphic-designing",
    title: "Graphic Designing",
    description: "Design stunning visuals with professional tools like Photoshop & Illustrator.",
    duration: "5 Months",
    level: "Intermediate",
    icon: "FaPaintBrush",
    category: "Design",
    image: "https://images.pexels.com/photos/2422286/pexels-photo-2422286.jpeg",
    content: `This course includes:
• Photoshop
• Corel Draw
• InDesign
• Illustrator`,
    syllabus: ["Photoshop", "Corel Draw", "InDesign", "Illustrator"]
  },
  {
    id: 3,
    slug: "web-designing",
    title: "Web Designing",
    description: "Build modern, responsive websites with HTML, CSS, and more.",
    duration: "5 Months",
    level: "Intermediate",
    icon: "FaCode",
    category: "Web",
    image: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg",
    content: `This course includes:
• HTML, DHTML, CSS
• JavaScript, Core Python`,
    syllabus: ["HTML & CSS", "DHTML", "JavaScript", "Core Python"]
  },
  {
    id: 4,
    slug: "caad",
    title: "Certificate in Advanced Accounting & Designing (CAAD)",
    description: "Comprehensive course covering accounting software and design tools.",
    duration: "10 Months",
    level: "Advanced",
    icon: "FaChartBar",
    category: "Accounting",
    image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg",
    content: `Course includes:
• Basic Computer (MS Word, Excel, PowerPoint, Internet)
• Photoshop, Corel Draw
• Tally, Busy & Advanced Excel`,
    syllabus: [
      "Basic Computer Applications",
      "Graphic Design Tools",
      "Accounting Software",
      "Advanced Excel"
    ]
  },
  {
    id: 5,
    slug: "cca",
    title: "Certificate in Computer Accounting (CCA)",
    description: "Fundamentals of computer-based accounting systems.",
    duration: "6 Months",
    level: "Beginner",
    icon: "FaMoneyBillWave",
    category: "Accounting",
    image: "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg",
    content: `Course covers:
• Basic Computer Operations
• Tally Prime Accounting Software`,
    syllabus: [
      "Computer Basics",
      "Tally Prime Fundamentals"
    ]
  },
  {
    id: 6,
    slug: "aca",
    title: "Advanced Certificate in Accounting (ACA)",
    description: "Advanced training in accounting software and tools.",
    duration: "8 Months",
    level: "Intermediate",
    icon: "FaTrophy",
    category: "Accounting",
    image: "https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg",
    content: `Course includes:
• Basic Computer Skills
• Tally Prime
• Busy Software
• Advanced Excel`,
    syllabus: [
      "Computer Fundamentals",
      "Tally Prime",
      "Busy Software",
      "Advanced Excel"
    ]
  },
  {
    id: 7,
    slug: "adca",
    title: "Advanced Diploma in Computer Application (ADCA)",
    description: "Comprehensive diploma covering multiple computer applications.",
    duration: "12 Months",
    level: "Advanced",
    icon: "FaGraduationCap",
    category: "Diploma",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
    content: `Course includes:
• Basic Computer (MS Office, Internet)
• Graphic Designing (Photoshop, Corel Draw)
• Web Designing (HTML, CSS, JavaScript, Python)
• Tally Prime + GST
• Busy Software
• Advanced Excel
• Computer Hardware`,
    syllabus: [
      "Office Applications",
      "Graphic Design",
      "Web Development",
      "Accounting Software",
      "Advanced Excel",
      "Computer Hardware"
    ]
  },
  {
    id: 8,
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Learn modern digital marketing strategies and tools.",
    duration: "4 Months",
    level: "Intermediate",
    icon: "FaSearch",
    category: "Marketing",
    image: "https://images.pexels.com/photos/4134784/pexels-photo-4134784.jpeg",
    content: `Course covers:
• SEO, SMO, Content Marketing
• PPC Advertising
• Digital Marketing Strategy
• Google My Business`,
    syllabus: [
      "Search Engine Optimization",
      "Social Media Optimization",
      "Content Marketing",
      "PPC Advertising",
      "Marketing Strategy"
    ]
  },
  {
    id: 9,
    slug: "python",
    title: "Python Programming",
    description: "Learn core Python programming concepts.",
    duration: "4 Months",
    level: "Intermediate",
    icon: "FaPython",
    category: "Programming",
    image: "https://images.pexels.com/photos/3183202/pexels-photo-3183202.jpeg",
    content: `Course includes:
• Python Introduction
• Data Types & Functions
• Exception Handling
• Modules & File Handling
• Object Oriented Concepts`,
    syllabus: [
      "Python Basics",
      "Data Structures",
      "Functions & Modules",
      "OOP Concepts",
      "File Handling"
    ]
  },
  {
    id: 10,
    slug: "advanced-excel",
    title: "Advanced Excel",
    description: "Master advanced Excel functions and data analysis.",
    duration: "1 Month",
    level: "Advanced",
    icon: "FaTable",
    category: "Tools",
    image: "https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg",
    content: `Course covers:
• Pivot Tables
• Dashboards
• Advanced Formulas (If, Or, Index+Match)
• Macros`,
    syllabus: [
      "Pivot Tables",
      "Dashboard Creation",
      "Advanced Formulas",
      "Macros"
    ]
  },
  {
    id: 11,
    slug: "busy",
    title: "Busy Accounting Software",
    description: "Learn to streamline business operations with Busy software.",
    duration: "1 Month",
    level: "Intermediate",
    icon: "FaCalculator",
    category: "Tools",
    image: "https://images.pexels.com/photos/3183202/pexels-photo-3183202.jpeg",
    content: `Course includes:
• Accounting Operations
• Inventory Management
• GST Compliance`,
    syllabus: [
      "Accounting in Busy",
      "Inventory Management",
      "GST Compliance"
    ]
  },
  {
    id: 12,
    slug: "tally-prime",
    title: "Tally Prime + GST",
    description: "Comprehensive training in Tally Prime with GST features.",
    duration: "3 Months",
    level: "Intermediate",
    icon: "FaClipboardList",
    category: "Accounting",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
    content: `Course covers:
• Company Creation
• Vouchers & Ledgers
• Multi-currency
• Stock Journal
• Payroll
• GST Registration
• E-way Bill
• E-Invoice
• Income Tax`,
    syllabus: [
      "Tally Basics",
      "Accounting Entries",
      "Inventory",
      "Payroll",
      "GST Features",
      "Taxation"
    ]
  },
  {
    id: 13,
    slug: "ccc",
    title: "Course on Computer Concept (CCC)",
    description: "Fundamental computer concepts and operations.",
    duration: "4 Months",
    level: "Beginner",
    icon: "FaNetworkWired",
    category: "General",
    image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg",
    content: `Course includes:
• Operating Systems
• Word Processing
• Spreadsheets
• Presentations
• Internet Basics
• Networking Concepts
• IP Addressing
• Networking Devices
• Firewalls`,
    syllabus: [
      "Computer Fundamentals",
      "Office Applications",
      "Internet Basics",
      "Networking Concepts"
    ]
  }
];

// Smooth Scroll Helper Function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const CourseDetails = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);

  // Consistent color scheme - Royal Blue & Navy theme
  const primaryColor = "from-blue-700 to-indigo-800";
  const accentColor = "bg-blue-50";
  const iconBgColor = "bg-blue-100";
  const textGradient = "from-blue-700 to-indigo-700";

  useEffect(() => {
    scrollToTop();
    
    const timer = setTimeout(() => {
      const found = mockCourses.find(c => c.slug === slug);
      setCourse(found);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [slug]);

  // Get icon URL for course
  const getIconUrl = (iconName) => {
    return iconImages[iconName] || iconImages.FaLaptopCode;
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="mb-4"
          >
            <img 
              src={iconImages.FaGraduationCap} 
              alt="Loading" 
              className="w-16 h-16 mx-auto"
            />
          </motion.div>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-600 mt-4"
          >
            Loading course...
          </motion.p>
        </div>
      </div>
    );
  }

  // Not Found State
  if (!course) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="min-h-screen flex items-center justify-center bg-gray-50 px-4"
      >
        <div className="text-center py-20 max-w-md mx-auto">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-6"
          >
            <img 
              src={iconImages.FaBookOpen} 
              alt="Course Not Found" 
              className="w-24 h-24 mx-auto opacity-50"
            />
          </motion.div>
          <motion.h1 
            initial={{ y: -20 }} 
            animate={{ y: 0 }}
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
          >
            Course Not Found
          </motion.h1>
          <motion.p className="text-gray-600 mb-8">
            The course you're looking for doesn't exist or may have been removed.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/courses" 
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg shadow-md hover:bg-blue-800 transition-all"
            >
              <img src={iconImages.FaArrowLeft} alt="Back" className="w-4 h-4 mr-2" />
              Browse All Courses
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  const courseIconUrl = getIconUrl(course.icon);

  return (
    <>
      <Helmet>
        <title>{course.title} | ARC Institute Delhi - Best Computer Course Training</title>
        <meta name="description" content={`Join ${course.title} at ARC Institute Delhi. ${course.description} Duration: ${course.duration}, Level: ${course.level}. 95% placement support.`} />
        <meta name="keywords" content={`${course.title}, ${course.category} course, computer course Delhi, ARC Institute, ${course.level} level training`} />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }} 
        className="bg-gray-50 min-h-screen"
      >
        {/* Hero Section with Consistent Blue Gradient */}
        <div className={`bg-gradient-to-r ${primaryColor} py-12 md:py-20 px-4 relative overflow-hidden`}>
          {/* Floating Decorations */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 text-6xl animate-bounce">
              <img src={iconImages.FaStar} alt="Star" className="w-12 h-12 text-white" />
            </div>
            <div className="absolute bottom-10 right-10 text-6xl animate-pulse">
              <img src={iconImages.FaHeart} alt="Heart" className="w-12 h-12 text-white" />
            </div>
            <div className="absolute top-1/2 left-1/4 text-5xl animate-spin">
              <img src={iconImages.FaShieldAlt} alt="Shield" className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <Link 
              to="/courses" 
              className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium mb-6 transition-all hover:translate-x-[-5px]"
            >
              <img src={iconImages.FaArrowLeft} alt="Back" className="w-4 h-4 mr-2" />
              All Courses
            </Link>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-5xl md:text-6xl bg-white/20 p-4 rounded-full">
                    <img src={courseIconUrl} alt={course.title} className="w-12 h-12 md:w-14 md:h-14" />
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-white">{course.title}</h1>
                </div>
                <p className="text-white/90 text-lg max-w-2xl">{course.description}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-5">
                <img src={courseIconUrl} alt={course.title} className="w-16 h-16" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Course Image */}
            <div className="relative h-56 md:h-80 w-full overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-blue-700/90 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium flex items-center gap-2">
                <img src={courseIconUrl} alt={course.category} className="w-4 h-4" />
                {course.category}
              </div>
            </div>

            {/* Course Info Badges - Consistent Blue Theme */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 flex items-center gap-2">
                  <img src={iconImages.FaClock} alt="Duration" className="w-4 h-4" /> Duration: {course.duration}
                </span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 flex items-center gap-2">
                  <img src={iconImages.FaLayerGroup} alt="Level" className="w-4 h-4" /> Level: {course.level}
                </span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 flex items-center gap-2">
                  <img src={iconImages.FaTag} alt="Category" className="w-4 h-4" /> Category: {course.category}
                </span>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 mb-6">
                <button 
                  onClick={() => setActiveTab("overview")} 
                  className={`px-4 py-2 font-semibold text-base transition-all relative flex items-center gap-2 ${
                    activeTab === "overview" 
                      ? "text-blue-700" 
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <img src={iconImages.FaBookOpen} alt="Overview" className="w-4 h-4" /> Course Overview
                  {activeTab === "overview" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-t-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
                <button 
                  onClick={() => setActiveTab("syllabus")} 
                  className={`px-4 py-2 font-semibold text-base transition-all relative flex items-center gap-2 ${
                    activeTab === "syllabus" 
                      ? "text-blue-700" 
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <img src={iconImages.FaClipboardList2} alt="Syllabus" className="w-4 h-4" /> Syllabus
                  {activeTab === "syllabus" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-t-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              </div>

              {/* Tab Content */}
              <div className="min-h-[300px]">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-blue-50 rounded-xl p-6 mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <img src={iconImages.FaRocket} alt="What You'll Learn" className="w-6 h-6" />
                        What You'll Learn
                      </h3>
                      <div className="text-gray-700 whitespace-pre-line space-y-2">
                        {course.content.split('\n').map((line, idx) => (
                          line.trim() && (
                            <p key={idx} className="flex items-start gap-2">
                              <img src={iconImages.FaCheckCircle} alt="Check" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                              <span>{line}</span>
                            </p>
                          )
                        ))}
                      </div>
                    </div>
                    
                    {/* Additional Info Box */}
                    <div className="bg-white border border-blue-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <img src={iconImages.FaUsers} alt="Why Choose" className="w-5 h-5" />
                        Why Choose This Course?
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 text-gray-600">
                          <img src={iconImages.FaCheckCircle} alt="Check" className="w-4 h-4" />
                          <span>Industry-recognized certification</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <img src={iconImages.FaCheckCircle} alt="Check" className="w-4 h-4" />
                          <span>Practical hands-on training</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <img src={iconImages.FaCheckCircle} alt="Check" className="w-4 h-4" />
                          <span>Expert faculty with real-world experience</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <img src={iconImages.FaCheckCircle} alt="Check" className="w-4 h-4" />
                          <span>95% placement assistance</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "syllabus" && (
                  <motion.div
                    key="syllabus"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <img src={iconImages.FaGraduationCap2} alt="Course Modules" className="w-6 h-6" />
                        Course Modules
                      </h3>
                      <div className="space-y-3">
                        {course.syllabus.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                          >
                            <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-sm">
                              {index + 1}
                            </div>
                            <span className="text-gray-700 font-medium flex-1">{item}</span>
                            {index < 2 && <img src={iconImages.FaAward} alt="Certificate" className="w-5 h-5 text-yellow-500" />}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Call to Action */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200"
              >
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-center sm:text-left">
                    <h4 className="text-xl font-bold text-gray-800 mb-1 flex items-center gap-2">
                      <img src={iconImages.FaRocket} alt="Ready" className="w-6 h-6" />
                      Ready to Start Your Journey?
                    </h4>
                    <p className="text-gray-600">
                      Join <span className="font-bold text-blue-700">{course.title}</span> and boost your career!
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="https://wa.me/918860448368"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition-all flex items-center gap-2"
                    >
                      <img src={iconImages.FaWhatsapp} alt="WhatsApp" className="w-5 h-5" /> WhatsApp
                    </a>
                    <Link to="/contactSection" onClick={scrollToTop}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-blue-700 text-white font-bold rounded-lg shadow-md hover:bg-blue-800 transition-all flex items-center gap-2"
                      >
                        <img src={iconImages.FaUserGraduate} alt="Enroll" className="w-5 h-5" />
                        Enroll Now
                        <img src={iconImages.FaGraduationCap} alt="Graduation" className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default CourseDetails;