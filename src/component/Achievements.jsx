import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const AchievementsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    {
      id: 1,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      value: 15000,
      prefix: "+",
      label: "Students Trained",
      duration: 2.5
    },
    {
      id: 2,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      value: 98,
      suffix: "%",
      label: "Placement Record",
      duration: 3
    },
    {
      id: 3,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      value: 2,
      suffix: "+",
      label: "Branches in Delhi",
      duration: 1.5
    },
    {
      id: 4,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      value: 50,
      prefix: "+",
      label: "Expert Trainers",
      duration: 2
    }
  ];

  return (
    <section 
      id="achievements" 
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0C0950] to-[#3A36DB]"
      ref={ref}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white mask mask-circle mix-blend-overlay"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ARC Achievements
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Years of excellence in tech education with proven results
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5,
                delay: stat.id * 0.1
              }}
              whileHover={{ 
                y: -5,
                backgroundColor: "rgba(255,255,255,0.15)"
              }}
            >
              <div className="flex justify-center text-white mb-4">
                <div className="p-3 bg-white/20 rounded-full">
                  {stat.icon}
                </div>
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={stat.duration}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                  />
                )}
                {!inView && (
                  <span>0{stat.suffix || ""}</span>
                )}
              </div>
              
              <h3 className="text-lg font-medium text-white/90">
                {stat.label}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="flex items-center justify-center my-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="h-px bg-white/30 w-1/3"></div>
          <div className="mx-4 text-white/50">★</div>
          <div className="h-px bg-white/30 w-1/3"></div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
        >
          <svg
            className="w-10 h-10 mx-auto text-white/50 mb-6"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-xl text-white/90 mb-6">
            "This institute transformed my career completely. The hands-on training and industry exposure helped me land my dream job  within 3 months of completing the course."
          </p>
          {/* <div className="flex items-center justify-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Alumni"
              className="w-12 h-12 rounded-full border-2 border-white mr-4"
            />
            <div className="text-left">
              <h4 className="font-medium text-white">Priya Sharma</h4>
              <p className="text-sm text-white/70">Full-Stack Developer at Google</p>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;