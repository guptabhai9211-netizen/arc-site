import { motion, useMotionValue, useTransform, useSpring, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useMemo, useState, useEffect, useRef } from "react";
import { FaCode, FaTerminal, FaBrain, FaMicrochip, FaRocket, FaDatabase, FaGlobe } from "react-icons/fa";

// Components
import ChatBot from "../../utlis/Bot.jsx";
import ParticleComponent from "../ParticleComponent.jsx";

// Variants defined locally to ensure reliability
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};


const MotionLink = motion.create(Link);

const FaStar = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const HeroSection = () => {
  // ---------- ROBOT STATE ----------
  const [robotSide, setRobotSide] = useState("left");
  const [notification, setNotification] = useState({ show: false, message: "" });
  const robotIntervalRef = useRef(null);
  const notifTimeoutRef = useRef(null);
  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 });

  const notifMessages = [
    "💬 General Inquiries: 8860448368 / 8860448399",
    "📧 Email: sefdel333@gmail.com",
    "🎓 Free Demo Available! Click Here",
    "🔥 Summer Batch 2025 - Limited Seats!",
    "🏆 98% Placement Record",
    "📍 Distance to campus shown on maps!",
    "🚀 Enroll now & get 20% off!",
  ];

  const showNotification = (msg) => {
    if (notifTimeoutRef.current) clearTimeout(notifTimeoutRef.current);
    setNotification({ show: true, message: msg });
    notifTimeoutRef.current = setTimeout(() => {
      setNotification({ show: false, message: "" });
    }, 8000);
  };

  const moveRobotNow = () => {
    setRobotSide((prev) => (prev === "left" ? "right" : "left"));
    const randomMsg = notifMessages[Math.floor(Math.random() * notifMessages.length)];
    showNotification(randomMsg);
  };

  useEffect(() => {
    robotIntervalRef.current = setInterval(moveRobotNow, 10000);
    const welcomeTimeout = setTimeout(() => {
      showNotification("🤖 Welcome to ARC Institute! Need help? Contact 8860448368");
    }, 2000);
    return () => {
      if (robotIntervalRef.current) clearInterval(robotIntervalRef.current);
      if (notifTimeoutRef.current) clearTimeout(notifTimeoutRef.current);
      clearTimeout(welcomeTimeout);
    };
  }, []);

  // ---------- 3D TILT ----------
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const studentImages = useMemo(() => ["/test3.jpg", "/test1.jpg", "/test2.jpg"], []);
  
  const features = [
    { icon: "🏆", title: "98% Placements", desc: "Highest record in Delhi" },
    { icon: "👨‍🏫", title: "Expert Faculty", desc: "Industry mentors" },
    { icon: "💻", title: "Live Projects", desc: "Real-world apps" },
    { icon: "🎓", title: "Certification", desc: "Govt. recognized" },
  ];

  const floatingIcons = [
    { Icon: FaCode, color: "text-indigo-500", top: "5%", left: "10%", delay: 0 },
    { Icon: FaTerminal, color: "text-sky-500", top: "15%", right: "12%", delay: 1 },
    { Icon: FaBrain, color: "text-purple-500", bottom: "10%", left: "15%", delay: 2 },
    // { Icon: FaDatabase, color: "text-blue-500", bottom: "15%", right: "8%", delay: 3 },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "ARC Institute",
    "url": "https://www.arcinstitute.in",
    "logo": "https://www.arcinstitute.in/logo.jpg",
    "description": "Premier IT training institute in Delhi offering industry-relevant courses with placement support.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110042",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    }
  };

  return (
    <>
      <Helmet>
        <title>Best IT Training Institute in Delhi | ARC Institute</title>
        <meta name="description" content="Join Delhi's premier IT training institute with 95% placement record. Learn from industry experts with hands-on training in programming, design, and digital marketing." />
        <link rel="canonical" href="https://www.arcinstitute.in/" />
        <meta property="og:title" content="Best IT Training Institute in Delhi | ARC Institute" />
        <meta property="og:description" content="Get job-ready with Delhi's top-rated IT training programs." />
        <meta property="og:url" content="https://www.arcinstitute.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.arcinstitute.in/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best IT Training Institute in Delhi | ARC Institute" />
        <meta name="twitter:description" content="Get job-ready with Delhi's top-rated IT training programs." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <section
        id="home"
        className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-slate-950 font-inter"
      >
        <ChatBot />

        {/* Global Particles */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <ParticleComponent particleCount={30} />
        </div>

        {/* Premium Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
          
          {/* Animated Glows */}
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/10 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 right-10 w-[500px] h-[500px] bg-sky-200/30 dark:bg-sky-900/10 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ y: [0, -50, 0], x: [0, -40, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 20, ease: "easeInOut", delay: 2 }}
          />
          
          {/* Subtle Tech Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
        </div>

        {/* Floating Tech Ornaments */}
        {floatingIcons.map((item, idx) => (
          <motion.div
            key={idx}
            className={`absolute hidden lg:flex items-center justify-center w-12 h-12 rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-lg z-0 ${item.color}`}
            style={{ top: item.top, bottom: item.bottom, left: item.left, right: item.right }}
            animate={{ 
              y: [0, -15, 0], 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 1] 
            }}
            transition={{ repeat: Infinity, duration: 6 + idx, delay: item.delay, ease: "easeInOut" }}
          >
            <item.Icon className="text-xl" />
          </motion.div>
        ))}

        {/* Robot Helper */}
        <motion.div
          className="fixed bottom-[100px] z-[1000] cursor-pointer"
          style={{
            left: robotSide === "left" ? "20px" : "auto",
            right: robotSide === "right" ? "20px" : "auto",
          }}
          onClick={moveRobotNow}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-[84px] h-[84px] group">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-[2px] h-3 bg-gray-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></div>
            </div>
            <div className="absolute top-3 left-1/2 -translate-x-1/2">
              <div className="w-11 h-9 bg-slate-800 rounded-lg border border-slate-700 relative">
                <div className="absolute top-2 left-2 flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]"></div>
                </div>
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-slate-600 rounded-full"></div>
              </div>
            </div>
            <div className="absolute top-[46px] left-1/2 -translate-x-1/2 w-2.5 h-1 bg-slate-700 rounded-sm"></div>
            <div className="absolute top-[52px] left-1/2 -translate-x-1/2">
              <div className="w-9 h-7 bg-slate-800 rounded-md border border-slate-700 relative">
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {notification.show && (
          <motion.div
            className="fixed bottom-[195px] z-[1001] bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100 rounded-2xl py-3 px-5 max-w-[300px] shadow-2xl border-l-4 border-indigo-500 text-sm font-medium"
            style={{
              left: robotSide === "left" ? "110px" : "auto",
              right: robotSide === "right" ? "110px" : "auto",
            }}
            initial={{ opacity: 0, scale: 0.7, x: robotSide === "left" ? -20 : 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.7 }}
          >
            {notification.message}
          </motion.div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto py-4 sm:py-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col gap-6"
            >
              <motion.div
                variants={fadeInVariants}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase border border-indigo-100 dark:border-indigo-800 self-start"
              >
                <FaRocket className="animate-bounce" /> Skill up for the future
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-slate-900 dark:text-white font-outfit tracking-tight">
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Build Your Future
                </motion.span>
                <motion.span
                  className="block mt-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  With Cutting-Edge <span className="relative">
                    Tech Skills
                    <motion.span 
                      className="absolute bottom-2 left-0 w-full h-2 bg-sky-400/20 -z-10"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                  </span>
                </motion.span>
              </h1>

              <motion.p
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl font-inter leading-relaxed"
                variants={itemVariants}
              >
                Join our industry-leading programs and gain hands-on experience with the latest technologies taught by expert instructors.
              </motion.p>

              <motion.div className="flex flex-wrap gap-4 pt-2" variants={staggerContainer}>
                <MotionLink
                  to="/contactSection"
                  className="relative px-8 py-4 bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 text-white font-bold rounded-2xl shadow-xl shadow-indigo-500/20 overflow-hidden group font-outfit"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Apply Now 🎓
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-sky-500 via-violet-600 to-indigo-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </MotionLink>

                <MotionLink
                  to="/courses"
                  className="px-8 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold rounded-2xl hover:border-indigo-500 transition-all duration-300 hover:shadow-lg font-outfit flex items-center gap-2 group"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Courses 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </MotionLink>
              </motion.div>

              {/* Trust Badges */}
              <motion.div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4" variants={itemVariants}>
                <div className="flex -space-x-4">
                  {studentImages.map((imgSrc, index) => (
                    <motion.div
                      key={index}
                      className="relative w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 shadow-xl overflow-hidden"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * (index + 1) + 1 }}
                    >
                      <img src={imgSrc} alt="Student" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 bg-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-xl z-20">
                    +5k
                  </div>
                </div>
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Trusted by <span className="text-indigo-600 font-bold">5000+ students</span> globally
                  </p>
                </div>
              </motion.div>

              {/* Feature Highlights */}
              <motion.div
                ref={featuresRef}
                className="grid grid-cols-2 gap-4 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              >
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-3 items-center p-3 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
                    <span className="text-2xl group-hover:scale-125 transition-transform">{feature.icon}</span>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">{feature.title}</h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual Column */}
            <div className="relative flex items-center justify-center lg:justify-end">
              
              {/* Rotating Tech Ring */}
              <motion.div 
                className="absolute w-[110%] h-[110%] rounded-full border-2 border-dashed border-indigo-200 dark:border-indigo-900/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute w-[120%] h-[120%] rounded-full border border-sky-100 dark:border-sky-900/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              />

              {/* Main Circular Image Section */}
              <motion.div
                className="relative w-full max-w-md aspect-square rounded-full overflow-hidden shadow-[0_32px_64px_-16px_rgba(79,70,229,0.3)] ring-8 ring-white/50 dark:ring-slate-900/50 border-8 border-transparent bg-gradient-to-br from-indigo-500 to-sky-500 p-1 group"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <div className="absolute inset-0 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src="/Anil_sir.jpeg"
                    alt="ARC Institute instructor"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    width="600"
                    height="600"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Pulsing Aura */}
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  animate={{ boxShadow: ["0 0 0px rgba(99,102,241,0)", "0 0 40px rgba(99,102,241,0.4)", "0 0 0px rgba(99,102,241,0)"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Floating Status Badges */}
              <motion.div
                className="absolute -right-4 top-1/4 bg-white dark:bg-slate-900 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 z-20 flex flex-col items-center gap-1"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                  <FaGlobe className="text-xl animate-pulse" />
                </div>
                <span className="text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-tighter">Global Mentor</span>
              </motion.div>

              <motion.div
                className="absolute -left-6 bottom-1/4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-white dark:border-slate-800 z-20 pointer-events-auto"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-600/20">
                    <FaBrain className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 dark:text-white text-sm">Expert Council</h3>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">Industry Pro</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative shapes */}
              <div className="absolute -z-10 top-0 right-0 w-32 h-32 bg-sky-200/50 dark:bg-sky-500/20 rounded-full blur-2xl" />
              <div className="absolute -z-10 bottom-0 left-0 w-48 h-48 bg-indigo-200/50 dark:bg-indigo-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .font-outfit { font-family: 'Outfit', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>
    </>
  );
};

export default HeroSection;