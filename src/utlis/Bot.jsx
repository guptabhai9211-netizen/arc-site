 import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { 
  MessageCircle, 
  X, 
  Send,
  ChevronDown,
  ChevronUp,
  Bot,
  User
} from "lucide-react";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [messages, setMessages] = useState([
    { 
      sender: "bot", 
      text: "Hello! I'm ARC Assistant. May I know your name to get started?",
      options: [
        "Courses offered",
        "Admission process",
        "Fee structure",
        "Contact details"
      ]
    },
  ]);
  const [input, setInput] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState("");
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (open && inputRef.current && !isMinimized) {
      inputRef.current.focus();
    }
  }, [open, isMinimized]);

  // Hide intro popup after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setOpen(!open);
    if (!open) {
      setShowIntro(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const simulateTyping = (callback) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, 1000 + Math.random() * 1000); // Random typing delay for natural feel
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input;
    const userMessage = { sender: "user", text: userText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Check if user is providing their name
    if (!userName && messages.length === 1) {
      const name = userText.split(' ')[0]; // Extract first name
      setUserName(name);
      simulateTyping(() => {
        setMessages(prev => [...prev, {
          sender: "bot",
          text: `Nice to meet you, ${name}! How can I assist you today?`,
          options: [
            "Courses offered",
            "Admission process",
            "Fee structure",
            "Contact details"
          ]
        }]);
      });
    } else {
      simulateTyping(() => {
        const reply = getBotReply(userText.toLowerCase());
        setMessages(prev => [...prev, reply]);
      });
    }
  };

  const handleQuickReply = (text) => {
    const userMessage = { sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    
    simulateTyping(() => {
      const reply = getBotReply(text.toLowerCase());
      setMessages(prev => [...prev, reply]);
    });
  };

  const getBotReply = (text) => {
    // Check for greetings
    if (/hi|hello|hey/.test(text)) {
      return {
        sender: "bot",
        text: userName ? `Hi again ${userName}! What can I help you with today?` : "Hello there! How can I assist you today?",
        options: [
          "View courses",
          "Admission process",
          "Fee structure"
        ]
      };
    }

    // Check for name
    if (!userName && (text.includes("name is") || text.includes("i am") || text.includes("i'm"))) {
      const name = text.replace(/my name is|i am|i'm/gi, '').trim().split(' ')[0];
      setUserName(name);
      return {
        sender: "bot",
        text: `Nice to meet you, ${name}! How can I help you today?`,
        options: [
          "Courses offered",
          "Admission process",
          "Fee structure"
        ]
      };
    }

    // Course inquiries
    if (text.includes("course") || text.includes("offer") || text.includes("program")) {
      return {
        sender: "bot",
        text: "We offer a wide range of courses to suit your career goals:",
          options : [
  "Full Stack Development (6 months)",
  "Data Science with Python (4 months)",
  "Advanced Excel & Tally (3 months)",
  "Cybersecurity Fundamentals (5 months)",
  "View all courses",
  "Which course is best for me?",
  "Basic Computer",
  "Graphic Designing",
  "Web Designing",
  "CAAD (Certificate in Advanced Accounting & Designing)",
  "CCA (Certificate in Computer Accounting)",
  "ACA (Advanced Certificate in Accounting)",
  "ADCA (Advanced Diploma in Computer Application)",
  "Digital Marketing",
  "Python",
  "Advanced Excel",
  "Busy",
  "Tally Prime",
  "CCC (Course on Computer Concept)"
]

      };
    }

    // Fee inquiries
    if (text.includes("fee") || text.includes("cost") || text.includes("price") || text.includes("payment")) {
      return {
        sender: "bot", 
        text: "Our course fees are competitively priced based on duration and specialization:\n\n• Short courses (1-3 months): ₹2,000 - ₹8,000\n• Professional courses (3-6 months): ₹10,000 - ₹25,000\n\nWould you like details about a specific course?",
        options: [
          "Full Stack Development fees",
          "Data Science fees",
          "Tally course fees",
          "Scholarship options"
        ]
      };
    }

    // Location inquiries
    if (text.includes("address") || text.includes("location") || text.includes("where") || text.includes("branch")) {
      return {
        sender: "bot", 
        text: "📍 Our main campus is at:\n\nARC Computer Institute\n123 Tech Park Road, Mumbai - 400001\n\nWe have branches in:\n• Andheri\n• Bandra\n• Thane\n• Navi Mumbai\n• Dadar\n\nWould you like directions or specific branch details?",
        options: [
          "Get directions to main campus",
          "Nearest branch to me",
          "Branch contact numbers"
        ]
      };
    }

    // Admission inquiries
    if (text.includes("admission") || text.includes("join") || text.includes("apply") || text.includes("enroll")) {
      return {
        sender: "bot", 
        text: "🎓 Admission Process:\n\n1. Choose your course\n2. Submit application (online or in-person)\n3. Attend counseling session\n4. Complete documentation\n5. Make payment\n6. Start your classes!\n\nWould you like me to guide you through any specific step?",
        options: [
          "Online application link",
          "Required documents",
          "Eligibility criteria",
          "Batch start dates"
        ]
      };
    }

    // Contact inquiries
    if (text.includes("contact") || text.includes("number") || text.includes("call") || text.includes("email")) {
      return {
        sender: "bot", 
        text: "📞 Contact Information:\n\n• Phone: +91 88604 48368\n• WhatsApp: +91 88604 48368\n• Email: sefdel333@gmail.com\n• Address: A-14 Main Road, Mukund Pur, Delhi - 110042 (Above Bank of Baroda)\n\nOffice Hours: Mon-Sat, 9AM-6PM",
        options: [
          "Chat on WhatsApp",
          "Request callback",
          "Email a counselor"
        ]
      };
    }

    // Certificate inquiries
    if (text.includes("certificate") || text.includes("certification") || text.includes("diploma")) {
      return {
        sender: "bot", 
        text: "🎖️ Our certificates are recognized by industry partners and include:\n\n• Course completion certificate\n• Project certification\n• Internship certificate (where applicable)\n• Placement assistance for eligible students\n\nWould you like to see sample certificates?",
        options: [
          "View certificate samples",
          "Verification process",
          "Placement support details"
        ]
      };
    }

    // Thank you responses
    if (text.includes("thank") || text.includes("thanks") || text.includes("appreciate")) {
      return {
        sender: "bot", 
        text: userName ? `You're welcome, ${userName}! 😊 Is there anything else I can help you with?` : "You're welcome! Is there anything else I can help you with?",
        options: [
          "Talk to counselor",
          "View courses again",
          "Visit website"
        ]
      };
    }

    // Default response
    return {
      sender: "bot", 
      text: userName ? `I'd be happy to help you, ${userName}! Here are some things I can assist with:` : "I can help with information about:",
      options: [
        "Popular courses",
        "Upcoming batches",
        "Placement statistics",
        "Campus facilities"
      ]
    };
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white p-4 rounded-full shadow-xl z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with ARC Assistant"
      >
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.div
              key="message-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="close-icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Greeting Popup */}
      <AnimatePresence>
        {showIntro && !open && (
          <motion.div
            className="fixed bottom-24 right-6 bg-white shadow-lg rounded-lg p-3 text-sm text-gray-800 z-50 border border-gray-200 max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <div className="flex items-start">
              <div className="bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white p-2 rounded-full mr-2">
                <MessageCircle size={16} />
              </div>
              <p>Hi there! I'm your ARC assistant. Click here to chat about courses, fees, or admissions.</p>
            </div>
            <div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-white transform rotate-45 border-b border-r border-gray-200"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 bg-white shadow-xl rounded-lg z-50 flex flex-col overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 48 : 500 
            }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
          >
            {/* Header */}
            <div 
              className="bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white px-4 py-3 flex justify-between items-center cursor-pointer"
              onClick={toggleMinimize}
            >
              <div className="flex items-center">
                <Bot size={18} className="mr-2" />
                <span className="font-medium">ARC Institute Assistant</span>
              </div>
              <button aria-label={isMinimized ? "Expand chat" : "Minimize chat"}>
                {isMinimized ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <>
                <div 
                  ref={chatContainerRef}
                  className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div
                        className={`max-w-[85%] rounded-lg px-4 py-2 text-sm ${
                          msg.sender === "bot"
                            ? "bg-white text-gray-800 border border-gray-200"
                            : "bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white"
                        }`}
                      >
                        {msg.sender === "bot" && (
                          <div className="flex items-center mb-1">
                            <Bot size={14} className="mr-1 text-[#3A36DB]" />
                            <span className="text-xs font-medium text-[#3A36DB]">ARC Assistant</span>
                          </div>
                        )}
                        {msg.sender === "user" && (
                          <div className="flex items-center mb-1 justify-end">
                            <span className="text-xs font-medium text-white/80 mr-1">You</span>
                            <User size={14} className="text-white/80" />
                          </div>
                        )}
                        
                        {msg.text.split('\n').map((paragraph, i) => (
                          <p key={i} className="mb-2 last:mb-0">{paragraph}</p>
                        ))}
                        
                        {msg.options && (
                          <div className="mt-3 space-y-2">
                            {msg.options.map((option, i) => (
                              <button
                                key={i}
                                onClick={() => handleQuickReply(option)}
                                className="block w-full text-left px-3 py-1.5 text-xs rounded border border-gray-200 hover:bg-gray-100 transition-colors"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      className="flex justify-start"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="max-w-[85%] rounded-lg px-4 py-2 text-sm bg-white text-gray-800 border border-gray-200">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-75"></div>
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-150"></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Input Area */}
                <div className="border-t border-gray-200 p-3 bg-white">
                  <div className="flex">
                    <input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#3A36DB]"
                      placeholder="Type your message..."
                      disabled={isTyping}
                    />
                    <button
                      onClick={handleSend}
                      className="bg-gradient-to-r from-[#0C0950] to-[#3A36DB] text-white px-4 rounded-r-lg disabled:opacity-50"
                      disabled={isTyping || !input.trim()}
                    >
                      <Send size={18} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    {isTyping ? "ARC Assistant is typing..." : "Typically replies instantly"}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;