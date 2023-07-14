import store from './store/storeConfig'
import { apiCallBegan } from './store/api'
import { loadTasks } from './store/tasks'

const unsubscribe = store.subscribe(() => {
  console.log('STATE UPDATED:', store.getState())
})

store.dispatch(loadTasks())
