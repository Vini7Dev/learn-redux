# Configure Redux Toolkit Store

**npm install @reduxjs/toolkit**

**yarn add @reduxjs/toolkit**

```js
  // >>> storeConfig.js
  ...
  import { configureStore } from '@reduxjs/toolkit'
  ...

  // Replace "const store = createStore(...)" to
  const store = configureStore({ reducer })
```

# Create ACTIONS and REDUCERS with Slice of the Redux Toolkit

```js
  import { createSlice } from '@reduxjs/toolkit'

  ...

  const slice = createSlice({
    name: 'nameOfTheSlice',
    initialState: [],
    reducers: {
      // action: reducerFunction
      actionName: (state, action) => {
        // Modify the state here
      }
    }
  })
```

```js
  // >>> tasks.js
  export const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
      getTasks: (state, action) => {
        return action.payload.tasks
      },
      addTask: (state, action) => {
        state.push({
          id: ++id,
          task: action.payload.task,
          completed: false,
        })
      },
      removeTask: (state, action) => {
        const taskIndex = state.findIndex(task => task.id === action.payload.id)

        state.splice(taskIndex, 1)
      },
      taskCompleted: (state, action) => {
        const taskIndex = state.findIndex(task => task.id === action.payload.id)

        state[taskIndex].completed = !state[taskIndex].completed
      },
    }
  })
```

# Combine REDUCERs with Redux Toolkit

```js
  // >>> storeConfig.js
  import taskSlice from './tasks'
  import employeeSlice from './employees'

  ...

  // Replace the "const store = configureStore({ reducer})" to
  const store = configureStore({
    reducer: {
      tasks: taskSlice.reducer,
      employees: employeeSlice.reducer,
    }
  })
```

# [INDIVIDUALLY] Create ACTION with Redux Toolkit

```js
  import { createAction } from '@reduxjs/toolkit'

  ...

  const action = createAction('ACTION_NAME')

  const payload = { example: 'Hello World!' }

  const result = action(payload)
```

```js
  // >>> tasks.js
  export const addTask = createAction('ADD_TASK')
  export const removeTask = createAction('REMOVE_TASK')
  export const taskCompleted = createAction('TASK_COMPLETED')

  // >>> index.js
  // Replace to
  store.dispatch(addTask({ task: 'Task Title' }))
  store.dispatch(taskCompleted({ id: 1 }))
  store.dispatch(removeTask({ id: 1 }))
```

# [INDIVIDUALLY] Create REDUCER with Redux Toolkit

```js
  import { createReducer } from '@reduxjs/toolkit'

  ...

  export const reducer = createReducer(START_STATE_VALUE, {
    ACTION_NAME: (state, action) => {
      // Modify the state here
      // WITHOUT "return state"
    }
  })
```

```js
  // >>> tasks.js
  export const reducer = createReducer([], {
    ADD_TASK: (state, action) => {
      state.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      })
    },
    REMOVE_TASK: (state, action) => {
      const taskIndex = state.findIndex(task => task.id === action.payload.id)
      state.splice(taskIndex, 1)
    },
    TASK_COMPLETED: (state, action) => {
      const taskIndex = state.findIndex(task => task.id === action.payload.id)
      state[taskIndex].completed = !state[taskIndex].completed
    }
  })
```
