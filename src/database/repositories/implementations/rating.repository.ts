import { EntityRepository, getRepository } from 'typeorm';
import Rating from '../../entities/Rating.Entity';
import {
  ICreate,
  IFindByAuthorId,
  IFindById,
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
      .createQueryBuilder('posts')
      .innerJoinAndSelect('posts.author', 'author')
      .innerJoinAndSelect('posts.category', 'category')
      .select([
        'posts.id',
        'posts.title',
        'posts.createdAt',
        'author.name',
        'category.name',
      ])
      .getMany();

    return posts as unknown as IReadAll;
  }

  async findByAuthorId(author: string): Promise<IFindByAuthorId> {
    const posts = await getRepository(Rating)
      .createQueryBuilder('posts')
      .where({ author })
      .innerJoinAndSelect('posts.category', 'category')
      .select([
        'posts.id',
        'posts.title',
        'posts.createdAt',
        'posts.content',
        'category.name',
      ])
      .getMany();

    return posts as unknown as IFindByAuthorId;
  }

  async findById(id: string): Promise<IFindById | undefined> {
    const post = await getRepository(Rating)
      .createQueryBuilder('posts')
      .where({ id })
      .innerJoinAndSelect('posts.author', 'author')
      .innerJoinAndSelect('posts.category', 'category')
      .select([
        'posts.id',
        'posts.title',
        'posts.content',
        'posts.createdAt',
        'author.name',
        'category.name',
      ])
      .getOne();

    return post as unknown as IFindById;
  }
}
