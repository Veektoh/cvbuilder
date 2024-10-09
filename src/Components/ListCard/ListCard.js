import React from "react";
import "./ListCard.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function ListCard({ title, description, link }) {
  const navigate = useNavigate();
  return (
    <li className="listcard">
      <h3>{title}</h3>
      <p>{description}</p>
      <Button
        backgroundColor="#f9a966"
        color="#210c2c"
        onBtnClick={() => navigate(link)}
      >
        Try Now
      </Button>
    </li>
  );
}

export default ListCard;
