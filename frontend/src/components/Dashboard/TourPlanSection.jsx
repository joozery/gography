import React, { useState } from "react";
import "./AddTourForm.css";

const TourPlanSection = ({ tourPlan, setTourPlan }) => {
  // เพิ่มวันใหม่
  const addDay = () => {
    setTourPlan((prevPlan) => {
      const nextId = prevPlan.length + 1;
      return [
        ...prevPlan,
        { id: nextId, day: nextId, date: "", description: "", images: [] },
      ];
    });
  };

  // ลบวันสุดท้าย
  const removeDay = () => {
    if (tourPlan.length > 1) {
      setTourPlan((prevPlan) => prevPlan.slice(0, -1));
    }
  };

  // อัปโหลดรูปภาพ
  const handleImageUpload = (e, index) => {
    const files = Array.from(e.target.files);

    if (files.length > 0) {
      console.log("Uploaded files:", files); // Debug ข้อมูลไฟล์ที่อัปโหลด
      setTourPlan((prevPlan) =>
        prevPlan.map((day, i) => {
          if (i === index) {
            const newImages = files.map((file) => ({
              file,
              preview: URL.createObjectURL(file),
            }));
            return { ...day, images: [...day.images, ...newImages] };
          }
          return day;
        })
      );
    }
  };

  // ลบรูปภาพ
  const removeImage = (dayIndex, imageIndex) => {
    setTourPlan((prevPlan) =>
      prevPlan.map((day, i) => {
        if (i === dayIndex) {
          const updatedImages = day.images.filter((_, imgIdx) => imgIdx !== imageIndex);
          console.log(`Updated images for Day ${day.day}:`, updatedImages); // Debug
          return { ...day, images: updatedImages };
        }
        return day;
      })
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mt-6">แผนวันทัวร์</h2>
      {tourPlan.map((day, index) => (
        <div key={day.id} className="border p-4 rounded-lg shadow mb-4">
          <div className="flex items-center space-x-4 mb-2">
            <span className="font-bold p-2 bg-black text-white rounded-lg">
              DAY {day.day}
            </span>
            <input
              type="date"
              className="border p-2 rounded-md w-32 text-center"
              value={day.date}
              onChange={(e) => {
                setTourPlan((prevPlan) =>
                  prevPlan.map((d, i) =>
                    i === index ? { ...d, date: e.target.value } : d
                  )
                );
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <textarea
              className="w-full border p-2 rounded-md h-32"
              placeholder="รายละเอียดของวันนี้"
              value={day.description}
              onChange={(e) => {
                setTourPlan((prevPlan) =>
                  prevPlan.map((d, i) =>
                    i === index ? { ...d, description: e.target.value } : d
                  )
                );
              }}
            />
            <div className="border p-4 rounded-md">
              <label
                className="flex flex-col items-center justify-center cursor-pointer text-gray-500 h-full"
                style={{ height: "100px", border: "2px dashed gray" }}
              >
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, index)}
                />
                <span>เพิ่มภาพ (ลากมาวางได้)</span>
              </label>
              <div className="grid grid-cols-4 gap-2 mt-4">
                {day.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative">
                    <img
                      src={image.preview}
                      alt={`Tour Day ${day.day}`}
                      className="w-70 h-90 object-cover rounded-md"
                    />
                    <button
                      className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded"
                      onClick={() => removeImage(index, imgIndex)}
                    >
                      ลบ
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex space-x-4 mt-4">
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={addDay}
        >
          เพิ่มวันทัวร์
        </button>
        {tourPlan.length > 1 && (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={removeDay}
          >
            ลบวัน
          </button>
        )}
      </div>
    </div>
  );
};

export default TourPlanSection;