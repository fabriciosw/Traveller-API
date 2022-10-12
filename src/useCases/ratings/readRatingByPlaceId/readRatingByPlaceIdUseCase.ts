import IUseCase from '../../IUseCase';
import { IRatingRepository } from '../../../database/repositories/interfaces/RatingRepository';

export default class ReadRatingByPlaceIdUseCase implements IUseCase {
  constructor(private ratingRepository: IRatingRepository) {}

  public async execute(id: string) {
    const rating = await this.ratingRepository.findByPlaceId(id);

    return rating;
  }
}
