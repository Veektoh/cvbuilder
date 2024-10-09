import React, { useState } from "react";
import EditSaveBtn from "../EditiSaveBtn";
import DeleteBtn from "../DeleteBtn";

function KeySkills({ cvData, isEditMode }) {
  const [isEdit, setIsEdit] = useState(false);
  const [skillsData, setSkillsData] = useState([...cvData.keySkills]);
  const handleInputChange = (index, value) => {
    const updatedSkills = [...skillsData];
    updatedSkills[index] = value;
    setSkillsData(updatedSkills);
  };

  return (
    <section className="cv-skills">
      <h2>
        Skills
        {isEditMode && <EditSaveBtn setIsEdit={setIsEdit} />}
      </h2>
      <ul>
        {skillsData.map((skill, index) =>
          isEditMode && isEdit ? (
            <li className="editList" key={index}>
              <input
                onChange={(e) => handleInputChange(index, e.target.value)}
                type="text"
                value={skill}
              />
              <DeleteBtn setDataFunction={setSkillsData} listIndex={index} />
            </li>
          ) : (
            <li key={index}>{skill}</li>
          )
        )}
      </ul>
    </section>
  );
}

export default KeySkills;
