import React from "react";
import "./index.css";
import Button from "../../Components/Button/Button";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import fetchCvData from "../../Data/cvData2.json";

function PreviewCv() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [cvTemplate, setCvTemplate] = useState("template1");
  const navigate = useNavigate();

  function handleEditMode() {
    setIsEditMode(true);
    navigate("modifycv");
  }
  function handleCvSave() {
    setIsEditMode(false);
  }

  function handleChangeCvTemplate() {
    setCvTemplate((cvTemplate) =>
      cvTemplate === "template1" ? "template2" : "template1"
    );
  }
  return (
    <div className="previewCv-page">
      <div className="btn-div">
        <Button
          backgroundColor={"#210c2c"}
          color="#f9a966"
          onBtnClick={handleChangeCvTemplate}
          disabled={isEditMode}
        >
          Change Template
        </Button>
        {isEditMode ? (
          <Button
            width={"15rem"}
            height={"5rem"}
            backgroundColor={"#210c2c"}
            color="#f9a966"
            onBtnClick={handleCvSave}
          >
            Save Cv
          </Button>
        ) : (
          <Button
            width={"15rem"}
            height={"5rem"}
            backgroundColor={"#210c2c"}
            color="#f9a966"
            onBtnClick={handleEditMode}
          >
            Edit Cv
          </Button>
        )}
        <Button
          width={"15rem"}
          height={"5rem"}
          backgroundColor={"#210c2c"}
          color="#f9a966"
          disabled={isEditMode}
        >
          Download CV
        </Button>
      </div>
      <div className="previewCv-div">
        <Outlet context={{ cvTemplate, fetchCvData, isEditMode }} />
      </div>
    </div>
  );
}

export default PreviewCv;
