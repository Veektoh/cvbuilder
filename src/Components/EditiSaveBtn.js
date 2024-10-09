import React from "react";
import { BiSolidEdit } from "react-icons/bi";
import { LiaSave } from "react-icons/lia";

function EditSaveBtn({ setIsEdit }) {
  return (
    <span className="editSaveBtnSpan">
      <button className="editBtn">
        <BiSolidEdit onClick={() => setIsEdit(true)} />
        <p className="toastMsg">Edit Section</p>
      </button>
      <button className="editBtn">
        <LiaSave onClick={() => setIsEdit(false)} />
        <p className="toastMsg">Save Edit</p>
      </button>
    </span>
  );
}

export default EditSaveBtn;
