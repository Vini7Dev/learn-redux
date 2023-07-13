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

# Create Action with Redux Toolkit

```jsx
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
