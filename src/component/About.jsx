 import React from "react";
import { Timeline } from "../component/ui/timeline";

export function InstituteTimeline() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-gray-600 md:text-base">
            Launched our Advanced Diploma in Artificial Intelligence and Machine Learning program
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/Anil_sir.jpeg"
              alt="Instructor teaching AI concepts in our new lab"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md transition-all duration-300 hover:border-2 hover:border-blue-500 hover:shadow-lg md:h-44 lg:h-60"
              loading="lazy"
            />
            <img
              src="/img2.jpg"
              alt="Students celebrating graduation at our institute in 2024"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md transition-all duration-300 hover:border-2 hover:border-blue-500 hover:shadow-lg md:h-44 lg:h-60"
              loading="lazy"
            />
            <img
              src="/ab.JPEG"
              alt="Annual hackathon winners showcasing their tech projects"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md transition-all duration-300 hover:border-2 hover:border-blue-500 hover:shadow-lg md:h-44 lg:h-60"
              loading="lazy"
            />
            <img
              src="/ab1.jpeg"
              alt="New campus building with modern computer labs"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md transition-all duration-300 hover:border-2 hover:border-blue-500 hover:shadow-lg md:h-44 lg:h-60"
              loading="lazy"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-gray-600 md:text-base">
            Expanded our course offerings with cybersecurity and cloud computing specializations
          </p>
          <p className="mb-8 text-sm font-normal text-gray-600 md:text-base">
            Partnered with leading tech companies for student internships and placements
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/ab4.JPEG"
              alt="Students working in our cybersecurity lab"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md transition-all duration-300 hover:border-2 hover:border-blue-500 hover:shadow-lg md:h-44 lg:h-60"
              loading="lazy"
            />
            <img
              src="/ab6.JPG"
              alt="Industry partners visiting our campus for recruitment"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md transition-all duration-300 hover:border-2 hover:border-blue-500 hover:shadow-lg md:h-44 lg:h-60"
              loading="lazy"
            />
            <img
              src="/ab7.JPG"
              alt="Annual student project showcase event"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md transition-all duration-300 hover:border-2 hover:border-blue-500 hover:shadow-lg md:h-44 lg:h-60"
              loading="lazy"
            />
            <img
              src="/ab8.JPG"
              alt="Faculty training session on latest technologies"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md transition-all duration-300 hover:border-2 hover:border-blue-500 hover:shadow-lg md:h-44 lg:h-60"
              loading="lazy"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-gray-600 md:text-base">
            Achievements and milestones from our foundation year:
          </p>
          <div className="mb-8">
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600 md:text-base">
                <span className="text-yellow-500">★</span> Established computer labs with 200 workstations
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600 md:text-base">
                <span className="text-yellow-500">★</span> Launched our flagship Software Engineering program
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600 md:text-base">
                <span className="text-yellow-500">★</span> Hosted first annual tech symposium with 500+ attendees
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <section className="w-full bg-white py-12" aria-labelledby="timeline-heading">
      <div className="mx-auto max-w-7xl px-4">
        <h2 id="timeline-heading" className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
          Our Institute's Journey & Milestones
        </h2>
        <Timeline data={data} />
        
        {/* Hidden structured data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Your Institute Name",
            "description": "Leading technology education institute offering courses in AI, cybersecurity, software engineering and more",
            "foundingDate": "2022",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Your City",
              "addressRegion": "Your State",
              "postalCode": "Your ZIP",
              "addressCountry": "IN"
            },
            "event": [
              {
                "@type": "Event",
                "name": "Annual Tech Symposium",
                "startDate": "2022-11-15",
                "endDate": "2022-11-17",
                "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                "eventStatus": "https://schema.org/EventCompleted",
                "description": "First annual technology symposium hosted by our institute"
              },
              {
                "@type": "EducationEvent",
                "name": "AI/ML Program Launch",
                "startDate": "2025-01-15",
                "description": "Launch of Advanced Diploma in Artificial Intelligence and Machine Learning"
              }
            ]
          })}
        </script>
      </div>
    </section>
  );
}