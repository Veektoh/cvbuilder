import React from "react";
import mockcvData from "../../../Data/cvData1.json";
import Header from "../Header";
import ProfessionalSummary from "../ProfessionalSummary";
import KeySkills from "../KeySkills";
import Education from "../Education";
import WorkExperience from "../WorkExperience";
import Projects from "../Projects";
import Certifications from "../Certifications";
import Reference from "../Reference";
import "./CvPreview.css";
import "../CvTemplateStyles/CvTemplate1.css";
import "../CvTemplateStyles/CvTemplate2.css";
import { useOutletContext } from "react-router";

function CvPreview() {
  const {
    cvTemplate = "template1",
    fetchCvData,
    isEditMode,
  } = useOutletContext() || {};
  const cvData = fetchCvData || mockcvData;

  return (
    <div className={`cv-${cvTemplate} cvPreview-container`}>
      <div className="cvPreview-wrapper">
        {cvData.header && <Header cvData={cvData} isEditMode={isEditMode} />}
        {cvData.professionalSummary && (
          <ProfessionalSummary cvData={cvData} isEditMode={isEditMode} />
        )}
        {cvData.keySkills && (
          <KeySkills cvData={cvData} isEditMode={isEditMode} />
        )}
        {cvData.professionalExperience && (
          <WorkExperience cvData={cvData} isEditMode={isEditMode} />
        )}
        {cvData.education && (
          <Education cvData={cvData} isEditMode={isEditMode} />
        )}
        {cvData.projects && (
          <Projects cvData={cvData} isEditMode={isEditMode} />
        )}
        {cvData.references && (
          <Reference cvData={cvData} isEditMode={isEditMode} />
        )}
        {cvData.certifications && (
          <Certifications cvData={cvData} isEditMode={isEditMode} />
        )}
      </div>
    </div>
  );
}

export default CvPreview;
