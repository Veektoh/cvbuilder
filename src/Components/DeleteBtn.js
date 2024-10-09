import React from "react";
import { MdOutlineDelete } from "react-icons/md";

function DeleteBtn({ setDataFunction, listIndex }) {
  const handleDeleteBtn = (index) => {
    setDataFunction((prevSkillData) =>
      prevSkillData.filter((_, i) => i !== index)
    );
  };
  return (
    <button onClick={() => handleDeleteBtn(listIndex)} className="deleteBtn">
      <MdOutlineDelete />
    </button>
  );
}

export default DeleteBtn;
