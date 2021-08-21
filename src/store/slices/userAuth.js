import { createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebase";

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
                return response.json().then(data=>{
                    let userDetails;
                    db.collection('userInfo').onSnapshot((snapshot)=> {
                        const userInfo = snapshot.docs.find(docs=>docs.data().email===email)
                        userDetails=userInfo.data()
                    })
                    dispatch(userAuthActions.signIn({
                        token:data.idToken,
                        userDetails:{
                            fullName:userDetails.full_name,
                            headline:userDetails.headline,
                            avatar:userDetails.profile_picture
                        }
                    }))
                    })
            }
            else{
                throw new Error()
            }
        }).catch(err=>{
            console.log(err)
        })
    }
 }

export const userAuthActions = userAuth.actions

export default userAuth