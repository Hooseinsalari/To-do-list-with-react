import './App.css';
import React from 'react';

// Components 
import TodoApp from "./components/TodoApp.js"

const App = () => {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <TodoApp />
    </div>
  );
};

export default App;
