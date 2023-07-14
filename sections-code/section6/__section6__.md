# What is Middleware?

*Function which **run between the action and reducer**.*

# Middleware Creation

```js
  const middleware = store => next => action => {
    ...

    next(action)
  }
```

```js
  // >>> /middleware/error.js
  export const error = store => next => action => {
    if (action.type === 'SHOW_ERROR') {
      console.error(action.payload.error)
    } else {
      next(action)
    }
  }

  // >>> /store/storeConfig.js
  const store = configureStore({
    ...,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      error,
    ],
  })
```

# Add Redux Logger

**npm install redux-logger**

**yarn add redux-logger**

```js
  // >>> /store/storeConfig.js
  import logger from 'redux-logger'

  ...

  const store = configureStore({
    ...,
    middleware: (getDefaultMiddleware) => [
      ...,
      logger,
      ...,
    ],
  })
```
