import React from "react";

const TeamMemberCard = ({ member, isSelected, onClick }) => {

  const API_URL = import.meta.env.VITE_API_URL;

  return (
    <div
      className={`cursor-pointer p-4 rounded-lg shadow-md ${
        isSelected ? "bg-gray-700 border-2 border-primary" : "bg-gray-800 hover:bg-gray-700"
      }`}
      onClick={onClick}
    >
      <img
        src={`${API_URL}${member.image}`}
        alt={member.name}
        className="rounded-lg object-cover w-full h-auto mx-auto"
      />
      <h3 className="text-lg font-bold mt-2 text-center">
        {`${member.first_name} ${member.last_name}`}
      </h3>
      <p className="text-sm text-gray-400 text-center">{member.position}</p>
    </div>
  );
};

export default TeamMemberCard;