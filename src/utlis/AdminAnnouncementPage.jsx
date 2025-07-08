 import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";

export default function AdminAnnouncementPage() {
  const [announcement, setAnnouncement] = useState(null);
  const [form, setForm] = useState({ title: "", message: "", createdBy: "" });
  const [loading, setLoading] = useState(false);

  const fetchAnnouncement = async () => {
    try {
      const res = await axios.get("https://arc-portal-backend.onrender.com/admin/fetch");

      // Check if announcement exists and has data
      if (res.data && Object.keys(res.data).length > 0) {
        setAnnouncement(res.data);
        setForm({
          title: res.data.title || "",
          message: res.data.message || "",
          createdBy: res.data.createdBy || "",
        });
      } else {
        setAnnouncement(null);
        setForm({ title: "", message: "", createdBy: "" });
      }
    } catch (err) {
      console.error(err);
      setAnnouncement(null);
    }
  };

  useEffect(() => {
    fetchAnnouncement();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = announcement
        ? await axios.put("https://arc-portal-backend.onrender.com/admin/update", form)
        : await axios.post("https://arc-portal-backend.onrender.com/admin/create", form);

      toast.success(res.data.message || "Success!");
      fetchAnnouncement();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete("https://arc-portal-backend.onrender.com/admin/delete");
      toast.success(res.data.message || "Deleted successfully");
      setAnnouncement(null);
      setForm({ title: "", message: "", createdBy: "" });
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Toaster />

      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Admin Announcement Dashboard
      </h1>

      <div className="space-y-4">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Announcement Title"
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Announcement Message"
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="createdBy"
          value={form.createdBy}
          onChange={handleChange}
          placeholder="Created By (Admin Name)"
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-4 justify-center">
          {!announcement || Object.keys(announcement).length === 0 ? (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition disabled:opacity-50"
            >
              Create Announcement
            </button>
          ) : (
            <>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
              >
                Update Announcement
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition"
              >
                Delete Announcement
              </button>
            </>
          )}
        </div>

        {announcement && Object.keys(announcement).length > 0 && (
          <motion.div
            className="mt-6 p-4 bg-gray-100 rounded-xl border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold">Current Announcement</h2>
            <p className="mt-2">
              <strong>Title:</strong> {announcement.title}
            </p>
            <p className="mt-1">
              <strong>Message:</strong> {announcement.message}
            </p>
            <p className="mt-1 text-sm text-gray-600">
              <strong>Created By:</strong> {announcement.createdBy}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
