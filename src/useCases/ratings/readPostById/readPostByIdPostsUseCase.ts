import { StatusCodes } from 'http-status-codes';
import IUseCase from '../../IUseCase';
import { IRatingRepository } from '../../../database/repositories/interfaces/RatingRepository';
import ApiError from '../../../utils/apiError.utils';

export default class ReadPostByIdUseCase implements IUseCase {
  constructor(private postRepository: IRatingRepository) {}

  public async execute(id: string) {
    const post = await this.postRepository.findById(id);

    if (!post)
      throw new ApiError(StatusCodes.NOT_FOUND, 'POST_ID_DOES_NOT_EXIST');

    return post;
  }
}
