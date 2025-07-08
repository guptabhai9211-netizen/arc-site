 "use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ContainerScroll } from "../component/ui/container-scroll-animation";

const testimonials = [
  {
    id: 4,
    name: "Vivek",
    role: "Hardware and Networking",
    // company: "Google",
    course: "Hardware and Networking",
    quote:
            "After completing the Tally and MS Office course, I got selected as a data entry operator. The practical approach and personal attention given by the teachers made all the difference." ,
     avatar: "/pic2.jpg",
    joined: "Batch of 2022",
  },
  {
    id: 1,
    name: "Ashish",
    role: "Basic Computer",
    // company: "Amazon",
    course: "Basic Computer",
    quote:
      "Excellent learning environment with updated labs and helpful instructors. I was able to complete my Tally and MS Office courses and now work as an accounts assistant",
    avatar: "/ashish.jpg",
    joined: "Batch of 2024",
  },
  {
    id: 2,
    name: "Dilip ",
    role: "ADCA",
    company: "",
    course: "ADCA & AI",
    quote:
      "I enrolled in the Basic Computer course with zero knowledge, but the trainers were so patient and supportive. Now I can confidently use a computer, browse the internet, and handle emails with ease.",
    avatar: "/pic.jpg",
    joined: "Batch of 2024",
  },
  {
    id: 3,
    name: "Piyush Dwivedi ",
    role: "Basic Computer",
    // company: "Wipro",
    course: "Basic Computer",
    quote:
     "The MS Word and Excel training was very practical and job-oriented. I now use these skills every day at my office job. The institute made learning so simple and fun!",
     avatar: "/pic1.jpg",
    joined: "Batch of 2025",
  },
  
  {
    id: 5,
    name: "Ankit",
    role: "ADCA",
    // company: "Swiggy",
    course: "ADCA",
    quote: 
     "The environment at the institute is friendly and professional. I completed the Basic Computer and MS Word course and now help my kids with their school projects and documents!",
     avatar: "/pic4.jpg",
    joined: "Batch of 2023",
  },
];

export default function TestimonialsScrollSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () =>
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const prevTestimonial = () =>
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Real People. Real Careers. <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Success Stories
              </span>
            </h1>
          </>
        }
      >
        <section
          ref={ref}
          id="testimonials"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-xl shadow-xl"
        >
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0C0950] to-[#3A36DB]">
                ARC Success Stories
              </span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Hear from our alumni who are making waves in the tech industry.
            </motion.p>
          </motion.div>

          {/* Carousel */}
          <div className="relative hidden lg:block">
            <motion.div
              key={testimonials[activeIndex].id}
              className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="mt-4 text-center md:text-left">
                    <h4 className="font-bold text-gray-900">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonials[activeIndex].role} {" "}
                      {testimonials[activeIndex].company}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {testimonials[activeIndex].course} •{" "}
                      {testimonials[activeIndex].joined}
                    </p>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700 italic text-lg mb-6">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="flex mr-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">Verified Alumni</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6 text-[#0C0950]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6 text-[#0C0950]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden mt-10">
            <motion.div
              className="grid grid-cols-1 gap-8"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {testimonials.slice(0, 3).map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-xl shadow-md"
                  variants={itemVariants}
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {testimonial.role} at {testimonial.company}
                      </p>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-4 text-sm italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-xs text-gray-500 mt-3">
                    {testimonial.course} • {testimonial.joined}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ delay: 0.8 }}
            >
              <button className="px-6 py-2 border border-[#0C0950] text-[#0C0950] rounded-lg hover:bg-[#0C0950] hover:text-white transition-all">
                View All Testimonials
              </button>
            </motion.div>
          </div>
        </section>
        <img
          src="/ab3.jpeg"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
