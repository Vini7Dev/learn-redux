import { configureStore } from '@reduxjs/toolkit'

import { taskSlice } from './tasks'
import { employeeSlice } from './employees'
import { error } from './middleware/error'
import { api } from './middleware/api'

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    employees: employeeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api,
    error,
  ],
})

export default store
