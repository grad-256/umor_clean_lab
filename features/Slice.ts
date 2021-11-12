import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/app/store'

type sliceState = {
  slice: string
}

const initialState: sliceState = {
  slice: '',
}

const sliceReducer = createSlice({
  name: 'slice',
  initialState: initialState,
  reducers: {
    sliceState(state, action) {
      state.slice = action.payload
    },
  },
})

export const { sliceState } = sliceReducer.actions

export const selectSliceState = (state: RootState) => state.sliceState.slice

export default sliceReducer.reducer
