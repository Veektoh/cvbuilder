import React, { useState } from "react";
import EditSaveBtn from "../EditiSaveBtn";
import DeleteBtn from "../DeleteBtn";
import { MdOutlineDelete } from "react-icons/md";

function WorkExperience({ cvData, isEditMode }) {
  const [isEdit, setIsEdit] = useState(false);
  const [workData, setWorkData] = useState([...cvData.professionalExperience]);

  const handleWorkInputChange = (workIndex, fieldName, value) => {
    const updatedWorkData = [...workData];
    updatedWorkData[workIndex] = {
      ...updatedWorkData[workIndex],
      [fieldName]: value,
    };
    setWorkData(updatedWorkData);
  };

  const handleWorkDetailChange = (workIndex, workDetailIndex, value) => {
    const updatedWorkData = [...workData];
    const updatedWorkDetails = [...updatedWorkData[workIndex].details];
    updatedWorkDetails[workDetailIndex] = value;
    updatedWorkData[workIndex].details = updatedWorkDetails;
    setWorkData(updatedWorkData);
  };

  const handleWorkDetailDelete = (workIndex, workDetailIndex) => {
    const updatedWorkData = [...workData];
    updatedWorkData[workIndex].details.splice(workDetailIndex, 1); // Remove the detail
    setWorkData(updatedWorkData); // Update the state
  };

  return (
    <section className="cv-workExperience">
      <h2>
        Work Experience
        {isEditMode && <EditSaveBtn setIsEdit={setIsEdit} />}
      </h2>
      {workData.map((experience, expIndex) =>
        isEditMode && isEdit ? (
          <li className="cv-workExperience-list editMode" key={expIndex}>
            <span>
              <DeleteBtn setDataFunction={setWorkData} listIndex={expIndex} />
            </span>
            <div className="cv-experience-header">
              <div>
                <div className="cv-experience-comp-loc">
                  <h3>
                    <input
                      onChange={(e) =>
                        handleWorkInputChange(
                          expIndex,
                          "company",
                          e.target.value
                        )
                      }
                      type="text"
                      value={experience.company}
                    />
                  </h3>
                  <p>
                    <input
                      onChange={(e) =>
                        handleWorkInputChange(
                          expIndex,
                          "location",
                          e.target.value
                        )
                      }
                      type="text"
                      value={experience.location}
                    />
                  </p>
                </div>
                <h4>
                  <input
                    onChange={(e) =>
                      handleWorkInputChange(expIndex, "title", e.target.value)
                    }
                    type="text"
                    value={experience.title}
                  />
                </h4>
              </div>
              <h3>
                <input
                  onChange={(e) =>
                    handleWorkInputChange(expIndex, "dates", e.target.value)
                  }
                  type="text"
                  value={experience.dates}
                />
              </h3>
            </div>
            <ul>
              {experience.details.map((detail, detailIndex) => (
                <li className="editList" key={detailIndex}>
                  <input
                    onChange={(e) =>
                      handleWorkDetailChange(
                        expIndex,
                        detailIndex,
                        e.target.value
                      )
                    }
                    type="text"
                    value={detail}
                  />
                  <button
                    className="deleteBtn"
                    onClick={() =>
                      handleWorkDetailDelete(expIndex, detailIndex)
                    }
                  >
                    <MdOutlineDelete />
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li className="cv-workExperience-list" key={expIndex}>
            <div className="cv-experience-header">
              <div>
                <div className="cv-experience-comp-loc">
                  <h3>{experience.company}</h3>
                  <p>{experience.location}</p>
                </div>
                <h4>{experience.title}</h4>
              </div>
              <h3>{experience.dates}</h3>
            </div>
            <ul>
              {experience.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </li>
        )
      )}
    </section>
  );
}

export default WorkExperience;
