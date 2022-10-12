import { ICreate, IFindByPlaceId, IReadAll } from '.';
import Rating from '../../../entities/Rating.Entity';

export interface IRatingRepository {
  create(rating: ICreate): Promise<Rating>;
  save(rating: Rating): Promise<Rating>;
  findByPlaceId(id: string): Promise<IFindByPlaceId>;
  readAll(): Promise<IReadAll>;
}
