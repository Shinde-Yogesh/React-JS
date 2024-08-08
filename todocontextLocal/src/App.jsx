import { useState } from 'react'
import { TodoProvider } from './contexts'
import './App.css'
import { useEffect } from 'react'

import {TodoForm} from './components/'
import {TodoItem} from './components/'

function App() {
  const [todos, setTodos] = useState([])

  //todo is in the string formate which get from the form 
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => (todo.id != id)))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  //for inserting the value 

  //local storage store the value in the key value pair
  //getItem return the output in the string formate
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


  //set the value 

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>


          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}


            {todos.map((todo) => (
              <div key={todo.id}
              className='w-full'
              >
              <TodoItem todo={todo} />



              </div>
            ))}

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
