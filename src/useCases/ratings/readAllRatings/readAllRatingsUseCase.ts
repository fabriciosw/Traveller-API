import IUseCase from '../../IUseCase';
import { IRatingRepository } from '../../../database/repositories/interfaces/RatingRepository';

export default class ReadAllRatingsUseCase implements IUseCase {
  constructor(private ratingRepository: IRatingRepository) {}

  public async execute() {
    const ratings = await this.ratingRepository.readAll();

    return ratings;
  }
}
