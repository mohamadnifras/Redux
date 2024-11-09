import { configureStore } from "@reduxjs/toolkit";
import sumReducer from "./Redux/SumSlice"


export const store = configureStore({
    reducer:{
        sum:sumReducer
    }
})