# [RECOMMENDED] Connecting Redux Using React-Redux

**npm install react-redux**

**yarn add react-redux**

```js
  // >>> App.js
  import React from 'react'
  import ReactRedux from 'react-redux'

  import store from './store/storeConfig'
  import Tasks from './components/Tasks'

  const App = () => {
    return (
      <ReactRedux.Provider store={store}>
        <div>
          <Tasks />
        </div>
      </ReactRedux.Provider>
    )
  }

  export default App
```

# [RECOMMENDED] Hooks to useDispatch and useSelector

```js
  // >>> /components/Tasks.js
  import React, { useEffect } from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import { loadTasks } from '../store/tasks'

  const Tasks = () => {
    const { tasks, loading, error } = useSelector(state => state.tasks)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(loadTasks())
    }, [])

    if (loading) {
      return <p>Loading...</p>
    }

    if (error) {
      return <p>ERROR: {error}</p>
    }

    return (
      <div>
        {
          tasks.map(task => (
            <p key={task.id}>{task.task}</p>
          ))
        }
      </div>
    )
  }

  export default Tasks
```

# [NOT RECOMMENDED] Configure Redux Store on React

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

## [NOT RECOMMENDED] Subscribe and Dispatching an Actions

```js
  // >>> /components/Tasks.js
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

    ...
  }
```
