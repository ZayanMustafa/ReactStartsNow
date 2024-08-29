
function Input() {
  return (
    <div className="flex items-center mb-6">
      <input
        type="text"
        placeholder="What needs to be done?"
        className="flex-grow p-3 border-2 border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
      />
      <button className="p-3 bg-pink-500 text-white font-semibold rounded-r-full hover:bg-pink-600 transition-all shadow-md">
        Add
      </button>
    </div>
  );
}

export default Input;