import React, { useEffect } from "react";
import "../styles/MapComponent.css";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = 'pk.eyJ1Ijoicm9oYW5zb25uZSIsImEiOiJjbHBpa2N1dGgwMGNsMmttZzZ2Ynp0OHJzIn0.BU4V16SGOPkApmGrzFQrKQ'; // Replace with your token

const mapStyle = {
  width: "100%",
  height: "400px", // Adjust for UI needs
};

const defaultCenter = { latitude: 20.5937, longitude: 78.9629 }; // Default (India)

const MapComponent = ({ selectedProfile }) => {
  return (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={{
        latitude: selectedProfile?.location?.latitude || defaultCenter.latitude,
        longitude: selectedProfile?.location?.longitude || defaultCenter.longitude,
        zoom: selectedProfile ? 12 : 5,
      }}
      style={mapStyle}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      {selectedProfile && selectedProfile.location && (
        <Marker
          latitude={selectedProfile.location.latitude}
          longitude={selectedProfile.location.longitude}
        />
      )}
    </Map>
  );
};

export default MapComponent;
