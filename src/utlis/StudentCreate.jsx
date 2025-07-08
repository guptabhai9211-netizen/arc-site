 // src/components/StudentManager.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const performanceOptions = ["Excellent", "Good", "Average", "Poor"];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.3 } }
};

export default function StudentManager() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    name: "",
    batchName: "",
    performance: "Good",
    photoFile: null,
  });

  const studentId = student?._id || null;

  const fetchStudent = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("https://maxbackend.onrender.com/api/student/");
      setStudent(res.data);
      setForm({
        name: res.data.name,
        batchName: res.data.batchName,
        performance: res.data.performance,
        photoFile: null,
      });
      toast.success("Student data loaded successfully");
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setStudent(null);
      } else {
        setError("Failed to fetch student data");
        toast.error("Failed to fetch student data");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm((f) => ({ ...f, photoFile: file }));
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const createStudent = async () => {
    if (!form.name || !form.batchName || !form.photoFile) {
      toast.warning("Name, batch and photo are required");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("batchName", form.batchName);
      formData.append("performance", form.performance);
      formData.append("photo", form.photoFile);

      await axios.post("https://maxbackend.onrender.com/api/student/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await fetchStudent();
      toast.success("Student created successfully!");
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Failed to create student";
      setError(errorMsg);
      toast.error(errorMsg);
    }
    setLoading(false);
  };

  const updateStudent = async () => {
    if (!studentId) return;
    setLoading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("batchName", form.batchName);
      formData.append("performance", form.performance);
      if (form.photoFile) {
        formData.append("photo", form.photoFile);
      }
      await axios.put(`https://maxbackend.onrender.com/api/student/${studentId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await fetchStudent();
      toast.success("Student updated successfully!");
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Failed to update student";
      setError(errorMsg);
      toast.error(errorMsg);
    }
    setLoading(false);
  };

  const deleteStudent = async () => {
    if (!studentId) return;
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    setLoading(true);
    setError("");
    try {
      await axios.delete(`https://maxbackend.onrender.com/api/student/${studentId}`);
      setStudent(null);
      setForm({ name: "", batchName: "", performance: "Good", photoFile: null });
      setPreview(null);
      toast.success("Student deleted successfully!");
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Failed to delete student";
      setError(errorMsg);
      toast.error(errorMsg);
    }
    setLoading(false);
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-xl space-y-6 backdrop-blur-sm bg-opacity-90"
    >
      <motion.div variants={slideUp} className="text-center">
        <p className="text-emerald-500 font-medium text-sm mb-1">Performance of the Week</p>
        <h1 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Student Manager
        </h1>
      </motion.div>

      {loading && (
        <motion.div 
          variants={slideUp}
          className="flex flex-col items-center justify-center py-4"
        >
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-2 text-blue-600">Processing...</p>
        </motion.div>
      )}

      {error && (
        <motion.p 
          variants={slideUp}
          className="p-3 bg-red-100 text-red-700 rounded-lg text-center"
        >
          {error}
        </motion.p>
      )}

      {!loading && !student && (
        <motion.p 
          variants={slideUp}
          className="text-center text-gray-500 italic py-4"
        >
          No student data found. Please create a new student profile.
        </motion.p>
      )}

      <motion.form
        variants={slideUp}
        onSubmit={(e) => {
          e.preventDefault();
          student ? updateStudent() : createStudent();
        }}
        className="space-y-5"
      >
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
            disabled={loading}
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Batch Name</label>
          <input
            type="text"
            name="batchName"
            value={form.batchName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
            disabled={loading}
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Performance</label>
          <select
            name="performance"
            value={form.performance}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            disabled={loading}
          >
            {performanceOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            {student ? "Update Photo (optional)" : "Photo"}
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG, JPEG (MAX. 5MB)</p>
              </div>
              <input 
                type="file" 
                accept="image/png, image/jpeg, image/jpg" 
                onChange={handleFileChange} 
                className="hidden" 
                required={!student}
                disabled={loading}
              />
            </label>
          </div>
        </div>

        {preview && (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 object-cover mx-auto rounded-full border-4 border-white shadow-lg"
            />
            <p className="text-xs text-gray-500 mt-2">New photo preview</p>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {student ? "Update Student" : "Create Student"}
        </motion.button>
      </motion.form>

      {student && (
        <motion.div 
          variants={slideUp}
          className="space-y-6"
        >
          <div className="mt-6 text-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={deleteStudent}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-medium shadow-md transition-all disabled:opacity-50"
              disabled={loading}
            >
              Delete Student
            </motion.button>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 border-t pt-6 bg-gray-50 rounded-xl p-4 shadow-inner"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">Current Student Info</h2>
            <div className="flex flex-col items-center">
              <img
                src={student.photo}
                alt={student.name}
                className="mx-auto w-36 h-36 rounded-full object-cover mb-4 border-4 border-white shadow-md"
              />
              <div className="text-left space-y-2 w-full max-w-xs">
                <p className="flex justify-between">
                  <span className="font-medium text-gray-600">Name:</span>
                  <span className="text-gray-800">{student.name}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium text-gray-600">Batch:</span>
                  <span className="text-gray-800">{student.batchName}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium text-gray-600">Performance:</span>
                  <span className={`font-medium ${
                    student.performance === "Excellent" ? "text-green-600" :
                    student.performance === "Good" ? "text-blue-600" :
                    student.performance === "Average" ? "text-yellow-600" : "text-red-600"
                  }`}>
                    {student.performance}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}