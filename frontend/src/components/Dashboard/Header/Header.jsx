import React from "react";
import "./Header.css";
import { Bell, Mail, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      {/* Left Section: Logo and Search Bar */}
      <div className="header-left">
        <div className="search-bar">
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      {/* Right Section: Notifications, Messages, and User Profile */}
      <div className="header-right">
        {/* Notifications */}
        <div className="notification">
          <Bell className="notification-icon" size={22} />
          <span className="notification-badge">3</span>
        </div>

        {/* Messages */}
        <div className="message-box">
          <Mail size={20} />
          <span>Messages</span>
        </div>

      </div>
    </header>
  );
}
