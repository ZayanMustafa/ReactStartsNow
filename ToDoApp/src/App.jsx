import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Input'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg transform transition-all hover:scale-105">
    <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-900 tracking-wide"> 📝 To-Do List </h1>
    <Input/>
    
  <ul className="space-y-4">
     {/* Example Task Item 
    <li className="flex items-center justify-between p-3 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
      <span className="text-gray-700">Example Task</span>
      <button className="text-red-500 hover:text-red-700 transition-colors">
        ✖
      </button>
    </li>
     Repeat similar items for more tasks 
   */}
  </ul>
</div>

  )
}

export default App
