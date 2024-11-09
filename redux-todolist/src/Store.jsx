import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Todolist/TodoSlice"

export const store = configureStore({
    reducer:{
        todos:todoReducer
    }
})