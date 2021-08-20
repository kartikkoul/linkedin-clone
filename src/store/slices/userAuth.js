import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    token:null,
    isAuthenticated : false,
    userDetails:{
        fullName:null,
        headline:null,
        avatar:null,
    }
}

const userAuth = createSlice({
    name:'userAuth',
    initialState:defaultState,
    reducers:{
        signIn:(state, action)=>{
            const token = action.payload.token
            if(token){
                state.token = token;
                state.isAuthenticated=!!token;
                state.userDetails=action.payload.userDetails
                return
            }
            return state
        },
        signOut:(state)=>{
            return state = defaultState
        },
    }
})

export const userAuthActions = userAuth.actions

export default userAuth