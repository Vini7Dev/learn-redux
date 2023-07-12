import * as actionTypes from './actionTypes'

let id = 0

export default function reducer(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        },
      ]

    case actionTypes.REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id)

    default:
      return state
  }
}
