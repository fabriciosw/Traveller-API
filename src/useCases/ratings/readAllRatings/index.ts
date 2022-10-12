import RatingRepository from '../../../database/repositories/implementations/rating.repository';
import ReadAllRatingsController from './readAllRatingsController';
import ReadAllRatingsUseCase from './readAllRatingsUseCase';

const ratingRepository = new RatingRepository();

const useCase = new ReadAllRatingsUseCase(ratingRepository);

const controller = new ReadAllRatingsController(useCase);

export default controller;
