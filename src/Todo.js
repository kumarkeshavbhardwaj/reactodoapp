// import React, { useState } from "react";


// function Todo() {

//     const [todos, setTodos] = useState([]);
//     const [title, setTitle] = useState('');

//     const [editTodoId, setEditTodoId] = useState(null);
//     const [editTodoText, setEditTodoText] = useState("");

//    const addTodo = (event) => {

//     event.preventDefault()

//         let newTodo = {
//             id: Date.now(),
//             title: title
//         }

//         setTodos([...todos, newTodo])
//         setTitle('')

//    }

//    const handleEditTodo = (id, text) => {
//     setEditTodoId(id);
//     setEditTodoText(text);
//   };

//   const handleUpdateTodo = () => {
//     if (editTodoText.trim() !== "") {
//       const updatedTodos = todos.map((todo) =>
//         todo.id === editTodoId ? { ...todo, text: editTodoText.trim() } : todo
//       );

//       setTodos(updatedTodos);
//       setEditTodoId(null);
//       setEditTodoText("");
//     }
//   };


//     return <>
//         <h1>
//             Your todos
//         </h1>
//         <form>
//             <input onChange={(e) => {setTitle(e.target.value)}} value={title} type="text" ></input>
//             <button onClick={addTodo}>Add todo</button>
//         </form>
//         <ul>
//             {todos.map((e) => (
//                 <li key={e.id}>{e.title}</li>
//             ))}
//         </ul>
//     </>

// }

// export default Todo;