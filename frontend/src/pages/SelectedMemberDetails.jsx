import React from "react";

const SelectedMemberDetails = ({ member }) => {
  return (
    <div className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-2">
        {`${member.first_name} ${member.last_name}`}
      </h2>
      <p className="text-lg font-semibold text-gray-400 mb-4">{member.position}</p>
      <h3 className="text-xl font-bold mb-2">About me</h3>
      <p className="text-gray-300">{member.about}</p>
    </div>
  );
};

export default SelectedMemberDetails;