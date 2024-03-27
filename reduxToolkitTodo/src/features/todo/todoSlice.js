import { createSlice, nanoid } from "@reduxjs/toolkit";                      // nonoid generated the unique id
const initialState = {
    todos : [{id : 1, text : "Hello world"}]
}



//step 4: create the Slice (big version of reducer(reducer is function))

export const todoSlice = createSlice({
    name :'todo',
    initialState,       // step 5 create the reducer
    reducers: {
        addTodo:(state,action)=> {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)

        },
        removeTodo:(state, action)=> {
            state.todos = state.todos.filter((todo) => todo.
            id !== action.payload)
        },
    }                       
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer