import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewTask } from '../store/tasks'

const AddTask = () => {
  const { loading, error } = useSelector(state => state.tasks)

  const dispatch = useDispatch()

  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (loading) {
      return
    }

    dispatch(addNewTask({ task }))
  }

  return (
    <form onSubmit={handleSubmit}>
      { error && <strong>ERROR: {error}</strong> }

      <input
        type="text"
        name="task"
        placeholder="Enter new task..."
        value={task}
        onChange={e => setTask(e.target.value)}
      />

      <button type="submit">
        {
          loading
            ? 'Sending...'
            : 'Add Task'
        }
      </button>
    </form>
  )
}

export default AddTask
