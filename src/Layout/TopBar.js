import React from "react";
import avata from "../assets/avatar.jpg";
import "./TopBar.css";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="header">
      <Link to="/">CV Builder</Link>
      <img src={avata} alt="avatar" />
    </div>
  );
}

export default TopBar;
