import { createContext, useContext } from 'react'


//create context contain the array and
//the array contain the object which have properties itself


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})


export const useTodo = () => {
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider