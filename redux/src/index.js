import store from './store/tasks/store'
import {
  addTask,
  removeTask,
  taskCompleted,
  fetchTodo,
} from './store/tasks/action'

const unsubscribe = store.subscribe(() => {
  console.log('UPDATED', store.getState())
})

store.dispatch(addTask('Task Title'))
store.dispatch(taskCompleted(1))
store.dispatch(taskCompleted(1))
store.dispatch(removeTask(1))
store.dispatch(fetchTodo())

// unsubscribe()

console.log(store.getState())
