import { createSlice } from "@reduxjs/toolkit";

const initState = {
    authLoader:false,
    error:null
}

const uiSlice = createSlice({
    name:"uiSlice",
    initialState:initState,
    reducers:{
        loadingAuth:(state, action)=>{
            state.authLoader=action.payload
        },
        showError:(state, action)=>{
            state.error=action.payload
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice;