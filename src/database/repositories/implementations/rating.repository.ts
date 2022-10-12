import { EntityRepository, getRepository } from 'typeorm';
import Rating from '../../entities/Rating.Entity';
import {
  ICreate,
  IFindByPlaceId,
  IRatingRepository,
  IReadAll,
} from '../interfaces/RatingRepository';

@EntityRepository(Rating)
export default class PostRepository implements IRatingRepository {
  async create({ userId, comment, grade, placeId }: ICreate): Promise<Rating> {
    const post = await getRepository(Rating).create({
      user: { id: userId },
      placeId,
      comment,
      grade,
    });

    return post;
  }

  async save(post: Rating): Promise<Rating> {
    const newPost = await getRepository(Rating).save(post);

    return newPost;
  }

  async readAll(): Promise<IReadAll> {
    const posts = await getRepository(Rating)
      .createQueryBuilder('ratings')
      .innerJoinAndSelect('ratings.user', 'user')
      .select([
        'ratings.id',
        'ratings.placeId',
        'ratings.comment',
        'ratings.grade',
        'ratings.createdAt',
        'user.name',
      ])
      .getMany();

    return posts as unknown as IReadAll;
  }

  async findByPlaceId(placeId: string): Promise<IFindByPlaceId> {
    const post = await getRepository(Rating)
      .createQueryBuilder('ratings')
      .where({ placeId })
      .innerJoinAndSelect('ratings.user', 'user')
      .select([
        'ratings.id',
        'ratings.placeId',
        'ratings.comment',
        'ratings.grade',
        'ratings.createdAt',
        'user.name',
      ])
      .getMany();

    return post as unknown as IFindByPlaceId;
  }
}
