 import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiX } from 'react-icons/fi';

const AnnouncementsBanner = () => {
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await axios.get('https://arc-portal-backend.onrender.com/admin/fetch/');
        if (response.data && response.data.title && response.data.message) {
          setAnnouncement(response.data);
        } else {
          setAnnouncement({ title: "No announcements", message: "There are currently no announcements." });
        }
      } catch (err) {
        console.error('Failed to fetch announcement', err);
        setError('Failed to fetch announcements');
        setAnnouncement({ title: "Error", message: "Could not load announcements." });
      } finally {
        setLoading(false);
      }
    };

    // Simulate lazy loading with a small delay
    const timer = setTimeout(() => {
      fetchAnnouncement();
    }, 500); // 0.5 second delay for demonstration

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="w-full min-h-20 bg-blue-600 flex items-center justify-center px-4 py-3 relative transition-all duration-300">
      {/* Close button */}
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-200 transition-colors"
        aria-label="Close announcement"
      >
        <FiX size={20} />
      </button>

      <div className="max-w-3xl w-full text-center px-8">
        {loading ? (
          <div className="flex justify-center items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-blue-300 animate-pulse"></div>
            <div className="w-4 h-4 rounded-full bg-blue-300 animate-pulse delay-100"></div>
            <div className="w-4 h-4 rounded-full bg-blue-300 animate-pulse delay-200"></div>
          </div>
        ) : (
          <>
            <h2 className="text-lg font-bold text-white mb-1">
              {announcement?.title}
            </h2>
            <p className="text-white text-sm whitespace-pre-line">
              {announcement?.message}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AnnouncementsBanner;