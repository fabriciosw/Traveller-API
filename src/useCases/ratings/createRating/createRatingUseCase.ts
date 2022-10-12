import { IRatingRepository } from '../../../database/repositories/interfaces/RatingRepository';
import ICreateRatingRequestDTO from './ICreateRatingRequestDTO';

export default class CreateRatingUseCase {
  constructor(private ratingRepository: IRatingRepository) {}

  public async execute(data: ICreateRatingRequestDTO) {
    const { userId, grade, comment, placeId } = data;

    const rating = await this.ratingRepository.create({
      userId,
      placeId,
      grade: grade as 1 | 2 | 3 | 4 | 5,
      comment,
    });

    await this.ratingRepository.save(rating);

    const DTO = {
      id: rating.id,
      createdAt: rating.createdAt,
    };

    return DTO;
  }
}
