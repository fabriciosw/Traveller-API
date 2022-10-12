import IBase from './base.model';

export default interface IRating extends IBase {
  user: string;
  placeId: string;
  comment: string;
  grade: 1 | 2 | 3 | 4 | 5;
}
