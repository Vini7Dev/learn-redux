import React, { useEffect, useState } from 'react'

// import { loadTasks } from '../store/tasks'

const Tasks = () => {
  const [tasks, setTasks] = useState()

  useEffect(() => {
    // store.dispatch(loadTasks())
  }, [])

  console.log(tasks)

  return (
    <div>
      {
        /*
        tasks.map(task => (
          <p key={task.id}>{task.task}</p>
        ))
        */
      }
    </div>
  )
}

export default Tasks
