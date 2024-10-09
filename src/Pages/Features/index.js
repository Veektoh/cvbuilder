import React from "react";
import CvPreview from "../../Components/CV/CvPreview/CvPreview";
import Button from "../../Components/Button/Button";
import "./index.css";
import { Outlet, useNavigate } from "react-router";

function Features() {
  const navigate = useNavigate();
  return (
    <div className="feature-page">
      <div className="feature-type-div">
        <Outlet />
        <div className="btn-div">
          <Button
            width={"15rem"}
            height={"5rem"}
            backgroundColor={"#f9a966"}
            color="#000000"
          >
            Generate CV
          </Button>
          <Button
            width={"15rem"}
            height={"5rem"}
            backgroundColor={"#f9a966"}
            color="#000000"
            onBtnClick={() => navigate("previewcv")}
          >
            Preview CV
          </Button>
        </div>
      </div>
      <div className="cv-preview-dv">
        <CvPreview />
      </div>
    </div>
  );
}

export default Features;
