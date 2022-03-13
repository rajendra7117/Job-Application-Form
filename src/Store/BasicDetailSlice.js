import { createSlice } from "@reduxjs/toolkit";

const basicDetailsSlice = createSlice({
    name: 'basic details',
    initialState: {basicDetails: localStorage.getItem('basicDetails') ? JSON.parse(localStorage.getItem('basicDetails')) : {},
                basicDetailsFilled: localStorage.getItem('basicDetailFilled') ? JSON.parse(localStorage.getItem('basicDetailFilled')) : false
},
reducers:{
    storeBasiceDetails(state, action){
        state.basicDetails=action.payload
        state.basicDetailsFilled=true 
        localStorage.setItem('basicDetails', JSON.stringify(state.basicDetails))
        localStorage.setItem('basicDetailFilled', JSON.stringify(state.basicDetailsFilled))
    },
    clearData(state, action){
        state.basicDetails = {}
        state.basicDetailsFilled=false
        localStorage.setItem('basicDetails', JSON.stringify(state.basicDetails))
        localStorage.setItem('basicDetailFilled', JSON.stringify(state.basicDetailsFilled))
    }

}
})

export const basicDetailsActions = basicDetailsSlice.actions

export default basicDetailsSlice;