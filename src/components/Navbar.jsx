import React from "react";
import logo from "/images/podcast-planet-logo-planetglow.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img className="navbar-logo" src={logo} alt="Podcast Planet Logo" />
      </div>
    </nav>
  );
}