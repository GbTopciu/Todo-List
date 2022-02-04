import React from "react";



const CreateTodo = ({postIndex, setPostIndex, todoPosts, setTodoPosts}) => {
  
const InputHandler =(e) => {
    setPostIndex(e.target.value);
}

const SubmitHandler =(e) => {
  e.preventDefault();
  setTodoPosts([...todoPosts, postIndex])
  setPostIndex("");
}

  return (
    <div className="flex justify-center mt-20">
      <form >
        <input onChange={InputHandler} value={postIndex} className="text-3xl p-2 mr-2"></input>
        <button onClick={SubmitHandler} className="text-3xl bg-blue-600 rounded text-white p-2">Submit</button>
      </form>
    </div>
  );
};

export default CreateTodo;
