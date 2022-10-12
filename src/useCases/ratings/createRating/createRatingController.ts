import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CreateRatingInput } from '../../../schemas/rating.schema';
import ApiError from '../../../utils/apiError.utils';
import IController from '../../IController';
import createRatingUseCase from './createRatingUseCase';
import ICreateRatingRequestDTO from './ICreateRatingRequestDTO';

export default class CreateRatingController implements IController {
  constructor(private useCase: createRatingUseCase) {}

  public async handle(
    request: Request<{}, {}, CreateRatingInput['body']>,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { body } = request;
      const userId = response.locals.user.decoded.subject;

      const useCaseData: ICreateRatingRequestDTO = {
        ...body,
        userId,
      };

      const rating = await this.useCase.execute(useCaseData);

      return response
        .status(StatusCodes.CREATED)
        .json({ message: 'Rating created', rating });
    } catch (error: any) {
      if (error instanceof ApiError) return next(error);

      throw new ApiError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        `CreateRatingController: ${error.message}`
      );
    }
  }
}
