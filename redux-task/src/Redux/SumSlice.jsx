import { createSlice } from "@reduxjs/toolkit";

const sumSlice = createSlice({
  name: "sum",
  initialState: {
    totalSum: 0,
    inputValue: ""
  },
  reducers: {
    addSum: (state) => {
      state.totalSum += state.inputValue;
      state.inputValue = ""
    },
    setInputValues:(state, action)=>{
      state.inputValue = action.payload;
    }
  },
});

export const { addSum, setInputValues} = sumSlice.actions;

export default sumSlice.reducer;
