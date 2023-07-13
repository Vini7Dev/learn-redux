import { configureStore } from '@reduxjs/toolkit'

import { taskSlice } from './tasks'
import { employeeSlice } from './employees'

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    employees: employeeSlice.reducer,
  }
})

export default store
