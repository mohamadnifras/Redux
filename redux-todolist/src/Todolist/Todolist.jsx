import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, delectTodo, editTodo} from "./TodoSlice";
function Todolist() {
  const [text, setText] = useState("");
  const [editId,setEditId]=useState(null)
  const [editText,setEditText]=useState('')
  const dispatch = useDispatch();
  const todos = useSelector((state)=> state.todos.todo)
  console.log(todos);
  
  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    } 
  }


   const handleDelect = (id) =>{
    dispatch(delectTodo(id))
    }

    const handleEdit =(id, text)=>{
     setEditId(id)
     setEditText(text)
    }

    const handleSave =(id)=>{
      dispatch(editTodo({id,text:editText}))
      setEditId(null)
      setText('')
    }


  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a Add Todo"
      />
      <button onClick={handleAdd}>Add Todo</button>

   <div>
    <ul>
      {todos.map((item)=>(
        <li key={item.id}>
        {editId === item.id ? (
          <>
           <input type="text" value={editText} onChange={(e)=> setEditText(e.target.value)}/>
<button onClick={()=>handleSave(item.id)}>Save</button>
          </>
        ):(
          <>
          {item.text}
          <button onClick={()=>handleEdit(item.id,item.text)}>Edit</button>
          <button onClick={() => handleDelect(item.id)}>Delect</button>
          </>
        )}
         </li>


      ))}
    </ul>
   </div>
    </div>
  );
}

export default Todolist;
