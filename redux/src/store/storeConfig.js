import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { taskSlice } from './tasks'
import { employeeSlice } from './employees'
import { myMiddleware } from './middleware/myMiddleware'
import { error } from './middleware/error'

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    employees: employeeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    myMiddleware,
    error,
    logger,
  ],
})

export default store
