import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
    name: 'edit',
    initialState: {editState: localStorage.getItem('edit') ? JSON.parse(localStorage.getItem('edit')) : false},
    reducers: {
        changeToEdit(state, action){
            state.editState = true 
            localStorage.setItem('edit', JSON.stringify(state.editState))
        },
        clearData(state, action){
            state.editState = false
            localStorage.setItem('edit', JSON.stringify(state.editState))
        }
    }
})

export const editStateActions = editSlice.actions

export default editSlice