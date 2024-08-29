function ToDoList({ todos, setToDo }) {

    const removeTask = (id) => {
    const updatedTasks = todos.filter((task) => task.id !== id); 
    setToDo(updatedTasks); 
  };

  return (
    <ul className="space-y-4">
      {todos.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between p-3 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition-colors"
        >
          <span className="text-gray-700">{task.todos}</span>
          <button
            className="text-red-500 hover:text-red-700 transition-colors"
            onClick={() => removeTask(task.id)} // Remove task on click 
            >
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
