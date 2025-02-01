import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to handle login logic
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      console.log("🔄 Sending login request...");
      const response = await fetch("http://192.168.1.55:3000/api/admin/login", {  // ใช้ IP ของเครื่อง Mac
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // 👈 ส่งรหัสผ่านแบบ plaintext
      });

      const data = await response.json();
      console.log("🔍 Response from server:", data);

      if (response.ok && data.token) {
        handleLoginSuccess(data.token);
      } else {
        handleLoginError(data.error || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      handleLoginError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle successful login
  const handleLoginSuccess = (token) => {
    console.log("✅ Login successful! Token:", token);
    localStorage.setItem("token", token);
    localStorage.setItem("isLoggedIn", "true");
    navigate("/admin");
  };

  // Function to handle login error
  const handleLoginError = (errorMessage) => {
    setError(errorMessage);
    console.error("❌ Login failed:", errorMessage);
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
              autoComplete="email"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
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
