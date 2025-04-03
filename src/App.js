import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles/App.css";
import ProfileList from "./components/ProfileList";
import ProfileDetails from "./components/ProfileDetails";
import AdminPanel from "./components/AdminPanel";
import Header from "./components/Header";
import MapComponent from "./components/MapComponent";
import SearchFilter from "./components/SearchFilter";
import LoadingIndicator from "./components/LoadingIndicator";
import ErrorBoundary from "./components/ErrorBoundary";
import profilesData from "./api/profiles"; // Mock API Data

function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    try {
      setTimeout(() => {
        setProfiles(profilesData);
        setFilteredProfiles(profilesData);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  // Add New Profile
  const handleAddProfile = (newProfile) => {
    const updatedProfiles = [...profiles, newProfile];
    setProfiles(updatedProfiles);
    setFilteredProfiles(updatedProfiles);
  };

  // Edit Profile
  const handleEditProfile = (updatedProfile) => {
    const updatedProfiles = profiles.map((profile) =>
      profile.id === updatedProfile.id ? updatedProfile : profile
    );
    setProfiles(updatedProfiles);
    setFilteredProfiles(updatedProfiles);
  };

  // Delete Profile
  const handleDeleteProfile = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
    setFilteredProfiles(updatedProfiles);
  };

  return (
    <Router>
      <ErrorBoundary>
        <div className="app-container">
          <Header />
          <SearchFilter onSearch={(query) => {
            setFilteredProfiles(profiles.filter(profile =>
              profile.name.toLowerCase().includes(query.toLowerCase())
            ));
          }} />
          {loading && <LoadingIndicator />}
          {error && <p>Error loading profiles</p>}

          {!loading && !error && (
            <Routes>
              <Route
                path="/"
                element={<ProfileList 
                  profiles={filteredProfiles} 
                  onSelect={setSelectedProfile} 
                  onDelete={handleDeleteProfile} 
                />}
              />
              <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
              
              <Route
                path="/admin"
                element={
                  <AdminPanel
                    onAdd={handleAddProfile}
                    onEdit={handleEditProfile}
                    onDelete={handleDeleteProfile}
                    profiles={profiles}
                  />
                }
              />
            </Routes>
          )}

<MapComponent selectedProfile={selectedProfile} />

        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
