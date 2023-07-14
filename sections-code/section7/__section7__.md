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
