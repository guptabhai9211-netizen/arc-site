  import { motion } from "framer-motion";
  import { useState } from "react";

  const TestimonialSection = () => {
    const [isPaused, setIsPaused] = useState(false);

    const testimonials = [
      {
        id: 1,
        name: "Vivek",
        course: "Hardware & Networking",
        avatar: "/pic2.jpg",
        content: "The hardware course gave me hands-on experience with real devices. Now I'm working as a network technician at a local IT firm.",
        rating: 5
      },
      {
        id: 2,
        name: "Ashish",
        course: "Basic Computer",
        avatar: "/ashish.jpg",
        content: "As a complete beginner, the basic computer course made me confident in using computers. I can now help my children with their school projects.",
        rating: 4
      },
      {
        id: 3,
        name: "Dilip",
        course: "ADCA",
        avatar: "/pic.jpg",
        content: "The ADCA course covered everything from accounting to web design. I started my own cyber cafe after completing this course.",
        rating: 5
      },
      
      {
        id: 5,
        name: "Ankit",
        course: "ADCA",
        avatar: "/pic4.jpg",
              content: "The ADCA course provided me with a solid foundation in computer applications, from MS Office to accounting software. It helped me land my first job in an office environment.",
        rating: 4
      },
      
    ];

    return (
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#0C095010]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0C0950] to-[#3A36DB]">Students Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our students who transformed their careers with our courses
            </p>
          </motion.div>

          <div 
            className="relative overflow-hidden py-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                ...(isPaused && { duration: 0 })
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${index}`} 
                  className="flex-shrink-0 w-80 md:w-96 px-4"
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg h-full border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="flex -space-x-2">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full border-2 border-white"
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-[#3A36DB]">{testimonial.course}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{testimonial.content}</p>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile version - stacked testimonials without marquee */}
          <div className="md:hidden mt-8 grid gap-6">
            {testimonials.slice(0, 3).map(testimonial => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-2">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-white"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-[#3A36DB]">{testimonial.course}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default TestimonialSection;