# Configure Redux Store on React

```js
  // >>> /contexts/StoreContext.js
  import { createContext } from 'react'

  const StoreContext = createContext()

  export default StoreContext

  // >>> /components/Tasks.js
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

  // >>> App.js
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
```
