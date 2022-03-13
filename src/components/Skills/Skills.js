import React from 'react'
import './Skills.css'

import { useSelector } from 'react-redux'
import Skill from './Skill'
const Skills =(props) => {
    
    const skills = useSelector(state => state.skills.skillsArray)
   
    let addedSkills;
    if(skills.length>0){
       
        addedSkills = skills.map(skill => <Skill key={skill} skill={skill}/>)
    }
    
  return (
    <div className='container skills-container'>
        {addedSkills}
    </div>
  )
  }

  export default React.memo(Skills)
