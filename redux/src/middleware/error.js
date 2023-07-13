export const error = store => next => action => {
  if (action.type === 'SHOW_ERROR') {
    console.error(action.payload.error)
  } else {
    next(action)
  }
}
