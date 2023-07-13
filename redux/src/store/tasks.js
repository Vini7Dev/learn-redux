import { createAction, createReducer } from '@reduxjs/toolkit'

// Actions

export const addTask = createAction('ADD_TASK')
export const removeTask = createAction('REMOVE_TASK')
export const taskCompleted = createAction('TASK_COMPLETED')

// Reducers

const START_STATE_VALUE = []

let id = 0

export const reducer = createReducer(START_STATE_VALUE, {
  [addTask.type]: (state, action) => {
    state.push({
      id: ++id,
      task: action.payload.task,
      completed: false,
    })
  },
  [removeTask.type]: (state, action) => {
    const taskIndex = state.findIndex(task => task.id === action.payload.id)

    state.splice(taskIndex, 1)
  },
  [taskCompleted.type]: (state, action) => {
    const taskIndex = state.findIndex(task => task.id === action.payload.id)

    state[taskIndex].completed = !state[taskIndex].completed
  }
})
