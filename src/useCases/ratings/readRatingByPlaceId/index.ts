import RatingRepository from '../../../database/repositories/implementations/rating.repository';
import ReadRatingByPlaceIdController from './readRatingByPlaceIdController';
import ReadRatingByPlaceIdUseCase from './readRatingByPlaceIdUseCase';

const ratingRepository = new RatingRepository();

const useCase = new ReadRatingByPlaceIdUseCase(ratingRepository);

const controller = new ReadRatingByPlaceIdController(useCase);

export default controller;
