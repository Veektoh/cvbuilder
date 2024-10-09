import React from "react";
import "./Button.css";

function Button({
  children,
  onBtnClick,
  color = "green",
  backgroundColor = "white",
  width,
  height,
  disabled = false,
}) {
  return (
    <button
      className="custombutton"
      onClick={onBtnClick}
      style={{ color, backgroundColor, width, height }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
