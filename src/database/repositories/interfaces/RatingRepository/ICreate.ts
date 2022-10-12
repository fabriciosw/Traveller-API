import IRating from '../../../../models/rating.model';

export interface ICreate
  extends Pick<IRating, 'comment' | 'grade' | 'placeId'> {
  userId: string;
}
