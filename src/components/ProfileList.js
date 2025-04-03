
import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProfileList.css";

const ProfileList = ({ profiles, onSelect, onDelete }) => {
  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <div key={profile.id} className="profile-card">
          <img src={profile.photo} alt={profile.name} className="profile-photo" />
          <h3>{profile.name}</h3>
          <p>{profile.description}</p>
          <button onClick={() => onSelect(profile)}>Summary</button>
          <Link to={`/profile/${profile.id}`}>View Details</Link>
          <button className="delete-btn" onClick={() => onDelete(profile.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
