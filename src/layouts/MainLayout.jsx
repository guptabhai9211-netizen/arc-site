 import { Outlet } from "react-router-dom";
import Navbar from './../component/Navbar';
import Footer from "../component/Footer";
 import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import AnnouncementsBanner from "../new/AnnouncementBanner";

const MainLayout = () => {
  const location = useLocation();
  const currentUrl = `${window.location.origin}${location.pathname}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "ARC Computer Institute",
    "alternateName": "ARC Institute",
    "url": "https://www.arcinstitute.in",
    "logo": "https://www.arcinstitute.in/logo.jpg",
    "description": "Premier computer education institute offering courses in programming, graphic design, accounting software, and digital marketing in Delhi",
    "foundingDate": "2010",
    "founder": {
      "@type": "Person",
      "name": "Anil Upadhyay"
    },
    "sameAs": [
      "https://www.facebook.com/arcinstitutedelhi",
      "https://www.instagram.com/arcinstitute.delhi",
      "https://www.youtube.com/@arcinstitutedelhi",
      "https://www.linkedin.com/company/arc-institute-delhi"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi",
      "postalCode": "1100XX",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8860448368",
      "contactType": "admissions",
      "email": "info@arcinstitute.in",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Computer Courses",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Basic Computer Courses",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Course",
                "name": "Basic Computer Course",
                "description": "Fundamentals of computer operations and software tools"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Advanced Courses",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Course",
                "name": "ADCA",
                "description": "Advanced Diploma in Computer Application"
              }
            }
          ]
        }
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.arcinstitute.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[var(--arc-bg)] text-[var(--arc-text)]">
      {/* SEO Meta Tags */}
      <Helmet prioritizeSeoTags>
        <html lang="en" />
        <title>ARC Computer Institute | Best Computer Courses in Delhi</title>
        <meta
          name="description"
          content="Premier computer education institute offering professional courses in programming, graphic design, accounting software, and digital marketing in Delhi. Enroll today!"
        />
        <meta
          name="keywords"
          content="computer institute, computer courses, programming courses, graphic design, digital marketing, Delhi, Tally, accounting courses"
        />
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="ARC Computer Institute | Best Computer Courses in Delhi" />
        <meta property="og:description" content="Premier computer education institute offering professional courses in programming, graphic design, accounting software, and digital marketing in Delhi." />
        <meta property="og:image" content="https://www.arcinstitute.in/logo.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content="ARC Computer Institute | Best Computer Courses in Delhi" />
        <meta name="twitter:description" content="Premier computer education institute offering professional courses in programming, graphic design, accounting software, and digital marketing in Delhi." />
        <meta name="twitter:image" content="https://www.arcinstitute.in/logo.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* Font & Performance */}
        <link
          rel="preload"
          href="/fonts/your-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      {/* Navbar */}
      <Navbar />
 <AnnouncementsBanner/>
      {/* Announcement */}
      {/* <div className="pt"> */}

 
      {/* Main Outlet */}
      <main className="flex-grow bg-transparent">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
