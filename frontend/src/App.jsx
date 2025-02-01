import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import BlogsDetails from "./pages/BlogsDetails";
import Dashboard from "./components/Dashboard/Dashboard";
import AdminLogin from "./components/AdminLogin/AdminLogin"; // ✅ Import หน้า Login
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // ✅ ฟังก์ชันเช็คว่า User ล็อกอินหรือยัง
  const isAuthenticated = () => {
    return localStorage.getItem("isLoggedIn") === "true";
  };

  // ✅ สร้าง Route ป้องกัน Dashboard ถ้ายังไม่ได้ Login
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>

          {/* ✅ Route สำหรับหน้า Login */}
          <Route path="/login" element={<AdminLogin />} />

          {/* ✅ ป้องกันหน้า Dashboard ให้ต้อง Login ก่อน */}
          <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
