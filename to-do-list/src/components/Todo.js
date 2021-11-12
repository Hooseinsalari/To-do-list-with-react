import React from 'react';
import style from "./Todo.module.css";

const Todo = ({todo, onComplete}) => {
    return (
        <div key={todo.id} className={style.todo}>
            <p>{todo.text}</p>
            <div>
                <button>delet</button>
                <button onClick={onComplete}>complete</button>
            </div>
          </div>
    );
};

export default Todo;