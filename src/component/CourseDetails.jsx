 import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const mockCourses = [
  {
    id: 1,
    slug: "basic-computer",
    title: "Basic Computer Course",
    description: "Fundamentals of computer operations and software tools.",
    duration: "3 Months",
    level: "Beginner",
    icon: "🖥️",
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
    icon: "🎨",
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
    icon: "🌐",
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
    icon: "📊",
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
    icon: "🧾",
    category: "Accounting",
    // image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1350&q=80",
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
    icon: "📈",
    category: "Accounting",
    // image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1350&q=80",
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
    icon: "📘",
    category: "Diploma",
    // image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1350&q=80",
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
    icon: "📢",
    category: "Marketing",
    // image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1350&q=80",
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
    icon: "🐍",
    category: "Programming",
    // image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1350&q=80",
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
    icon: "📊",
    category: "Tools",
    // image: "https://images.unsplash.com/photo-1614436163996-25cee5f54290?auto=format&fit=crop&w=1350&q=80",
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
    icon: "🧮",
    category: "Tools",
    // image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1350&q=80",
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
    icon: "📒",
    category: "Accounting",
    // image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1350&q=80",
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
    icon: "💡",
    category: "General",
    // image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1350&q=80",
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

const CourseDetails = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const timer = setTimeout(() => {
      const found = mockCourses.find(c => c.slug === slug);
      setCourse(found);
    }, 300);

    return () => clearTimeout(timer);
  }, [slug]);

  if (!course) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center py-20 max-w-md mx-auto">
          <motion.h1 className="text-3xl font-bold text-gray-800 mb-4" initial={{ y: -20 }} animate={{ y: 0 }}>
            Course Not Found
          </motion.h1>
          <motion.p className="text-gray-600 mb-6">
            The course you're looking for doesn't exist or may have been removed.
          </motion.p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link to="/courses" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all">
              ← Back to Courses
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-[#0C0950] to-[#3A36DB] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/courses" className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium mb-6 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            All Courses
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{course.title}</h1>
              <p className="text-white/90 max-w-2xl">{course.description}</p>
            </div>
            <div className="text-5xl mt-4 md:mt-0">{course.icon}</div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-64 w-full overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0950]/70 to-transparent" />
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">Duration: {course.duration}</span>
              <span className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">Level: {course.level}</span>
              <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">Category: {course.category}</span>
            </div>

            <div className="flex border-b border-gray-200 mb-8">
              <button 
                onClick={() => setActiveTab("overview")} 
                className={`px-4 py-2 font-medium text-sm ${activeTab === "overview" ? "text-[#0C0950] border-b-2 border-[#0C0950]" : "text-gray-500 hover:text-gray-700"}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab("syllabus")} 
                className={`px-4 py-2 font-medium text-sm ${activeTab === "syllabus" ? "text-[#0C0950] border-b-2 border-[#0C0950]" : "text-gray-500 hover:text-gray-700"}`}
              >
                Syllabus
              </button>
            </div>

            {activeTab === "overview" && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Course Overview</h3>
                <p className="text-gray-700 whitespace-pre-line">{course.content}</p>
              </div>
            )}

            {activeTab === "syllabus" && (
              <ul className="space-y-3">
                {course.syllabus.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-[#3A36DB] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-12 bg-gray-50 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <h4 className="font-bold text-gray-800 mb-1">Ready to start learning?</h4>
                <p className="text-gray-600 text-sm">Join {course.title} today and boost your career</p>
              </div>
              <Link to="/contactSection">
              <button className="px-8 py-3 bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all">
                Enroll Now
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseDetails;