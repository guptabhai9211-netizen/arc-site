 import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  fadeInVariants,
  staggerContainer,
  staggerItem,
} from "../../utlis/variants.js";
import ParticleComponent from "../ParticleComponent.jsx";
import ChatBot from "../../utlis/Bot.jsx";
import WhatsAppButton from "../../utlis/WhatsAppButton.jsx";
// import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden overflow-hidden">
      <ChatBot />
      <WhatsAppButton />

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <ParticleComponent />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left Section */}
          <motion.div variants={itemVariants}>
            <motion.div className="text-sm font-semibold tracking-wide uppercase text-[#0C0950] mb-4" variants={fadeInVariants}>
              Transforming Tech Education
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span className="block" variants={staggerItem}>Build Your Future</motion.span>
              <motion.span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#0C0950] to-[#3A36DB]" variants={staggerItem}>
                With Cutting-Edge
              </motion.span>
              <motion.span variants={staggerItem}>Tech Skills</motion.span>
            </motion.h1>

            <motion.p className="text-lg text-gray-600 mb-8 max-w-lg" variants={itemVariants}>
              Join our industry-leading programs and gain hands-on experience with the latest technologies taught by expert instructors.
            </motion.p>

            <motion.div
  className="flex flex-wrap gap-4"
  variants={staggerContainer}
  initial="hidden"
  animate="visible"
>
  <MotionLink
    to="/contactSection"
    className="px-8 py-3 bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
    variants={staggerItem}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
  >
    Apply Now
  </MotionLink>

  <MotionLink
    to="/courses"
    className="px-8 py-3 border-2 border-[#0C0950] text-[#0C0950] font-medium rounded-lg hover:bg-[#0C0950] hover:text-white transition-all duration-300"
    variants={staggerItem}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
  >
    Explore Courses
  </MotionLink>
</motion.div>


            <motion.div className="mt-12 flex items-center space-x-6" variants={itemVariants}>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <motion.img
                    key={item}
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? "women" : "men"}/${item + 20}.jpg`}
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    initial={{ x: -20 * item, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * item }}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">Rated 5.0 by 1000+ students</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="relative"
            variants={itemVariants}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <motion.img
                src="/Anil_sir.jpeg"
                alt="Students learning"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#0C0950] to-transparent opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </div>

            <motion.div
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="ml-3 font-bold text-gray-900 flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#0C0950]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                Industry Certified
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Our programs are recognized by leading tech companies worldwide.
              </p>
            </motion.div>

            {/* <motion.div
              className="absolute top-80 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="ml-3 font-bold text-gray-900 flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#0C0950]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745" />
                </svg>
                Job Placement
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                95% of our graduates secure jobs within 3 months of completion.
              </p>
            </motion.div> */}
          </motion.div>
        </motion.div>

        {/* Technologies We Teach Section */}
     <motion.div
  className="mt-16 overflow-x-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
>
  <div className="flex items-center justify-center mb-8">
    <div className="h-px bg-gray-200 flex-1"></div>
    <h3 className="px-4 text-sm font-medium text-gray-500">Technologies We Teach</h3>
    <div className="h-px bg-gray-200 flex-1"></div>
  </div>

  <motion.div
    className="flex w-max"
    animate={{ x: ["0%", "-100%"] }}
    transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
  >
    {[
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
      { name: "Photoshop", logo: "🖌️" },
      { name: "Corel Draw", logo: "✏️" },
      { name: "HTML/CSS", logo: "</>" },
      { name: "JavaScript", logo: "JS" },
      { name: "MS Office", logo: "📄" },
      { name: "Computer Hardware", logo: "🔧" }
    ].map((tech, index) => (
      <div
        key={index}
        className="relative flex-shrink-0 px-6 py-3 mx-2 bg-white rounded-lg shadow-sm flex items-center"
      >
        {/* Cin Badge */}
         
        
        <span className="w-8 h-8  bg-opacity-10 rounded-full flex items-center justify-center mr-3 text-lg">
          {tech.logo}
        </span>
        <span className="font-medium text-gray-700">{tech.name}</span>
      </div>
    ))}
  </motion.div>
</motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
