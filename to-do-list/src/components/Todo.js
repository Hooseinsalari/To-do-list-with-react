import React from 'react';

const Todo = ({todo}) => {
    return (
        <div key={todo.id}>
            <p>{todo.text}</p>
            <button>Edit</button>
            <button>delet</button>
          </div>
    );
};

export default Todo;