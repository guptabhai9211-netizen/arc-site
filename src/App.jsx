import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomeSection from './component/Home.jsx';
import CoursesSection from './component/CoursesSection';
import About from './component/About';
import Blog from './component/Blog';
import { ContactSection } from './component/Contact';
import CourseDetails from './component/CourseDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeSection />} />
          <Route path="courses" element={<CoursesSection />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contactSection" element={<ContactSection />} />
          <Route path="courses/:slug" element={<CourseDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
