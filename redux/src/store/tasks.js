import { createSlice } from '@reduxjs/toolkit'

let id = 0

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      })
    },
    removeTask: (state, action) => {
      const taskIndex = state.findIndex(task => task.id === action.payload.id)

      state.splice(taskIndex, 1)
    },
    taskCompleted: (state, action) => {
      const taskIndex = state.findIndex(task => task.id === action.payload.id)

      state[taskIndex].completed = !state[taskIndex].completed
    },
  }
})

export const {
  addTask,
  removeTask,
  taskCompleted,
} = taskSlice.actions
