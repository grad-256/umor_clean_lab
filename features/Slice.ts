import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '@/app/store'

type sliceState = {
  slice: string
}

const initialState: sliceState = {
  slice: '',
}

export const fetchAsyncDeployApi = createAsyncThunk(
  'deployApi/getData',
  async () => {
    const hash = new Date().getTime()
    const data = await fetch('/deploytimestamp.json?' + hash)
    const result = await data.json()

    return {
      data: result,
    }
  }
)

const sliceReducer = createSlice({
  name: 'slice',
  initialState: initialState,
  reducers: {
    sliceState(state, action) {
      state.slice = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncDeployApi.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload.data,
      }
    })
  },
})

export const { sliceState } = sliceReducer.actions

export const selectSliceState = (state: RootState) => state.sliceState.slice

export default sliceReducer.reducer
