import store from './store/storeConfig'

const unsubscribe = store.subscribe(() => {
  console.log('STATE UPDATED:', store.getState())
})

store.dispatch({
  type: 'apiRequest',
  payload: {
    url: '/tasks',
    method: 'GET',
    onStart: 'tasks/apiRequested',
    onSuccess: 'tasks/getTasks',
    onError: 'tasks/apiRequestFailed',
  }
})
