import { motion, useMotionValue, useTransform, useSpring, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useRef, useState, useEffect } from "react";

const WhyChooseUs = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "ARC Institute",
    "url": "https://www.arcinstitute.in",
    "logo": "https://www.arcinstitute.in/logo.jpg",
    "sameAs": [
      "https://www.facebook.com/arcinstitutedelhi",
      "https://www.instagram.com/arcinstitute.delhi",
      "https://www.youtube.com/@arcinstitutedelhi",
      "https://www.linkedin.com/company/arc-institute-delhi"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Delhi",
      "postalCode": "Your PIN",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "Your Phone",
      "contactType": "admissions"
    }
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.1, triggerOnce: false });
  const [counts, setCounts] = useState({ students: 0, placement: 0, partners: 0, rating: 0 });

  // Animated counters
  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const step = 20;
      const targets = { students: 9000, placement: 95, partners: 10, rating: 4.8 };
      const startTime = performance.now();
      
      const animate = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        setCounts({
          students: Math.floor(targets.students * progress),
          placement: Math.floor(targets.placement * progress),
          partners: Math.floor(targets.partners * progress),
          rating: (targets.rating * progress).toFixed(1)
        });
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView]);

  // 3D Tilt hook for cards
  const useTilt = (ref) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [6, -6]);
    const rotateY = useTransform(x, [-100, 100], [-6, 6]);
    const springRotateX = useSpring(rotateX, { damping: 20, stiffness: 300 });
    const springRotateY = useSpring(rotateY, { damping: 20, stiffness: 300 });

    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
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

    return { rotateX: springRotateX, rotateY: springRotateY, handleMouseMove, handleMouseLeave };
  };

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Industry-Recognized Certification",
      description: "Our courses come with certifications recognized by top tech companies in Delhi and nationwide.",
      gradient: "from-indigo-50 to-white"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Expert Instructors",
      description: "Learn from Delhi's top industry professionals with 8+ years of real-world experience.",
      gradient: "from-blue-50 to-white"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Project-Based Learning",
      description: "Build real projects that you can showcase in your portfolio to Delhi employers.",
      gradient: "from-purple-50 to-white"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Job Placement Support",
      description: "95% of our graduates land tech jobs in Delhi within 3 months of completion.",
      gradient: "from-amber-50 to-white"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Flexible Learning Options",
      description: "Choose between online, hybrid, or in-person learning at our Delhi centers.",
      gradient: "from-green-50 to-white"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Cutting-Edge Curriculum",
      description: "Our Delhi-focused courses are updated quarterly to reflect industry trends.",
      gradient: "from-rose-50 to-white"
    }
  ];

  // Container variants for stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <>
      <Helmet>
        <title>Why Choose ARC Institute? | Best IT Training & Certification in Delhi</title>
        <meta name="description" content="ARC Institute is Delhi's premier IT training center offering industry-aligned courses, expert trainers, 95% placement record, and government-recognized certifications." />
        <meta name="keywords" content="best computer institute Delhi, IT training Delhi, certified computer courses, job placement support Delhi, IT certification courses" />
        <meta property="og:title" content="Why ARC Institute is Delhi's #1 Choice for IT Training & Certification" />
        <meta property="og:description" content="Get job-ready IT skills with Delhi's most trusted computer institute. 95% placement rate, industry-expert trainers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arcinstitute.in/why-choose-us" />
        <meta property="og:image" content="https://www.arcinstitute.in/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.arcinstitute.in/why-choose-us" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <section
        ref={sectionRef}
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white via-indigo-50/30 to-white"
      >
        {/* Animated floating shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute top-1/3 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              Why Choose{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0C0950] to-[#3A36DB]">
                ARC Institute Delhi?
              </span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Delhi's premier IT training institute with proven results that transform careers since 2010
            </motion.p>
          </motion.div>

          {/* Features Grid with 3D Tilt */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {features.map((feature, idx) => {
              const cardRef = useRef(null);
              const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt(cardRef);
              return (
                <motion.div
                  key={idx}
                  ref={cardRef}
                  variants={itemVariants}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                >
                  <div className={`p-6 bg-gradient-to-br ${feature.gradient}`}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 text-[#3A36DB] group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#0C0950] to-[#3A36DB] transition-all duration-500"></div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats Section with Animated Counters */}
          <motion.div
            className="mt-20 bg-gradient-to-r from-[#0C0950] to-[#3A36DB] rounded-2xl p-8 md:p-12 text-white shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
                <div className="text-4xl font-bold mb-2">{counts.students.toLocaleString()}+</div>
                <div className="text-sm opacity-80">Students Trained</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
                <div className="text-4xl font-bold mb-2">{counts.placement}%</div>
                <div className="text-sm opacity-80">Placement Rate</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
                <div className="text-4xl font-bold mb-2">{counts.partners}+</div>
                <div className="text-sm opacity-80">Hiring Partners</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
                <div className="text-4xl font-bold mb-2">{counts.rating}/5</div>
                <div className="text-sm opacity-80">Student Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Button with Glow Effect */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          >
            <Link to="/contactSection">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="relative px-10 py-4 bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Tech Journey Today 🚀
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;