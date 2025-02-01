import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ ใช้ Redirect
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import MainContent from "./MainContent/MainContent";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  // ✅ ตรวจสอบสถานะ Login
  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login"); // 🚀 Redirect ไปที่หน้า Login ถ้าไม่ได้ล็อกอิน
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
