import React, { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [todo, setTodo] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef("input");
  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
      {
        <div className="todoFormConteiner">
          <input
            className="todoInput"
            name="todo"
            type="text"
            value={todo}
            onChange={inputHandler}
            ref={inputRef}
          />
          <button className="Btn" type="submit">
            {props.edit ? (
              "update"
            ) : (
              "add"
            )}
          </button>
        </div>
      }
    </form>
  );
};

export default TodoForm;
