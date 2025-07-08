 import CoursesSection from "./CoursesSection";
import WhyChooseUs from "./WhyChooseUs";
import AchievementsSection from "./Achievements";
import TestimonialsSection from "./StudentTestimonials";
import MediaGallery from "./Gallery";
import DiceAdvantage from "./Adavantage";
import CareerBenefits from "./Build";
import { InstituteTimeline } from "./About";
 import CoursesScroll from "../utlis/CourseLoop";
import { MacbookScrollDemo } from "./MackBook";
import { ARCTechEffectDemo } from "./Gemini";
import { ContactSection } from "./Contact";
import { ContactBranches } from "./ContactBranches";
import StudentTestimonials from "./Student";
import { VideoShowcaseSection } from "./Video";
import StudentDetails from "./WeakOf";
import HeroSection from "./Home/HeroSection";

const HomeSection = () => {
  return (
    <>
    <HeroSection/>
       <div>
        <CoursesSection />
        <WhyChooseUs />
        <MacbookScrollDemo />
        <StudentDetails />
        <DiceAdvantage />
        <ARCTechEffectDemo />
        <AchievementsSection />
        <TestimonialsSection />
        <MediaGallery />
        <StudentTestimonials />
        {/* <InstituteTimeline /> */}
        <ContactBranches />
        <VideoShowcaseSection />
        <CareerBenefits />
        <ContactSection />
        <CoursesScroll />
      </div>
    </>
  );
};

export default HomeSection;
