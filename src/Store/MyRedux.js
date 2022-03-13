import { configureStore } from "@reduxjs/toolkit";
import accountInformationSlice from "./AccountInformationSlice";
import basicDetailsSlice from "./BasicDetailSlice";
import skillsSlice from "./SkillsSlice";
import experienceSlice from "./ExperienceSlice";
import educationSlice from "./EducationSlice";
import resumeSlice from "./ResumeSlice";
import editSlice from "./EditStateSlice";


const store = configureStore({
    reducer :{
        accountInfo: accountInformationSlice.reducer,
        basicDetails: basicDetailsSlice.reducer,
        skills: skillsSlice.reducer,
        experience: experienceSlice.reducer,
        education: educationSlice.reducer,
        resume: resumeSlice.reducer,
        edit: editSlice.reducer
    }
})

export default store;