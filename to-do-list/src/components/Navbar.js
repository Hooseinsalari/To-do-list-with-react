import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'All', label: 'All' },
    { value: 'Completed', label: 'Completed' },
    { value: 'unCompleted', label: 'unCompleted' },
  ];

const Navbar = ({ showUncompletedTodo,myTodos , selectedOption, onSelect}) => {


    if(!showUncompletedTodo.length) {
        return <h1>Set Your Todo Come On!</h1>
    }


    return (
        <header>
            <p>Your uncompleted task is: <span>{showUncompletedTodo.length}</span></p>
            {/* <select onChange={onSelect} value={status}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="unCompleted">unCompleted</option>
            </select> */}
            <Select onChange={onSelect} value={selectedOption} options={options} />
        </header>
    );
};

export default Navbar;