import store from './store/tasks/store'
import { addTask, removeTask, taskCompleted } from './store/tasks/action'

const unsubscribe = store.subscribe(() => {
  console.log('UPDATED', store.getState())
})

store.dispatch(addTask('Task Title'))
store.dispatch(taskCompleted(1))
store.dispatch(taskCompleted(1))

unsubscribe()

store.dispatch(removeTask(1))

console.log(store.getState())
