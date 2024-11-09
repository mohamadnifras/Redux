import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todo: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({ id: Date.now(), text: action.payload });
    },

    delectTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
    editTodo:(state,action)=>{
      const {id, text} = action.payload;
      const todo = state.todo.find((todo)=> todo.id === id);
      if(todo){
        todo.text = text
      }
    }
  },
});

export const { addTodo, delectTodo, editTodo} = todoSlice.actions;

export default todoSlice.reducer;
