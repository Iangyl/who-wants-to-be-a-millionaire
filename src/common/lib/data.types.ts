// Generated by https://quicktype.io

export interface IData {
  data: Datum[];
  prizes: string[];
  currency: string;
}

export interface Datum {
  id: string;
  question: string;
  answers: Answer[];
}

export interface Answer {
  letterId: string;
  value: string;
  isCorrect: boolean;
}