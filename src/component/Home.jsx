 import CoursesSection from "./CoursesSection";
import WhyChooseUs from "./WhyChooseUs";
 import MediaGallery from "./Gallery";
 import CareerBenefits from "./Build";
  import CoursesScroll from "../utlis/CourseLoop";
 import { ContactSection } from "./Contact";
import { ContactBranches } from "./ContactBranches";
import StudentTestimonials from "./Student";
import { VideoShowcaseSection } from "./Video";
import StudentDetails from "./WeakOf";
import HeroSection from "./Home/HeroSection";
import TestimonialSection from "./TestM";

const HomeSection = () => {
  return (
    <>
    <HeroSection/>
       <div>
        <CoursesSection />
        <WhyChooseUs />
         <StudentDetails />
        
        <TestimonialSection/>
        <MediaGallery />
        <StudentTestimonials /> 
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
