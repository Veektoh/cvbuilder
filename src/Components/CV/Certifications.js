import React, { useState } from "react";
import EditSaveBtn from "../EditiSaveBtn";
import DeleteBtn from "../DeleteBtn";

function Certifications({ cvData, isEditMode }) {
  const [isEdit, setIsEdit] = useState(false);
  const [certificationData, setcertificationData] = useState([
    ...cvData.certifications,
  ]);

  const handleInputChange = (index, value) => {
    const updatedCertificationData = [...certificationData];
    updatedCertificationData[index] = value;
    setcertificationData(updatedCertificationData);
  };
  console.log(cvData);
  return (
    <section className="cv-certification">
      <h2>
        Certification
        {isEditMode && <EditSaveBtn setIsEdit={setIsEdit} />}
      </h2>
      {certificationData.map((cert, index) =>
        isEditMode && isEdit ? (
          <li className="editList" key={index}>
            <input
              onChange={(e) => handleInputChange(index, e.target.value)}
              type="text"
              value={cert}
            />
            <DeleteBtn
              setDataFunction={setcertificationData}
              listIndex={index}
            />
          </li>
        ) : (
          <li key={index}>{cert}</li>
        )
      )}
    </section>
  );
}

export default Certifications;
