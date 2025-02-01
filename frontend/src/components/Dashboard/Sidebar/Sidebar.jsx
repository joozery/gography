import "./Sidebar.css";
import { Home, Users, FileText, Settings, MapPin, Calendar, LogOut, Moon, Sun, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { name: "Dashboard", icon: <Home /> },
  { name: "Revenue", icon: <FileText /> },
  { name: "Notifications", icon: <Users /> },
  { name: "Analytics", icon: <MapPin /> },
  { name: "Likes", icon: <Calendar /> },
  { name: "Wallets", icon: <Settings /> },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${darkMode ? "dark" : "light"} ${collapsed ? "collapsed" : ""}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <span className="logo">CL</span>
        {!collapsed && (
          <div className="header-info">
            <span className="company-name">Codinglab</span>
            <span className="role">Web Developer</span>
          </div>
        )}
        <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)} title="Toggle Sidebar">
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Search Bar */}
      <div className="search-box">
        <Search className="search-icon" />
        {!collapsed && <input type="text" placeholder="Search..." />}
      </div>

      {/* Menu List */}
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`sidebar-item ${active === item.name ? "active" : ""}`}
            onClick={() => setActive(item.name)}
          >
            {item.icon}
            {!collapsed && <span>{item.name}</span>}
          </li>
        ))}
      </ul>

      {/* Dark Mode Toggle */}
      <div className="toggle-mode">
        <button onClick={() => setDarkMode(!darkMode)} title="Toggle Theme">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          {!collapsed && (darkMode ? "Light Mode" : "Dark Mode")}
        </button>
      </div>

      {/* Logout Button */}
      <button className="sidebar-logout">
        <LogOut size={18} /> {!collapsed && "Logout"}
      </button>
    </div>
  );
}
