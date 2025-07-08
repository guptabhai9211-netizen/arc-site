import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLaptop, FaChalkboardTeacher } from "react-icons/fa";

export function ContactBranches() {
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
            Our <span className="text-blue-600">Branch Campuses</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit us at either of our locations for admissions, counseling, or classroom visits.
          </p>
        </motion.div>

        {/* Two Branch Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mukund Pur Branch */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mukund Pur Campus</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      A-14 Main Road, Mukund Pur<br />
                      Delhi - 110042<br />
                      (Above Bank of Baroda)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Contact</h4>
                    <p className="text-gray-600">
                      <a href="tel:8860448368" className="hover:text-blue-600 block">8860448368</a>
                      <a href="tel:8586919186" className="hover:text-blue-600 block">8586919186</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Hours</h4>
                    <p className="text-gray-600">
                      Mon-Sat: 8:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600">
                    <FaLaptop />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Courses Offered</h4>
                    <ul className="text-gray-600 list-disc list-inside">
                      <li>Basic Computer Fundamentals</li>
                      <li>Programming Languages</li>
                      <li>Web Development</li>
                      <li>Graphic Design</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27987.6388298926!2d77.14508414268492!3d28.735833565847276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01e2dbe74961%3A0xc6675065faefee09!2sARC%20Computer%20Institute%20Delhi%20-%20ADCA%2C%20Graphic%20Designing%2C%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1750695810305!5m2!1sen!2sin" 
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Burari Campus">

                  </iframe>
              </div>
            </div>
          </motion.div>

          {/* Burari Branch */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Burari Campus</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      25 Futa Road, Near AAP Party Office<br />
                      West Kamal Vihar, Burari<br />
                      Delhi - 110084
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Contact</h4>
                    <p className="text-gray-600">
                      <a href="tel:8860448368" className="hover:text-blue-600 block">8860448368</a>
                      <a href="tel:8586919186" className="hover:text-blue-600 block">8586919186</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Hours</h4>
                    <p className="text-gray-600">
                      Mon-Sat: 8:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600">
                    <FaChalkboardTeacher />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Courses Offered</h4>
                    <ul className="text-gray-600 list-disc list-inside">
                      <li>Advanced Programming</li>
                      <li>AI & Machine Learning</li>
                      <li>Cybersecurity</li>
                      <li>Cloud Computing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6996.164817610668!2d77.1806340433275!3d28.746956402409527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d010d1a281ef7%3A0x3258df00be1868e1!2sARC%20Computer%20Institute%20Burari!5e0!3m2!1sen!2sin!4v1750695592525!5m2!1sen!2sin"
                   width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Burari Campus">

                  </iframe>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Common Contact Info */}
        <motion.div 
          className="mt-16 bg-blue-50 rounded-xl p-8 text-center border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">General Inquiries</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex items-center justify-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaEnvelope className="text-blue-600" />
              </div>
              <a href="mailto:sefdel333@gmail.com" className="text-gray-700 hover:text-blue-600 font-medium">
                sefdel333@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaPhone className="text-blue-600" />
              </div>
              <a href="tel:8860448368" className="text-gray-700 hover:text-blue-600 font-medium">
                8860448368 / 8586919186
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}