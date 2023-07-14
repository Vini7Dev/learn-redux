import React from 'react'
import { Provider as ReactReduxProvider } from 'react-redux'

import store from './store/storeConfig'
import Tasks from './components/Tasks'

const App = () => {
  return (
    <ReactReduxProvider store={store}>
      <div>
        <Tasks />
      </div>
    </ReactReduxProvider>
  )
}

export default App
