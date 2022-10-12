import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ApiError from '../../../utils/apiError.utils';
import IController from '../../IController';
import ReadAllRatingsUseCase from './readAllRatingsUseCase';

export default class ReadAllRatingsController implements IController {
  constructor(private useCase: ReadAllRatingsUseCase) {}

  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const ratings = await this.useCase.execute();

      return response.status(StatusCodes.OK).json(ratings);
    } catch (error: any) {
      if (error instanceof ApiError) return next(error);

      throw new ApiError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        `ReadAllRatingsController: ${error.message}`
      );
    }
  }
}
