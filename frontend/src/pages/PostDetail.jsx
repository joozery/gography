import React from "react";
import { useParams } from "react-router-dom";
import { PlacesData } from "../data/placesData"; // Import placesData
import './PostDetail.css';  // Import CSS file

const PostDetail = () => {
  const { id } = useParams(); // Get id from the URL
  const place = PlacesData.find((item) => item.title.toLowerCase() === id.toLowerCase()); // Find place based on the id

  if (!place) {
    return <div>Place not found</div>; // If place is not found
  }

  return (
    <div className="place-detail">
      {/* Header Section with background image */}
      <div className="header-section" style={{ backgroundImage: `url(${place.img})` }}>
        <div className="overlay">
          <h1 className="title">{place.title}</h1>
          <p className="location">{place.location}</p>
        </div>
      </div>

      <div className="download-container">
        <a href="#" className="download-btn">
          Download Tour Plan
        </a>
      </div>

      {/* Information Section */}
      <div className="info-section">
        <h2 className="section-title">Information</h2>
        <ul className="info-list">
          <li>📥 วิธีการดาวน์โหลด Tour Plan เพื่อรายละเอียดต่างๆ</li>
          <li>🌍 สำหรับผู้ที่สนใจเดินทางกับ Gography กรุณาอ่าน Terms & Conditions เพื่อความเข้าใจเพิ่มเติม</li>
          <li>🚗 สำหรับการเดินทางแบบ Road Trip กรุณาเตรียมตัวให้พร้อมกับการเดินทางไปกับ Gography</li>
          <li>⚡️ เรามีทีมงานที่จะคอยดูแลคุณตลอดการเดินทาง!</li>
          <li>⚠️ หากมีข้อสงสัยสามารถติดต่อทีมงานได้ตลอดเวลา</li>
          <li>🌍 ภาพใน Tour Plan อาจแตกต่างจากสถานที่จริงได้เล็กน้อย</li>
          <li>❗ เรามีข้อกำหนดและเงื่อนไขการให้บริการที่ต้องการให้ท่านทำความเข้าใจ</li>
        </ul>
      </div>

      {/* Tourplan Section */}
      <div className="tourplan-section">
        <h2 className="section-title">Tourplan</h2>
        <div className="tour-day">
          <h3 className="day-title">DAY 1</h3>
          <p className="day-details">Details about Day 1's activities.</p>
          <img src={place.img} alt="Day 1" className="day-img" />
        </div>

        <div className="tour-day">
          <h3 className="day-title">DAY 2</h3>
          <p className="day-details">Details about Day 2's activities.</p>
          <img src={place.img} alt="Day 2" className="day-img" />
        </div>
      </div>

      {/* Price Section */}
      <div className="price-section">
        <h2 className="section-title">Price</h2>
        <p className="price">${place.price}</p>

        <div className="price-details">
          <div className="included">
            <h3>Included</h3>
            <ul>
              <li>📥 ช่างภาพมืออาชีพ ถ่ายรูปให้ตลอดการเดินทาง</li>
              <li>🌍 ประกันการเดินทาง</li>
              <li>🚗 รวมค่าที่พัก</li>
              <li>⚡️ รวมค่าการเดินทางโดยรถ</li>
            </ul>
          </div>

          <div className="not-included">
            <h3>Not Included</h3>
            <ul>
              <li>🎮 กิจกรรม</li>
              <li>🍴 ค่าข้าว</li>
              <li>🧳 ตั๋วเข้าชมพิพิธภัณฑ์</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
          <img src={place.img} alt="Gallery" className="gallery-img" />
          <img src={place.img} alt="Gallery" className="gallery-img" />
          <img src={place.img} alt="Gallery" className="gallery-img" />
          <img src={place.img} alt="Gallery" className="gallery-img" />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
