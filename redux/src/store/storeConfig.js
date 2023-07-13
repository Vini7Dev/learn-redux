import { configureStore } from '@reduxjs/toolkit'

import { taskSlice } from './tasks'
import { employeeSlice } from './employees'
import { log } from '../middleware/log'

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    employees: employeeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    log,
  ],
})

export default store
