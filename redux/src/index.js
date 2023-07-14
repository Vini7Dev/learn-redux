import axios from 'axios'

import store from './store/storeConfig'
import { getTasks } from './store/tasks'

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

const gettingTasks = async () => {
  try {
    // calling api
    const response = await axios.get('http://localhost:5000/api/tasks')

    // dispatch action
    store.dispatch(getTasks({
      tasks: response.data,
    }))
  } catch (err) {
    store.dispatch({
      type: 'SHOW_ERROR',
      payload: {
        error: err.message,
      },
    })
  }
}

gettingTasks()
