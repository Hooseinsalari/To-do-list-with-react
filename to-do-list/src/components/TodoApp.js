import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


const TodoApp = () => {
    const [todos, setTodos] = useState([])
    
    const todoHandler = (todoData) => {
        const newTodo = {
            id: Math.floor(Math.random()*1000),
            text: todoData,
            isComplete: false
        }

        setTodos([...todos, newTodo])
    }

    const onComplete = (id) => {
        const index = todos.findIndex((item) => item.id === id);
        const selectedItem = {...todos[index]}
        selectedItem.isComplete = !selectedItem.isComplete;
        // console.log(selectedItem.isComplete)
        const updateTodos = [...todos];
        updateTodos[index] = selectedItem
        setTodos(updateTodos)
    }

    const onDelete = (id) => {
        const selectedItem = todos.filter((item) => item.id !== id);
        setTodos(selectedItem)
        
    }

    return (
        <div>
           <TodoForm inputTodo={todoHandler} />
           <TodoList todos={todos} onComplete={onComplete} onDelete={onDelete} />
        </div>
    );
};

export default TodoApp;