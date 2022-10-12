import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ReadRatingByPlaceIdInput } from '../../../schemas/rating.schema';
import ApiError from '../../../utils/apiError.utils';
import IController from '../../IController';
import ReadRatingByPlaceIdUseCase from './readRatingByPlaceIdUseCase';

export default class ReadRatingByPlaceIdController implements IController {
  constructor(private useCase: ReadRatingByPlaceIdUseCase) {}

  public async handle(
    request: Request<ReadRatingByPlaceIdInput['params']>,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { params } = request;

      const rating = await this.useCase.execute(params.placeId);

      return response.status(StatusCodes.OK).json(rating);
    } catch (error: any) {
      if (error instanceof ApiError) return next(error);

      throw new ApiError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        `ReadRatingByPlaceIdController: ${error.message}`
      );
    }
  }
}
