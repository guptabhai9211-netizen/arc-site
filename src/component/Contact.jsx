import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const cardHover = {
    rest: { scale: 1, y: 0, transition: { duration: 0.2 } },
    hover: { scale: 1.02, y: -4, transition: { duration: 0.2 } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-32 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 -right-32 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Contact <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ARC Computer Institute
            </span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg">
            Reach out to us for course inquiries, admissions, or any other questions.
            <br />Our team is ready to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Branch Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Branch 1 - Mukund Pur */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex items-start gap-5 p-6">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl shadow-md">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-2">Mukund Pur Branch</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A-14 Main Road, Mukund Pur
                    <br />
                    Delhi - 110042
                    <br />
                    <span className="text-sm text-blue-600">(Above Bank of Baroda)</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Branch 2 - Burari */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex items-start gap-5 p-6">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl shadow-md">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-2">Burari Branch</h3>
                  <p className="text-gray-600 leading-relaxed">
                    25 Futa Road, Near AAP Party Office
                    <br />
                    West Kamal Vihar, Burari
                    <br />
                    Delhi - 110084
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Info Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Phone Numbers */}
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-100"
              >
                <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <FaPhone className="text-green-600 text-xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                <div className="space-y-2">
                  <a
                    href="tel:8860448368"
                    className="block text-gray-600 hover:text-green-600 transition-colors"
                  >
                    8860448368
                  </a>
                  <a
                    href="tel:8860448399"
                    className="block text-gray-600 hover:text-green-600 transition-colors"
                  >
                    8860448399
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-100"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                <a
                  href="mailto:sefdel333@gmail.com"
                  className="text-gray-600 hover:text-blue-600 break-words"
                >
                  sefdel333@gmail.com
                </a>
              </motion.div>

              {/* Operating Hours */}
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-100"
              >
                <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <FaClock className="text-orange-600 text-xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Timings</h3>
                <p className="text-gray-600">
                  Mon – Sat: 8:00 AM – 8:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </motion.div>

              {/* Social Media */}
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-100"
              >
                <div className="bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <FaInstagram className="text-pink-600 text-xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-3">Connect With Us</h3>
                <div className="flex gap-5">
                  <a
                    href="https://www.facebook.com/share/1FGfEcXFkR/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition-all hover:scale-110"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/arcinstitute.21?igsh=MWc2Z21sOHF4bXRxOQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-pink-600 transition-all hover:scale-110"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://youtube.com/@sefclasses?si=QGPoe-7wyOd50OQN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-red-600 transition-all hover:scale-110"
                  >
                    <FaYoutube size={24} />
                  </a>
                  <a
                    href="https://wa.me/918860448368"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green-500 transition-all hover:scale-110"
                  >
                    <FaWhatsapp size={24} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              Send us a Message
            </h3>
            <form
              action="https://formspree.io/f/mrbknydz"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Course Interest</label>
                <select
                  name="course"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">Select a course</option>
                  <option value="basic-computer">Basic Computer</option>
                  <option value="graphic-designing">Graphic Designing</option>
                  <option value="web-designing">Web Designing</option>
                  <option value="caad">CAAD</option>
                  <option value="cca">CCA</option>
                  <option value="aca">ACA</option>
                  <option value="adca">ADCA</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="python">Python</option>
                  <option value="advanced-excel">Advanced Excel</option>
                  <option value="busy">Busy</option>
                  <option value="tally-prime">Tally Prime</option>
                  <option value="ccc">CCC</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write your questions or feedback..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Send Inquiry →
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Section with both branches highlighted */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 rounded-2xl overflow-hidden shadow-xl border border-gray-200"
        >
          <div className="bg-gray-900 text-white px-4 py-2 text-sm font-medium">
            📍 Find our branches
          </div>
          <iframe
            title="ARC Computer Institute Locations"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889705473645!3d28.527554034394547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5eab777d01%3A0xa5d8b8e8c5b7b8c9!2sMukundpur%2C%20Delhi%2C%20110042!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="bg-gray-50 px-4 py-3 text-sm text-gray-600 text-center">
            Mukund Pur Branch (default location) • Burari Branch is also nearby
          </div>
        </motion.div>

        {/* Floating WhatsApp CTA */}
        <a
          href="https://wa.me/918860448368?text=Hello%2C%20I%20want%20to%20know%20more%20about%20courses"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 group"
        >
          <FaWhatsapp size={28} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}