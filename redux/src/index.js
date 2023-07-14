import store from './store/storeConfig'
import { addNewTask, loadTasks, updateCompleted } from './store/tasks'

const unsubscribe = store.subscribe(() => {
  console.log('STATE UPDATED:', store.getState())
})

// store.dispatch(addNewTask({ task: 'Hello, World!' }))

store.dispatch(updateCompleted({ id: 6, completed: false }))

store.dispatch(loadTasks())
