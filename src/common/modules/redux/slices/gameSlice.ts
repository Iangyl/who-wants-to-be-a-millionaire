import type { RootState } from '../store';
import { Datum } from 'common/lib/data.types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Status = 'win' | 'lose' | 'default';
export type PrizeStatus = 'active' | 'next' | 'passed';

export interface IPrize {
  value: string | number;
  status: PrizeStatus;
}

interface IGameData {
  currency: string;
  prizes: IPrize[];
  questions: Datum[];
  currentQuestion?: Datum;
  questionIndex: number;
  finishStatus: Status;
  score: number;
}

const initialState: IGameData = {
  currency: '',
  prizes: [],
  questions: [],
  finishStatus: 'default',
  score: 0,
  questionIndex: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    loadData: (
      state,
      action: PayloadAction<
        Omit<IGameData, 'score' | 'finishStatus' | 'questionIndex'>
      >
    ) => {
      state.currency = action.payload.currency;
      state.prizes = action.payload.prizes;
      state.questions = action.payload.questions;
      state.currentQuestion = action.payload.questions[0];
      state.prizes[state.prizes.length - 1].status = 'active';
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
      state.questionIndex = 0;
      state.currentQuestion = state.questions[0];
      state.prizes = state.prizes.map((prize, idx) => {
        if (idx === state.prizes.length - 1) {
          return { ...prize, status: 'active' };
        }
        return { ...prize, status: 'next' };
      });
    },
    nextQuestion: (state) => {
      const index = state.questionIndex + 1;
      if (index === state.questions.length - 1) {
        state.finishStatus = 'win';
      } else {
        state.questionIndex = index;
        state.currentQuestion = state.questions[index];
        state.prizes[state.prizes.length - 1 - index].status = 'active';
        state.prizes[state.prizes.length - index].status = 'passed';
        state.score += +state.prizes[state.prizes.length - index].value;
      }
    },
  },
});

export const { loadData, updateScore, updateStatus, reset, nextQuestion } =
  gameSlice.actions;

export const selectGame = (state: RootState) => state.game;

export default gameSlice.reducer;
