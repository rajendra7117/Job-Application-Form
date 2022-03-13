import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
    name: 'experience',
    initialState: {experience: localStorage.getItem('exp') ? JSON.parse(localStorage.getItem('exp')) : {}},
    reducers:{
        storeExperience(state, action){
            state.experience = action.payload
            localStorage.setItem('exp', JSON.stringify(state.experience))
        },
        clearData(state, action){
            state.experience = {}
            localStorage.setItem('exp', JSON.stringify(state.experience))
        }

    }
})

export const experienceSliceActions = experienceSlice.actions

export default experienceSlice