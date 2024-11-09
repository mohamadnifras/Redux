import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./dataSlice"


export const store = configureStore({
    reducer:{
        user: userReducer
    }
})