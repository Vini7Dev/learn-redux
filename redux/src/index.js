import store from './store/storeConfig'
import { apiCallBegan } from './store/api'

const unsubscribe = store.subscribe(() => {
  console.log('STATE UPDATED:', store.getState())
})


store.dispatch(apiCallBegan({
  url: '/tasks',
  method: 'GET',
  onStart: 'tasks/apiRequested',
  onSuccess: 'tasks/getTasks',
  onError: 'tasks/apiRequestFailed',
}))
