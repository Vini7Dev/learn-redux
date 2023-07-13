import { createReducer } from '@reduxjs/toolkit'

import * as actionTypes from './actionTypes'

const START_STATE_VALUE = []

let id = 0

const reducer = createReducer(START_STATE_VALUE, {
  [actionTypes.ADD_TASK]: (state, action) => {
    state.push({
      id: ++id,
      task: action.payload.task,
      completed: false,
    })
  },
  [actionTypes.REMOVE_TASK]: (state, action) => {
    const taskIndex = state.findIndex(task => task.id === action.payload.id)

    state.splice(taskIndex, 1)
  },
  [actionTypes.TASK_COMPLETED]: (state, action) => {
    const taskIndex = state.findIndex(task => task.id === action.payload.id)

    state[taskIndex].completed = !state[taskIndex].completed
  }
})

export default reducer
