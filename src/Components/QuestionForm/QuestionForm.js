import React from "react";
import "./QuestionForm.css";

function QuestionForm() {
  return (
    <div className="cv-questionForm-div">
      <h2>Provide Key Details About Yourself</h2>
      <form className="cv-questionForm">
        <label htmlFor="">
          What is your full name, and how can people contact you (address, email
          and phone number)?
        </label>
        <textarea
          placeholder="Enter your full name, email, and phone number..."
          name=""
          id=""
        ></textarea>
        <label htmlFor="">
          What are your strongest skills and/or technical proficiencies?
        </label>
        <textarea
          placeholder="List your key skills or technical proficiencies. Don’t stress about it, just jot down what comes to mind..."
          name=""
          id=""
        ></textarea>
        <label htmlFor="">
          What companies have you worked for, what were your job titles, and
          what were your main responsibilities and achievements?
        </label>
        <textarea
          placeholder="Mention the companies you've worked for, your job titles, and a few responsibilities. It doesn’t need to be perfect, just a rough idea..."
          name=""
          id=""
        ></textarea>
        <label htmlFor="">
          What degrees have you earned, and from which institutions? Please
          include graduation dates and any honors.
        </label>
        <textarea
          placeholder="Provide your degrees, institutions, and graduation dates. A general outline is fine, no need for perfection..."
          name=""
          id=""
        ></textarea>
        <label htmlFor="">
          Can you describe a few projects you’ve worked on, your role, and the
          outcome or impact?
        </label>
        <textarea
          placeholder="Describe a few key projects, your role, and their outcomes. Don't worry about being perfect, just give a brief description..."
          name=""
          id=""
        ></textarea>
        <label htmlFor="">
          Feel free to include any additional information you'd like to share
          here
        </label>
        <textarea
          placeholder="Is there anything else you'd like to share? Feel free to add any other details..."
          name=""
          id=""
        ></textarea>
      </form>
    </div>
  );
}

export default QuestionForm;
