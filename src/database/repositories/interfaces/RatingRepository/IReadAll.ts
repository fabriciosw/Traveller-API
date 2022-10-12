import IRating from '../../../../models/rating.model';

interface IReadAllObj extends Pick<IRating, 'id' | 'createdAt'> {
  category: {
    name: string;
  };
  author: {
    name: string;
  };
}
export type IReadAll = IReadAllObj[];
