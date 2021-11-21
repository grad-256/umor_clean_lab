import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '@/app/store'
import jsondata from './d.json'
import jsondata01 from './s.json'
import jsondatamainsummary from './mainsummary.json'

type JSONDATA = typeof jsondata
type JSONDATA01 = typeof jsondata01
type JSONDATAMAIN = typeof jsondatamainsummary

type OsakaCovidState = {
  man: number
  woman: number
  // eslint-disable-next-line @typescript-eslint/ban-types
  place: Object
  // eslint-disable-next-line @typescript-eslint/ban-types
  age: Object
  date: string
  data: JSONDATA
  summary: JSONDATA01
  lastupdate: string
  main: JSONDATAMAIN
}

type OsakaReatedCovidState = {
  data: JSONDATA01
}

type OsakaCovidStateObject = {
  patients: OsakaCovidState
  treated_summary: OsakaReatedCovidState
  lastUpdate: string
  main_summary: JSONDATAMAIN
}

const initialState: OsakaCovidState = {
  man: 0,
  woman: 0,
  place: {},
  age: {},
  date: '',
  data: [
    {
      No: 1,
      リリース日: '',
      曜日: 0,
      居住地: '',
      年代: '',
      性別: '',
      退院: '',
      date: '',
    },
  ],
  summary: [
    {
      日付: 1,
      小計: '',
    },
  ],
  lastupdate: '',
  main: {
    attr: '',
    children: [],
    value: 0,
  },
}

export const fetchAsyncGetOsakaData = createAsyncThunk(
  'osakaCovid/getData',
  async () => {
    const { data } = await axios.get<OsakaCovidStateObject>(
      `${process.env.NEXT_PUBLIC_COVID_API}`
    )

    return {
      data: data.patients.data,
      date: data.patients.date,
      summary: data.treated_summary.data,
      lastupdate: data.lastUpdate,
      main: data.main_summary,
    }
  }
)

const osakaCovidSlice = createSlice({
  name: 'osakaCovid',
  initialState: initialState,
  reducers: {
    fetchtestPlacedate(state, action) {
      state.place = action.payload
    },
    fetchtestAgedate(state, action) {
      state.age = action.payload
    },
    fetchtestMandate(state, action) {
      state.man = action.payload.length
    },
    fetchtestWomandate(state, action) {
      state.woman = action.payload.length
    },
    fetchtestSummarydate(state, action) {
      state.summary = action.payload
    },
    fetchtestlastupdatedate(state, action) {
      state.lastupdate = action.payload
    },
    fetchtestMaindate(state, action) {
      state.main = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetOsakaData.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload.data,
        date: action.payload.date,
        summary: action.payload.summary,
        lastupdate: action.payload.lastupdate,
        main: action.payload.main,
      }
    })
  },
})

export const {
  fetchtestMandate,
  fetchtestWomandate,
  fetchtestPlacedate,
  fetchtestAgedate,
  fetchtestSummarydate,
} = osakaCovidSlice.actions

export const selectOsakaPlace = (state: RootState) =>
  state.osakaCovidState.place
export const selectOsakaAge = (state: RootState) => state.osakaCovidState.age
export const selectOsakaWoman = (state: RootState) =>
  state.osakaCovidState.woman
export const selectOsakaMan = (state: RootState) => state.osakaCovidState.man
export const selectOsakaData = (state: RootState) => state.osakaCovidState.data
export const selectOsakaDate = (state: RootState) => state.osakaCovidState.date
export const selectOsakaTreatedDate = (state: RootState) =>
  state.osakaCovidState.summary
export const selectOsakaLastUpdateDate = (state: RootState) =>
  state.osakaCovidState.lastupdate
export const selectOsakaMainDate = (state: RootState) =>
  state.osakaCovidState.main

export default osakaCovidSlice.reducer
