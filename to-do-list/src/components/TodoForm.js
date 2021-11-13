import React, { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const inputRef = useRef("input");
  useEffect(() => {
      inputRef.current.focus()
  },[])

  const inputHandler = (event) => {
    setTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!todo) {
      alert("enter please");
      return;
    }
    props.inputTodo(todo);
    setTodo("");
  };
  return (
    <form onSubmit={submitHandler}>
      {props.edit ? (
        <div>
          <input
            name="todo"
            type="text"
            value={todo}
            onChange={inputHandler}
            ref={inputRef}
          />
          <button type="submit">update</button>
        </div>
      ) : (
        <div>
          <input
            name="todo"
            type="text"
            value={todo}
            onChange={inputHandler}
            ref={inputRef}
          />
          <button type="submit">add</button>
        </div>
      )}
    </form>
  );
};

export default TodoForm;
