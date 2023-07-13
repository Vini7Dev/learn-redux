# What is Middleware?

*Function which **run between the action and reducer**.*

# Middleware Creation

```jsx
  const middleware = store => next => action => {
    ...

    next(action)
  }
```

```jsx
  // >>> /middleware/log.js
  export const log = store => next => action => {
    console.log(action, next, store)

    next(action)
  }

  // >>> /store/storeConfig.js
  const store = configureStore({
    ...,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      log,
    ],
  })
```

# Add Redux Logger

**npm install redux-logger**

**yarn add redux-logger**

```jsx
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
