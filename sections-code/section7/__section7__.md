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
