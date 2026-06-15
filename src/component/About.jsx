"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Timeline } from "../component/ui/timeline";

// Counter component for numbers
const AnimatedCounter = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = from;
    const end = to;
    if (start === end) return;
    const increment = (end - start) / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
};

export function InstituteTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  const data = [
    {
      title: "2025",
      stats: { students: 1250, courses: 8, placements: 94 },
      content: (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="mb-6 rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 p-6 shadow-lg">
            <p className="text-lg font-semibold text-purple-800">
              🚀 Advanced Diploma in AI & Machine Learning
            </p>
            <p className="mt-2 text-gray-700">
              Launched our flagship program with industry-aligned curriculum, 
              real-world projects, and mentorship from AI experts.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Students Enrolled", value: 450, suffix: "+" },
              { label: "Projects Completed", value: 120, suffix: "+" },
              { label: "Industry Partners", value: 15, suffix: "" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                className="rounded-xl bg-white p-3 shadow-md"
              >
                <div className="text-2xl font-bold text-purple-700 md:text-3xl">
                  <AnimatedCounter to={stat.value} duration={1.5} />
                  {stat.suffix}
                </div>
                <div className="text-xs text-gray-500 md:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { src: "/Anil_sir.jpeg", alt: "Instructor teaching AI", label: "Expert Faculty" },
              { src: "/img2.jpg", alt: "Graduation celebration", label: "Graduation 2025" },
              { src: "/ab.JPEG", alt: "Hackathon winners", label: "Hackathon Champions" },
              { src: "/ab1.jpeg", alt: "New campus building", label: "Smart Campus" },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                className="group relative overflow-hidden rounded-2xl shadow-xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-110 md:h-56"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {img.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "2024",
      stats: { students: 980, courses: 6, placements: 88 },
      content: (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 space-y-4">
            <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-5 shadow-sm">
              <p className="font-semibold text-blue-800">🔒 Cybersecurity & Cloud Computing Specializations</p>
              <p className="mt-1 text-gray-600">
                New tracks introduced with hands-on labs, industry certifications, and live projects.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-green-500 bg-green-50 p-5 shadow-sm">
              <p className="font-semibold text-green-800">🤝 Corporate Partnerships</p>
              <p className="mt-1 text-gray-600">
                Collaborated with 25+ tech companies for internships, guest lectures, and placement drives.
              </p>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Internships", value: 340, suffix: "+" },
              { label: "Placement Offers", value: 210, suffix: "+" },
              { label: "Workshops", value: 45, suffix: "" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-xl bg-white p-3 shadow-md"
              >
                <div className="text-2xl font-bold text-blue-700 md:text-3xl">
                  <AnimatedCounter to={stat.value} duration={1.5} />
                  {stat.suffix}
                </div>
                <div className="text-xs text-gray-500 md:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              { src: "/ab4.JPEG", alt: "Cybersecurity lab", label: "Cyber Lab" },
              { src: "/ab6.JPG", alt: "Industry partners visit", label: "Recruitment Drive" },
              { src: "/ab7.JPG", alt: "Project showcase", label: "Project Expo" },
              { src: "/ab8.JPG", alt: "Faculty training", label: "Faculty Upskilling" },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ rotateY: 90, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)" }}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-48 w-full object-cover md:h-56"
                />
                <div className="bg-white p-2 text-center text-sm font-medium text-gray-700">
                  {img.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "2022",
      stats: { students: 320, courses: 3, placements: 76 },
      content: (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <p className="mb-4 text-lg font-semibold text-gray-800">
            🎯 The Beginning – Foundation Year Achievements
          </p>
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              "🖥️ 200+ high‑performance workstations",
              "📚 Flagship Software Engineering program",
              "🎤 First tech symposium (500+ attendees)",
              "🏆 Awarded 'Best Upcoming Institute' by EduTech Forum",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 shadow-sm"
              >
                <span className="text-2xl">{item.charAt(0)}</span>
                <span className="text-gray-700">{item.slice(2)}</span>
              </motion.div>
            ))}
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-yellow-50 to-orange-50 p-5 text-center">
            <p className="text-3xl font-bold text-orange-600">🌟 98%</p>
            <p className="text-sm text-gray-600">Student satisfaction rate in the first year</p>
          </div>
        </motion.div>
      ),
    },
  ];

  // Handle button click to avoid 404
  const handleJoinClick = () => {
    // Option 1: Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Option 2: Show a temporary message (uncomment if you want)
    // alert("Admissions opening soon! 🎉");
  };

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-20 md:py-28"
      aria-labelledby="timeline-heading"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-purple-200 opacity-30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-blue-200 opacity-30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1 text-sm font-semibold text-white shadow-md">
            Our Journey
          </div>
          <h2
            id="timeline-heading"
            className="mt-4 bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-5xl font-bold text-transparent md:text-6xl"
          >
            Timeline of Excellence
          </h2>
          <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            From our humble beginnings to becoming a centre of tech innovation
          </p>
        </motion.div>

        {/* Animated stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16 grid grid-cols-2 gap-6 rounded-3xl bg-white/60 p-6 shadow-xl backdrop-blur-sm md:grid-cols-4"
        >
          {[
            { label: "Total Students", value: 2500, suffix: "+", icon: "👩‍🎓" },
            { label: "Placement Rate", value: 92, suffix: "%", icon: "💼" },
            { label: "Expert Faculty", value: 45, suffix: "+", icon: "👨‍🏫" },
            { label: "Industry Tracks", value: 12, suffix: "", icon: "📚" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl">{stat.icon}</div>
              <div className="mt-2 text-3xl font-bold text-gray-800">
                <AnimatedCounter to={stat.value} duration={2} />
                {stat.suffix}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <Timeline data={data} />

        {/* Interactive CTA - Fixed no 404 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <button
            onClick={handleJoinClick}
            className="inline-block cursor-pointer rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Join Our Journey →
          </button>
        </motion.div>

        {/* SEO structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Your Institute Name",
            description: "Leading technology education institute offering courses in AI, cybersecurity, software engineering and more",
            foundingDate: "2022",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Your City",
              addressRegion: "Your State",
              postalCode: "Your ZIP",
              addressCountry: "IN",
            },
            event: [
              {
                "@type": "Event",
                name: "Annual Tech Symposium",
                startDate: "2022-11-15",
                endDate: "2022-11-17",
                eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                eventStatus: "https://schema.org/EventCompleted",
                description: "First annual technology symposium hosted by our institute",
              },
            ],
          })}
        </script>
      </div>
    </motion.section>
  );
}