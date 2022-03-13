import { createSlice } from "@reduxjs/toolkit";

const accountInformationSlice = createSlice({
    name: 'account info',
    initialState: {emailAddress: localStorage.getItem('account-email') ? JSON.parse(localStorage.getItem('account-email')) : {},
                  accountCreated: localStorage.getItem('account-created') ? JSON.parse(localStorage.getItem('account-created')): false
},
reducers: {
    createAccount(state, action){
        state.accountCreated = true 
        state.emailAddress = action.payload
         localStorage.setItem('account-email', JSON.stringify(state.emailAddress))
         localStorage.setItem('account-created', JSON.stringify(state.accountCreated))
    },
    clearData(state, action){
        state.accountCreated = false 
        state.emailAddress={}
        localStorage.setItem('account-email', JSON.stringify(state.emailAddress))
        localStorage.setItem('account-created', JSON.stringify(state.accountCreated))
   },
    
}
})

export const accountInformationActions = accountInformationSlice.actions

export default accountInformationSlice