import {
  legacy_createStore as createStore,
  // applyMiddleware,
} from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'

import reducer from './reducer'

const store = createStore(
  reducer,
  devToolsEnhancer({ trace: true }),
  // applyMiddleware(thunk),
)

export default store
