import React, { useState } from "react";
import "./SkillsForm.css";
import Container from "../UI/Container";
import Input from "../GeneralComponents/Input";
import { Form } from "react-bootstrap";
import Skills from "./Skills";
import { Alert } from "react-bootstrap";
import { skillsSliceActions } from "../../Store/SkillsSlice";
import { resumeSliceActions } from "../../Store/ResumeSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../GeneralComponents/Loader";
import SuccessCard from "../GeneralComponents/SuccessCard";

export default function SkillsForm() {
  const [skill, setSkill] = useState("");
  const [error, setError] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const skills = useSelector((state) => state.skills.skillsArray);
  const [resume, setResume] = useState("");
  const [isResumeAdded, setIsResumeAdded] = useState(false);
  const edit = useSelector((state) => state.edit.editState);
  const inputHandler = (e) => {
    setSkill(e.target.value);
    setError(false);
  };
  const dispatch = useDispatch();

  const addSkill = (e) => {
    if (skill === "") {
      setError("skill should not be empty");

      return;
    }

    dispatch(skillsSliceActions.addSkill(skill));
    setSkill("");
  };

  const toggleModal = (e) => {
    setShowModal(false);
  };
  const handleResume = (e) => {
    setResume(e.target.files[0].name);
    setIsResumeAdded(true);
  };


  const submitHandler = (e) => {
    if (!isResumeAdded) {
      setError("Please attach your Resume");
      return;
    }

    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      setShowModal(true);
      dispatch(resumeSliceActions.addResume(resume));
    }, 2000);
  };
  return (
    <Container>
      <div className="skills-form">
        {error && (
          <Alert className="alert-span" variant="danger">
            {error}
          </Alert>
        )}
        <h2>Your Skills</h2>
        <h5 className="text-muted">Add your skills</h5>
        <div className="skill-input">
          <Input
            placeholder={"Add a skill"}
            onChange={inputHandler}
            value={skill}
          />
          <button className="skill-btn" onClick={addSkill}>
            Add Skill
          </button>
        </div>
      </div>

      <Skills skills={skills} />
      <div className="resumeDiv">
        <label>Attach Resume</label>
        <input type="file" accept=".pdf" onChange={handleResume} />
      </div>
      <div>
        {skills.length > 0 && (
          <button className="skill-submit" onClick={submitHandler}>
            Submit
          </button>
        )}
      </div>
      {showLoader && <Loader />}
      {showModal && (
        <SuccessCard
          message={"skills section finished"}
          route={edit ? "review" : "/experience"}
          toggleModal={toggleModal}
        />
      )}
    </Container>
  );
}
