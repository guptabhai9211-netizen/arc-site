import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Announcement from './../compoents/Announcement';
import { getGreeting } from "../new/getGreeting.js";
import { motion } from "framer-motion";
//last edit filter set kran hai abb 
//edit the custom months add the 
function AdminDashboard() {
  // const navigate
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState(null);
   const [greeting, setGreeting] = useState({ text: "", icon: "" });

   useEffect(() => {                         ///ye se last edit
    setGreeting(getGreeting());  //yaha se edit hoga 2025 july
  }, []);
const [formData, setFormData] = useState({
    name: "",
    email: "",
    months: "",
    phone:"",
    rollNumber: "",
    adharNumber: "",
    course: "",
    timing: "",
    fee: "",
    customText:"",
    photo: null,         // image ke liye
    certificate: null,   // certificate ke liye
    idCard: null,        // id card ke liye
  });
  

  // Filter states
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [availableBatches, setAvailableBatches] = useState([]);

  // Fetch all users
  useEffect(() => {
    fetchUsers();
  }, []);

  // Update filtered users when users or filters change
  useEffect(() => {
    let result = users;

    // Apply course filter
    if (selectedCourse) {
      result = result.filter((user) => user.course === selectedCourse);
    }

    // Apply batch filter
    if (selectedBatch) {
  result = result.filter((user) => user.timing === selectedBatch);
}

// Apply search filter by Gmail ID
if (searchTerm) {
  result = result.filter(
    (user) =>
      user.rollNumber && user.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );
}


    setFilteredUsers(result);

    // Update available batches when course changes
    if (selectedCourse) {
      const batches = [
  ...new Set(
    users
      .filter((user) => user.course === selectedCourse)
      .map((user) => user.timing) // 👈 Use timing here
  ),
];

      setAvailableBatches(batches);
      setSelectedBatch(""); // Reset batch when course changes
    } else {
      setAvailableBatches([]);
      setSelectedBatch("");
    }
  }, [users, selectedCourse, selectedBatch, searchTerm]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://arc-portal-backend.onrender.com/api/user/all");
      setUsers(response.data.users);
      setFilteredUsers(response.data.users);
    } catch (error) {
      toast.error("Failed to fetch users");
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://arc-portal-backend.onrender.com/api/user/delete/${id}`);
  
      toast.success("User deleted successfully");
      fetchUsers(); // Refresh user list
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete user");
    }
  };
  
   
  const handleEdit = (user) => {
    setEditingUser(user._id);
    setFormData({
      name: user.name || '',
      email: user.email || '',
          months: user.months ||'',
phone:user.phone || '',
      rollNumber: user.rollNumber || '',
      adharNumber: user.adharNumber || '',
      course: user.course || '',
      timing: user.batch || '',
      fee: user.fee || '',
      customText:user.customText ||'',
      photo: user.photo || '', // Cloudinary या server URL
      certificate: user.certificate || '',
      idCard: user.idCard || '',
    });
  };
  
 
const handleSmartUpdate = async (id) => {
  const token = localStorage.getItem("token");

  // Check if any files are present
  const hasFiles = formData.photo || formData.certificate || formData.idCard;

  try {
    if (hasFiles) {
      const form = new FormData();
      if (formData.photo) form.append("photo", formData.photo);
      if (formData.certificate) form.append("certificate", formData.certificate);
      if (formData.idCard) form.append("idCard", formData.idCard);

      // Add regular fields
      form.append("name", formData.name);
      form.append("email", formData.email);
       form.append("phone", formData.phone);
      form.append("rollNumber", formData.rollNumber);
      form.append("adharNumber", formData.adharNumber);
      form.append("course", formData.course);
      form.append("months", formData.months);
      form.append("timing", formData.timing);
      form.append("fee", formData.fee);
      form.append("customText", formData.customText);

      await axios.put(
        `https://arc-portal-backend.onrender.com/api/user/editFile/${id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // Don't manually set content-type for FormData
          },
        }
      );
    } else {
      await axios.put(
        `https://arc-portal-backend.onrender.com/api/user/edit/${id}`,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          rollNumber: formData.rollNumber,
          adharNumber: formData.adharNumber,
          course: formData.course,
          months: formData.months,
          timing: formData.timing,
          fee: formData.fee,
          customText: formData.customText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }

    toast.success("User updated successfully");
    setEditingUser(null);
    fetchUsers();
  } catch (error) {
    toast.error(error.response?.data?.message || "Failed to update user");
  }
};

  
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetFilters = () => {
    setSelectedCourse("");
    setSelectedBatch("");
    setSearchTerm("");
  };
   
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
  
    if (file) {
      const previewUrl = URL.createObjectURL(file);
  
      setFormData((prev) => ({
        ...prev,
        [name]: file,
        [`${name}Preview`]: previewUrl, // e.g., photoPreview, idCardPreview, certificatePreview
      }));
    }
  };
  
  
  
  // Get unique courses from users
  const availableCourses = [...new Set(users.map((user) => user.course))];

  return (
    <div className="">
    <div className="container mx-auto px-4 py-8 ">
      <ToastContainer />
 {/* <h1 className="text-3xl fon
 t-bold mb-8 text-center">Administrator Panel – Anil Upadhyay Sir</h1> */}
  <div className="text-center mb-10">
      {/* Title */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Administrator Panel – Anil Upadhyay Sir
      </motion.h1>

      {/* Animated Greeting */}
      <motion.div
        className="text-xl md:text-2xl font-semibold flex justify-center items-center gap-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span className="text-3xl">{greeting.icon}</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          {greeting.text}
        </span>
      </motion.div>
    </div>

      <div className="mb-8 bg-blue-950 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-white">Student Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-gray-600">Total Users</p>
            <p className="text-2xl font-bold">{users.length}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-gray-600">Active Courses</p>
            <p className="text-2xl font-bold">{availableCourses.length}</p>
          </div>
           <div className="bg-white p-4 rounded-lg shadow">
  <p className="text-sm text-gray-500 mb-1">Current Date & Time</p>
  <div className="text-xl font-semibold text-[#0C0950] animate-pulse">
    {new Date().toLocaleString('en-IN', {
      weekday: 'long',   // e.g., "Thursday"
      year: 'numeric',   // e.g., "2025"
      month: 'long',     // e.g., "July"
      day: 'numeric',    // e.g., "18"
      hour: '2-digit',   // e.g., "11"
      minute: '2-digit', // e.g., "45"
      second: '2-digit', // e.g., "30"
      hour12: true       // e.g., "AM/PM"
    })}
  </div>
</div>

        </div>
      </div>
  {/* Create Quiz Button */}
  <button
        onClick={() => navigate('/sinupfdskfjsdfjaskfjalkfj255565564fdsfasjdfkasjfkjasfkjaskfjsdfjasdfjaskfjasjfalsfjadskjfklasjfasjfoasejfewfsdfsijfasfjiofjwru328528r89werudofjdsiofjsdiofjsofja0sfjaslfdsjfhdsfjhsofhaoefewhfowerheworfhweroewhfewofrhwoewhaf0asofuwae0ofrhawnfoasfl')}
        className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Make Profile
      </button>      {/* Filter Section */}
  <button
        onClick={() => navigate('/admin/createq=blue+ocoor+withaskjfakljkladsjf&rlz=1C1CHBD_enIN1138IN1138&oq=blue+ocoor+withaskjfakljkladsjf&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCQgDEAAYDRiABDIJCAQQABgNGIAEMgkIBRAAGA0YgAQyCQgGEAAYDRiABDIJCAcQABgNGIAEMgkICBAAGA0YgAQyC')}
        className="bg-[#725CAD] text-white px-4 py-2 rounded"
      >
        Create Quiz
      </button>      {/* Filter Section */}
      <Link to= "/studentmangerjjfjasdskfjadklfjaslfjlklfjadsklfjfjaslfjlffjfkjlkjlsjfjfkjldfdfadkfjkldfjklfjasklfjklfjasklfjadkljfklfjjdklfjdkldfjsklfjadsklfjasklfjaklfjaskjfakljfasjfkladsjflasjfklajfklajflajfasfjkfljaf">
  <button
        // onClick={() => ')}
        className="bg-red-800 text-white px-4 py-2 rounded"
        >
        Student Of the weak
      </button>      {/* Filter Section */}
        </Link>
  <button
        onClick={() => navigate('/admin/announcementadsjf&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCQgDEAAYDRiABDIJCAQQABgNGIAEMgkIBRAAGA0YgAQyCQgGEAAYDRiABDIJCAcQABgNGIAEMgkICBAAGA0YgAQ')}
        className="bg-[#FF6600] text-white px-4 py-2 rounded"
      >
        Create Announcement
      </button>      {/* Filter Section */}
  <button
        onClick={() => navigate('/adminAnnouncementPageq=blue+ocoor+withaskjfakljkladsjf&rlz=1C1CHBD_enIN1138IN1138&oq=blue+ocoor+withaskjfakljkladsjf&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCQgDEAAYDRiAB')}
        className="bg-blue-700 text-white px-4 py-2 rounded"
      >
        Home Page Announcement
      </button>      {/* Filter Section */}
  <button
        onClick={() => navigate('/changeBDIJCAQQABgNGIAEMgkIBRAAGA0YgAQyCQgGEAAYDRiABDIJCAcQABgNGIAEMgkICBAAGA0YgAQmvnmnsd,mfndsfnadskfniofjawiofaewjfpaewofjewofljdsfoadsjfodsifhasfhadsfjasndlfahdsfasnfkajsnkfndsfnadslfds')}
        className="bg-green-800 text-white px-4 py-2 rounded"
      >
        Change Password
      </button>      {/* Filter Section */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-3">Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course
            </label>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">All Courses</option>
              {availableCourses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
  Search by Roll No.
</label>
<div className="flex">
  <input
    type="text"
    placeholder="Roll No. Ex - 2501"
    className="flex-grow p-2 border rounded-l"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
 

              <button
                onClick={resetFilters}
                className="bg-gray-500 text-white px-3 py-2 rounded-r hover:bg-gray-600"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

    <div className="relative overflow-x-auto bg-white rounded-lg shadow max-h-[600px]">
  <table className="min-w-full text-sm text-left text-gray-700">
    <thead className="bg-gray-100 sticky top-0 z-10">
      <tr>
        <th className="py-3 px-4">Name</th>
        <th className="py-3 px-4">Email</th>
        <th className="py-3 px-4">Phone No</th>
        <th className="py-3 px-4">Roll No.</th>
        <th className="py-3 px-4">Custom Text</th>
        <th className="py-3 px-4">Course</th>
        <th className="py-3 px-4">Months</th>
        <th className="py-3 px-4">Batch</th>
        <th className="py-3 px-4">Fee</th>
        <th className="py-3 px-4">Images</th>
        <th className="py-3 px-4">IdCard</th>
        <th className="py-3 px-4">Certificate</th>
        <th className="py-3 px-4">Actions</th>
      </tr>
    </thead>
    <tbody className="overflow-x-auto">
      {filteredUsers.map((user) => (
        <>
          <tr key={user._id} className="border-t hover:bg-gray-50">
            <td className="py-3 px-4">{user.name}</td>
            <td className="py-3 px-4">{user.email}</td>
            <td className="py-3 px-4">{user.phone}</td>
            <td className="py-3 px-4">
              {user.rollNumber ? `ARC${String(user.rollNumber).slice(2)}` : ''}
            </td>
            <td className="py-3 px-4">{user.customText}</td>
            <td className="py-3 px-4">{user.course}</td>
            <td className="py-3 px-4">{user.months}</td>
            <td className="py-3 px-4">{user.timing}</td>
            <td className="py-3 px-4">{user.fee}</td>
            <td className="py-3 px-4">
              {user.photo ? (
                <img src={user.photo} alt="Photo" className="w-10 h-10 object-cover rounded" />
              ) : "No Photo"}
            </td>
            <td className="py-3 px-4">
              {user.idCard ? (
                <img src={user.idCard} alt="ID Card" className="w-10 h-10 object-cover rounded" />
              ) : "No Photo"}
            </td>
            <td className="py-3 px-4">
              {user.certificate ? (
                <img src={user.certificate} alt="Certificate" className="w-10 h-10 object-cover rounded" />
              ) : "No Photo"}
            </td>
            <td className="py-3 px-4 space-x-2">
              {editingUser === user._id ? (
                <button
                  onClick={() => setEditingUser(null)}
                  className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                >
                  Close
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </>
              )}
            </td>
          </tr>
          
          {editingUser === user._id && (
            <tr className="bg-gray-50">
              <td colSpan={12} className="p-4">
                <div className="overflow-x-auto">
                  <div className="min-w-max space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="p-2 border rounded w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="p-2 border rounded w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Phone No</label>
                        <input
                          type="number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="p-2 border rounded w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Roll No.</label>
                        <input
                          type="text"
                          name="rollNumber"
                          value={
                            formData.rollNumber
                              ? `ARC${String(formData.rollNumber).slice(2)}`
                              : ''
                          }
                          onChange={(e) => {
                            const inputVal = e.target.value;
                            const originalPrefix = formData.rollNumber?.slice(0, 2) || '';
                            const newRoll = inputVal.startsWith('ARC')
                              ? originalPrefix + inputVal.slice(3)
                              : inputVal;

                            setFormData({ ...formData, rollNumber: newRoll });
                          }}
                          className="p-2 border rounded w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Custom Text</label>
                        <input
                          type="text"
                          name="customText"
                          value={formData.customText}
                          onChange={handleChange}
                          className="p-2 border rounded w-full"
                        />
                      </div>
                      <div>
  <label className="block text-sm font-medium text-gray-700">Course</label>
  <select
    name="course"
    value={formData.course}
    onChange={handleChange}
    className="p-2 border rounded w-full"
  >
    <option value="BasicComputer">BasicComputer</option>
    <option value="GraphicDesigning">GraphicDesigning</option>
    <option value="WebDesigning">WebDesigning</option>
    <option value="CAAD">CAAD</option>
    <option value="CCA">CCA</option>
    <option value="ACA">ACA</option>
    <option value="ADCA">ADCA</option>
    <option value="DigitalMarketing">DigitalMarketing</option>
    <option value="Python">Python</option>
    <option value="AdvExcel">AdvExcel</option>
    <option value="Busy">Busy</option>
    <option value="Tally Prime">Tally Prime</option>
    <option value="CCC">CCC</option>
  </select>
</div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Months</label>
                        <input
                          type="text"
                          name="months"
                          value={formData.months}
                          onChange={handleChange}
                          className="p-2 border rounded w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Batch</label>
                        <select
                          name="timing"
                          value={formData.timing}
                          onChange={handleChange}
                          className="p-2 border rounded w-full"
                        >
                          <option value="">Select Time</option>
                          {[
                            "8-9 AM", "9-10 AM", "10-11 AM", "11-12 PM", "12-1 PM",
                            "1-2 PM", "2-3 PM", "3-4 PM", "4-5 PM", "5-6 PM",
                            "6-7 PM", "7-8 PM", "8-9 PM",
                          ].map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Fee</label>
                        <input
                          type="text"
                          name="fee"
                          value={formData.fee}
                          onChange={handleChange}
                          className="p-2 border rounded w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Photo</label>
                        <input
                          type="file"
                          name="photo"
                          onChange={handleFileChange}
                          className="p-2 border rounded w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">ID Card</label>
                        <input
                          type="file"
                          name="idCard"
                          onChange={handleFileChange}
                          className="p-2 border rounded w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Certificate</label>
                        <input
                          type="file"
                          name="certificate"
                          onChange={handleFileChange}
                          className="p-2 border rounded w-full"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleSmartUpdate(user._id)}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={() => setEditingUser(null)}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          )}
        </>
      ))}
    </tbody>
  </table>
</div>  
    </div>
    </div>
  );
}

export default AdminDashboard;
