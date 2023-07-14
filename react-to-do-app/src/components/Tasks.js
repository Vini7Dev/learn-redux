import React, { useContext, useEffect, useState } from 'react'

import { loadTasks } from '../store/tasks'
import StoreContext from '../contexts/StoreContext'

const Tasks = (props) => {
  const store = useContext(StoreContext)

  const [tasks, setTasks] = useState()

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const storeTasks = store.getState().tasks.tasks

      if (storeTasks !== tasks) {
        setTasks(storeTasks)
      }
    })

    store.dispatch(loadTasks())

    return () => unsubscribe()
  }, [])

  console.log(tasks)

  return (
    <div>
      {tasks.map(task => (
        <p key={task.id}>{task.task}</p>
      ))}
    </div>
  )
}

export default Tasks
