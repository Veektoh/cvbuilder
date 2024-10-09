import React from "react";
import ListCard from "../../Components/ListCard/ListCard";
import "./feature.css";

function Feature() {
  return (
    <section className="features-section">
      <h2>Feature Selection</h2>
      <ul>
        <ListCard
          title={"Story-Based CV Generator"}
          description={`"Share your career journey in a short story, and we’ll transform it
          into a professional CV. It’s quick, personal, and perfect for
          capturing your unique experiences."`}
          link="features/storycv"
        />
        <ListCard
          title={"Question-Based CV Builder"}
          description={`"Answer a few simple questions about your skills, education, and
              experience, and we’ll automatically generate a polished CV
              tailored to your input."`}
          link="features/questioncv"
        />
        <ListCard
          title={"Upload and Modify Existing CV"}
          description={`"Upload your current CV, and we’ll transform it into a fresh,
              professionally formatted version. You can review and edit the
              redrafted CV before finalizing it."`}
          link="/uploadcv"
        />
      </ul>
    </section>
  );
}

export default Feature;
