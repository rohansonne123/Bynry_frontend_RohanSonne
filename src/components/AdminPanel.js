import React, { useState } from "react";
import "../styles/AdminPanel.css";

const AdminPanel = ({ onAdd, onEdit, onDelete, profiles }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    photo: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      onEdit(formData);
    } else {
      const newProfile = { ...formData, id: Date.now().toString() };
      onAdd(newProfile);
    }
    setFormData({ id: "", name: "", description: "", photo: "" });
  };

  const handleEditClick = (profile) => {
    setFormData(profile);
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={formData.photo}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <button type="submit">{formData.id ? "Edit Profile" : "Add Profile"}</button>
      </form>

      <h3>Existing Profiles</h3>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.name} - {profile.description}
            <button onClick={() => handleEditClick(profile)}>Edit</button>
            <button className="delete-btn" onClick={() => onDelete(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
