import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProfileDetails.css";

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams(); // Get profile ID from URL
  const profile = profiles.find((p) => p.id === id); // Find matching profile

  if (!profile) {
    return <h2>Profile Not Found</h2>;
  }

  return (
    <div className="profile-details">
      <img src={profile.photo} alt={profile.name} className="profile-photo-large" />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <p><strong>Contact:</strong> {profile.contact || "Not Available"}</p>
      <p><strong>Location:</strong> {profile.location || "Unknown"}</p>
    </div>
  );
};

export default ProfileDetails;
