import store from './store/storeConfig'
import { getTasks } from './store/tasks'

const unsubscribe = store.subscribe(() => {
  console.log('STATE UPDATED:', store.getState())
})

store.dispatch({
  type: 'apiRequest',
  payload: {
    url: '/tasks',
    method: 'GET',
    onSuccess: 'tasks/getTasks',
    onError: 'SHOW_ERROR',
  }
})
