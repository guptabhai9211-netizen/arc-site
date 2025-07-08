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
              alt="AI Lab"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md transition-all duration-300 hover:border-2 hover:border-blue-500 hover:shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/img2.jpg"
              alt="2024 Graduation"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md transition-all duration-300 hover:border-2 hover:border-blue-500 hover:shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/ab.JPEG"
              alt="Annual Hackathon"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md transition-all duration-300 hover:border-2 hover:border-blue-500 hover:shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/ab1.jpeg"
              alt="New Campus Building"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md transition-all duration-300 hover:border-2 hover:border-blue-500 hover:shadow-lg md:h-44 lg:h-60"
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
              alt="Cybersecurity Lab"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md transition-all duration-300 hover:border-2 hover:border-blue-500 hover:shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/ab6.JPG"
              alt="Industry Partners"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md transition-all duration-300 hover:border-2 hover:border-blue-500 hover:shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/ab7.JPG"
              alt="Student Project Showcase"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md transition-all duration-300 hover:border-2 hover:border-blue-500 hover:shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/ab8.JPG"
              alt="Faculty Training"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md transition-all duration-300 hover:border-2 hover:border-blue-500 hover:shadow-lg md:h-44 lg:h-60"
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
            <div className="flex items-center gap-2 text-sm text-gray-600 md:text-base">
              <span className="text-yellow-500">★</span> Accredited by the National Board of Technical Education
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 md:text-base">
              <span className="text-yellow-500">★</span> First batch of 120 students enrolled
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 md:text-base">
              <span className="text-yellow-500">★</span> Established computer labs with 200 workstations
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 md:text-base">
              <span className="text-yellow-500">★</span> Launched our flagship Software Engineering program
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 md:text-base">
              <span className="text-yellow-500">★</span> Hosted first annual tech symposium
            </div>
          </div>
          
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
          Our Institute Timeline
        </h2>
        <Timeline data={data} />
      </div>
    </div>
  );
}