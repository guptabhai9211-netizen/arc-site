 "use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HeroParallax } from "../component/ui/hero-parallax";

export const products = [
  {
    // title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/img1.jpg",
  },
  {
    // title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
          "/img2.jpg",

   },
  {
    // title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
          "/img3.jpg",

   },
  {
    // title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
          "/img4.jpg",

   },
  {
    // title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
          "/img5.jpg",

   },
  {
    // title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
          "/img6.jpg",

   },
  {
    // title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
          "/img8.jpg",

   },
  {
    // title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
          "/img26.jpeg",

   },
  {
    // title: "Tailwind Master Kit",
    // link: "https://tailwindmasterkit.com",
    thumbnail:
          "/img19.JPG",

   },
  {
    // title: "SmartBridge",
    // link: "https://smartbridgetech.com",
    thumbnail:
          "/img25.jpeg",

   },
  {
    // title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
          "/img21.jpg",


   },
  {
    // title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
          "/img10.jpg",

   },
  {
    // title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
          "/img11.jpeg",

   },
  {
    // title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
              "/img12.jpeg",

   },
  {
    // title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
              "/img1.jpeg",

   },
];

const MediaGallery = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "campus",
      // title: "Campus Building",
      // description: "Our state-of-the-art facility in Mumbai",
      url: "/mo1.jpeg",
      cols: "md:col-span-2"
    },
    {
      id: 2,
      type: "image",
      category: "workshop",
      // title: "Web Dev Workshop",
      // description: "Students building React projects",
            url: "/img50.jpeg",

       cols: "md:col-span-1"
    },
    
    {
      id: 4,
      type: "image",
      category: "awards",
      // title: "Annual Awards",
      // description: "Celebrating student achievements",
      url: "/img52.jpeg",
      
      cols: "md:col-span-1"
    },
    {
      id: 5,
      type: "image",
      category: "campus",
      // title: "Student Lounge",
      // description: "Relaxation area between classes",
      url: "/img53.jpeg",
      
      cols: "md:col-span-1"
    },
    {
      id: 3,
      type: "image",
      category: "workshop",
      // title: "Web Dev Workshop",
      // description: "Students building React projects",
            url: "/img51.jpeg",

       cols: "md:col-span-1"
    },
    {
      id: 6,
      type: "image",
      category: "workshop",
      // title: "Hackathon Event",
      // description: "24-hour coding competition",
                  url: "/img54.jpeg",

       cols: "md:col-span-2"
    },
    {
      id: 7,
      type: "image",
      category: "lab",
      // title: "Networking Lab",
      // description: "Hands-on cybersecurity training",
                  url: "/img55.jpeg",

       cols: "md:col-span-1"
    },
    {
      id: 8,
      type: "image",
      category: "awards",
      // title: "Industry Partners",
      // description: "Collaborating with tech leaders",
                  url: "/img56.jpeg",

       cols: "md:col-span-1"
    }
  ];

  const filters = [
    { id: "all", label: "All Media" },
    { id: "campus", label: "Campus Life" },
    { id: "workshop", label: "Workshops" },
    { id: "awards", label: "Award Ceremonies" },
    { id: "lab", label: "Lab Tours" }
  ];

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  return (
    <>
      {/* Hero Parallax */}
      <HeroParallax products={products} />

      {/* Media Gallery Section */}
      <section
        id="gallery"
        className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
        ref={ref}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0C0950] to-[#3A36DB]">
                ARC Gallery
              </span>
            </h2>
            <p className="text-lg text-[#0C0950] max-w-2xl mx-auto">
              Explore life at our institute through student activities, workshops, and facilities
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.3 }}
          >
            {filters.map(filter => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                className={`relative group cursor-pointer ${item.cols} h-64 rounded-xl overflow-hidden`}
                variants={itemVariants}
                onClick={() => setSelectedMedia(item)}
                whileHover={{ scale: 0.98 }}
              >
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#0C0950]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.8 }}
          >
            
          </motion.div>
        </div>

        {/* Modal */}
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                onClick={() => setSelectedMedia(null)}
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.title}
                  className="w-full max-h-[80vh] object-contain"
                />
              ) : (
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={selectedMedia.videoUrl}
                    className="w-full h-[70vh]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedMedia.title}</h3>
                <p className="text-gray-600 mb-4">{selectedMedia.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="capitalize">{selectedMedia.category}</span>
                  <span className="mx-2">•</span>
                  <span>{selectedMedia.type === "image" ? "Photo" : "Video"}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>
    </>
  );
};

export default MediaGallery;
