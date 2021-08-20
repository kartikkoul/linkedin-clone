import { configureStore, createStore } from "@reduxjs/toolkit";
import userAuth from "./slices/userAuth";

const user = configureStore({
    reducer:{
        user:userAuth.reducer
    }
})

export default user;