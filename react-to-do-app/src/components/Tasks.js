import React, { useContext } from 'react'

import StoreContext from '../contexts/StoreContext'

const Tasks = (props) => {
  const store = useContext(StoreContext)

  console.log(store)

  return (
    <h1>Hello, World!</h1>
  )
}

export default Tasks
