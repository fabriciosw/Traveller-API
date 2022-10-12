import { NextFunction, Request, Response, Router } from 'express';
import requireUser from '../../middlewares/requireUser';
import validateResource from '../../middlewares/validateResource';
import {
  createRatingSchema,
  placeIdParamRatingSchema,
} from '../../schemas/rating.schema';
import createRatingHandler from '../../useCases/ratings/createRating';
import readAllRatingsHandler from '../../useCases/ratings/readAllRatings';
import readRatingByPlaceIdHandler from '../../useCases/ratings/readRatingByPlaceId';

const routes = Router();

/**
 * @openapi
 * '/api/v1/ratings':
 *  get:
 *     tags:
 *     - Ratings
 *     summary: Get all Ratings
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *            $ref: '#/components/schemas/getAllRatings'
 *  post:
 *     tags:
 *     - Ratings
 *     summary: Create a new rating
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createRating'
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *          application/json:
 *           example:
 *             message: Rating created
 *             rating:
 *              id: 7e63add2-5f09-4efc-b28d-74fb07f3e14e
 *              createdAt: 2022-09-28T21:17:49.205Z
 *       401:
 *         description: UNAUTHORIZED
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/error/UNAUTHORIZED'
 *       403:
 *         description: FORBIDDEN
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/error/FORBIDDEN'
 *       400:
 *         description: BAD REQUEST
 *         content:
 *           application/json:
 *             schema:
 *               example: [
 *                "placeId is required",
 *                'grade is required',
 *                'body.grade must be greater than or equal to 1',
 *                'body.grade must be less than or equal to 5',
 *                'comment is required'
 *               ]
 * '/api/v1/ratings/{placeId}':
 *  get:
 *     tags:
 *     - Ratings
 *     summary: Get rating by place id
 *     parameters:
 *      - name: placeId
 *        in: path
 *        description: The place id
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *            $ref: '#/components/schemas/getRatingsByPlaceId'
 */

routes
  .route('/')
  .post(
    [validateResource(createRatingSchema), requireUser],
    (req: Request, res: Response, next: NextFunction) =>
      createRatingHandler.handle(req, res, next)
  )
  .get((req, res, next) => readAllRatingsHandler.handle(req, res, next));

routes
  .route('/:placeId')
  .get(validateResource(placeIdParamRatingSchema), (req, res, next) =>
    readRatingByPlaceIdHandler.handle(req, res, next)
  );

export default routes;
