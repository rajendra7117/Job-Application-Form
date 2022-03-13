import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
    name: 'resume',
    initialState: {resume: localStorage.getItem('resume') ? JSON.parse(localStorage.getItem('resume')) : ''},
    reducers:{
        addResume(state, action){
            state.resume=action.payload
            localStorage.setItem('resume', JSON.stringify(state.resume))
        },
       clearData(state, action){
            state.resume=''
            localStorage.setItem('resume', JSON.stringify(state.resume))
        }

    }
})

export const resumeSliceActions = resumeSlice.actions

export default resumeSlice