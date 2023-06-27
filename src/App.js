import React, { useState } from "react";
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [val, setVal] = useState('');
  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState('');


  const handleAddTodo = () => {

if(val!=''){
  const newTodo = {
    id: Date.now(),
    text: val
  }
  setTodos([...todos, newTodo])
  setVal('')
}

   
  }

  const handleEdit = (id) => {
    setEditId(id);
  }

  const handleUpdateTodo = (id, updatedText) => {

    const todoIndex = todos.findIndex((todo) => todo.id===id );
    if(todoIndex!= -1){
      const updatedTodos = [...todos];
      updatedTodos[todoIndex].text = newText;
      setTodos(updatedTodos);
    }
    setEditId(null);

  }

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo)=> todo.id===id);
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

  return (<>
    <h1>
      Todo app
    </h1>

    <form onSubmit={(e) => {e.preventDefault();}}>
      <input value={val} onChange={(e) => {setVal(e.target.value)}}>
      </input>
      <button onClick={handleAddTodo}>Submit</button>
    </form>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}
        {editId===todo.id ? <input value={newText} onChange={(e) => setNewText(e.target.value)}></input> : <div></div> }
        
        {editId===todo.id ? <button onClick={() => handleUpdateTodo(todo.id, newText)} >Save</button> : <button onClick={
          () => {
            handleEdit(todo.id);
            setNewText(todo.text);
          }
          }>Edit</button>}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        
        </li>
      ))}
    </ul>



  </>);

}

export default App;
