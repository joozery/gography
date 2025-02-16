import React from "react";

const PriceSection = ({ included, not_included, price }) => {
  const formatCurrency = (amount, locale = "en-US", currency = "USD") => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  function stripHtmlTags(str) {
    return str.replace(/<[^>]*>/g, '');
  }
  
  return (
    <div
      className="min-h- px-5 py-6" // ลด padding จาก py-10 เป็น py-6
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1), transparent 50%), rgb(5, 20, 27)",
      }}
    >
      <div className="container mx-auto px-6 py-8 text-white">
        {" "}
        {/* ลด py จาก 12 เป็น 8 */}
        <h2 className="text-3xl font-bold mb-4 text-center">PRICE</h2>{" "}
        {/* ลด mb-6 เป็น mb-4 */}
        <p className="text-center text-xl font-semibold mb-6">
          {formatCurrency(price, "th-TH", "THB")} / PER PERSON
        </p>{" "}
        {/* ลด mb-8 เป็น mb-6 */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {" "}
          {/* ลด gap จาก 10 เป็น 8 */}
          {/* Included */}
          <div className="bg-gray-800 bg-opacity-70 rounded-lg shadow-md p-4 w-full md:w-1/2">
            {" "}
            {/* ลด p-6 เป็น p-4 */}
            <h3 className="text-xl font-semibold mb-3">Included</h3>{" "}
            {/* ลด mb-4 เป็น mb-3 */}
            {/* <ul className="list-disc pl-5 space-y-2">
              <li>✅ ช่างภาพมืออาชีพ ถ่ายรูปให้ตลอดการเดินทาง</li>
              <li>✅ ประกันการเดินทาง</li>
              <li>✅ รวมค่าที่พัก</li>
              <li>✅ รวมค่าเดินทางโดยรถ</li>
            </ul> */}
            {stripHtmlTags(included)}
          </div>
          {/* Not Included */}
          <div className="bg-gray-800 bg-opacity-70 rounded-lg shadow-md p-4 w-full md:w-1/2">
            {" "}
            {/* ลด p-6 เป็น p-4 */}
            <h3 className="text-xl font-semibold mb-3">Not Included</h3>{" "}
            {/* ลด mb-4 เป็น mb-3 */}
            {/* <ul className="list-disc pl-5 space-y-2">
              <li>✅ กิจกรรม</li>
              <li>✅ ค่าวีซ่า</li>
              <li>✅ ค่าอาหาร</li>
              <li>✅ ตั๋วเข้าชมพิพิธภัณฑ์</li>
              <li>✅ ตั๋วเครื่องบิน</li>
            </ul> */}
            {stripHtmlTags(not_included)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
