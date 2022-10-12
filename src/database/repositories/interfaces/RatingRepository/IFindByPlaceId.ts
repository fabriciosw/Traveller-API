import IRating from '../../../../models/rating.model';

export interface IFindByPlaceId
  extends Pick<IRating, 'id' | 'placeId' | 'comment' | 'grade' | 'createdAt'> {
  user: {
    name: string;
  };
}
