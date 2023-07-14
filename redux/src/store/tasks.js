import { createSlice } from '@reduxjs/toolkit'

import { apiCallBegan } from './api'

let id = 0

const initialState = {
  tasks: [],
  loading: false,
  error: null,
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    apiRequested: (state, action) => {
      state.loading = true
    },
    apiRequestFailed: (state, action) => {
      state.error = action.payload.error
      state.loading = false
    },
    getTasks: (state, action) => {
      state.tasks = action.payload
      state.loading = false
    },
    addTask: (state, action) => {
      state.tasks.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      })
    },
    removeTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(task => task.id === action.payload.id)

      state.tasks.splice(taskIndex, 1)
    },
    taskCompleted: (state, action) => {
      const taskIndex = state.tasks.findIndex(task => task.id === action.payload.id)

      state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed
    },
  },
})

export const {
  getTasks,
  addTask,
  removeTask,
  taskCompleted,
  apiRequested,
  apiRequestFailed,
} = taskSlice.actions

// Action Creators
export const loadTasks = () => {
  return apiCallBegan({
    url: '/tasks',
    method: 'GET',
    onStart: apiRequested.type,
    onSuccess: getTasks.type,
    onError: apiRequestFailed.type,
  })
}
