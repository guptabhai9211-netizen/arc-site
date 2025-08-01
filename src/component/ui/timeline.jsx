 import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Timeline = ({ data = [] }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        {/* About Section with Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About ARC Computer Institute
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-4">
              ARC Computer Institute, run by Sandarbhdeep Educational Foundation (SEF), is an ISO 9001:2015 certified institute registered under the Ministry of Corporate Affairs.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-4">
              Founded by Anil Upadhyay, we aim to make quality computer education accessible to all through innovative teaching methods and industry-relevant curriculum.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                ISO 9001:2015 Certified
              </span>
              <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                Government Recognized
              </span>
              <span className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium">
                Industry Partnerships
              </span>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative  h-full md:h-170 rounded-xl overflow-hidden shadow-lg"
          >
       <video
  src="/anil.mp4"
  className="lg:w-full lg:h-full object-cover h-full w-full"
  autoPlay
  // controls
  // muted
  // loop
  // playsInline
>
  Your browser does not support the video tag.
</video>


            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-white text-xl md:text-2xl font-semibold">
               Founder and Director ARC Computer Institute
              </h3>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline Section */}
        <div ref={ref} className="relative pb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Our Journey
          </h2>
          
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-start pt-10 md:pt-20 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="h-4 w-4 rounded-full bg-blue-500 border-2 border-blue-300 p-2"
                  />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-gray-700">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-6 text-left font-bold text-gray-700">
                  {item.title}
                </h3>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  {item.content}
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Animated Timeline Line */}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-600 via-blue-400 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};