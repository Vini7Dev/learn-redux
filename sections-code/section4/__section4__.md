# Redux Dev Tools for Debugging

> Install the Chrome extension **[HERE](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)**

**npm install redux-devtools-extension**

**yarn add redux-devtools-extension**

```jsx
  // >>> store.js
  ...
  import { devToolsEnhancer } from 'redux-devtools-extension'

  ...

  const store = createStore(
    reducer,
    devToolsEnhancer({ trace: true }),
  )

  // >>> webpack.config.js
  module.exports ={
    ...,
    devtool: 'source-map',
  }
```
