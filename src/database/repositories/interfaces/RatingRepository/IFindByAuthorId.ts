import IPost from '../../../../models/rating.model';

interface IFindByAuthorIdObj extends Pick<IPost, 'id' | 'createdAt'> {
  category: {
    name: string;
  };
}

export type IFindByAuthorId = IFindByAuthorIdObj[];
