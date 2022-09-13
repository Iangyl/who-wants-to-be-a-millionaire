export interface IAnswerButton {
  letterId: string;
  value: string;
  isCorrect: boolean;
  onClick: (value: boolean) => void;
}
