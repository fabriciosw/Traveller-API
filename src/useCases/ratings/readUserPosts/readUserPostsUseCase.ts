import IUseCase from '../../IUseCase';
import { IRatingRepository } from '../../../database/repositories/interfaces/RatingRepository';
import IReadUserPostsRequestDTO from './IReadUserPostsRequestDTO';

export default class ReadUserPostsUseCase implements IUseCase {
  constructor(private postRepository: IRatingRepository) {}

  public async execute(data: IReadUserPostsRequestDTO) {
    const posts = await this.postRepository.findByAuthorId(data.userId);

    return posts;
  }
}
