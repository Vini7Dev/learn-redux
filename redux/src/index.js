import store from './store/tasks/store'
import {
  addTask,
  removeTask,
  taskCompleted,
  // fetchTodo,
} from './store/tasks/action'

const unsubscribe = store.subscribe(() => {
  console.log('UPDATED', store.getState())
})

store.dispatch(addTask({ task: 'Task Title' }))
store.dispatch(taskCompleted({ id: 1 }))
store.dispatch(taskCompleted({ id: 1 }))
store.dispatch(removeTask({ id: 1 }))
// store.dispatch(fetchTodo())

// unsubscribe()

console.log(store.getState())
