import IUseCase from '../../IUseCase';
import { IRatingRepository } from '../../../database/repositories/interfaces/RatingRepository';

export default class ReadAllPostsUseCase implements IUseCase {
  constructor(private postRepository: IRatingRepository) {}

  public async execute() {
    const posts = await this.postRepository.readAll();

    return posts;
  }
}
