import store from './store/storeConfig'
import {
  addTask,
  removeTask,
  taskCompleted,
} from './store/tasks'

const unsubscribe = store.subscribe(() => {
  console.log('UPDATED', store.getState())
})

store.dispatch(addTask({ task: 'Task Title' }))
store.dispatch(taskCompleted({ id: 1 }))
store.dispatch(taskCompleted({ id: 1 }))
store.dispatch(removeTask({ id: 1 }))

// unsubscribe()

console.log(store.getState())
