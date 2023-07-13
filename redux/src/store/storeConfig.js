import { configureStore } from '@reduxjs/toolkit'

// import taskSlice from './tasks'
import employeeSlice from './employees'

const store = configureStore({ reducer: employeeSlice.reducer })

export default store
