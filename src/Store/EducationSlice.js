import { createSlice } from "@reduxjs/toolkit";

const educationSlice = createSlice({
    name: 'education',
    initialState: {education: localStorage.getItem('education') ? JSON.parse(localStorage.getItem('education')) : {}},
    reducers: {
        storeEducation(state, action){
            state.education = action.payload
            localStorage.setItem('education', JSON.stringify(state.education))
        },
        clearData(state, action){
            state.education = {}
            localStorage.setItem('education', JSON.stringify(state.education))
        }
    }

})

export const educationSliceActions = educationSlice.actions

export default educationSlice