import RatingRepository from '../../../database/repositories/implementations/rating.repository';
import CreateRatingController from './createRatingController';
import CreateRatingUseCase from './createRatingUseCase';

const ratingRepository = new RatingRepository();

const useCase = new CreateRatingUseCase(ratingRepository);

const controller = new CreateRatingController(useCase);

export default controller;
