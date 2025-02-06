import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/Slice'

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

//Steps:-
// 1. Create store
// 2. Wrap app component under provider in main.jsx
// 3. Create slice
// 4. Register in store
