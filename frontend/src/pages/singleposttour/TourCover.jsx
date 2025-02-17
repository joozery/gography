import React, { useEffect } from "react";

const TourCover = ({coverImage, title, information}) => {

  // useEffect(()=> {
  //   console.log(coverImage);
  // }, [])

  function RichText({ content }) {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1), transparent 50%), rgb(5, 20, 27)",
      }}
    >
      {/* ส่วนที่แสดงภาพปก */}
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          // backgroundImage: "url('https://gography.net/wp-content/uploads/2022/03/AdobeStock_170503432-1536x864.jpg')",
          backgroundImage: `url(${coverImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            {/* 19-28 February 2025 Arctic Aurora Odyssey Iceland */}
            {title}
          </h1>
        </div>
      </div>

      {/* ส่วนรายละเอียดทัวร์ */}
      <div className="container mx-auto px-6 py-12">
        {/* ปุ่ม: ดาวน์โหลดแผนการเดินทาง */}
        <div className="flex justify-start mb-8">
          <a
            href="https://example.com/path-to-pdf-file.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-all"
          >
            ดาวน์โหลดแผนการเดินทาง
          </a>
        </div>

        {/* ข้อมูลทัวร์ */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">INFORMATION</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            {/* <p>📍<strong>วิธีการเข้าถึงรายละเอียดทริป</strong>📍</p>
            <p>📌 ท่านสามารถกดที่ Tour Plan เพื่อดูรายละเอียดของทริป</p>
            <p>📂 สำหรับเงื่อนไขและอัตราค่าบริการ ท่านสามารถกดที่ “Terms & Conditions” เพื่ออ่านข้อมูลเพิ่มเติม</p>
            <p>🌟 <strong>ท่องเที่ยวแบบ Road Trip สุดพิเศษกับ Gography</strong> 🌟</p>
            <p>ค้นพบประสบการณ์การท่องเที่ยวที่แตกต่างและน่าประทับใจไปกับ Gography เราภูมิใจนำเสนอทริปแบบ Road Trip ที่ออกแบบมาเพื่อนักเดินทางที่ต้องการความพิเศษเหนือระดับ</p>
            <p>🚗 เดินทางอย่างมีสไตล์ ทริปของเรานำโดยช่างภาพมืออาชีพ เราพร้อมพาคุณไปยังจุดถ่ายภาพที่สวยที่สุด จอดแวะพักหรือช้อปปิ้งได้ตามใจปรารถนา</p>
            <p>📸 ภาพถ่ายคุณภาพระดับมืออาชีพ ไม่ต้องกังวลเรื่องการเก็บภาพความทรงจำ ช่างภาพของเราพร้อมเก็บทุกโมเมนต์สุดประทับใจตลอดการเดินทาง</p>
            <p>🌄 สัมผัสความงามในช่วงเวลาที่ดีที่สุด เราใส่ใจในทุกรายละเอียด...</p>
            <p>🍽️ อิสระในการเลือกอาหาร เราเชื่อว่าอาหารเป็นส่วนสำคัญของการท่องเที่ยว...</p>
            <p>👥 กรุ๊ปเล็กสุดอบอุ่น ด้วยจำนวนผู้ร่วมเดินทางที่จำกัด...</p>
            <p>💯 คุณภาพที่ได้รับการยืนยัน ด้วยคะแนนรีวิว 5 เต็ม 5 จากลูกค้ามากกว่า 100 ท่าน...</p>
            <p>จำนวนผู้ร่วมเดินทาง: 6 ท่าน + สต๊าฟ 1</p>
            <p>ที่พัก: Villa Bryggekanten – by Classic Norway Hotels...</p>
            <p>การเดินทาง: รถตู้ 9 ที่นั่ง 1 คัน...</p>
            <p>หมายเหตุ: โปรแกรมการเดินทางในแต่ละวันอาจจะมีการปรับเปลี่ยน...</p> */}
            <RichText content={information} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCover;