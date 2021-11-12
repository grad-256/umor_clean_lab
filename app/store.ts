import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import sliceReducer from '@/features/Slice'
import osakaCovidReducer from '@/features/osakaCovidSlice'

export const store = configureStore({
  reducer: {
    sliceState: sliceReducer,
    osakaCovidState: osakaCovidReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export type AppDispatch = typeof store.dispatch
