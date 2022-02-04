import React, { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
document.body.style.backgroundColor = "#FF7F50";

function App() {
  const [name, setName] = useState ("Gabriel")
  const [postIndex, setPostIndex] = useState("");
  const[todoPosts, setTodoPosts] = useState([]);

  return (
    <div>
      <CreateTodo postIndex={postIndex} setPostIndex={setPostIndex} todoPosts={todoPosts} setTodoPosts={setTodoPosts}/>
      <TodoList todoPosts={todoPosts} setTodoPosts={setTodoPosts} name={name} />
    </div>
  );
}

export default App;
