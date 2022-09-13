import type { RootState } from '../store'
import { Datum } from 'common/lib/data.types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IGameData {
  currency: string;
  prizes: string[];
  questions: Datum[]
}

const initialState: IGameData = {
  currency: '',
  prizes: [],
  questions: []
}

export const counterSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    loadData: (state, action: PayloadAction<IGameData>) => {
      state.currency = action.payload.currency
      state.prizes = action.payload.prizes
      state.questions = action.payload.questions
    },
  },
})

export const { loadData } = counterSlice.actions

export const selectCount = (state: RootState) => state.game

export default counterSlice.reducer
