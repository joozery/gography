import React, { useEffect, useState } from "react";
import TourCover from "./TourCover";
import TourPlan from "./TourPlan"; // เพิ่มการนำเข้า TourPlan
import TermsAndConditions from "./TermsAndConditions";
import PriceSection from "./PriceSection";
import Gallery from "./Gallery";
import Testimonial2 from "./Testimonial2";
import ExploreMoreTours from "./ExploreMoreTours";
import { useParams } from "react-router-dom";

function Singleposttour() {
  const { id } = useParams(); // รับค่า `id` จาก URL
  const [tour, setTour] = useState(null);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchTourDetails = async () => {
    try {
      const response = await fetch(`${API_URL}/api/tours/${id}`);
      if (!response.ok) throw new Error("ไม่สามารถโหลดข้อมูลทัวร์ได้");

      const data = await response.json();
      setTour(data.tour);
    } catch (err) {
      console.error("เกิดข้อผิดพลาดในการดึงข้อมูลทัวร์:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const GetPlansTours = async () => {
    try {
      const response = await fetch(`${API_URL}/api/tours/${id}/plans`);
      if (!response.ok) throw new Error("ไม่สามารถโหลดข้อมูลทัวร์ได้");

      const data = await response.json();
      // console.log("GetPlansTours", data);
      setPlans(data.tour_plans);
    } catch (err) {
      console.error("เกิดข้อผิดพลาดในการดึงข้อมูลทัวร์:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    await fetchTourDetails();
    GetPlansTours();
  }

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(plans);
  // },[plans]);

  if (loading)
    return <div className="text-center mt-10">กำลังโหลดข้อมูล...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  const coverImageUrl = tour?.cover_image
    ? `${API_URL}${tour.cover_image}`
    : "https://placehold.co/1920x1080"; // ใช้รูป Placeholder ถ้าไม่มี cover_image

  return (
    <div>
      <TourCover
        title={tour?.title}
        coverImage={coverImageUrl}
        information={tour?.information}
      />
      {/* ส่วน Cover ของทัวร์ */}
      <TourPlan data={plans} />
      <TermsAndConditions terms_conditions={tour?.terms_conditions} />
      <PriceSection included={tour?.included} not_included={tour?.not_included} price={tour?.price} />
      <Gallery />
      <Testimonial2 />
      <ExploreMoreTours />
    </div>
  );
}

export default Singleposttour;
