import store from './store'
import { addTask, removeTask } from './action'

const unsubscribe = store.subscribe(() => {
  console.log('UPDATED', store.getState())
})

store.dispatch(addTask('Task Title'))

console.log(store.getState())

unsubscribe()

store.dispatch(removeTask(1))

console.log(store.getState())
