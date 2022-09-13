import type { RootState } from '../store';
import { Datum } from 'common/lib/data.types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Status = 'win' | 'lose' | 'default';

interface IGameData {
  currency: string;
  prizes: string[];
  questions: Datum[];
  finishStatus: Status;
  score: number;
}

const initialState: IGameData = {
  currency: '',
  prizes: [],
  questions: [],
  finishStatus: 'default',
  score: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    loadData: (
      state,
      action: PayloadAction<Omit<IGameData, 'finishStatus' | 'score'>>
    ) => {
      state.currency = action.payload.currency;
      state.prizes = action.payload.prizes;
      state.questions = action.payload.questions;
    },
    updateScore: (state, action: PayloadAction<number>) => {
      state.score += action.payload;
    },
    updateStatus: (state, action: PayloadAction<Status>) => {
      state.finishStatus = action.payload;
    },
    reset: (state) => {
      state.score = 0;
      state.finishStatus = 'default';
    },
  },
});

export const { loadData, updateScore, updateStatus, reset } = gameSlice.actions;

export const selectGame = (state: RootState) => state.game;

export default gameSlice.reducer;
