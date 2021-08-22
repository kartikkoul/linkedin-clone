import { createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { uiActions } from "./uiSlice";

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
            localStorage.removeItem("token")
            localStorage.removeItem("fullName")
            localStorage.removeItem("headline")
            localStorage.removeItem("avatar")
            return state = defaultState
        },
    }
})



export const signIn = ( email, password ) =>{
    return (dispatch) =>{
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAimS1zR6jSolypkW4P269r8lvG5jDA_Ms',{
            method:"POST",
            body:JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true
            })
        }).then(response=>{
            if(response.ok){
                dispatch(uiActions.showError(null))
                return response.json().then(data=>{
                    db.collection('userInfo').onSnapshot((snapshot)=> {
                        const userInfo = snapshot.docs.find(docs=>docs.data().email===email)
                        const {full_name, headline, profile_picture}=userInfo.data()
                        dispatch(userAuthActions.signIn({
                            token:data.idToken,
                            userDetails:{
                                fullName:full_name,
                                headline:headline,
                                avatar:profile_picture
                            }
                        }))
                        localStorage.setItem("token", data.idToken)
                        localStorage.setItem("fullName", full_name)
                        localStorage.setItem("headline", headline)
                        localStorage.setItem("avatar", profile_picture)
                    })
                    })
            }
            else{
                return (response.json().then(data=> {
                    const errMessage = data.error.message
                    throw new Error(errMessage) 
                }))
            }
        }).catch(err=>{
            dispatch(uiActions.showError(err.message))
            dispatch(uiActions.loadingAuth(false))
        })
    }

 }

export const userAuthActions = userAuth.actions

export default userAuth