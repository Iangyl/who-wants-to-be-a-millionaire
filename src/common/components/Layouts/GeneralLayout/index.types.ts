export interface IGeneralLayout {
  title: string;
  layoutType: 'start' | 'end';
  score?: number | string;
  gameStatus?: 'win' | 'lose';
  buttonOptions: {
    value: string;
    onClick: () => void;
  };
}
