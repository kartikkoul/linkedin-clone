import { configureStore, createStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/uiSlice";
import userAuth from "./slices/userAuth";

const user = configureStore({
    reducer:{
        user:userAuth.reducer,
        ui:uiSlice.reducer
    }
})

export default user;