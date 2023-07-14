# 3 Ways to Call API:

## 1) Using a Simple Function to Call API

```js
  const gettingFromApi = async () => {
    // calling api
    // dispatch action
  }
```

```js
  const gettingTasks = async () => {
    // calling api
    const response = await axios.get(API_URL)

    // dispatch action
    store.dispatch(getTasks({
      tasks: response.data,
    }))
  }
```

## 2) Using Async Thunk Method to Call API

```js
  import { createAsyncThunk } from '@reduxjs/toolkit'

  const initialState = {
    tasks: [],
    loading: false,
    error: null,
  }

  export const actionName = createAsyncThunk('ACTION_NAME', async (
    _,
    { rejectWithValue }
  ) => {
    try {
      ...

      return payload
    } catch (error) {
      return rejectWithValue({ error: error.message })
    }
  })

  export const taskSlice = createSlice({
    ...,
    initialState,
    reducers: {
      ...,
      actionName: (state, action) => {
        state.tasks = action.payload.tasks
      },
    },
    extraReducers: {
      [actionName.pending]: (state, action) => {
        state.loading = true
      },
      [actionName.fulfilled]: (state, action) => {
        state.tasks = action.payload.tasks
        state.loading = false
      },
      [actionName.rejected]: (state, action) => {
        state.error = action.payload.error
        state.loading = false
      },
    },
  })
```

```js
  // >>> tasks.js
  import { createAsyncThunk } from '@reduxjs/toolkit'

  ...

  const initialState = {
    tasks: [],
    loading: false,
    error: null,
  }

  export const fetchTasks = createAsyncThunk('fetchTasks', async (
    _,
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks')

      return { tasks: response.data }
    } catch (error) {
      return rejectWithValue({ error: error.message })
    }
  })

  export const taskSlice = createSlice({
    ...,
    initialState,
    reducers: {
      ...,
      getTasks: (state, action) => {
        state.tasks = action.payload.tasks
      },
    },
    extraReducers: {
      [fetchTasks.pending]: (state, action) => {
        state.loading = true
      },
      [fetchTasks.fulfilled]: (state, action) => {
        state.tasks = action.payload.tasks
        state.loading = false
      },
      [fetchTasks.rejected]: (state, action) => {
        state.error = action.payload.error
        state.loading = false
      },
    },
  })

  // >>> index.js
  store.dispatch(fetchTasks())
```

## 3) Using Custom Middlewar to Call API

```js
  // Action Object for API
  {
    type: 'apiRequest',
    payload: {
      url: 'API_URL',
      method: 'POST',
      data: { message: 'Hello World!' },
      onStart: 'actionNameOnStart',
      onSuccess: 'actionNameOnSuccess',
      onError: 'actionNameOnError',
    }
  }
```

```js
  // >>> /store/api.js
  import { createAction } from '@reduxjs/toolkit'

  export const apiCallBegan = createAction('api/callBegan')

  // >>> /store/middlewares/api.js
  import axios from 'axios'

  import { apiCallBegan } from '../api'

  export const api = store => next => async action => {
    if (action.type !== apiCallBegan.type) {
      return next(action)
    }

    const {
      url,
      method,
      data,
      onStart,
      onSuccess,
      onError,
    } = action.payload

    if (onStart) {
      store.dispatch({ type: onStart })
    }

    try {
      const response = await axios.request({
        baseURL: 'http://localhost:5000/api',
        url,
        method,
        data,
      })

      store.dispatch({
        type: onSuccess,
        payload: response.data,
      })
    } catch (error) {
      if (onError) {
        store.dispatch({
          type: onError,
          payload: { error: error.message }
        })
      }

      store.dispatch({
        type: 'SHOW_ERROR',
        payload: { error: error.message }
      })
    }
  }

  // >>> storeConfig.js
  const store = configureStore({
    ...,
    middleware: (getDefaultMiddleware) => [
      ...,
      api,
    ],
  })

  // >>> tasks.js
  export const taskSlice = createSlice({
    ...,
    reducers: {
      apiRequested: (state, action) => {
        state.loading = true
      },
      apiRequestFailed: (state, action) => {
        state.error = state.payload.error
        state.loading = false
      },
      getTasks: (state, action) => {
        state.tasks = action.payload
        state.loading = false
      },
      ...,
    },
  })

  ... // After exports

  // Action Creators
  // [OPTIONAL] Generalized calls to different files
  export const loadTasks = () => {
    return apiCallBegan({
      url: '/tasks',
      method: 'GET',
      onStart: apiRequested.type,
      onSuccess: getTasks.type,
      onError: apiRequestFailed.type,
    })
  }

  // >>> index.js
  import { apiCallBegan } from './store/api'

  ...

  store.dispatch(apiCallBegan({
    url: '/tasks',
    method: 'GET',
    onStart: 'tasks/apiRequested',
    onSuccess: 'tasks/getTasks',
    onError: 'tasks/apiRequestFailed',
  }))

  // OR

  import { loadTasks } from './store/tasks'

  ...

  store.dispatch(loadTasks())
```
