import React from "react";
import { BiSolidEdit } from "react-icons/bi";

function Reference({ isEditMode }) {
  return (
    <section className="cv-references">
      <h2>
        Reference
        {isEditMode && (
          <span className="editIcon">
            <BiSolidEdit />
          </span>
        )}
      </h2>
      <p>Available upon request.</p>
    </section>
  );
}

export default Reference;
