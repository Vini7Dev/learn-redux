import store from './store/storeConfig'
import { fetchTasks } from './store/tasks'

const unsubscribe = store.subscribe(() => {
  console.log('STATE UPDATED:', store.getState())
})

/*
store.dispatch(addEmployee({ name: 'Jhon' }))
store.dispatch(addEmployee({ name: 'Doe' }))

store.dispatch(addTask({ task: 'Task Title' }))
store.dispatch(taskCompleted({ id: 1 }))
store.dispatch(taskCompleted({ id: 1 }))
store.dispatch(removeTask({ id: 1 }))

unsubscribe()
*/

store.dispatch(fetchTasks())
