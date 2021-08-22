import { createSlice } from "@reduxjs/toolkit";

const initState = {
    postLoader:false,
    authLoader:false,
    error:null
}

const uiSlice = createSlice({
    name:"uiSlice",
    initialState:initState,
    reducers:{
        loadingPost:(state, action)=>{
            state.postLoader=action.payload
        },
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