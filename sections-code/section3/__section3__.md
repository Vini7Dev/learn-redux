# STORE, REDUCER & ACTION

* **ACTIONS:** What to do
* **REDUCERS:** How to do
* **STORE:** Keep data in single place

```md
  > **STORE:** Object that contains the application states/data

  > **REDUCER:** Function responsible for updating the object **STORE**:
    * Receives the STORE and returns the updated STORE;
    * Does not make HTTP call;
    * Does not update from the DOM;
    * Has no other effect.

  > **ACTION:** The identifier of which task/attribute to update in **STORE**:
    * Appears in the second parameter of REDUCER.
```

# Steps for implementing Redux

* 1) Desing the **structure** of the **STORE**;

* 2) List the **ACTIONS** (What to do);

* 3) Create **REDUCER** function (How to do), to define how to perform that actions;

* 4) Create Redux **STORE**.

## 1) Design the structure of the STORE

> **Example** of task array:

```jsx
  [
    {
      id: 1,
      task: 'Design store',
      completed: false,
    }
  ]
```

> On **STORE**, it will look like this (example with 2 slices: tasks and employees):

```jsx
  {
    tasks: [
      {
        id: 1,
        task: 'Design store',
        completed: false,
      },
      { ... }, ...
    ]
    employees: [ { ... }, { ... }, ... ]
  }
```

## 2) List the ACTIONS (What to do)

> Tasks list:

* ADD_TASK;
* REMOVE_TASK;
* TASK_COMPLETED.

```jsx
  {
    type: 'ACTION_NAME',
    payload: {
      ...,
    },
  }
```

```jsx
  const addTaskAction = {
    type: 'ADD_TASK',
    payload: {
      task: 'This is new task!',
    },
  }

  const removeTaskAction = {
    type: 'REMOVE_TASK',
    payload: {
      id: 1,
    },
  }

  const taskCompletedAction = {
    type: 'TASK_COMPLETED',
    payload: {
      id: 1,
    },
  }
```

## 3) Create REDUCER function (How to do)

```jsx
  function reducer(state = [], action) {
    switch (action.type) {
      case 'ADD_TASK':
        return ... // Update the STATE

      case 'REMOVE_TASK':
        return ... // Update the STATE

      case 'TASK_COMPLETED':
        return ... // Update the STATE

      default:
        return state // no updates
    }
  }
```

## 4) Create Redux STORE

**npm install redux**

**yarn add redux**

> ATT: With **LEGACY** way (as an example)

```jsx
  // >>> store.js
  import { legacy_createStore as createStore } from 'redux'

  import reducer from './reducer'

  const store = createStore(reducer)

  export default store

  // >>> index.js
  import store from './store'

  console.log(store.getState())
```

# Dispatch ACTIONS

```jsx
  // >>> index.js
  store.dispatch({
    type: 'ACTION_NAME',
    payload: { ... },
  })

  console.log(store.getState())
```

# Making ACTION TYPES (Constants)

```jsx
  // >>> actionTypes.js
  export const ADD_TASK = 'ADD_TASK'
  export const REMOVE_TASK = 'REMOVE_TASK'
  export const TASK_COMPLETED = 'TASK_COMPLETED'

  // >>> reducer.js
  import * as actionTypes from './actionTypes'

  /*
    case actionTypes.ADD_TASK:
      ...
  */
```

# Subscribing and Unsubscribing Methods

> The callback function will be executed on every STATE change
> ATT: subscribe the callback before the dispatches you need to listen

```jsx
  // >>> index.js
  // Subscribe the callback
  const unsubscribe = store.subscribe(() => {
    console.log('UPDATED', store.getState())
  })

  // Unsubscribe the callback
  unsubscribe()
```

# Async ACTIONS with Redux-Thunk (e.g. to call APIs)

**npm install redux-thunk**

**yarn add redux-thunk**

```jsx
  // >>> store.js
  import { ..., applyMiddleware } from 'redux'
  import thunk from 'redux-thunk'

  import reducer from './reducer'

  const store = createStore(reducer, applyMiddleware(thunk))

  // >>> action.js
  export const fetchExample = () => async (dispatch, getState) => {
    const response = await fetch(API_URL)

    const responseData = await response.json()

    dispatch({
      type: 'ACTION_NAME',
      payload: responseData,
    })
  }

  // >>> index.js
  store.dispatch(fetchTodo())
```
