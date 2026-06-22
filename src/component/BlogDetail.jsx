// component/BlogDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

// ─── Mock Blog Data ────────────────────────────────────────────────────────────
const mockBlogs = [
  {
    _id: "1",
    slug: "what-is-ai",
    title: "कृत्रिम बुद्धिमत्ता (AI) क्या है और यह हमारे जीवन में कैसे उपयोगी है?",
    excerpt:
      "AI का मतलब कृत्रिम बुद्धिमत्ता (Artificial Intelligence) है, एक ऐसी तकनीक जो मशीनों और कंप्यूटरों को इंसानों की तरह सोचने, सीखने, समस्या सुलझाने और निर्णय लेने की क्षमता देती है।",
    content: `
      <p>AI का मतलब कृत्रिम बुद्धिमत्ता (Artificial Intelligence) है, एक ऐसी तकनीक जो मशीनों और कंप्यूटरों को इंसानों की तरह सोचने, सीखने, समस्या सुलझाने और निर्णय लेने की क्षमता देती है।</p>
      <h3>AI के मुख्य पहलू (Key Aspects of AI)</h3>
      <ul>
        <li><strong>सीखना (Learning):</strong> डेटा से पैटर्न पहचानना और अनुभव से खुद को बेहतर बनाना.</li>
        <li><strong>तर्क करना (Reasoning):</strong> नियमों और डेटा के आधार पर निष्कर्ष निकालना.</li>
        <li><strong>समस्या-समाधान (Problem-Solving):</strong> चुनौतियों का समाधान ढूंढना.</li>
        <li><strong>धारणा (Perception):</strong> देखना, सुनना और समझना.</li>
        <li><strong>भाषा समझना (Language Understanding):</strong> मानव भाषा को समझना और प्रतिक्रिया देना.</li>
      </ul>
      <h3>Real-Life Examples of AI You Use Daily</h3>
      <h4>1. Google Search</h4>
      <p>When you type: "Best mobile under 20000" — Google shows the best results automatically using AI.</p>
      <h4>2. Face Unlock in Mobile</h4>
      <p>Your phone unlocks by seeing your face. AI remembers and matches it every time.</p>
      <h4>3. YouTube & Instagram</h4>
      <p>You watch cricket videos — next day, YouTube shows more cricket. AI learns what you like.</p>
      <h4>4. Voice Assistants</h4>
      <p>"Hey Google, set alarm at 6 AM" — AI understands your voice and sets alarm correctly.</p>
      <h4>5. Google Maps</h4>
      <p>Shows best route, traffic updates. AI checks road conditions and saves your time.</p>
      <h3>AI in Student Life</h3>
      <p>AI suggests videos based on your weakness. Apps like BYJU'S, Unacademy use AI. Helps in writing, spelling & grammar checks, and step-by-step math solutions.</p>
      <h3>AI in the Real World</h3>
      <p>Hospitals use AI to detect diseases and read X-ray & MRI reports. Banks use AI to detect fraud. Amazon suggests products based on past shopping.</p>
      <p><strong>In short, AI is the technology of making machines 'smarter' so that they can perform tasks that previously required human intelligence.</strong></p>
      <p><strong>ARC Computer Institute Mukundpur is always keen to serve you the best.</strong></p>
    `,
    category: "Artificial Intelligence",
    categoryColor: "blue",
    featured: true,
    author: "ARC Author",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    createdAt: "2026-06-16",
    views: 1234,
  },
  {
    _id: "2",
    slug: "chatgpt-perplexity-gemini",
    title: "Why Do We Use ChatGPT, Perplexity & Google Gemini?",
    excerpt:
      "These three are AI tools. They help us think faster, learn better, and save time. They are like very smart helpers who are available 24×7.",
    content: `
      <p>These three are AI tools. They help us think faster, learn better, and save time.</p>
      <h3>1. ChatGPT – Your Study & Work Helper</h3>
      <p>Explains topics, helps in homework, writes letters, essays, notes, helps in coding & ideas.</p>
      <h3>2. Perplexity – Smart Search Engine</h3>
      <p>Finds answers from the internet, gives short correct answers, shows source of information.</p>
      <h3>3. Google Gemini – Google's AI Brain</h3>
      <p>Helps in searching, Gmail, Docs, understands images & text, helps in planning.</p>
      <p><strong>AI tools are like calculators for the brain. They don't make you lazy if used correctly.</strong></p>
    `,
    category: "AI Tools",
    categoryColor: "purple",
    featured: false,
    author: "ARC Author",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/8386438/pexels-photo-8386438.jpeg",
    createdAt: "2026-06-16",
    views: 856,
  },
  {
    _id: "3",
    slug: "best-computer-courses",
    title: "Best Computer Courses After 12th",
    excerpt:
      "Learning computer is very important for 12th passed students these days. Here are some wonderful short term computer courses.",
    content: `
      <p>Learning computer is very important for 12th passed students. Here are the best computer courses at ARC Computer Institute.</p>
      <h3>1. Basic Computer — 3 months</h3>
      <p>MS Word, Excel, PowerPoint, Google Drive, Typing. Good for office & data entry jobs.</p>
      <h3>2. Graphic Designing — 5 months</h3>
      <p>Adobe Photoshop, CorelDraw, Illustrator, Canva. Good for freelancers & creatives.</p>
      <h3>3. Tally with GST — 3 months</h3>
      <p>Tally ERP, GST entries, billing & invoicing. Good for accounts assistant jobs.</p>
      <h3>4. Digital Marketing — 5 months</h3>
      <p>SEO, Social Media Marketing, Google Ads, Content Marketing.</p>
      <h3>5. Full Stack Web Developer — 10 months</h3>
      <p>HTML, CSS, Tailwind, JavaScript, React, Node, MongoDB, Python, MySQL.</p>
      <p><strong>ARC Computer Institute is providing all these courses in Mukundpur, Mukandpur & Burari area.</strong></p>
    `,
    category: "Courses",
    categoryColor: "green",
    featured: false,
    author: "ARC Author",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg",
    createdAt: "2026-06-16",
    views: 512,
  },
  {
    _id: "4",
    slug: "mothers-day-celebration",
    title: "ARC Mother's Day Celebration 2025",
    excerpt: "A heartfelt and inspiring Mother's Day celebration at ARC Computer Institute on 11 May 2025.",
    content: `
      <p>ARC Computer Institute organized a deeply emotional and inspiring Mother's Day celebration on 11 May 2025.</p>
      <p>Mothers were welcomed with flower showers and resounding applause. The atmosphere was filled with positivity, respect, and emotional warmth.</p>
      <p>Various competitions were organized exclusively for mothers. Winning mothers were presented with prizes and appreciation awards.</p>
      <p><strong>Mother's Day Celebration 2025 has become a memorable chapter in the history of ARC Computer Institute.</strong></p>
    `,
    category: "Events",
    categoryColor: "pink",
    featured: false,
    author: "ARC Author",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    createdAt: "2026-06-16",
    views: 2345,
  },
  {
    _id: "5",
    slug: "digital-marketing-guide",
    title: "Digital Marketing: Need, Benefits & Who Can Do It",
    excerpt: "A Complete Guide by ARC Computer Institute, Delhi. Learn digital marketing with practical exposure.",
    content: `
      <p>Digital Marketing is the promotion of products, services, or brands using digital platforms & the internet.</p>
      <h3>Major Components</h3>
      <ul>
        <li>Search Engine Optimization (SEO)</li>
        <li>Social Media Marketing (SMM)</li>
        <li>Google Ads & Paid Advertising</li>
        <li>Content Marketing</li>
        <li>Email Marketing</li>
      </ul>
      <p><strong>If you want to learn digital marketing with practical exposure, ARC Computer Institute, Mukundpur (Delhi) is the right place.</strong></p>
    `,
    category: "Digital Marketing",
    categoryColor: "orange",
    featured: false,
    author: "ARC Author",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/4134784/pexels-photo-4134784.jpeg",
    createdAt: "2026-06-16",
    views: 678,
  },
  {
    _id: "6",
    slug: "why-choose-arc",
    title: "Why Choose ARC Computer Institute?",
    excerpt:
      "ARC Computer Institute, Mukundpur Delhi, is a trusted and career-focused computer training institute run by Sandarbhdeep Educational Foundation (SEF).",
    content: `
      <p><strong>ARC Computer Institute, Mukundpur Delhi, is a trusted and career-focused computer training institute run by Sandarbhdeep Educational Foundation (SEF).</strong></p>
      <h3>Why Choose ARC:</h3>
      <ul>
        <li><strong>Job Oriented Courses:</strong> Tally, Digital Marketing, Graphic Designing, Python, ADCA, and more.</li>
        <li><strong>100% Practical Training:</strong> Hands-on computer practice with real-life projects.</li>
        <li><strong>Affordable Fee Structure:</strong> Quality education at reasonable fees.</li>
        <li><strong>Placement & Career Guidance:</strong> Interview preparation and job support.</li>
        <li><strong>ISO Certified Institute:</strong> Registered and trusted.</li>
      </ul>
      <p><strong>With expert faculty, practical training, and career support, ARC is an ideal choice for IT students.</strong></p>
    `,
    category: "Institute",
    categoryColor: "indigo",
    featured: false,
    author: "ARC Author",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    createdAt: "2026-06-16",
    views: 3456,
  },
];

// ─── Category Badge Colors ─────────────────────────────────────────────────────
const categoryStyles = {
  blue:   { bg: "bg-blue-100",   text: "text-blue-700",   dot: "bg-blue-500"   },
  purple: { bg: "bg-purple-100", text: "text-purple-700", dot: "bg-purple-500" },
  green:  { bg: "bg-emerald-100",text: "text-emerald-700",dot: "bg-emerald-500"},
  pink:   { bg: "bg-pink-100",   text: "text-pink-700",   dot: "bg-pink-500"   },
  orange: { bg: "bg-orange-100", text: "text-orange-700", dot: "bg-orange-500" },
  indigo: { bg: "bg-indigo-100", text: "text-indigo-700", dot: "bg-indigo-500" },
};

// ─── Framer Motion Variants ────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Reading Progress Bar ──────────────────────────────────────────────────────
const ReadingProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 z-50 origin-left"
    />
  );
};

// ─── Share Button ──────────────────────────────────────────────────────────────
const ShareBtn = ({ onClick, color, children, label }) => (
  <motion.button
    whileHover={{ scale: 1.12, y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    title={label}
    className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transition-shadow hover:shadow-lg ${color}`}
  >
    {children}
  </motion.button>
);

// ─── Related Post Card ─────────────────────────────────────────────────────────
const RelatedCard = ({ post, index }) => {
  const cat = categoryStyles[post.categoryColor] || categoryStyles.blue;
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="h-full"
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
      >
        <div className="overflow-hidden h-40 flex-shrink-0">
          <motion.img
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${cat.bg} ${cat.text} self-start`}>
            <span className={`w-1.5 h-1.5 rounded-full ${cat.dot}`} />
            {post.category}
          </span>
          <h4 className="font-bold text-gray-800 mt-2 text-sm leading-snug group-hover:text-blue-600 transition line-clamp-2 flex-1">
            {post.title}
          </h4>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{post.excerpt}</p>
          <span className="inline-flex items-center gap-1 mt-3 text-xs text-blue-600 font-semibold">
            Read More
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
        {/* Bottom line - at the very bottom of the card */}
        <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-500 flex-shrink-0"></div>
      </Link>
    </motion.div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [copied, setCopied] = useState(false);
  const articleRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: articleRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => {
      const found = mockBlogs.find((b) => b.slug === slug);
      setBlog(found || null);
      if (found) {
        setRelatedPosts(mockBlogs.filter((b) => b.category === found.category && b._id !== found._id));
      }
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [slug]);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const share = {
    facebook: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, "_blank"),
    twitter:  () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`, "_blank"),
    linkedin: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, "_blank"),
    whatsapp: () => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(blog.title + " - " + window.location.href)}`, "_blank"),
    copy: () => {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    },
  };

  // ── Loading ──────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-600"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-400 text-sm tracking-wide"
        >
          Loading article…
        </motion.p>
      </div>
    );
  }

  // ── Not Found ────────────────────────────────────────────────────────────────
  if (!blog) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="min-h-screen flex items-center justify-center bg-white px-4"
      >
        <div className="text-center">
          <motion.div variants={scaleIn} className="text-7xl mb-4">📄</motion.div>
          <motion.h1 variants={fadeUp} className="text-2xl font-bold text-gray-800">Article Not Found</motion.h1>
          <motion.p variants={fadeUp} custom={1} className="text-gray-500 mt-2">The article you're looking for doesn't exist.</motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <Link to="/blog" className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium text-sm">
              ← Back to Blog
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  const cat = categoryStyles[blog.categoryColor] || categoryStyles.blue;

  return (
    <>
      <Helmet>
        <title>{blog.title} | ARC Institute Blog</title>
        <meta name="description" content={blog.excerpt} />
      </Helmet>

      {/* Reading Progress */}
      <ReadingProgressBar />

      <div className="bg-white min-h-screen" ref={articleRef}>

        {/* ── HERO ────────────────────────────────────────────────────────────── */}
        <div className="relative overflow-hidden min-h-[520px] flex items-end">
          {/* Background Image with Parallax */}
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute inset-0"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover scale-110"
              />
            )}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/80 to-gray-800/40" />
            {/* Decorative blobs */}
            <div className="absolute top-10 right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-56 h-56 bg-purple-500/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Hero Content */}
          <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 pb-14 pt-32">
            {/* Back Link - Connected to Blog page */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                Back to all articles
              </Link>
            </motion.div>

            {/* Category Badge */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className={`inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-4 ${cat.bg} ${cat.text}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${cat.dot}`} />
                {blog.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight"
            >
              {blog.title}
            </motion.h1>

            {/* Meta Row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-white/60 text-sm"
            >
              {[
                { icon: "👤", label: blog.author },
                { icon: "📅", label: formatDate(blog.createdAt) },
                { icon: "⏱️", label: blog.readTime },
                { icon: "👁️", label: `${blog.views.toLocaleString()} views` },
              ].map((m) => (
                <span key={m.label} className="flex items-center gap-1.5">
                  <span>{m.icon}</span>
                  <span>{m.label}</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── CONTENT AREA ────────────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">

          {/* Excerpt Card */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-xl p-6 mb-10"
          >
            <p className="text-gray-700 text-base italic leading-relaxed">{blog.excerpt}</p>
          </motion.div>

          {/* Article Body */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-800 prose-headings:tracking-tight
              prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
              prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-2 prose-h4:text-blue-700
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
              prose-li:text-gray-600 prose-li:leading-relaxed
              prose-strong:text-gray-800
              prose-ul:space-y-1
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:rounded-xl prose-blockquote:px-6 prose-blockquote:py-4
              prose-img:rounded-2xl prose-img:shadow-lg
            "
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* ── SHARE SECTION ──────────────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 pt-10 border-t border-gray-100"
          >
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-5">Share this article</p>
            <div className="flex flex-wrap items-center gap-3">
              <ShareBtn onClick={share.facebook} color="bg-[#1877F2]" label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </ShareBtn>
              <ShareBtn onClick={share.twitter} color="bg-black" label="Twitter / X">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </ShareBtn>
              <ShareBtn onClick={share.linkedin} color="bg-[#0A66C2]" label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </ShareBtn>
              <ShareBtn onClick={share.whatsapp} color="bg-[#25D366]" label="WhatsApp">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </ShareBtn>
              {/* Copy Link */}
              <motion.button
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={share.copy}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold transition shadow-sm"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span key="copied" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-green-600">
                      ✓ Copied!
                    </motion.span>
                  ) : (
                    <motion.span key="copy" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                      🔗 Copy Link
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>

          {/* ── AUTHOR BOX ──────────────────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 flex items-start gap-5 border border-gray-100"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-extrabold flex-shrink-0 shadow-lg"
            >
              {blog.author.charAt(0)}
            </motion.div>
            <div>
              <h4 className="font-bold text-gray-800 text-lg">{blog.author}</h4>
              <p className="text-sm text-blue-600 font-medium">ARC Computer Institute</p>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Expert in technology education with years of experience in teaching and training students across Delhi.
              </p>
            </div>
          </motion.div>

          {/* ── RELATED POSTS ───────────────────────────────────────────────────── */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <h3 className="text-xl font-extrabold text-gray-800">Related Articles</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {relatedPosts.slice(0, 3).map((post, i) => (
                  <RelatedCard key={post._id} post={post} index={i} />
                ))}
              </div>
            </div>
          )}

          {/* ── CTA BANNER ──────────────────────────────────────────────────────── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-10 text-center text-white shadow-2xl"
          >
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl" />

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-2xl md:text-3xl font-extrabold relative z-10"
            >
              Explore More Insights ✨
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-white/80 mt-2 text-sm relative z-10"
            >
              Check out other articles from our expert team at ARC Institute.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="relative z-10"
            >
              <Link to="/blog">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 px-8 py-3.5 bg-white text-blue-700 font-bold rounded-2xl text-sm shadow-lg transition"
                >
                  View All Articles →
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Bottom Spacer */}
          <div className="h-16" />
        </div>
      </div>
    </>
  );
};

export default BlogDetail;