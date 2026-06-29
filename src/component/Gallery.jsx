// gallery.jsx
"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";

// 3D Tilt Hook for cards
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

const MediaGallery = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const galleryItems = [
    { id: 1, type: "image", category: "campus", url: "/mo1.jpeg", cols: "md:col-span-2", title: "Main Campus – Best Computer Institute", description: "State-of-the-art building in Mukundpur, Delhi" },
    { id: 2, type: "image", category: "workshop", url: "/img50.jpeg", cols: "md:col-span-1", title: "Web Dev Workshop – Computer Classes", description: "Students building React projects, coding session" },
    { id: 4, type: "image", category: "awards", url: "/img52.jpeg", cols: "md:col-span-1", title: "Annual Awards – Computer Course After 12th", description: "Celebrating student achievements, scholarship event" },
    { id: 5, type: "image", category: "campus", url: "/img53.jpeg", cols: "md:col-span-1", title: "Student Lounge – Computer Coaching", description: "Relaxation area, digital skills training" },
    { id: 3, type: "image", category: "workshop", url: "/img51.jpeg", cols: "md:col-span-1", title: "Coding Session – Best Computer Classes", description: "Hands-on practice, job-oriented courses" },
    { id: 6, type: "image", category: "workshop", url: "/img54.jpeg", cols: "md:col-span-2", title: "Hackathon – IT Course Near Me", description: "24-hour coding competition, skill development" },
    { id: 7, type: "image", category: "lab", url: "/img55.jpeg", cols: "md:col-span-1", title: "Networking Lab – Computer Training", description: "Cybersecurity training, advanced computer lab" },
    { id: 8, type: "image", category: "awards", url: "/img56.jpeg", cols: "md:col-span-1", title: "Industry Partners – Best Institute", description: "Collaboration with tech leaders, placement support" },
    { id: 9, type: "image", category: "lab", url: "/lab.jpeg", cols: "md:col-span-1", title: "Hardware Lab – Computer Course", description: "Practical sessions, computer diploma course" },
    { id: 10, type: "image", category: "lab", url: "lab.jpg", cols: "md:col-span-1", title: "Robotics Lab – Innovation Hub", description: "Advanced computing, AI lab, future tech" },
    { id: 11, type: "image", category: "lab", url: "1 (645).jpg", cols: "md:col-span-1", title: "AI Lab – Advanced Computing", description: "Machine learning, data science training" },
    { id: 12, type: "image", category: "campus", url: "cam.jpg", cols: "md:col-span-1", title: "Campus View – Greenery & Infrastructure", description: "Best computer institute in Delhi, Mukundpur" },
    { id: 13, type: "image", category: "awards", url: "/ab.JPEG", cols: "md:col-span-1", title: "Award Ceremony – Recognizing Excellence", description: "Computer course certificate, merit-based awards" },
    { id: 14, type: "image", category: "awards", url: "/ab1.jpeg", cols: "md:col-span-1", title: "Scholarship Event – Tally Course", description: "GST and Tally course, financial training" },
  ];

  const filters = [
    { id: "all", label: "All Moments" },
    { id: "campus", label: "Campus Life" },
    { id: "workshop", label: "Workshops" },
    { id: "awards", label: "Awards & Events" },
    { id: "lab", label: "Labs & Facilities" }
  ];

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 15 }
    }
  };

  return (
    <>
      <section
        id="gallery"
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white via-indigo-50/20 to-white"
      >
        {/* Decorative floating shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto" ref={ref}>
          {/* Section Header with SEO keywords */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0C0950] to-[#3A36DB]">
                ARC Gallery – Best Computer Institute
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <span className="font-semibold">Computer Classes Near Me | Best Computer Institute in Mukundpur & Delhi</span><br />
              Explore campus life, workshops, awards, labs – <span className="text-indigo-700">Computer course after 10th, after 12th, Tally course, job-oriented training, affordable fees.</span>
            </p>
            {/* Hidden SEO keywords for crawlers */}
            <div className="sr-only">
              Computer coaching near me, computer training institute, basic computer course, tally classes near me, computer learning center, certificate computer course, skill development course, IT course near me, computer diploma, short term computer course, summer computer training, digital skills, government approved computer course, learn computer from scratch, computer skills training, computer course for job, computer institute admission open, computer classes for beginners, professional computer course, career computer courses, computer typing course, advanced computer training, best institute for Tally, GST and Tally course, office management course, computer course for girls, computer course for boys, affordable computer classes, computer course ki fees, computer seekhne ki class, computer institute Delhi, computer course certificate, computer class admission open, computer course after 12th pass, computer course after 10th pass.
            </div>
          </motion.div>

          {/* Animated Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {filters.map((filter, idx) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`${activeFilter === filter.id
                  ? "bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"}
                px-5 py-2 rounded-full text-sm font-medium transition-all shadow-sm`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredItems.map((item) => {
                const cardRef = useRef(null);
                const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt(cardRef);
                return (
                  <motion.div
                    key={item.id}
                    ref={cardRef}
                    variants={itemVariants}
                    layout
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ${item.cols} h-64`}
                    onClick={() => setSelectedMedia(item)}
                  >
                    <img
                      src={item.url}
                      alt={item.title + " – Computer Institute Mukundpur"}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <h3 className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {item.description}
                      </p>
                      <span className="text-white/60 text-xs mt-2 inline-block capitalize">
                        {item.category}
                      </span>
                    </div>
                    {/* Corner badge */}
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.type === "image" ? "📷" : "🎥"}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-500">No media found for this category.</p>
            </motion.div>
          )}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMedia(null)}
            >
              <motion.div
                className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition shadow-md"
                  onClick={() => setSelectedMedia(null)}
                >
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="relative">
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title + " – Computer Training Institute Delhi"}
                    className="w-full max-h-[75vh] object-contain bg-gray-100"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h3 className="text-white text-2xl font-bold">{selectedMedia.title}</h3>
                    <p className="text-white/80 mt-1">{selectedMedia.description}</p>
                    <div className="flex items-center gap-3 mt-3 text-white/60 text-sm">
                      <span className="capitalize px-2 py-1 bg-white/20 rounded-full">{selectedMedia.category}</span>
                      <span>{selectedMedia.type === "image" ? "📸 Photo" : "🎬 Video"}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default MediaGallery;