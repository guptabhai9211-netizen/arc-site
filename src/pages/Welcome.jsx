 import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import successAnimation from '../assets/ani2.json';

function Welcome() {
  const navigate = useNavigate();
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [binaryRain, setBinaryRain] = useState([]);

  const funFacts = [
    "ARC students have solved over 10,000 real-world problems through coding projects!",
    "Our curriculum is updated every 6 months to match industry standards.",
    "85% of ARC graduates secure jobs within 3 months of completion.",
    "The first computer programmer was Ada Lovelace in the 1840s!",
    "Typing code for one hour burns ~100 calories - keep coding!",
    "ARC offers 24/7 lab access for dedicated students.",
    "We've trained over 5,000 students since our founding."
  ];

  // Generate binary rain effect
  useEffect(() => {
    const generateBinary = () => {
      const elements = [];
      for (let i = 0; i < 50; i++) {
        elements.push({
          id: i,
          value: Math.random() > 0.5 ? '1' : '0',
          left: `${Math.random() * 100}%`,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 5,
          size: Math.random() > 0.7 ? 'text-sm' : 'text-xs'
        });
      }
      setBinaryRain(elements);
    };
    generateBinary();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) =>
        prevIndex === funFacts.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6 relative overflow-hidden">
      {/* Binary Rain Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {binaryRain.map((item) => (
          <motion.div
            key={item.id}
            className={`absolute text-green-400 font-mono ${item.size} ${item.size === 'text-sm' ? 'font-bold' : ''}`}
            style={{ left: item.left }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: '100vh', opacity: [0, 1, 0] }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {item.value}
          </motion.div>
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="relative bg-gray-900 bg-opacity-90 border-2 border-green-500 shadow-lg shadow-green-500/20 rounded-xl p-8 w-full max-w-lg text-center overflow-hidden"
      >
        {/* Circuit board border effect */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-green-500"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-green-500"></div>
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-green-500"></div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-green-500"></div>

        <div className="relative z-10">
          {/* Lottie animation with tech theme */}
          <div className="mb-6">
            <Lottie
              animationData={successAnimation}
              loop={false}
              autoplay={true}
              style={{ height: 120, width: 120, margin: "0 auto", filter: 'hue-rotate(100deg)' }}
            />
          </div>

          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-4 font-mono tracking-wider">
            <span className="text-green-400">ARC_</span>STUDENT_PORTAL
          </h1>

          <div className="bg-black border border-green-500 p-3 mb-6 rounded-md">
            <p className="text-green-400 font-mono text-sm">
              <span className="text-gray-400">$</span> user_registration --status <span className="text-cyan-400">successful</span>
            </p>
          </div>

          <p className="text-red-400 font-bold uppercase text-center mt-4 text-sm font-mono tracking-widest">
            <span className="blink">!</span> VERIFY GMAIL & ROLL NUMBER REQUIRED
          </p>

          {/* Fun Facts Terminal */}
          <div className="min-h-[120px] mb-8 relative overflow-hidden bg-gray-800 rounded-md border border-gray-700 p-4 text-left">
            <div className="flex items-center mb-2">
              <div className="flex space-x-2 mr-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 font-mono text-sm">terminal_facts.sh</span>
            </div>
            
            <div className="font-mono text-sm text-gray-300 h-16 relative overflow-hidden">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  className="absolute top-0 left-0 right-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: index === currentFactIndex ? 1 : 0,
                    y: index === currentFactIndex ? 0 : 10
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-green-400"> $ <span className="text-gray-300">{fact}</span></p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/loginportalisherefjdfjdklfjdklfjasklfjasfjuw49ru0wr4jowrjeofjfkdjf0eu034uj4ue9rtuej8gerhgnrghrgnersghergnoesghesgo')}
            className="relative w-full bg-gradient-to-r from-green-600 to-green-800 text-white font-bold py-3 px-4 rounded-md shadow-lg overflow-hidden font-mono tracking-wider border border-green-400"
          >
            <span className="relative z-10">[ CONTINUE_TO_LOGIN ]</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <div className="mt-6 text-xs text-gray-500 flex items-center justify-center font-mono">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            DATA_ENCRYPTED: AES-256
          </div>
        </div>
      </motion.div>

      {/* Add some tech elements */}
      <div className="absolute bottom-4 right-4 text-xs text-gray-600 font-mono">
        <p>SYSTEM_READY: <span className="text-green-500">TRUE</span></p>
        <p>VERSION: 2.4.1</p>
      </div>
    </div>
  );
}

export default Welcome;