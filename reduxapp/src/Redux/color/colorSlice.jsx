import {createSlice} from "@reduxjs/toolkit"


export const colorSlices = createSlice({
    name:"color",
    initialState:{
        value:"blue"
    },
    reducers:{
        change_color:(state,action)=>{
            state.value = action.payload.color
        }
    }
})

export const {change_color} = colorSlices.actions



export default colorSlices.reducer