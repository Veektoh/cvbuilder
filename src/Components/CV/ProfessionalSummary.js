import React, { useState } from "react";
import EditSaveBtn from "../EditiSaveBtn";

function ProfessionalSummary({ cvData, isEditMode }) {
  const [isEdit, setIsEdit] = useState(false);
  const [summaryData, setSummaryData] = useState(cvData.professionalSummary);

  const handleInputChange = (e) => {
    setSummaryData(e.target.value);
  };

  return (
    <section className="cv-summary">
      <h2>
        Professional Summary
        {isEditMode && <EditSaveBtn setIsEdit={setIsEdit} />}
      </h2>
      {isEditMode && isEdit ? (
        <p>
          <textarea
            rows="6"
            value={summaryData}
            onChange={handleInputChange}
          ></textarea>
        </p>
      ) : (
        <p>{summaryData}</p>
      )}
    </section>
  );
}

export default ProfessionalSummary;
