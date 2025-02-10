import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault(); // หยุดการรีเฟรชหน้า
    setError("");
    setLoading(true);
  
    try {
      const response = await fetch(`${API_URL}/api/admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // แจ้งว่า body เป็น JSON
        },
        body: JSON.stringify({ email, password }), // ส่งข้อมูล
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // ✅ Login สำเร็จ
        console.log("✅ Login successful:", data);
  
        // เก็บสถานะการล็อกอินใน localStorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("adminId", data.admin.id);
        localStorage.setItem("adminEmail", data.admin.email);
  
        // Redirect ไปหน้า Dashboard
        navigate("/admin");
      } else {
        // แสดงข้อความ Error
        setError(data.error || "Invalid email or password.");
      }
    } catch (err) {
      setError("Cannot connect to the server. Please try again.");
      console.error("❌ Error:", err);
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
