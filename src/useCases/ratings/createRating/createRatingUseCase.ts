import { IRatingRepository } from '../../../database/repositories/interfaces/RatingRepository';
import ICreateRatingRequestDTO from './ICreateRatingRequestDTO';

export default class CreateRatingUseCase {
  constructor(private ratingRepository: IRatingRepository) {}

  public async execute(data: ICreateRatingRequestDTO) {
    const { userId, grade, comment, placeId } = data;

    let sanitizedGrade: number;

    if (grade > 5) sanitizedGrade = 5;
    else if (grade < 1) sanitizedGrade = 1;
    else sanitizedGrade = grade;

    const rating = await this.ratingRepository.create({
      userId,
      placeId,
      grade: sanitizedGrade as 1 | 2 | 3 | 4 | 5,
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
