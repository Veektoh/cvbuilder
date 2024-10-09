import React, { useState } from "react";
import EditSaveBtn from "../EditiSaveBtn";
import DeleteBtn from "../DeleteBtn";

function Education({ cvData, isEditMode }) {
  const [isEdit, setIsEdit] = useState(false);
  const [educationData, setEducationData] = useState([...cvData.education]);
  const handleEducationInputChange = (eduIndex, fieldName, value) => {
    const updatedEducationData = [...educationData];
    updatedEducationData[eduIndex] = {
      ...updatedEducationData[eduIndex],
      [fieldName]: value,
    };
    setEducationData(updatedEducationData);
  };
  return (
    <section className="cv-education">
      <h2>
        Education
        {isEditMode && <EditSaveBtn setIsEdit={setIsEdit} />}
      </h2>
      {educationData.map((education, educationListIndex) =>
        isEditMode && isEdit ? (
          <li className="cv-education-list editMode" key={educationListIndex}>
            <DeleteBtn
              setDataFunction={setEducationData}
              listIndex={educationListIndex}
            />
            <div className="container">
              <h3>
                <input
                  onChange={(e) =>
                    handleEducationInputChange(
                      educationListIndex,
                      "degree",
                      e.target.value
                    )
                  }
                  type="text"
                  value={education.degree}
                />
              </h3>
              <p className="dash">
                <input
                  onChange={(e) =>
                    handleEducationInputChange(
                      educationListIndex,
                      "institution",
                      e.target.value
                    )
                  }
                  type="text"
                  value={education.institution}
                />
              </p>
              <p>
                <input
                  onChange={(e) =>
                    handleEducationInputChange(
                      educationListIndex,
                      "gpa",
                      e.target.value
                    )
                  }
                  type="text"
                  value={education.gpa}
                />
              </p>
            </div>
            <div>
              <h3>
                <input
                  onChange={(e) =>
                    handleEducationInputChange(
                      educationListIndex,
                      "graduationDate",
                      e.target.value
                    )
                  }
                  type="text"
                  value={education.graduationDate}
                />
              </h3>
            </div>
          </li>
        ) : (
          <li className="cv-education-list" key={educationListIndex}>
            <div>
              <h3>{education.degree}</h3>
              <p className="dash">{education.institution}</p>
              <p>({education.gpa})</p>
            </div>
            <div>
              <h3>{education.graduationDate}</h3>
            </div>
          </li>
        )
      )}
    </section>
  );
}

export default Education;
