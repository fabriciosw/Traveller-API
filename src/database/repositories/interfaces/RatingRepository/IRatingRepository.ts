import { ICreate, IFindByAuthorId, IFindById, IReadAll } from '.';
import Rating from '../../../entities/Rating.Entity';

export interface IRatingRepository {
  create(rating: ICreate): Promise<Rating>;
  save(rating: Rating): Promise<Rating>;
  findByAuthorId(id: string): Promise<IFindByAuthorId>;
  findById(id: string): Promise<IFindById | undefined>;
  readAll(): Promise<IReadAll>;
}
