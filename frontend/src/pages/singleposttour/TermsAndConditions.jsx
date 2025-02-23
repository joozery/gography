import React from "react";

const TermsAndConditions = ({ terms_conditions }) => {

  function RichText({ content }) {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return (
    <div
      // className="min-h-screen px-5 py-10"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1), transparent 50%), rgb(5, 20, 27)",
      }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            TERMS & CONDITIONS
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            {/* <p>📁 รายละเอียดการชำระเงินและบริการ</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>💰 ราคา 135,900 บาท</li>
              <li>🏠 พักเดี่ยวเพิ่มท่านละ 42,000</li>
              <li>🔒 มัดจำ: 50,000 บาท</li>
              <li>💳 แบ่งชำระได้ 4 งวด</li>
              <li>⏳ ชำระงวดสุดท้าย 60 วันก่อนเดินทาง</li>
            </ul>

            <p>
              📋 หลังจองสิทธิ์ เรียบร้อยแล้ว โปรดส่งหลักฐานและข้อมูลดังต่อไปนี้
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>📄 หน้าพาสปอร์ต (อายุเหลือ 6+ เดือน)</li>
              <li>📑 แบบฟอร์มข้อมูลส่วนตัวที่บริษัทส่งให้</li>
            </ul>

            <p>✅ บริการที่รวมในราคา</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>🏨 ที่พัก 6 คืน (4 ดาว)</li>
              <li>🚐 รถตู้ 9 ที่นั่ง และค่าเช่ายานพาหนะทั้งหมด</li>
              <li>📸 สต๊าฟช่างภาพมืออาชีพ (ขับรถ ถ่ายรูป แต่งรูปส่งทุกวัน)</li>
              <li>
                🎟️ ค่าธรรมเนียมสถานที่ (จองคิว กรอกรฟอร์ม เตรียมเอกสาร
                เจ้าหน้าที่ดูแลวันยื่น)
              </li>
              <li>🚢 ค่าเรือ ferry ไป-กลับเกาะ Mykines ชมนก Puffin</li>
              <li>🛶 ค่าเช่าเรือ private boat ไป Drangarnir</li>
              <li>🚌 ค่า private bus จากสนามบิน Copenhagen เข้าเมือง</li>
              <li>📜 ประกันการเดินทาง วงเงิน 2,000,000 บาท</li>
              <li>✈️ อัตราค่าบริการไม่รวมค่าเครื่องบิน</li>
            </ul> */}
            {/* {stripHtmlTags(terms_conditions)} */}
            <RichText content={terms_conditions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
