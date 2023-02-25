import { configureStore, createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      idCounter : 1,
      filter : false,
      data : [],
    },
    reducers: {
      addTask: (state, action) => {
        const newTask = {
          id: Date.now(),
          done: false,
          text: action.payload,
        }
        state.push(newTask);
      },
      toggleTask: (state, action) => {
        const task = state.find(t => t.id === action.payload)
        task.done = !task.done;
      },
      deleteTask: (state, action) => {
        state = state.filter(t => t.id !== action.payload)
      },
    },
  })

  export const { addTask, toggleTask, deleteTask } = counterSlice.actions
  
  export default counterSlice.reducer