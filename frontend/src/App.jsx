import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import Dashboard from "./components/Dashboard/Dashboard";
import DashboardOverview from "./components/Dashboard/DashboardOverview";
import UserManagement from "./components/Dashboard/UserManagement";
import Places from "./components/Places/Places";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import ManageTour from "./components/Dashboard/ManageTour";
import Blogpost from "./components/Dashboard/Blogpost";
import AddTourForm from "./components/Dashboard/AddTourForm";
import AddPost from "./components/Dashboard/AddPost";
import SinglePost from "./pages/SinglePost"; // ✅ เพิ่มการเรียกใช้หน้า SinglePost
import SingleTourDetails from "./components/Dashboard/SingleTourDetails";
import OurTeam from "./components/Dashboard/OurTeam"; // ✅ นำเข้า OurTeam
import AddTeamMemberForm from "./components/Dashboard/AddTeamMemberForm";
import Singleposttour from "./pages/singleposttour/Singleposttour";

import AOS from "aos";
import "aos/dist/aos.css";

// ✅ ฟังก์ชันสำหรับ ProtectedRoute
const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setAuth(isLoggedIn);
  }, []);

  if (auth === null) {
    return <div>Loading...</div>; // Loading ระหว่างตรวจสอบสถานะ
  }

  return auth ? children : <Navigate to="/login" />; // Redirect ถ้ายังไม่ได้ล็อกอิน
};

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="places/:id" element={<PostDetail />} />
          <Route path="/tours/:id" element={<SingleTourDetails />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<SinglePost />} /> {/* ✅ แสดงรายละเอียดโพสต์ */}
          <Route path="best-places" element={<PlacesRoute />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/singleposttour" element={<Singleposttour />} />
        </Route>

        {/* Login Route */}
        <Route path="/login" element={<AdminLogin />} />

        {/* Protected Routes */}
        <Route
          path="/gography-admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* Nested Routes inside Dashboard */}
          <Route index element={<DashboardOverview />} />
          <Route path="overview" element={<DashboardOverview />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="places" element={<Places />} />
          <Route path="manage-tour" element={<ManageTour />} />
          <Route path="blogpost" element={<Blogpost />} />
          <Route path="add-post" element={<AddPost />} /> {/* ✅ ปรับให้เป็นเส้นทางที่ถูกต้อง */}
          <Route path="ourteam" element={<OurTeam />} /> {/* ✅ เพิ่มเส้นทางสำหรับ OurTeam */}
          <Route path="add-tour" element={<AddTourForm />} />
          <Route path="add-team-member" element={<AddTeamMemberForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;