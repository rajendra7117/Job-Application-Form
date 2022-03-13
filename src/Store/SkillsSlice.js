import { createSlice } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    skillsArray: localStorage.getItem("skills")
      ? JSON.parse(localStorage.getItem("skills"))
      : [],
  },
  reducers: {
    addSkill(state, action) {
      state.skillsArray = [...state.skillsArray, action.payload];
      localStorage.setItem("skills", JSON.stringify(state.skillsArray));
    },

    removeSkill(state, action) {
      let skillTobeRemoved = action.payload;
      state.skillsArray = state.skillsArray.filter(
        (skill) => skill !== skillTobeRemoved
      );
      localStorage.setItem("skills", JSON.stringify(state.skillsArray));
    },

    clearData(state, action) {
      state.skillsArray = [];
      localStorage.setItem('skills', JSON.stringify(state.skillsArray))
    },
  },
});

export const skillsSliceActions = skillsSlice.actions;

export default skillsSlice;
