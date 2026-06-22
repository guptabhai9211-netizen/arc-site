// component/Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Blog posts data with correct slugs for routing (matching BlogDetail mockBlogs)
  const blogPosts = [
    {
      id: 1,
      slug: "what-is-ai",
      title: "What is AI? The Future is Here",
      excerpt: "Dive deep into the world of Artificial Intelligence — from its origins to the breakthroughs that are reshaping industries today.",
      category: "Artificial Intelligence",
      categoryColor: "blue",
      date: "16/06/26",
      author: "ARC Author",
      featured: true,
      readTime: "6 min read"
    },
    {
      id: 2,
      slug: "chatgpt-perplexity-gemini",
      title: "Why Use ChatGPT, Perplexity & Google Gemini?",
      excerpt: "A comparison of the top AI assistants — their strengths, weaknesses, and which one is right for you.",
      category: "AI Tools",
      categoryColor: "purple",
      date: "16/06/26",
      author: "ARC Author",
      featured: false,
      readTime: "5 min read"
    },
    {
      id: 3,
      slug: "best-computer-courses",
      title: "Best Computer Courses After 12th",
      excerpt: "Upskill quickly with our curated short-term programs designed for working professionals and students alike.",
      category: "Courses",
      categoryColor: "green",
      date: "16/06/26",
      author: "ARC Author",
      featured: false,
      readTime: "8 min read"
    },
    {
      id: 4,
      slug: "mothers-day-celebration",
      title: "ARC Mother's Day Celebration 2025",
      excerpt: "A heartfelt and inspiring Mother's Day celebration at ARC Computer Institute on 11 May 2025.",
      category: "Events",
      categoryColor: "pink",
      date: "16/06/26",
      author: "ARC Author",
      featured: false,
      readTime: "4 min read"
    },
    {
      id: 5,
      slug: "digital-marketing-guide",
      title: "Digital Marketing: Need, Benefits & Who Can Do It",
      excerpt: "Why digital marketing is essential in 2026, and how you can build a thriving career in this ever-evolving field.",
      category: "Digital Marketing",
      categoryColor: "orange",
      date: "16/06/26",
      author: "ARC Author",
      featured: false,
      readTime: "6 min read"
    },
    {
      id: 6,
      slug: "why-choose-arc",
      title: "Why Choose ARC Computer Institute?",
      excerpt: "Discover what makes ARC the preferred choice for computer education — expert faculty, industry-ready curriculum, and more.",
      category: "Institute",
      categoryColor: "indigo",
      date: "16/06/26",
      author: "ARC Author",
      featured: false,
      readTime: "5 min read"
    }
  ];

  // Category color mapping
  const getCategoryColor = (color) => {
    const colors = {
      blue: "text-blue-600 bg-blue-50 border-blue-200",
      purple: "text-purple-600 bg-purple-50 border-purple-200",
      green: "text-green-600 bg-green-50 border-green-200",
      pink: "text-pink-600 bg-pink-50 border-pink-200",
      orange: "text-orange-600 bg-orange-50 border-orange-200",
      indigo: "text-indigo-600 bg-indigo-50 border-indigo-200",
      cyan: "text-cyan-600 bg-cyan-50 border-cyan-200",
      red: "text-red-600 bg-red-50 border-red-200"
    };
    return colors[color] || colors.blue;
  };

  // Handle share button click
  const handleShare = (e, title, slug) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/blog/${slug}`;
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Check out this article: ${title}`,
        url: url
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url).then(() => {
        alert(`🔗 Link copied to clipboard!\n\nShare "${title}" with your network.`);
      }).catch(() => {
        alert(`🌐 Share "${title}" with your network!\n\nURL: ${url}`);
      });
    }
  };

  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured === true) || blogPosts[0];
  const regularPosts = blogPosts.filter(post => post.id !== featuredPost.id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        
        {/* ===== HEADER ===== */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Latest Updates</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our Latest Insights
            </span>
          </h1>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Discover thought-provoking articles on technology, innovation, and leadership from our expert contributors.
          </p>
        </div>

        {/* ===== FEATURED POST ===== */}
        <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mb-10 md:mb-14 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
          <div className="grid md:grid-cols-5 gap-6 p-6 md:p-8">
            {/* Left Content */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Featured
                </span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-500">{featuredPost.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                <Link to={`/blog/${featuredPost.slug}`} className="hover:text-blue-600 transition-colors duration-300">
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-5 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                    A
                  </div>
                  {featuredPost.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  16 June 2026
                </span>
                <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {featuredPost.readTime}
                </span>
              </div>
            </div>
            {/* Right CTA */}
            <div className="md:col-span-2 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50/80 to-purple-50/80 rounded-xl p-6 border-2 border-dashed border-blue-200/60 hover:border-blue-400 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-3xl shadow-lg shadow-blue-500/25">
                🤖
              </div>
              <p className="font-semibold text-gray-700 text-center mt-3">Explore the future of AI</p>
              <Link 
                to={`/blog/${featuredPost.slug}`}
                className="mt-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 group"
              >
                Read Full Article 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ===== BLOG GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          
          {regularPosts.map((post, index) => (
            <article 
              key={post.id}
              className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-200 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-3">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getCategoryColor(post.categoryColor)}`}>
                  {post.category}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post.date}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug flex-1">
                <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                <span className="text-xs text-gray-500 flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white text-[10px] font-bold">
                    A
                  </div>
                  {post.author}
                </span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => handleShare(e, post.title, post.slug)}
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-300 p-1.5 hover:bg-blue-50 rounded-full"
                    aria-label="Share"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                  </button>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Blog;