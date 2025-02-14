import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import SuccessPopup from "./SuccessPopup";
import "./ManageTour.css";
import { Edit } from "lucide-react";

const ManageTour = () => {
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteTourId, setDeleteTourId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [imageStatus, setImageStatus] = useState({}); // เก็บสถานะการโหลดภาพ
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch("http://gography.website:3004/api/tours");
        if (!response.ok) throw new Error("Failed to fetch tours");
        const data = await response.json();
        //console.log(data);
        //return
        const sortedTours = data.tours.sort((a, b) => b.id - a.id);
        setTours(sortedTours);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tours:", error);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const handleAddTour = () => {
    navigate("/admin/add-tour");
  };

  const EditTour = (tourId) => {
    navigate(`/admin/edit-tour/${tourId}`);
  };

  const confirmDeleteTour = (tourId) => {
    setDeleteTourId(tourId);
    setIsPopupOpen(true);
  };

  const handleDeleteTour = async () => {
    if (!deleteTourId) return;
    try {
      const response = await fetch(`http://gography.website:3004/api/tours/${deleteTourId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete tour");

      setTours((prevTours) => prevTours.filter((tour) => tour.id !== deleteTourId));
      setIsPopupOpen(false);
      setSuccessMessage("ลบทัวร์สำเร็จแล้ว!");
      setIsSuccessPopupOpen(true);
    } catch (error) {
      console.error("Error deleting tour:", error);
      alert("Failed to delete tour. Please try again.");
    }
  };

  function stripHtmlTags(str) {
    return str.replace(/<[^>]*>/g, '');
  }

  const handleImageError = (id) => {
    setImageStatus((prev) => ({ ...prev, [id]: true }));
  };

  if (loading) {
    return <div className="loading">Loading tours...</div>;
  }

  return (
    <div className="manage-tour-container">
      <header className="manage-tour-header">
        <div className="tabs">
          <span className="active">Published</span>
          <span>Draft</span>
        </div>
        <div className="actions">
          <button className="filter-btn">Filter</button>
          <button className="add-tour-btn" onClick={handleAddTour}>
            + Add New Tour
          </button>
        </div>
      </header>

      <div className="tour-list">
        {tours.map((tour) => (
          <div className="tour-item" key={tour.id}>
            <img
              //src={imageStatus[tour.id] ? "default-placeholder-image.jpg" : tour.cover_image}
              src={tour.cover_image === `https://placehold.co/600x400` ? tour.cover_image : API_URL + tour.cover_image}
              //src="http://gography.website:3004/uploads/1738720080919-iceland-northern-lights.jpg"
              alt={tour.title}
              className="tour-image"
              onError={() => handleImageError(tour.id)}
            />
            <div className="tour-info">
              <h3>{tour.title}</h3>
              <p>{tour.information ? stripHtmlTags(tour.information).slice(0, 50) + "..." : "No description available"}</p>
              <span>฿{tour.price}</span>
              <div className="tour-footer">
                <span className="tour-days">{tour.days || "N/A"} days</span>
                <div className="tags">
                  {tour.tags?.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <button className="edit-btn" onClick={() => EditTour(tour.id)}>Edit</button>
                <button className="delete-btn" onClick={() => confirmDeleteTour(tour.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ConfirmDeletePopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)}
        onConfirm={handleDeleteTour} 
      />

      <SuccessPopup
        isOpen={isSuccessPopupOpen}
        onClose={() => setIsSuccessPopupOpen(false)}
        message={successMessage}
      />
    </div>
  );
};

export default ManageTour;