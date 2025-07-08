 import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

export function VideoShowcaseSection() {
   const videos = [
  {
    id: 1,
    title: "What & Why is MS-Excel? Highly demanded video",
    description:
      "Understand the fundamentals and real-world importance of MS Excel — why it's a must-have skill for professionals across industries.",
    youtubeId: "e7PBOnozkr4", // Use correct YouTube ID here
  },
  {
    id: 2,
    title: "Journal Voucher In Tally. (Practical)",
    description:
      "Learn how to practically create Journal Vouchers in Tally, a key part of mastering accounting entries and financial management.",
    youtubeId: "aTJ7Vg20NxE", // Replace with real ID
  },
  {
    id: 3,
    title: "Salary Sheet in Excel? (Be Expert of Salary sheet)",
    description:
      "Master the art of creating and managing salary sheets in Excel, a vital skill for HR, payroll, and admin professionals.",
    youtubeId: "eEg0IKAhIe4", // Real YouTube ID
  }
];


  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
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
            <span className="text-blue-600">Explore</span> ARC Institute
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our world-class facilities, student experiences, and
            innovative teaching methods through these videos.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* YouTube Iframe */}
              <div className="w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FaYoutube className="text-red-600" />
                  <span className="text-xs font-medium text-gray-500">
                    YouTube
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {video.title}
                </h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.youtube.com/@sefclasses" // Replace with actual channel link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
          >
            <FaYoutube className="mr-2" />
            Visit Our YouTube Channel
          </a>
        </motion.div>
      </div>
    </section>
  );
}
