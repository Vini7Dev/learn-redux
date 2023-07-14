import axios from 'axios'

export const api = store => next => async action => {
  if (action.type !== 'apiRequest') {
    return next(action)
  }

  try {
    const {
      url,
      method,
      data,
      onSuccess,
      onError,
    } = action.payload

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
  }
}
