import { motion, useMotionValue, useTransform, useSpring, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useMemo, useState, useEffect, useRef } from "react";

// Components
import ChatBot from "../../utlis/Bot.jsx";
import ParticleComponent from "../ParticleComponent.jsx";

// Variants
import {
  containerVariants,
  itemVariants,
  fadeInVariants,
  staggerContainer,
  staggerItem,
} from "../../utlis/variants.js";

const MotionLink = motion.create(Link);

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
    { icon: "🏆", title: "98% Placements", desc: "Highest placement record in Delhi" },
    { icon: "👨‍🏫", title: "Expert Faculty", desc: "Industry professionals as mentors" },
    { icon: "💻", title: "Live Projects", desc: "Work on real-world applications" },
    { icon: "🎓", title: "Certification", desc: "ISO & Govt. recognized" },
  ];

  const headingWords = ["Build", "Your", "Future", "With", "Cutting-Edge", "Tech", "Skills"];

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

      {/* REDUCED GAP: Changed pt-14 to pt-8 and pb-16 to pb-8 */}
      <section
        id="home"
        className="relative pt-8 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      >
        <ChatBot />

        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <ParticleComponent particleCount={40} />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
            animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 15, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          />
        </div>

        {/* Robot */}
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
            
            {/* Antenna with signal */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-[2px] h-3 bg-[#475569]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]"></div>
            </div>
            
            {/* Head section */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2">
              <div className="w-11 h-9 bg-[#334155] rounded-lg border border-[#475569] relative">
                {/* Eyes */}
                <div className="absolute top-2 left-2 flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_6px_#38bdf8]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_6px_#38bdf8]"></div>
                </div>
                {/* Mouth */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-[#475569] rounded-full"></div>
              </div>
            </div>
            
            {/* Neck connector */}
            <div className="absolute top-[46px] left-1/2 -translate-x-1/2 w-2.5 h-1 bg-[#475569] rounded-sm"></div>
            
            {/* Body section */}
            <div className="absolute top-[52px] left-1/2 -translate-x-1/2">
              <div className="w-9 h-7 bg-[#334155] rounded-md border border-[#475569] relative">
                {/* Chest indicator */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] animate-pulse"></div>
                {/* Body detail line */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-[1px] bg-[#475569]"></div>
              </div>
            </div>
            
            {/* Legs */}
            <div className="absolute bottom-2 left-[26px] w-2 h-2.5 bg-[#334155] rounded-b-sm border-x border-b border-[#475569]"></div>
            <div className="absolute bottom-2 right-[26px] w-2 h-2.5 bg-[#334155] rounded-b-sm border-x border-b border-[#475569]"></div>
            
            {/* Hover effect - subtle glow */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#38bdf8]/20 to-[#8b5cf6]/20 blur-md"></div>
            </div>
          </div>
        </motion.div>

        {notification.show && (
          <motion.div
            className="fixed bottom-[195px] z-[1001] bg-white text-gray-800 rounded-3xl py-3 px-5 max-w-[300px] shadow-2xl border-l-4 border-indigo-500 text-sm font-medium"
            style={{
              left: robotSide === "left" ? "110px" : "auto",
              right: robotSide === "right" ? "110px" : "auto",
            }}
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {notification.message}
          </motion.div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* LEFT COLUMN – reduced vertical spacing */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-4"
            >
              <motion.div
                variants={fadeInVariants}
                className="inline-block px-3 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide"
              >
                🚀 Transforming Tech Education
              </motion.div>

              {/* Heading with Montagu Slab font */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-800" style={{ fontFamily: "'Montagu Slab', serif" }}>
                {headingWords.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5, type: "spring", stiffness: 100 }}
                  >
                    {i === 4 ? (
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                className="text-md text-gray-600 max-w-lg"
                variants={itemVariants}
                transition={{ delay: 0.6 }}
              >
                Join our industry-leading programs and gain hands-on experience with the latest technologies taught by expert instructors.
              </motion.p>

              {/* Buttons – reduced gap */}
              <motion.div className="flex flex-wrap gap-3" variants={staggerContainer}>
                <MotionLink
                  to="/contactSection"
                  className="relative px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-md overflow-hidden group text-sm"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Apply Now 🎓</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </MotionLink>

                <MotionLink
                  to="/courses"
                  className="px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-105 text-sm"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Courses →
                </MotionLink>
              </motion.div>

              {/* Student ratings */}
              <motion.div className="flex items-center gap-4" variants={itemVariants}>
                <div className="flex -space-x-2">
                  {studentImages.map((imgSrc, index) => (
                    <motion.img
                      key={index}
                      src={imgSrc}
                      alt="Student"
                      className="w-10 h-10 rounded-full border-2 border-white"
                      width="40"
                      height="40"
                      loading="lazy"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * (index + 1) + 0.8 }}
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.05 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5">500+ students • 4.8★ on Google</p>
                </div>
              </motion.div>

              {/* Feature grid – reduced top padding */}
              <motion.div
                ref={featuresRef}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-1"
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/60 backdrop-blur-sm rounded-lg p-2 text-center shadow-sm border border-indigo-100 hover:shadow-md transition-all"
                    whileHover={{ scale: 1.03, backgroundColor: "white" }}
                  >
                    <div className="text-2xl mb-0.5">{feature.icon}</div>
                    <h3 className="font-semibold text-gray-800 text-xs">{feature.title}</h3>
                    <p className="text-[11px] text-gray-500 mt-0.5">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN */}
            <div className="relative flex flex-col items-center justify-center">
              <motion.div
                className="relative w-full max-w-md aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-indigo-200 cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <img
                  src="/Anil_sir.jpeg"
                  alt="ARC Institute instructor"
                  className="absolute inset-0 w-full h-full object-cover"
                  width="600"
                  height="600"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent rounded-full" />
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  animate={{ boxShadow: ["0 0 0px rgba(99,102,241,0)", "0 0 30px rgba(99,102,241,0.5)", "0 0 0px rgba(99,102,241,0)"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />
              </motion.div>

              <motion.div
                className="mt-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-xl border border-indigo-200 pointer-events-auto"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="font-bold text-gray-900 flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                  </svg>
                  Industry Certified
                </h3>
                <p className="text-xs text-gray-600">Recognized by leading tech companies worldwide.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        /* Montagu Slab Font Import */
        @import url('https://fonts.googleapis.com/css2?family=Montagu+Slab:opsz,wght@16..48,100..700&display=swap');
        
        /* Apply Montagu Slab to heading */
        .montagu-heading {
          font-family: 'Montagu Slab', serif;
        }
      `}</style>
    </>
  );
};

export default HeroSection;