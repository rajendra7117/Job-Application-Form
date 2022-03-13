import React from 'react'
import './StatusBar.css';
import { useSelector } from 'react-redux';
export default function StatusBar() {

    const accountCreated = useSelector(state => state.accountInfo.accountCreated)
    const basicDetailsFilled = useSelector(state => state.basicDetails.basicDetailsFilled)
    const skillsFilled = useSelector(state => state.skills.skillsArray)
    const experienceFilled = useSelector(state => state.experience.experience)
    const education = useSelector(state => state.education.education)
    console.log(education)
    
  return (
    <div className='container status-bar'>
        <div className={`bar ${accountCreated && 'completed'}`}>

        </div>
        <div className={`account ${accountCreated && 'completed'}`}>
            Create Account
        </div>
        <div className={`bar ${basicDetailsFilled && 'completed'}`}>

        </div>
        <div className={`account ${basicDetailsFilled && 'completed'}`}>
            Basic Details
        </div>
        <div className={`bar ${skillsFilled.length>0 && 'completed'}`}>
            
        </div>
        <div className={`account ${skillsFilled.length>0 && 'completed'}`}>
            Skills
        </div>
        <div className={`bar ${Object.keys(experienceFilled).length>0 && 'completed'}`}>
            
        </div>
        <div className={`account ${Object.keys(experienceFilled).length>0  && 'completed'}`}>
            Experience
        </div>
        <div className={`bar ${Object.keys(education).length>0 && 'completed'}`}>
            
        </div>
        <div className={`account ${Object.keys(education).length>0 && 'completed'}`}>
            Education
        </div>
        <div className={`bar ${Object.keys(education).length>0 && 'completed'}`}>
            
        </div>
    </div>
  )
}
