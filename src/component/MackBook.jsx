  import React from "react";
import { MacbookScroll } from "../component/ui/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-gray-50 w-full py-20">
      <MacbookScroll
        title={
          <span className="text-4xl font-bold text-gray-900">
            ARC Computer Institute: <br />
            <span className="text-blue-600 dark:text-blue-400">
              Transforming Tech Education
            </span>
          </span>
        }
        badge={
          <InstituteBadge className="h-12 w-12 transform -rotate-12 hover:rotate-0 transition-transform duration-300" />
        }
        src="/arc_logo.jpg"
        showGradient={true}
        imageClassName="object-cover w-" // 👈 Pass this if `MacbookScroll` accepts it
      />
    </div>
  );
}

// ARC Institute Badge SVG
const InstituteBadge = ({ className }) => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="28" cy="28" r="28" fill="#2563EB" />
      <rect x="16" y="20" width="24" height="16" rx="2" stroke="white" strokeWidth="2" />
      <rect x="24" y="36" width="8" height="2" fill="white" />
      <rect x="26" y="38" width="4" height="2" fill="white" />
      <rect x="18" y="22" width="20" height="12" fill="#1E40AF" />
      <path
        d="M22 26L20 28L22 30M34 26L36 28L34 30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="24" y="25" width="2" height="2" fill="white" />
      <rect x="28" y="25" width="2" height="2" fill="white" />
      <rect x="24" y="29" width="2" height="2" fill="white" />
      <rect x="30" y="25" width="2" height="2" fill="white" />
      <rect x="26" y="29" width="2" height="2" fill="white" />
      <rect x="30" y="29" width="2" height="2" fill="white" />
    </svg>
  );
};
