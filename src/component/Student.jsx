import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

const students = [
  {
    name: "Nisha",
    role: "Student",
    image: "/test3.jpg",
    description: "Nisha emerged as the 1st prize winner in the Computer Quiz Test and won a full Computer Set. Her sharp skills and enthusiasm for technology have truly set her apart.",
    achievement: "1st Prize Winner - Computer Quiz Test",
    prize: "Full Computer Set",
    course: "ADCA (Advanced Diploma in Computer Applications)",
    fullStory: "Nisha joined ARC with a passion for computers. Within months, she mastered advanced concepts and outperformed 200+ participants in the inter‑college quiz. Her journey inspires many young women in tech."
  },
  {
    name: "Sanjeev Vishwakarma",
    role: "Student",
    image: "/test1.jpg",
    description: "Sanjeev participated in our Computer Quiz Test and secured the 2nd prize, winning a brand new Smart Watch. His dedication and consistent performance have made him a role model.",
    achievement: "2nd Prize Winner - Computer Quiz Test",
    prize: "Smart Watch",
    course: "Digital Marketing Certification",
    fullStory: "Sanjeev balanced his studies with a part‑time job. His discipline and regular practice at ARC labs paid off – he now leads a digital agency and credits our practical training."
  },
  {
    name: "Sumit",
    role: "Student",
    image: "/test2.jpg",
    description: "Sumit performed exceptionally well in the Computer Quiz Test and received the 3rd prize — a stylish Safari Backpack. His consistent improvement and curiosity are commendable.",
    achievement: "3rd Prize Winner - Computer Quiz Test",
    prize: "Safari Backpack",
    course: "Python Programming Course",
    fullStory: "Sumit started with zero coding background. Through our project‑based learning, he built a portfolio of 5+ apps and now works as a junior developer. His growth is phenomenal."
  },
];

// 3D Tilt Hook
const useTilt = (ref) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
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

export default function StudentTestimonials() {
  const [activeStudent, setActiveStudent] = useState(null);
  const cardRefs = useRef([]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", damping: 12, stiffness: 100 } }
  };

  return (
    <>
      <Helmet>
        <title>Student Success Stories | ARC Computer Institute, Delhi | Alumni Achievements</title>
        <meta name="description" content="Read inspiring success stories from ARC Computer Institute students in Delhi. See how our courses in ADCA, Digital Marketing, and Python helped launch careers." />
        <meta name="keywords" content="computer institute success stories, student testimonials Delhi, ADCA course results, digital marketing student achievements, python programming alumni" />
        <meta property="og:title" content="Student Success Stories | ARC Computer Institute, Delhi" />
        <meta property="og:description" content="Real student achievements and testimonials from ARC Computer Institute's professional courses in Delhi." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.arccomputerinstitute.com/images/og-testimonials.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.arccomputerinstitute.com/testimonials" />
      </Helmet>

      <div 
        className="min-h-screen bg-gradient-to-br from-[#0C0950]/10 to-[#3A36DB]/10 py-20 px-4 relative overflow-hidden"
      >
        {/* Animated floating dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#3A36DB]/20 rounded-full"
              initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
              animate={{
                y: [null, -30, 30, -20, 20],
                x: [null, 20, -20, 15, -15],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{ duration: Math.random() * 12 + 8, repeat: Infinity, repeatType: "mirror" }}
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="text-center mb-16 max-w-4xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="text-4xl md:text-5xl font-bold text-[#0C0950] mb-6"
          >
            Success Stories from Our{" "}
            <span className="text-[#3A36DB]">Talented Students</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-[#3A36DB]"
          >
            Hear directly from our alumni about how ARC Computer Institute helped
            them launch successful careers in tech across Delhi
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {students.map((student, idx) => {
            const cardRef = useRef(null);
            const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt(cardRef);

            return (
              <motion.div
                key={idx}
                ref={cardRef}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border border-[#0C0950]/10"
                onClick={() => setActiveStudent(student)}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <motion.img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0950]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <p className="text-white font-medium flex items-center gap-1">
                      Click to read full story ✨
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#0C0950]">{student.name}</h2>
                  <p className="text-[#3A36DB] font-medium">{student.role}</p>
                  <p className="text-sm text-gray-700 mt-4 italic line-clamp-3">{student.description}</p>
                  <div className="mt-4 space-y-1">
                    <p className="text-sm font-medium text-[#0C0950]">🏆 {student.achievement}</p>
                    <p className="text-sm font-medium text-[#0C0950]">🎁 Prize: {student.prize}</p>
                    <p className="text-sm text-gray-600">📚 {student.course}</p>
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-[#0C0950]">5.0 Rating</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Modal - Reduced image size */}
        <AnimatePresence>
          {activeStudent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setActiveStudent(null)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  {/* REDUCED IMAGE SIZE - changed from h-72 to h-56 */}
                  <img
                    src={activeStudent.image}
                    alt={activeStudent.name}
                    className="w-full h-56 object-contain bg-gray-100 rounded-t-2xl"
                  />
                  <button
                    onClick={() => setActiveStudent(null)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <h2 className="text-3xl font-bold text-[#0C0950]">{activeStudent.name}</h2>
                  <p className="text-[#3A36DB] font-medium">{activeStudent.role}</p>
                  <div className="mt-4">
                    <p className="text-gray-700 leading-relaxed">{activeStudent.fullStory}</p>
                  </div>
                  <div className="mt-4 p-4 bg-indigo-50 rounded-xl">
                    <p className="font-semibold text-[#0C0950]">🏆 Achievement: {activeStudent.achievement}</p>
                    <p className="font-semibold text-[#0C0950]">🎁 Prize: {activeStudent.prize}</p>
                    <p className="font-semibold text-[#0C0950]">📚 Course: {activeStudent.course}</p>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setActiveStudent(null)}
                      className="px-6 py-2 bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white rounded-lg hover:shadow-lg transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}