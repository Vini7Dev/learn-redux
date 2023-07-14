import axios from 'axios'

import { apiCallBegan } from '../api'

export const api = store => next => async action => {
  if (action.type !== apiCallBegan.type) {
    return next(action)
  }

  const {
    url,
    method,
    data,
    onStart,
    onSuccess,
    onError,
  } = action.payload

  if (onStart) {
    store.dispatch({ type: onStart })
  }

  try {
    const response = await axios.request({
      baseURL: 'http://localhost:5000/api',
      url,
      method,
      data,
    })

    store.dispatch({
      type: onSuccess,
      payload: response.data,
    })
  } catch (error) {
    store.dispatch({
      type: onError,
      payload: { error: error.message }
    })

    store.dispatch({
      type: 'SHOW_ERROR',
      payload: { error: error.message }
    })
  }
}
