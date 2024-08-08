// Step 1: Configure the store 
import{configureStore} from '@reduxjs/toolkit'

import todoReducer from '../features/todo/todoSlice'

// step 2 :store is created but still not ready to use 
export const store = configureStore({
    reducer : todoReducer
})

//step 3 : create the reducer(often called as slice)