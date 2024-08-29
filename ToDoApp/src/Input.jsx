// Input.jsx
import React, { useState } from 'react';
function Input({ todos, setToDo }) {
  const [inputValue, setInputValue] = useState(''); 

  // Function to add a new task
  const addTask = () => {
    if (inputValue.trim() === '') return; 
    const newTask = {
      todos: inputValue,  
      id: Date.now(),     
      completed: false,   
    };
    setToDo([...todos, newTask]); 
    setInputValue(''); 
  };

  return (
    <div className="flex items-center mb-6">
      <input
        type="text"
        placeholder="What needs to be done?"
        className="flex-grow p-3 border-2 border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}  />
      <button
        className="p-3 bg-pink-500 text-white font-semibold rounded-r-full hover:bg-pink-600 transition-all shadow-md"
        onClick={addTask} 
      >
        Add
      </button>
    </div>
  );
}

export default Input;
