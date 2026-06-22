import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UserList from "./compoents/UserList";
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Quiz from "./pages/Quiz";
import AdminCreateQuiz from "./pages/AdminCreateQuiz";
import QuizPage from "./pages/QuizPage";
 import AdminAnnouncementManager from "./pages/AdminAnnouncementPanel";
import MainLayout from "./layouts/MainLayout";
import CourseDetails from "./component/CourseDetails";
import CoursesSection from "./component/CoursesSection";
import HomeSection from "./component/Home"; // Add this if you want Home page
import ScrollToTop from "./utlis/ScrollToTop";
import { InstituteTimeline } from "./component/About";
import { ContactSection } from "./component/Contact";
import StudentManager from "./utlis/StudentCreate";
import ChangePasswordForm from "./utlis/ChangePasswordForm";
import AnnouncementBanner from "./new/AnnouncementBanner";
import AdminAnnouncementPage from "./utlis/AdminAnnouncementPage";
import { ContactBranches } from "./component/ContactBranches";
import MediaGallery from "./component/Gallery";
import { VideoShowcaseSection } from "./component/Video";
import PrivacyPolicy from "./footer/PrivacyPolicy";
import TermsOfService from "./footer/TermsOfService";
import RefundPolicy from "./footer/RefundPolicy";
import Sitemap from "./footer/Sitemap";
import CourseShowcase from "./component/CourseShowcase";
import Blog from "./component/Blog";
import BlogDetail from "./component/BlogDetail";
function App() {
  return (
    <Router>
      <ScrollToTop/>

      <Routes>
        {/* Main Layout routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeSection />} />
          <Route path="profileq=blue+ocoor+withaskjfakljkladsjf&rlz=1C1CHBD_enIN1138IN1138&oq=blue+ocoor+withaskjfakljkladsjf&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCQgDEAAYDRiABDIJCAQQABgNGIAEMgkIBRAAGA0YgAQyCQgG" element={<Profile />} />
          <Route path="courses" element={<CoursesSection />} />
          <Route path="courses/:slug" element={<CourseDetails />} />
          <Route path="about" element={<InstituteTimeline/>} />
          <Route path="contactSection" element={<ContactSection/>} />
          <Route path="contactBraches" element={<ContactBranches/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/TermsOfService" element={<TermsOfService/>} />
          <Route path="/RefundPolicy" element={<RefundPolicy/>} />
          <Route path="/sitemap" element={<Sitemap/>} />
          <Route path="MediaGallery" element={<MediaGallery/>} />
          <Route path="VideoShowcaseSection" element={<VideoShowcaseSection/>} />
      <Route path="courses-showcase" element={<CourseShowcase />} />
          <Route path="studentmangerjjfjasdskfjadklfjaslfjlklfjadsklfjfjaslfjlffjfkjlkjlsjfjfkjldfdfadkfjkldfjklfjasklfjklfjasklfjadkljfklfjjdklfjdkldfjsklfjadsklfjasklfjaklfjaskjfakljfasjfkladsjflasjfklajfklajflajfasfjkfljaf" element={<StudentManager/>} />
          <Route path="changeBDIJCAQQABgNGIAEMgkIBRAAGA0YgAQyCQgGEAAYDRiABDIJCAcQABgNGIAEMgkICBAAGA0YgAQmvnmnsd,mfndsfnadskfniofjawiofaewjfpaewofjewofljdsfoadsjfodsifhasfhadsfjasndlfahdsfasnfkajsnkfndsfnadslfds" element={<ChangePasswordForm/>} />
          <Route path="blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          

        </Route>

        {/* Auth routes (outside layout) */}
        <Route path="/loginportalisherefjdfjdklfjdklfjasklfjasfjuw49ru0wr4jowrjeofjfkdjf0eu034uj4ue9rtuej8gerhgnrghrgnersghergnoesghesgo" element={<Login />} />
        <Route path="/sinupfdskfjsdfjaskfjalkfj255565564fdsfasjdfkasjfkjasfkjaskfjsdfjasdfjaskfjasjfalsfjadskjfklasjfasjfoasejfewfsdfsijfasfjiofjwru328528r89werudofjdsiofjsdiofjsofja0sfjaslfdsjfhdsfjhsofhaoefewhfowerheworfhweroewhfewofrhwoewhaf0asofuwae0ofrhawnfoasfl" element={<SignUp />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/adminAnnouncementPageq=blue+ocoor+withaskjfakljkladsjf&rlz=1C1CHBD_enIN1138IN1138&oq=blue+ocoor+withaskjfakljkladsjf&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCQgDEAAYDRiAB" element={<AdminAnnouncementPage/>} />

        {/* Admin routes (you could wrap these in a layout too) */}
        <Route path="/admin-dashboardBDIJCAQQABgNGIAEMgkIBRAAGA0YgAQyCQgGEAAYDRiABDIJCAcQABgNGIAEMgkICBAAGA0YgAQmvnmnsd,mfndsfnadskfniofjawiofaewjfpaewofjewofljdsfoadsjfodsifhasfhadsfjasndlfahdsfasnfkajsnkfndsfnadslfds" element={<AdminDashboard />} />
        <Route path="/admin/user" element={<UserList />} />
        <Route path="/admin/createq=blue+ocoor+withaskjfakljkladsjf&rlz=1C1CHBD_enIN1138IN1138&oq=blue+ocoor+withaskjfakljkladsjf&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCQgDEAAYDRiABDIJCAQQABgNGIAEMgkIBRAAGA0YgAQyCQgGEAAYDRiABDIJCAcQABgNGIAEMgkICBAAGA0YgAQyC" element={<AdminCreateQuiz />} />
        <Route path="/admin/announcementadsjf&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCQgDEAAYDRiABDIJCAQQABgNGIAEMgkIBRAAGA0YgAQyCQgGEAAYDRiABDIJCAcQABgNGIAEMgkICBAAGA0YgAQ" element={<AdminAnnouncementManager />} />

        {/* Quiz routes */}
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz-page" element={<QuizPage />} />


      </Routes>
    </Router>
  );
}

export default App;
