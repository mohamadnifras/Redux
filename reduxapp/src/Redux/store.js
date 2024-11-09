import {configureStore} from "@reduxjs/toolkit"
import colorReducer from "./color/colorSlice"
import countReducer from "./Counter/CountSlice"
export default configureStore({
    reducer:{
        color:colorReducer,
        count:countReducer
        
    }
})