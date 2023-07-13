# Configure Redux Toolkit Store

**npm install @reduxjs/toolkit**

**yarn add @reduxjs/toolkit**

```jsx
  // >>> store.js
  ...
  import { configureStore } from '@reduxjs/toolkit'
  ...

  // Replace "const store = createStore(...)" to
  const store = configureStore({ reducer })
```

# Create ACTION with Redux Toolkit

```jsx
  import { createAction } from '@reduxjs/toolkit'

  ...

  const action = createAction('ACTION_NAME')

  const payload = { example: 'Hello World!' }

  const result = action(payload)
```

```jsx
  // >>> action.js
  export const addTask = createAction('ADD_TASK')
  export const removeTask = createAction('REMOVE_TASK')
  export const taskCompleted = createAction('TASK_COMPLETED')

  // >>> index.js
  // Replace to
  store.dispatch(addTask({ task: 'Task Title' }))
  store.dispatch(taskCompleted({ id: 1 }))
  store.dispatch(removeTask({ id: 1 }))
```

# Create REDUCER with Redux Toolkit

```jsx
  import { createReducer } from '@reduxjs/toolkit'

  ...

  createReducer(START_STATE_VALUE, {
    ACTION_NAME: (state, action) => {
      // Modify the state here
      // WITHOUT "return state"
    }
  })
```

```jsx
  // >>> reducer.js
  createReducer([], {
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
