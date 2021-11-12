import React from 'react';
import styles  from "./Todo.module.css";

const Todo = ({todo, onComplete, onDelete, onEdit}) => {
    return (
        <div key={todo.id} className={styles.todo}>
            <p className={todo.isComplete?styles.complete:styles.onComplete}>{todo.text}</p>
            <div>
                {/* get id with two path */}
                <button onClick={() => onDelete(todo.id)}>delet</button>
                <button onClick={onComplete}>complete</button>
                <button onClick={onEdit}>edit</button>
            </div>
          </div>
    );
};

export default Todo;