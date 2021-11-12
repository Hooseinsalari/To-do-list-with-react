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

    const onComplete = (id) => {
        
        const selectedItem = todos.find((item) => item.id === id)
        // console.log(selectedItem.isComplete)

        if(selectedItem.isComplete === false){
            return selectedItem.isComplete = true
        }
        
        setTodos([...todos, selectedItem])
    }

    return (
        <div>
            {console.log(todos)}
           <TodoForm inputTodo={todoHandler} />
           <TodoList todos={todos} onComplete={onComplete} />
        </div>
    );
};

export default TodoApp;