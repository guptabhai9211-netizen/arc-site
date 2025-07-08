 // src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from './../component/Navbar';
import Footer from "../component/Footer";
import AnnouncementBanner from "../new/AnnouncementBanner";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
       {/* 🟡 Announcement banner (only visible if data exists) */}
      <AnnouncementBanner/>
      <main>
        <Outlet /> {/* This renders the matched child route */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
