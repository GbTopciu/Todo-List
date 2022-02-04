import React from "react";

const TodoPosts = ({ todoPosts, name, todoPost, setTodoPosts }) => {
  const deleteRedditPostHandler = () => {
    setTodoPosts(todoPosts.filter((t) => t !== todoPost));
  };

  return (
    <div className="border p-5 bg-indigo-50 grid h-48">
      <h2 className="text-5xl font-bold mb-2">{name} Posts</h2>
      <h3 className="text-3xl mb-2">{todoPost}</h3>
      <button
        onClick={deleteRedditPostHandler}
        className="justify-center text-3xl bg-red-600 rounded text-white p-2"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoPosts;
