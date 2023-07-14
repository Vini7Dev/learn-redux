# Using a Simple Function to Call API

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

# Using Async Thunk Method to Call API

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

# Using Custom Middlewar to Call API

```js
  // Action Object for API
  {
    type: 'apiRequest',
    payload: {
      url: 'API_URL',
      method: 'POST',
      data: { message: 'Hello World!' },
      onSuccess: 'actionNameOnSuccess',
      onError: 'actionNameOnError',
    }
  }
```

```js
  // >>> /middlewares/api.js
  import axios from 'axios'

  export const api = store => next => async action => {
    if (action.store !== 'apiRequest') {
      return next(action)
    }

    try {
      const {
        url,
        method,
        data,
        onSuccess,
        onError,
      } = action.payload

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
      store.dispatch({
        type: onError,
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

  // >>> index.js
  store.dispatch({
    type: 'apiRequest',
    payload: {
      url: '/tasks',
      method: 'GET',
      onSuccess: 'tasks/getTasks',
      onError: 'SHOW_ERROR',
    }
  })
```
