import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { taskSlice } from './tasks'
import { employeeSlice } from './employees'
import { myMiddleware } from '../middleware/myMiddleware'

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    employees: employeeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    myMiddleware,
    logger,
  ],
})

export default store
