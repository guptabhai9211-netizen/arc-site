   import { useState } from 'react';
import { FaThumbsUp, FaChalkboardTeacher, FaLaptopCode, FaBriefcase, FaBuilding, FaCheckCircle } from 'react-icons/fa';

const tabs = [
  {
    title: 'Industry Curriculum',
    icon: <FaCheckCircle className="mr-2" />,
    content: (
      <div className="p-4 md:p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Cutting-Edge Technology Curriculum</h3>
        <ul className="space-y-3 md:space-y-4 text-gray-700">
          <li className="flex items-start">
            <span className="text-yellow-500 mt-1 mr-2 text-lg">●</span>
            <div>
              <span className="font-semibold text-gray-900">Expert-Designed Programs:</span> Our courses are crafted by industry leaders from companies like Google, Microsoft, and Amazon, ensuring you learn exactly what employers want.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-500 mt-1 mr-2 text-lg">●</span>
            <div>
              <span className="font-semibold text-gray-900">Quarterly Updates:</span> We refresh our curriculum every 3 months to keep pace with technological advancements and industry demands.
            </div>
          </li>
        </ul>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8 text-center">
          <div className="bg-blue-50 p-3 md:p-4 rounded-lg border border-blue-100">
            <p className="text-2xl md:text-3xl font-bold text-blue-600">16+</p>
            <p className="text-xs md:text-sm font-medium text-gray-600">CERTIFICATION COURSES</p>
          </div>
          <div className="bg-blue-50 p-3 md:p-4 rounded-lg border border-blue-100">
            <p className="text-2xl md:text-3xl font-bold text-blue-600">600+</p>
            <p className="text-xs md:text-sm font-medium text-gray-600">HOURS OF CONTENT</p>
          </div>
          <div className="bg-blue-50 p-3 md:p-4 rounded-lg border border-blue-100 col-span-2 md:col-span-1">
            <p className="text-2xl md:text-3xl font-bold text-blue-600">100%</p>
            <p className="text-xs md:text-sm font-medium text-gray-600">PRACTICAL TRAINING</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Expert Faculty',
    icon: <FaChalkboardTeacher className="mr-2" />,
    content: (
      <div className="p-4 md:p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Learn From Industry Experts</h3>
        <div className="space-y-3 md:space-y-4 text-gray-700">
          <p>
            Our instructors aren't just teachers - they're active professionals working at top tech companies, bringing real-world insights directly to your classroom.
          </p>
          <ul className="space-y-2 md:space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mt-1 mr-2 text-lg">✓</span>
              <span><span className="font-semibold text-gray-900">12+ years</span> average industry experience</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mt-1 mr-2 text-lg">✓</span>
              <span><span className="font-semibold text-gray-900">Certified trainers</span> in specialized technologies</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mt-1 mr-2 text-lg">✓</span>
              <span><span className="font-semibold text-gray-900">1:1 mentorship</span> and career guidance</span>
            </li>
          </ul>
        </div>
        <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h4 className="font-semibold text-gray-800 mb-2">Faculty Highlights:</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center">
              <span className="text-blue-500 mr-1">•</span>
              <span>Google Certified</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 mr-1">•</span>
              <span>Microsoft MVPs</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 mr-1">•</span>
              <span>AWS Architects</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 mr-1">•</span>
              <span>Published Authors</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Portfolio Building',
    icon: <FaLaptopCode className="mr-2" />,
    content: (
      <div className="p-4 md:p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Professional Portfolio Development</h3>
        <div className="space-y-3 md:space-y-4 text-gray-700">
          <p>
            We transform students into professionals by helping them build impressive portfolios that showcase their skills to potential employers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-gray-800 mb-2">Portfolio Components:</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1">•</span>
                  <span>5-7 real-world projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1">•</span>
                  <span>GitHub repository</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1">•</span>
                  <span>Technical blog</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1">•</span>
                  <span>Personal website</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-gray-800 mb-2">Our Support:</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1">•</span>
                  <span>Weekly code reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1">•</span>
                  <span>Project ideation sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1">•</span>
                  <span>Design feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1">•</span>
                  <span>Showcase events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Placement Support',
    icon: <FaBriefcase className="mr-2" />,
    content: (
      <div className="p-4 md:p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Comprehensive Career Services</h3>
        <div className="space-y-3 md:space-y-4 text-gray-700">
          <p>
            Our dedicated placement team works tirelessly to connect you with top employers and prepare you for the job search process.
          </p>
          <div className="mt-4 md:mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                <h5 className="font-medium text-gray-800 mb-2">Interview Prep</h5>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-1">•</span>
                    <span>Technical mock interviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-1">•</span>
                    <span>DSA problem solving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-1">•</span>
                    <span>System design training</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                <h5 className="font-medium text-gray-800 mb-2">Career Development</h5>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-1">•</span>
                    <span>Resume workshops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-1">•</span>
                    <span>LinkedIn optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-1">•</span>
                    <span>Salary negotiation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-yellow-50 p-3 rounded-lg border border-yellow-100">
              <div className="flex items-center">
                <span className="text-yellow-500 font-bold mr-2">★</span>
                <span className="font-medium text-gray-800">87% placement rate within 3 months of graduation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Campus Facilities',
    icon: <FaBuilding className="mr-2" />,
    content: (
      <div className="p-4 md:p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">World-Class Learning Environment</h3>
        <div className="space-y-3 md:space-y-4 text-gray-700">
          <p>
            Our cutting-edge campus is designed to inspire innovation and facilitate hands-on learning with the latest technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Lab Facilities:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mt-1 mr-2">✓</span>
                  <span>i7 Workstations with dual monitors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mt-1 mr-2">✓</span>
                  <span>Cloud computing lab</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mt-1 mr-2">✓</span>
                  <span>AI/ML research lab</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mt-1 mr-2">✓</span>
                  <span>Cybersecurity lab</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Amenities:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mt-1 mr-2">✓</span>
                  <span>High-speed WiFi (1Gbps)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mt-1 mr-2">✓</span>
                  <span>24/7 access to lab facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mt-1 mr-2">✓</span>
                  <span>Cafeteria & lounge areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mt-1 mr-2">✓</span>
                  <span>On-premises hostel available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function InstituteAdvantage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            The <span className="text-blue-600">ARC Computer Institute</span> Advantage
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering the next generation of technology professionals with industry-aligned education and career-focused training.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {/* Tabs - Horizontal scroll on mobile */}
          <div className="flex overflow-x-auto pb-1 scrollbar-hide border-b">
            <div className="flex">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center px-4 py-3 md:px-6 md:py-4 text-sm md:text-base font-medium transition-all whitespace-nowrap ${
                    activeTab === index
                      ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50/50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {tab.icon}
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-6">
            <div className="md:pr-4">
              {tabs[activeTab].content}
              <div className="mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                  Learn More About Our Programs
                </button>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <div className="text-center">
                <FaThumbsUp className="w-24 h-24 text-blue-500 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Why Choose ARC?</h3>
                <p className="text-gray-600 mb-4">
                  We combine academic excellence with real-world application to create the most effective technology education experience.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Industry Partners</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Hands-on Labs</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Job Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section Below */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
            <p className="text-2xl md:text-3xl font-bold text-blue-600">15+</p>
            <p className="text-xs md:text-sm font-medium text-gray-600">YEARS EXPERIENCE</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
            <p className="text-2xl md:text-3xl font-bold text-blue-600">5,000+</p>
            <p className="text-xs md:text-sm font-medium text-gray-600">STUDENTS TRAINED</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
            <p className="text-2xl md:text-3xl font-bold text-blue-600">200+</p>
            <p className="text-xs md:text-sm font-medium text-gray-600">COMPANY PARTNERS</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
            <p className="text-2xl md:text-3xl font-bold text-blue-600">87%</p>
            <p className="text-xs md:text-sm font-medium text-gray-600">PLACEMENT RATE</p>
          </div>
        </div>
      </div>
    </section>
  );
}