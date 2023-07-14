import { createSlice } from '@reduxjs/toolkit'

import { apiCallBegan } from './api'

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
        id: action.payload.id,
        task: action.payload.task,
        completed: action.payload.completed,
      })
    },
    removeTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(task => task.id === action.payload.id)

      state.tasks.splice(taskIndex, 1)
    },
    taskCompleted: (state, action) => {
      const taskIndex = state.tasks.findIndex(task => task.id === action.payload.id)

      state.tasks[taskIndex].completed = !action.payload.completed
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
const url = '/tasks'

export const loadTasks = () => {
  return apiCallBegan({
    url,
    onStart: apiRequested.type,
    onSuccess: getTasks.type,
    onError: apiRequestFailed.type,
  })
}

export const addNewTask = (task) => {
  return apiCallBegan({
    url,
    method: 'POST',
    data: task,
    onStart: apiRequested.type,
    onSuccess: addTask.type,
    onError: apiRequestFailed.type,
  })
}

export const updateCompleted = (task) => {
  return apiCallBegan({
    url: `${url}/${task.id}`,
    method: 'PATCH',
    data: { completed: task.completed },
    onStart: apiRequested.type,
    onSuccess: taskCompleted.type,
    onError: apiRequestFailed.type,
  })
}
