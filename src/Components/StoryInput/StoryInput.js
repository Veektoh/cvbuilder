import React from "react";
import "./StoryInput.css";

function StoryInput() {
  return (
    <div className="cv-storyInput-div">
      <label htmlFor="storyInput">Tell Us Your Story</label>
      <textarea
        name="storyInput"
        id="storyInput"
        maxLength={600}
        placeholder="Write your story here and make sure include key details about yourself, your education and experience..."
      ></textarea>
      <p>
        Example :"I'm Alex Johnson, a Computer Science graduate from UC Berkeley
        with a Master’s in Software Engineering from MIT. I have 5+ years of
        experience as a software engineer, specializing in web development. I’ve
        led teams on large projects, focusing on JavaScript, React, and Node.js.
        I’m passionate about learning new technologies and aim to move into
        leadership roles where I can mentor others and drive innovation."
      </p>
    </div>
  );
}

export default StoryInput;
