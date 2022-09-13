import { IPrize } from 'common/modules/redux/slices/gameSlice';

export interface IGameLayout {
  children: JSX.Element[] | JSX.Element;
  question: string;
  prize?: IPrize[];
}
