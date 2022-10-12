import IPost from '../../../../models/rating.model';

export interface IFindById extends Pick<IPost, 'id' | 'createdAt'> {
  category: {
    name: string;
  };
  author: {
    name: string;
  };
}
