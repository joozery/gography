import "./MainContent.css";

export default function MainContent() {
  return (
    <div className="main-content">
      <h2>Welcome to the Tour Management Dashboard</h2>
      <p>Select an option from the sidebar to manage your tours, bookings, and settings.</p>
      <div className="dashboard-widgets">
        <div className="widget">Upcoming Tours</div>
        <div className="widget">Bookings</div>
        <div className="widget">User Reviews</div>
        <div className="widget">Revenue Report</div>
      </div>
    </div>
  );
}
