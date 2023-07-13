import store from './store/storeConfig'

import { addEmployee } from './store/employees'

/*
import {
  addTask,
  removeTask,
  taskCompleted,
} from './store/tasks'
*/

const unsubscribe = store.subscribe(() => {
  console.log('UPDATED', store.getState())
})

/*
store.dispatch(addTask({ task: 'Task Title' }))
store.dispatch(taskCompleted({ id: 1 }))
store.dispatch(taskCompleted({ id: 1 }))
store.dispatch(removeTask({ id: 1 }))

// unsubscribe()
*/

store.dispatch(addEmployee({ name: 'Jhon' }))
store.dispatch(addEmployee({ name: 'Doe' }))

console.log(store.getState())
