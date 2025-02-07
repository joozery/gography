import React, { useState, useEffect } from "react";
import BackgroundImage from "../assets/coverabout2.webp";

const API_URL = "http://localhost:3002/api/team-members";

const About = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch team members");
        const data = await response.json();
        setTeamMembers(data.teamMembers);
        setSelectedMember(data.teamMembers[0]); // Set the first member as default
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  const handleSelectMember = (member) => {
    setSelectedMember(member);
  };

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Header Section */}
      <div className="pt-40 text-center mb-10">
        <h1 className="text-4xl font-bold">OUR Creative Team</h1>
      </div>

      <div className="flex w-full justify-center gap-10 px-10">
        {/* Left Side: Team Members */}
        <div className="grid grid-cols-2 gap-6 w-1/4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`cursor-pointer p-4 rounded-lg shadow-md ${
                selectedMember?.id === member.id
                  ? "bg-gray-700 border-2 border-primary"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => handleSelectMember(member)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-lg object-cover w-full h-auto mx-auto"
              />
              <h3 className="text-lg font-bold mt-2 text-center">
                {`${member.first_name} ${member.last_name}`}
              </h3>
              <p className="text-sm text-gray-400 text-center">
                {member.position}
              </p>
            </div>
          ))}
        </div>

        {/* Center: Selected Member */}
        {selectedMember && (
          <div className="flex justify-center items-center">
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="rounded-lg object-cover max-w-full h-auto"
            />
          </div>
        )}

        {/* Right Side: Member Details */}
        {selectedMember && (
          <div className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-2">
              {`${selectedMember.first_name} ${selectedMember.last_name}`}
            </h2>
            <p className="text-lg font-semibold text-gray-400 mb-4">
              {selectedMember.position}
            </p>
            <h3 className="text-xl font-bold mb-2">About me</h3>
            <p className="text-gray-300">{selectedMember.about}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;