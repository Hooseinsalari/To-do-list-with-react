import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
    const [todos, setTodos] = useState([])
    
    const todoHandler = (todoData) => {
        const newTodo = {
            id: Math.floor(Math.random()*100),
            text: todoData,
            isComplete: false
        }

        setTodos([...todos, newTodo])
    }
    return (
        <div>
            {console.log(todos)}
           <TodoForm inputTodo={todoHandler} />
           <TodoList todos={todos} />
        </div>
    );
};

export default TodoApp;