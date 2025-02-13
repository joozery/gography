import React, { useState, useEffect } from "react";
import BackgroundImage from "../assets/coverabout2.webp";
import TeamMemberCard from "./TeamMemberCard";
import SelectedMemberDetails from "./SelectedMemberDetails";

const API_URL = "http://gography.website:3004/api/team-members";

const TeamSection = () => {
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
            <TeamMemberCard
              key={member.id}
              member={member}
              isSelected={selectedMember?.id === member.id}
              onClick={() => handleSelectMember(member)}
            />
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
        {selectedMember && <SelectedMemberDetails member={selectedMember} />}
      </div>
    </div>
  );
};

export default TeamSection;