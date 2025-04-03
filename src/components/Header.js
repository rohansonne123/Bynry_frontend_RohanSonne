import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
const Header = () => {
  return (
    <header className="header">
      <h1>Profile Viewer</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin Panel</Link>
      </nav>
    </header>
  );
};

export default Header;
