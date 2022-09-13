import { Status } from 'common/modules/redux/slices/gameSlice';

export interface IGeneralLayout {
  title: string;
  layoutType: 'start' | 'end';
  score?: number | string;
  gameStatus?: Status;
  buttonOptions: {
    value: string;
    onClick: () => void;
  };
}
