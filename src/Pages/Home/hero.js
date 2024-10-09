import React from "react";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import "./hero.css";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <h1>Transform Your Story into a Professional CV in Minutes</h1>
      <h2>
        Share your story, answer a few questions, or upload your existing CV for
        a fresh look!
      </h2>
      <div className="hero-btn-div">
        <Button
          backgroundColor="#f9a966"
          color="#210c2c"
          onBtnClick={() => navigate("features/storycv")}
        >
          Generate CV from Story
        </Button>
        <Button
          backgroundColor="#f9a966"
          color="#210c2c"
          onBtnClick={() => navigate("features/questioncv")}
        >
          Answer Questions for CV
        </Button>
        <Button
          backgroundColor="#f9a966"
          color="#210c2c"
          onBtnClick={() => navigate("uploadcv")}
        >
          Upload and Redraft Existing CV
        </Button>
      </div>
    </section>
  );
}

export default Hero;
