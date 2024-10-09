import React, { useState } from "react";
import EditSaveBtn from "../EditiSaveBtn";

function Header({ cvData, isEditMode }) {
  const [isEdit, setIsEdit] = useState(false);
  const [headerData, setHeaderData] = useState({ ...cvData.header });
  const handleInputChange = (fieldName, value) => {
    setHeaderData({ ...headerData, [fieldName]: value });
  };
  const handleContactChange = (fieldName, value) => {
    setHeaderData({
      ...headerData,
      contact: { ...headerData.contact, [fieldName]: value },
    });
  };

  return (
    <section className="cv-header">
      {isEditMode && <EditSaveBtn setIsEdit={setIsEdit} />}
      {isEditMode && isEdit ? (
        <>
          <h1>
            <input
              type="text"
              value={headerData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </h1>
          <div className="cv-header-details">
            <p>
              <input
                type="text"
                value={headerData.contact.phone}
                onChange={(e) => handleContactChange("phone", e.target.value)}
              />
            </p>
            <p>
              <input
                type="text"
                value={headerData.contact.email}
                onChange={(e) => handleContactChange("email", e.target.value)}
              />
            </p>
            <p>
              <input
                type="text"
                value={headerData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
              />
            </p>
          </div>
        </>
      ) : (
        <>
          <h1>{headerData.name}</h1>
          <div className="cv-header-details">
            <p>{headerData.contact.phone}</p>
            <p>{headerData.contact.email}</p>
            <p>{headerData.location}</p>
          </div>
        </>
      )}
    </section>
  );
}

export default Header;
