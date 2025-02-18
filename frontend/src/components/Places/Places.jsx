import React, { useState, useEffect } from "react";
import PlaceCard from "./PlaceCard";

const Places = ({ handleOrderPopup, filters }) => {
  const [places, setPlaces] = useState([]);
  const [visiblePlaces, setVisiblePlaces] = useState([]); // ใช้สำหรับแสดงผลทัวร์ที่มองเห็น
  const [loading, setLoading] = useState(true);
  const [loadMoreVisible, setLoadMoreVisible] = useState(false);

  const ITEMS_PER_PAGE = 12; // จำนวนไอเท็มที่แสดงต่อหน้า

  useEffect(() => {
    const fetchPlaces = async () => {
      setLoading(true);
      setVisiblePlaces([]); // ล้างค่าเก่าก่อนโหลดใหม่

      try {
        const url = new URL("http://gography.website:3004/api/tours");
        if (filters?.country)
          url.searchParams.append("country", filters.country);
        if (filters?.month) url.searchParams.append("month", filters.month);
        if (filters?.maxPrice)
          url.searchParams.append("maxPrice", filters.maxPrice);

        console.log("📡 Fetching Data from:", url.toString());

        const response = await fetch(url.toString());
        if (!response.ok) throw new Error("Failed to fetch tours");
        const data = await response.json();

        const formattedPlaces = (data?.tours ?? []).map((tour) => ({
          id: tour.id,
          img: tour.cover_image || "https://placehold.co/600x400",
          title: tour.title || "No Title",
          location: tour.country || "Unknown Location",
          description: tour.information
            ? `${tour.information.slice(0, 50)}...`
            : "No description available",
          price: tour.price || "N/A",
          date: tour.month || "Unknown Month",
          type: "Cultural Relax",
        }));

        setPlaces(formattedPlaces);
        setVisiblePlaces(formattedPlaces.slice(0, ITEMS_PER_PAGE));
        setLoadMoreVisible(formattedPlaces.length > ITEMS_PER_PAGE);
        setLoading(false);
      } catch (error) {
        console.error("❌ Error fetching tours:", error);
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [filters]); // ✅ โหลดข้อมูลใหม่เมื่อ `filters` เปลี่ยน

  const handleLoadMore = () => {
    const nextIndex = visiblePlaces.length;
    const newVisiblePlaces = places.slice(0, nextIndex + ITEMS_PER_PAGE);

    setVisiblePlaces(newVisiblePlaces);
    setLoadMoreVisible(visiblePlaces.length < places.length);
  };

  if (loading) {
    return (
      <div className="loading text-white text-center">
        🔄 กำลังโหลดข้อมูล...
      </div>
    );
  }

  return (
    <div
      className="min-h-screen py-10 text-white"
      style={{
        background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent 50%),
                     radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1), transparent 50%),
                     #05141B`,
      }}
    >
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 py-2 pl-2 text-3xl font-bold">
          All Trip
        </h1>
        {visiblePlaces.length === 0 ? (
          <div className="text-center text-gray-400 text-lg">
            ไม่พบโปรแกรมทัวร์ที่ตรงกับเงื่อนไข
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {visiblePlaces.map((place) => (
              <PlaceCard
                key={place.id}
                handleOrderPopup={handleOrderPopup}
                {...place}
              />
            ))}
          </div>
        )}
        {loadMoreVisible && visiblePlaces.length < places.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-700 transition-all"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Places;
