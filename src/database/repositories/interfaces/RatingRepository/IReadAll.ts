import IPost from '../../../../models/rating.model';

interface IReadAllObj extends Pick<IPost, 'id' | 'createdAt'> {
  category: {
    name: string;
  };
  author: {
    name: string;
  };
}
export type IReadAll = IReadAllObj[];
