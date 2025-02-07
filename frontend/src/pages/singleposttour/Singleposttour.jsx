import React from "react";
import TourCover from "./TourCover";
import TourPlan from "./TourPlan"; // เพิ่มการนำเข้า TourPlan
import TermsAndConditions from "./TermsAndConditions";
import PriceSection from "./PriceSection";
import Gallery from "./Gallery";
import Testimonial2 from "./Testimonial2";
import ExploreMoreTours from "./ExploreMoreTours";

function App() {
  return (
    <div>
      <TourCover /> {/* ส่วน Cover ของทัวร์ */}
      <TourPlan />  {/* ส่วนแสดงข้อมูล Tour Plan */}
      <TermsAndConditions />
      <PriceSection />
      <Gallery />
      <Testimonial2 />
      <ExploreMoreTours />
    </div>
  );
}

export default App;