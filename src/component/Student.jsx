 import { useState } from "react";
import { motion } from "framer-motion";
// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";


const students = [
  {
    name: "Nisha",
    role: "Student",
    image: "/test3.jpg",
    description: "Nisha emerged as the 1st prize winner in the Computer Quiz Test and won a full Computer Set. Her sharp skills and enthusiasm for technology have truly set her apart.",
    achievement: "1st Prize Winner - Computer Quiz Test",
    prize: "Full Computer Set",
    // course: "ADCA (Advanced Diploma in Computer Applications)"
  },
  {
    name: "Sanjeev Vishwakarma",
    role: "Student",
    image: "/test1.jpg",
    description: "Sanjeev participated in our Computer Quiz Test and secured the 2nd prize, winning a brand new Smart Watch. His dedication and consistent performance have made him a role model for other students.",
    achievement: "2nd Prize Winner - Computer Quiz Test",
    prize: "Smart Watch",
    // course: "Digital Marketing Certification"
  },
  {
    name: "Sumit",
    role: "Student",
    image: "/test2.jpg",
    description: "Sumit performed exceptionally well in the Computer Quiz Test and received the 3rd prize — a stylish Safari Backpack. His consistent improvement and curiosity are commendable.",
    achievement: "3rd Prize Winner - Computer Quiz Test",
    prize: "Safari Backpack",
    // course: "Python Programming Course"
  },
];

export default function StudentTestimonials() {
  const [activeStudent, setActiveStudent] = useState(null);

  return (
    <>
      <Helmet>
        <title>Student Success Stories | ARC Computer Institute, Delhi | Alumni Achievements</title>
        <meta name="description" content="Read inspiring success stories from ARC Computer Institute students in Delhi. See how our courses in ADCA, Digital Marketing, and Python helped launch careers." />
        <meta name="keywords" content="computer institute success stories, student testimonials Delhi, ADCA course results, digital marketing student achievements, python programming alumni, ARC Computer Institute reviews" />
        <meta property="og:title" content="Student Success Stories | ARC Computer Institute, Delhi" />
        <meta property="og:description" content="Real student achievements and testimonials from ARC Computer Institute's professional courses in Delhi." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arccomputerinstitute.com/testimonials" />
        <meta property="og:image" content="https://www.arccomputerinstitute.com/images/og-testimonials.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.arccomputerinstitute.com/testimonials" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Student Success Stories",
              "description": "Testimonials from successful students of ARC Computer Institute in Delhi",
              "publisher": {
                "@type": "EducationalOrganization",
                "name": "ARC Computer Institute",
                "url": "https://www.arccomputerinstitute.com",
                "sameAs": [
                  "https://www.facebook.com/Arccomputerinstitute3",
                  "https://www.instagram.com/arcinstitute.21/",
                  "https://www.youtube.com/@sefclasses"
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <div 
        className="min-h-screen bg-gradient-to-br from-[#0C0950]/10 to-[#3A36DB]/10 flex flex-col items-center justify-center py-20 px-4"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0C0950] mb-6">
            Success Stories from Our <span className="text-[#3A36DB]">Talented Students</span>
          </h1>
          <p className="text-lg text-[#3A36DB]">
            Hear directly from our alumni about how ARC Computer Institute helped
            them launch successful careers in tech across Delhi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
          {students.map((student, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border border-[#0C0950]/10"
              whileHover={{ y: -10 }}
              onClick={() => setActiveStudent(student)}
              itemScope
              itemType="https://schema.org/Person"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={student.image}
                  alt={`${student.name} - ${student.role} at ARC Computer Institute`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0950]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm font-medium">Read More</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#0C0950]" itemProp="name">{student.name}</h2>
                <p className="text-[#3A36DB] font-medium" itemProp="jobTitle">{student.role}</p>
                <p className="text-sm text-gray-700 mt-4 italic" itemProp="description">{student.description}</p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-[#0C0950]">Achievement: <span className="font-normal">{student.achievement}</span></p>
                  <p className="text-sm font-medium text-[#0C0950]">Prize Won: <span className="font-normal">{student.prize}</span></p>
                  {/* <p className="text-sm font-medium text-[#0C0950]">Course: <span className="font-normal">{student.course}</span></p> */}
                </div>
                <div className="mt-4 flex items-center">
                  <div className="flex mr-2" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating" content="5" />
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
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

       

        
      </div>
    </>
  );
}