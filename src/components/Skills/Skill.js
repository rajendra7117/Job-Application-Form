import React from "react";
import "./Skill.css";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { skillsSliceActions } from "../../Store/SkillsSlice";
import { useDispatch } from "react-redux";
export default function Skill(props) {
  const dispatch = useDispatch();
  const removeSkillFromList = (e) => {
    dispatch(skillsSliceActions.removeSkill(props.skill));
  };
  return (
    <div className="skill-div">
      <div className="skill">{props.skill}</div>
      <MdOutlineRemoveCircleOutline onClick={removeSkillFromList} />
    </div>
  );
}
