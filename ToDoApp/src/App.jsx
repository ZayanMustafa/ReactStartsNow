// App.jsx
import { useState } from 'react';
import './App.css';
import Input from './Input';
import ToDoList from './ToDoList';

function App() {


  const [todos, setToDo] = useState([]);

  return (
    <div className="bg-gradient-to-br min-h-screen flex items-center justify-center p-5">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">📝 To-Do List</h1>
        <Input todos={todos} setToDo={setToDo} />
        <ToDoList todos={todos} setToDo={setToDo} />
      </div>
    </div>
  );

}

export default App;
