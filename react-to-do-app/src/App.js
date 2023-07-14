import React from 'react'
import { Provider as ReactReduxProvider } from 'react-redux'

import store from './store/storeConfig'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  return (
    <ReactReduxProvider store={store}>
      <div>
        <AddTask />

        <Tasks />
      </div>
    </ReactReduxProvider>
  )
}

export default App
