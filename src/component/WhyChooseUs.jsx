 import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
 import { Helmet } from "react-helmet-async";


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


  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Industry-Recognized Certification",
      description: "Our courses come with certifications recognized by top tech companies in Delhi and nationwide."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Expert Instructors",
      description: "Learn from Delhi's top industry professionals with 8+ years of real-world experience."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Project-Based Learning",
      description: "Build real projects that you can showcase in your portfolio to Delhi employers."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Job Placement Support",
      description: "95% of our graduates land tech jobs in Delhi within 3 months of completion."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Flexible Learning Options",
      description: "Choose between online, hybrid, or in-person learning at our Delhi centers."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Cutting-Edge Curriculum",
      description: "Our Delhi-focused courses are updated quarterly to reflect industry trends."
    }
  ];

  return (
    <>
     
    <Helmet>
      <title>Why Choose ARC Institute? | Best IT Training & Certification in Delhi</title>
      <meta name="description" content="ARC Institute is Delhi's premier IT training center offering industry-aligned courses, expert trainers, 95% placement record, and government-recognized certifications. Start your tech career today!" />
      <meta name="keywords" content="best computer institute Delhi, IT training Delhi, certified computer courses, job placement support Delhi, IT certification courses, ARC Institute reviews, project-based learning, affordable IT training, government recognized computer institute" />
      <meta property="og:title" content="Why ARC Institute is Delhi's #1 Choice for IT Training & Certification" />
      <meta property="og:description" content="Get job-ready IT skills with Delhi's most trusted computer institute. 95% placement rate, industry-expert trainers, and government-recognized certifications." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.arcinstitute.in/why-choose-us" />
      <meta property="og:image" content="https://www.arcinstitute.in/logo.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Top Reasons to Choose ARC Institute for IT Training in Delhi" />
      <meta name="twitter:description" content="Industry-aligned curriculum, placement support, and expert trainers make ARC Institute Delhi's best computer education center." />
      <link rel="canonical" href="https://www.arcinstitute.in/why-choose-us" />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  

      <section
        id="why-choose-us"
        className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden"
        ref={ref}
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0C0950] to-[#3A36DB] mask mask-circle mix-blend-overlay"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
              itemProp="name"
            >
              Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0C0950] to-[#3A36DB]">ARC Institute Delhi?</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
              itemProp="description"
            >
              Delhi's premier IT training institute with proven results that transform careers since 2010
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-opacity-10 p-3 rounded-lg text-[#0C0950]">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2" itemProp="name">{feature.title}</h2>
                    <p className="text-gray-600" itemProp="description">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="mt-20 bg-gradient-to-r from-[#0C0950] to-[#3A36DB] rounded-2xl p-8 md:p-12 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <h2 className="sr-only">Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: inView ? 1 : 0.8 }}
                transition={{ delay: 0.2 }}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <div className="text-4xl font-bold mb-2" itemProp="name">9K+</div>
                <div className="text-sm opacity-80" itemProp="description">Students Trained</div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: inView ? 1 : 0.8 }}
                transition={{ delay: 0.4 }}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <div className="text-4xl font-bold mb-2" itemProp="name">95%</div>
                <div className="text-sm opacity-80" itemProp="description">Placement Rate</div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: inView ? 1 : 0.8 }}
                transition={{ delay: 0.6 }}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <div className="text-4xl font-bold mb-2" itemProp="name">10+</div>
                <div className="text-sm opacity-80" itemProp="description">Hiring Partners</div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: inView ? 1 : 0.8 }}
                transition={{ delay: 0.8 }}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <div className="text-4xl font-bold mb-2" itemProp="name">4.8/5</div>
                <div className="text-sm opacity-80" itemProp="description">Student Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 1 }}
          >
            <Link to="/contactSection" itemProp="url">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                aria-label="Enroll Now at ARC Computer Institute Delhi"
              >
                Start Your Tech Journey Today
              </motion.button>
            </Link>
             
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;