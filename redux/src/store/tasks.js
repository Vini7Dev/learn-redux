import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../utils/http'

let id = 0

const initialState = {
  tasks: [],
  loading: false,
  error: null,
}

export const fetchTasks = createAsyncThunk('fetchTasks', async (
  _,
  { rejectWithValue }
) => {
  try {
    const response = await instance.get('/tasks')

    return { tasks: response.data }
  } catch (error) {
    return rejectWithValue({ error: error.message })
  }
})

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getTasks: (state, action) => {
      state.tasks = action.payload.tasks
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
  extraReducers: {
    [fetchTasks.pending]: (state, action) => {
      state.loading = true
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.tasks = action.payload.tasks
      state.loading = false
    },
    [fetchTasks.rejected]: (state, action) => {
      state.error = action.payload.error
      state.loading = false
    },
  },
})

export const {
  getTasks,
  addTask,
  removeTask,
  taskCompleted,
} = taskSlice.actions
