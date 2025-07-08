import { FaFacebookF, FaInstagram, FaBehance, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaWhatsapp, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f141c] to-[#0a0d12] text-gray-300 px-6 py-16 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 pb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <FaLaptopCode className="text-blue-500 text-3xl" />
              <div>
                <h1 className="text-2xl font-bold text-white bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  ARC COMPUTER EDUCATION
                </h1>
                <p className="text-sm text-gray-400 mt-1">Empowering the digital generation since 2010</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              ARC Computer Institute, run by Sandarbhdeep Educational Foundation (SEF), is an ISO 9001:2015 certified institute registered under the Ministry of Corporate Affairs. Founded by Anil Kumar, we aim to make quality computer education accessible to all.
              </p>
<div className="space-y-4">
  <div className="flex space-x-4">
    {[
      {
        icon: <FaFacebookF className="text-lg" />,
        label: "Facebook",
        link: "https://www.facebook.com/share/1FGfEcXFkR/"
      },
      {
        icon: <FaInstagram className="text-lg" />,
        label: "Instagram",
        link: "https://www.instagram.com/arcinstitute.21?igsh=MWc2Z21sOHF4bXRxOQ=="
      },
      {
        icon: <FaYoutube className="text-lg" />,
        label: "YouTube",
        link: "https://youtube.com/@sefclasses?si=QGPoe-7wyOd50OQN"
      },
       
    ].map((social, index) => (
      <a
        key={index}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full text-gray-300 hover:text-white transition-all duration-300"
        aria-label={social.label}
      >
        {social.icon}
      </a>
    ))}
  </div>

  <div className="flex items-center space-x-2">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
      alt="Get on Google Play"
      className="w-32 h-auto transition-transform hover:scale-105 cursor-pointer"
    />
  </div>
</div>

                      </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-6 pb-2 border-b border-gray-700 flex items-center">
              <FaGraduationCap className="mr-2 text-blue-400" />
              Quick Links
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: "All Courses", path: "/courses", icon: "📚" },
                { label: "About", path: "/about", icon: "🗓️" },
                { label: "Placements", path: "/about", icon: "💼" },
                { label: "Student Projects", path: "/MediaGallery", icon: "🖥️" },
                // { label: "Certificate Verification", path: "/verify", icon: "🔍" },
                // { label: "Hire Our Students", path: "/hire", icon: "👔" },
                // { label: "Faculty", path: "/faculty", icon: "👩‍🏫" },
                { label: "Learning Center", path: "/contactBraches", icon: "🏫" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="flex items-center text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200 group"
                >
                  <span className="mr-2 group-hover:scale-110 transition-transform">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-6 pb-2 border-b border-gray-700 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resources
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                // { label: "Blog & Articles", path: "/blog", icon: "✍️" },
                { label: "Free Tutorials", path: "/VideoShowcaseSection", icon: "🎥" },
                { label: "Student Portal", path: "/loginportalisherefjdfjdklfjdklfjasklfjasfjuw49ru0wr4jowrjeofjfkdjf0eu034uj4ue9rtuej8gerhgnrghrgnersghergnoesghesgo", icon: "🔑" },
                // { label: "Download Brochure", path: "/brochure", icon: "📥" },
                { label: "FAQs", path: "/faqs", icon: "❓" },
                { label: "Testimonials", path: "/MediaGallery", icon: "🌟" },
                { label: "Events & Workshops", path: "/MediaGallery", icon: "🎪" },
                { label: "Career Guidance", path: "/career", icon: "🧭" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="flex items-center text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200 group"
                >
                  <span className="mr-2 group-hover:scale-110 transition-transform">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-white font-semibold text-lg mb-6 pb-2 border-b border-gray-700 flex items-center">
              <FaLocationDot className="mr-2 text-blue-400" />
              Contact Us
            </h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <FaLocationDot className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  A-14 Main Road, Mukund Pur
Delhi - 110042
(Above Bank of Baroda)
                </p>
                <FaLocationDot className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                 25 Futa Road, Near AAP Party Office
West Kamal Vihar, Burari
Delhi - 110084
                </p>
              </div>

              <div className="flex items-center">
                <FaPhone className="text-blue-400 mr-3" />
                <div>
                  <p className="text-gray-400 text-sm">+91 88604 48368</p>
                  <p className="text-gray-400 text-sm flex items-center mt-1">
                    <FaWhatsapp className="text-green-500 mr-2" /> +91 8586 919186
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3" />
                <p className="text-gray-400 text-sm">sefdel333@gmail.com
</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Link
                to="/contactSection"
                className="block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 px-4 py-3 rounded-md text-white text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/20"
              >
                <span>📞</span>
                <span>Enquire Now</span>
              </Link>
              
               
              
              <Link
                to="/loginportalisherefjdfjdklfjdklfjasklfjasfjuw49ru0wr4jowrjeofjfkdjf0eu034uj4ue9rtuej8gerhgnrghrgnersghergnoesghesgo"
                className="block border-2 border-gray-700 hover:border-blue-500 px-4 py-3 rounded-md text-white text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-gray-800/50"
              >
                <span>👨‍🎓</span>
                <span>Student Login</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} ARC Computer Education. All Rights Reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Registered with MSME | ISO 9001:2015 Certified | Govt. Recognized
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/privacypolicy" className="text-gray-500 hover:text-blue-400 text-xs transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/TermsOfService" className="text-gray-500 hover:text-blue-400 text-xs transition-colors duration-200">
                Terms of Service
              </Link>
              {/* <Link to="/RefundPolicy" className="text-gray-500 hover:text-blue-400 text-xs transition-colors duration-200">
                Refund Policy
              </Link> */}
              <Link to="/sitemap" className="text-gray-500 hover:text-blue-400 text-xs transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-xs">
              Developed with ❤️ by <a href="https://wa.me/919718659236" className="text-blue-400 hover:underline">Ankit Singh</a> | 
              <a href="https://www.avdevelopment.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">AV Development</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}