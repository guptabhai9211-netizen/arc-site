import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const students = [
  {
    name: "Sanjeev Vishwakarma",
    // role: "Graphic Designer",
    // company: "Spyne.ai",
    // videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    image: "/test1.jpg",
  },
  {
    name: "Nisha",
    // role: "Motion Designer",
    // company: "Interslice Pvt Ltd",
    // videoUrl: "https://www.w3schools.com/html/movie.mp4",
    image: "/test3.jpg",
  },
  {
    name: "Sumit",
    // role: "UI-UX Designer",
    // company: "Fitspire",
    // videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    image: "/test2.jpg",
  },
];

export default function StudentTestimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0C0950]/10 to-[#3A36DB]/10 flex flex-col items-center justify-center py-20 px-4">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0C0950] mb-6">
          Success Stories from Our Students
        </h2>
        <p className="text-lg text-[#3A36DB]">
          Hear directly from our alumni about how ARC Computer Institute helped 
          them launch successful careers in tech.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {students.map((student, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border border-[#0C0950]/10"
            whileHover={{ y: -10 }}
            onClick={() => setActiveVideo(student)}
          >
            <div className="relative h-60 overflow-hidden">
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0950]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm font-medium">Watch Testimonial</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0C0950]">{student.name}</h3>
              <p className="text-[#3A36DB] font-medium">{student.role}</p>
              <p className="text-sm text-gray-600 mt-2">Placed at {student.company}</p>
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
        ))}
      </div>

      {/* <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 bg-[#0C0950]/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative pt-[56.25%] bg-black">
                <video 
                  controls 
                  autoPlay 
                  className="absolute inset-0 w-full h-full"
                >
                  <source src={activeVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6 bg-gradient-to-r from-[#0C0950] to-[#3A36DB]">
                <h3 className="text-xl font-bold text-white">{activeVideo.name}</h3>
                <p className="text-white/90">{activeVideo.role} @ {activeVideo.company}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
}