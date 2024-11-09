import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data
    }
)

const dataSlice = createSlice({
    name:'user',
    initialState:{user:[], loading:false, error:null},
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(fetchUser.pending, (state)=>{
            state.status = true;
            state.error =null;
        })
        .addCase(fetchUser.fulfilled, (state,action)=>{
            state.status=false;
            state.user = action.payload
        })
        .addCase(fetchUser.rejected, (state, action)=>{
            state.status=false;
            state.error = action.error.message;
        })
    }
})

export default dataSlice.reducer

