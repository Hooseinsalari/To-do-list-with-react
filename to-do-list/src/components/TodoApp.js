import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");
 
  useEffect(() => {
      filterTodos(selectedOption.value)
  }, [todos, selectedOption])

  const todoHandler = (todoData) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: todoData,
      isComplete: false,
    };

    setTodos([...todos, newTodo]);
  };

  const onComplete = (id) => {
    const index = todos.findIndex((item) => item.id === id);
    const selectedItem = { ...todos[index] };
    selectedItem.isComplete = !selectedItem.isComplete;
    const updateTodos = [...todos];
    updateTodos[index] = selectedItem;
    setTodos(updateTodos);
  };

  const onDelete = (id) => {
    const selectedItem = todos.filter((item) => item.id !== id);
    setTodos(selectedItem);
  };

  const onUpdateTodo = (id, newValue) => {
    const index = todos.findIndex((item) => item.id === id);
    const selectedItem = { ...todos[index] };
    selectedItem.text = newValue;
    const updateTodos = [...todos];
    updateTodos[index] = selectedItem;
    setTodos(updateTodos);
  };

  const filterTodos = (status) => {
    switch(status){
        case "Completed":
            setFilteredTodos(todos.filter((item) => item.isComplete))
            break
        case "unCompleted":
            setFilteredTodos(todos.filter((item) => !item.isComplete))
            break
        default:
            setFilteredTodos(todos)
            
    }
  };

  const selectHandler = (event) => {
    console.log(event)
    setSelectedOption(event)
    filterTodos(event.value)
}

  return (
    <div>
      <Navbar
        myTodos={todos}
        showUncompletedTodo={todos.filter((item) => item.isComplete === false)}
        onSelect={selectHandler}
        selectedOption={selectedOption}
      />
      <TodoForm inputTodo={todoHandler} />
      <TodoList
        todos={filteredTodos}
        onComplete={onComplete}
        onDelete={onDelete}
        onUpdate={onUpdateTodo}
      />
    </div>
  );
};

export default TodoApp;
