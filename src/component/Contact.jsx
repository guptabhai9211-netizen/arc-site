 import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export function ContactSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact <span className="text-blue-600">ARC Computer Institute</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach out to us for course inquiries, admissions, or any other questions. Our team is ready to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Branch Information */}
          <div className="space-y-8">
            {/* Branch 1 */}
            <motion.div 
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 p-3 rounded-full">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold text-lg mb-1">Mukund Pur Branch</h3>
                <p className="text-gray-600">
                  A-14 Main Road, Mukund Pur<br />
                  Delhi - 110042<br />
                  (Above Bank of Baroda)
                </p>
              </div>
            </motion.div>

            {/* Branch 2 */}
            <motion.div 
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 p-3 rounded-full">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold text-lg mb-1">Burari Branch</h3>
                <p className="text-gray-600">
                  25 Futa Road, Near AAP Party Office<br />
                  West Kamal Vihar, Burari<br />
                  Delhi - 110084
                </p>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Phone Numbers */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaPhone className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold text-lg mb-1">Contact Numbers</h3>
                  <p className="text-gray-600">
                    <a href="tel:8860448368" className="hover:text-blue-600 block">8860448368</a>
                    <a href="tel:8586919186" className="hover:text-blue-600 block">8586919186</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold text-lg mb-1">Email Address</h3>
                  <p className="text-gray-600">
                    <a href="mailto:sefdel333@gmail.com" className="hover:text-blue-600">sefdel333@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaClock className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold text-lg mb-1">Operating Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 8:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 p-3 rounded-full">
                  <div className="text-blue-600 text-xl">#</div>
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold text-lg mb-1">Follow Us</h3>
                  <div className="flex gap-4 mt-2">
                    <a href="https://www.facebook.com/share/1FGfEcXFkR/" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <FaFacebook className="text-xl" />
                    </a>
                    <a href="https://www.instagram.com/arcinstitute.21?igsh=MWc2Z21sOHF4bXRxOQ==" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <FaInstagram className="text-xl" />
                    </a>
                    <a href="https://youtube.com/@sefclasses?si=QGPoe-7wyOd50OQN  " className="text-gray-600 hover:text-blue-600 transition-colors">
                      <FaYoutube className="text-xl text-red-600" />

                     </a>
                    {/* <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <FaLinkedin className="text-xl" />
                    </a> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Inquiry Form */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us an Inquiry</h3>
            <form 
              action="https://formspree.io/f/sefdel333@gmail.com" 
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+91 "
                />
              </div>
              
              <div>
                <label htmlFor="course" className="block text-gray-700 mb-1">Course Interest</label>
                <select
                  id="course"
                  name="course"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a course</option>
                  <option value="basic-computer">Basic Computer Course</option>
                  <option value="programming">Programming Languages</option>
                  <option value="web-development">Web Development</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Type your inquiry here..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        {/* <motion.div 
          className="mt-16 rounded-xl overflow-hidden shadow-lg border border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9876543210987!2d77.12345678901234!3d28.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU5JzE1LjYiTiA3N8KwMDcnMjEuOSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ARC Computer Institute Locations"
          ></iframe>
        </motion.div> */}
      </div>
    </section>
  );
}