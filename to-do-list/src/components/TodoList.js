import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
    if(todos.length === 0){
        return(
            <div>
                <h2>enter your todo</h2>
            </div>
        )
    }
  return (
    <div>
      {todos.map((todo) => {
         return(
            <Todo key={todo.id} todo={todo} />
         )
      })}
    </div>
  );
};

export default TodoList;
