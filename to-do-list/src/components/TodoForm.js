import React, { useState } from 'react';

const TodoForm = (props) => {
    const [todo, setTodo] = useState("")

    const inputHandler = (event) => {
        setTodo(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if(!todo) {
            alert("enter please")
            return;
        }
        props.inputTodo(todo)
        setTodo("")
    }
    return (
        <div>
             <form onSubmit={submitHandler}>
                <input name="todo" type="text" value={todo} onChange={inputHandler} />
                <button type="submit">add</button>
            </form>
        </div>
    );
};

export default TodoForm;