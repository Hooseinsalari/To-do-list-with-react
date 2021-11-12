import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onComplete, onDelete }) => {

  const [edit, setEdit] = useState({id:null, text:"" , isComplete:false})

  const renderdTodos = () => {
    if (todos.length === 0) {
      return (
        <div>
          <h2>enter your todo</h2>
        </div>
      );
    }
    return (
      <div>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onComplete={() => onComplete(todo.id)}
              onDelete={onDelete}
              onEdit={() => setEdit(todo)}
            />
          );
        })}
      </div>
    );
  }

  return <div>{edit.id?<TodoForm /> : renderdTodos()}</div>
};

export default TodoList;
