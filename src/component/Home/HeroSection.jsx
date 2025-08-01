 
 import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useMemo } from "react";

// Components
import ChatBot from "../../utlis/Bot.jsx";
import WhatsAppButton from "../../utlis/WhatsAppButton.jsx";
import ParticleComponent from "../ParticleComponent.jsx";

// Variants
import {
  containerVariants,
  itemVariants,
  fadeInVariants,
  staggerContainer,
  staggerItem,
} from "../../utlis/variants.js";
import AnnouncementBanner from "../../new/AnnouncementBanner.jsx";

const MotionLink = motion(Link);

const HeroSection = () => {
  // Memoize static data to prevent recreation on re-renders
  const studentImages = useMemo(() => ["/test3.jpg", "/test1.jpg", "/test2.jpg"], []);
  
  const technologies = useMemo(() => [
    { name: "Basic Computer", logo: "💻" },
    { name: "Graphic Design", logo: "🎨" },
    { name: "Web Design", logo: "🌐" }, 
    { name: "Accounting", logo: "📊" },
    { name: "Tally Prime", logo: "🧮" },
    { name: "Busy", logo: "📈" },
    { name: "Advanced Excel", logo: "📉" },
    { name: "Digital Marketing", logo: "📱" },
    { name: "Python", logo: "🐍" },
    { name: "CAAD", logo: "🖥️" },
    { name: "CCA", logo: "🎓" },
    { name: "ACA", logo: "🏅" },
    { name: "ADCA", logo: "💾" },
    { name: "CCC", logo: "🖱️" },
  ], []);

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
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Training Programs",
      "itemListElement": technologies.map(tech => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": tech.name
        }
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>Best IT Training Institute in Delhi | ARC Institute</title>
        <meta name="description" content="Join Delhi's premier IT training institute with 95% placement record. Learn from industry experts with hands-on training in programming, design, and digital marketing." />
        <link rel="canonical" href="https://www.arcinstitute.in/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Best IT Training Institute in Delhi | ARC Institute" />
        <meta property="og:description" content="Get job-ready with Delhi's top-rated IT training programs. Industry-aligned curriculum with placement support." />
        <meta property="og:url" content="https://www.arcinstitute.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.arcinstitute.in/logo.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best IT Training Institute in Delhi | ARC Institute" />
        <meta name="twitter:description" content="Get job-ready with Delhi's top-rated IT training programs. Industry-aligned curriculum with placement support." />
        <meta name="twitter:image" content="https://www.arcinstitute.in/logo.jpg" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
<div className="">

      <section 
        id="home" 
        className="relative pt-5 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden  "
        itemScope
        itemType="https://schema.org/EducationalOrganization"
        >
        {/* <AnnouncementBanner/> */}
        {/* Chat components */}
        <ChatBot />
        <WhatsAppButton />

        {/* Optimized Particle Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <ParticleComponent particleCount={30} /> {/* Reduced particle count */}
        </div>
<div className="">

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Left Content - Optimized with less DOM depth */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div variants={fadeInVariants} className="text-sm font-semibold tracking-wide uppercase text-[#0C0950]">
                Transforming Tech Education
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <motion.span className="block" variants={staggerItem}>Build Your Future</motion.span>
                <motion.span 
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-[#0C0950] to-[#3A36DB]" 
                  variants={staggerItem}
                >
                  With Cutting-Edge
                </motion.span>
                <motion.span variants={staggerItem}>Tech Skills</motion.span>
              </h1>

              <motion.p className="text-lg text-gray-600 max-w-lg" variants={itemVariants}>
                Join our industry-leading programs and gain hands-on experience with the latest technologies taught by expert instructors.
              </motion.p>

              <motion.div className="flex flex-wrap gap-4" variants={staggerContainer}>
                <MotionLink
                  to="/contactSection"
                  className="px-8 py-3 bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Apply Now"
                >
                  Apply Now
                </MotionLink>

                <MotionLink
                  to="/courses"
                  className="px-8 py-3 border-2 border-[#0C0950] text-[#0C0950] font-medium rounded-lg hover:bg-[#0C0950] hover:text-white transition-all duration-300"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Explore Courses"
                >
                  Explore Courses
                </MotionLink>
              </motion.div>

              <motion.div className="flex items-center gap-6" variants={itemVariants}>
                <div className="flex -space-x-2">
                  {studentImages.map((imgSrc, index) => (
                    <motion.img
                      key={index}
                      src={imgSrc}
                      alt=""
                      className="w-12 h-12 rounded-full border-2 border-white"
                      width="48"
                      height="48"
                      loading="lazy"
                      initial={{ x: -20 * (index + 1), opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * (index + 1) }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex" aria-label="Rated 4.8 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                      key={i} 
                      className="w-5 h-5 text-yellow-400" 
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">500+ students • 4.8★ on Google</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image - Optimized with priority loading */}
            <motion.div
              className="relative"
              variants={itemVariants}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/Anil_sir.jpeg"
                  alt="ARC Institute instructor teaching students"
                  className="absolute inset-0 w-full h-full object-cover"
                  width="800"
                  height="600"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0950] to-transparent opacity-70" />
              </div>

              <motion.div
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-xl max-w-xs"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0C0950]" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M9 12l2 2 4-4" />
                  </svg>
                  Industry Certified
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Our programs are recognized by leading tech companies worldwide.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Optimized Technologies Marquee */}
          <motion.div className="mt-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-gray-200 flex-1" />
              <h2 className="text-sm font-medium text-gray-500">Technologies We Teach</h2>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

            <div className="relative overflow-hidden">
              <div className="flex w-max animate-marquee whitespace-nowrap">
                {[...technologies, ...technologies].map((tech, index) => (
                  <div
                  key={`${tech.name}-${index}`}
                    className="inline-flex items-center px-6 py-3 mx-2 bg-white rounded-lg shadow-sm"
                    aria-hidden={index >= technologies.length}
                    >
                    <span className="mr-3 text-lg">{tech.logo}</span>
                    <span className="font-medium text-gray-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
                    </div>
      </section>
      
      </div>
    </>
  );
};

export default HeroSection;