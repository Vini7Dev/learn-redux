import React from 'react'

import store from './store/storeConfig'
import StoreContext from './contexts/StoreContext'
import Tasks from './components/Tasks'

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <div>
        <Tasks />
      </div>
    </StoreContext.Provider>
  )
}

export default App
