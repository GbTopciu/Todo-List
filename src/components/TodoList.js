import React from "react";
import TodoPosts from "./TodoPosts";

const TodoList = ({todoPosts, name, setTodoPosts}) => {
  return <div className="max-w-md py-4 px-8 rounded-lg my-20">
 
{todoPosts.map((todoPost) => <TodoPosts name={name} todoPost={todoPost} todoPosts={todoPosts} setTodoPosts={setTodoPosts}/> )}
  </div>;
};

export default TodoList;
