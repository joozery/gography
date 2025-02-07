import React from "react";

const TourDetails = () => {
  const plans = [
    {
      day: 1,
      date: "4 of June",
      sessions: {
        Morning: [
          { time: "9:30", detail: "Fusce posuere orci nec purus mattis lobortis." },
          { time: "10:00", detail: "Nullam eu nulla vel mauris eu eu lorem." },
          { time: "11:30", detail: "Etiam mollis nulla at nulla condimentum." },
        ],
        Afternoon: [
          { time: "13:30", detail: "Mauris sed tellus dapibus, luctus est." },
          { time: "15:30", detail: "Pellentesque ultricies luctus porta." },
        ],
        Evening: [
          { time: "17:30", detail: "Vestibulum sit amet nisl lobortis molestie." },
          { time: "18:00", detail: "Morbi consequat sapien eget mollis pulvinar." },
          { time: "19:30", detail: "Etiam mollis nulla at nulla condimentum." },
        ],
      },
      image: "https://gography.net/wp-content/uploads/2024/07/DSC09043.jpg",
    },
    {
      day: 2,
      date: "5 of June",
      sessions: {
        Morning: [
          { time: "9:30", detail: "Fusce posuere orci nec purus mattis lobortis." },
          { time: "11:00", detail: "Nullam eu nulla vel mauris eu eu lorem." },
        ],
        Afternoon: [
          { time: "13:30", detail: "Mauris sed tellus dapibus, luctus est." },
          { time: "15:30", detail: "Pellentesque ultricies luctus porta." },
        ],
        Evening: [
          { time: "17:30", detail: "Vestibulum sit amet nisl lobortis molestie." },
          { time: "18:00", detail: "Morbi consequat sapien eget mollis pulvinar." },
        ],
      },
      image: "https://gography.net/wp-content/uploads/2024/07/DSC05483.jpg",
    },
    {
        day: 3,
        date: "5 of June",
        sessions: {
          Morning: [
            { time: "9:30", detail: "Fusce posuere orci nec purus mattis lobortis." },
            { time: "11:00", detail: "Nullam eu nulla vel mauris eu eu lorem." },
          ],
          Afternoon: [
            { time: "13:30", detail: "Mauris sed tellus dapibus, luctus est." },
            { time: "15:30", detail: "Pellentesque ultricies luctus porta." },
          ],
          Evening: [
            { time: "17:30", detail: "Vestibulum sit amet nisl lobortis molestie." },
            { time: "18:00", detail: "Morbi consequat sapien eget mollis pulvinar." },
          ],
        },
        image: "https://gography.net/wp-content/uploads/2024/07/DSC05483.jpg",
      },
      {
        day: 4,
        date: "5 of June",
        sessions: {
          Morning: [
            { time: "9:30", detail: "Fusce posuere orci nec purus mattis lobortis." },
            { time: "11:00", detail: "Nullam eu nulla vel mauris eu eu lorem." },
          ],
          Afternoon: [
            { time: "13:30", detail: "Mauris sed tellus dapibus, luctus est." },
            { time: "15:30", detail: "Pellentesque ultricies luctus porta." },
          ],
          Evening: [
            { time: "17:30", detail: "Vestibulum sit amet nisl lobortis molestie." },
            { time: "18:00", detail: "Morbi consequat sapien eget mollis pulvinar." },
          ],
        },
        image: "https://gography.net/wp-content/uploads/2024/07/DSC05483.jpg",
      },
      {
        day: 5,
        date: "5 of June",
        sessions: {
          Morning: [
            { time: "9:30", detail: "Fusce posuere orci nec purus mattis lobortis." },
            { time: "11:00", detail: "Nullam eu nulla vel mauris eu eu lorem." },
          ],
          Afternoon: [
            { time: "13:30", detail: "Mauris sed tellus dapibus, luctus est." },
            { time: "15:30", detail: "Pellentesque ultricies luctus porta." },
          ],
          Evening: [
            { time: "17:30", detail: "Vestibulum sit amet nisl lobortis molestie." },
            { time: "18:00", detail: "Morbi consequat sapien eget mollis pulvinar." },
          ],
        },
        image: "https://gography.net/wp-content/uploads/2024/07/DSC05483.jpg",
        
      },
  ];

  return (
    <div className="min-h-screen py-10"
    style={{
      background:
        "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1), transparent 50%), rgb(5, 20, 27)",
    }}
  >
    <div className="container mx-auto px-6 py-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Tour Plan</h1>
  
      {plans.map((plan, index) => (
        <div key={plan.day} className="relative mb-10">
          {/* เส้น Timeline */}
          <div className="absolute top-0 left-[20px] w-[2px] bg-gray-300 h-full z-0"></div>
  
          <div className="relative flex items-start gap-6">
            {/* Day และ Date */}
            <div className="flex flex-col items-start w-[150px]">
              <div className="flex items-center">
                <div className="w-[10px] h-[10px] bg-white border-4 border-gray-500 rounded-full z-10"></div>
                <div className="ml-4">
                  <div className="text-xl font-bold text-gray-800">Day {plan.day}</div>
                  <p className="text-sm text-gray-500">{plan.date}</p>
                </div>
              </div>
            </div>
  
            {/* เนื้อหา */}
            <div className="flex-1 bg-gray-50 shadow-md rounded-lg p-6">
              {Object.entries(plan.sessions).map(([session, details]) => (
                <div key={session} className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">{session}:</h3>
                  <ul className="space-y-2 text-gray-600">
                    {details.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-4">
                        <span className="font-bold text-gray-700">{item.time}</span>
                        <span>{item.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
  
            {/* ภาพ */}
            <div className="w-full md:w-1/3">
              <img
                src={plan.image}
                alt={`Day ${plan.day}`}
                className="w-full h-full rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default TourDetails;