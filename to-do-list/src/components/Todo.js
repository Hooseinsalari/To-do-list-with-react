import React from 'react';
import styles  from "./Todo.module.css";



const Todo = ({todo, onComplete, onDelete, onEdit}) => {
    return (
        <div key={todo.id} className={styles.todo}>
            <p onClick={onComplete} className={todo.isComplete?styles.complete:styles.onComplete}>{todo.text}</p>
            <div>
                {/* get id with two path */}
                <button className="Btn" onClick={onEdit}>edit</button>
                <button className="Btn" onClick={() => onDelete(todo.id)}>delete</button>
            </div>
        </div>
    );
};

export default Todo;