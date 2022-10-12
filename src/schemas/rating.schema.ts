import { object, string, InferType, number } from 'yup';

/**
 * @openapi
 * components:
 *   schemas:
 *     createRating:
 *          type: object
 *          properties:
 *            comment:
 *              type: string
 *            grade:
 *              type: number
 *              description: number from 1 to 5
 *              example: 4
 *            placeId:
 *              type: string
 *     getAllRatings:
 *      type: array
 *      items:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            example: bbe6fa3f-b11b-4b89-87e6-bb54511b8890
 *          comment:
 *            type: string
 *          placeId:
 *            type: string
 *          grade:
 *            type: number
 *            example: 4
 *          user:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Fabricio
 *          createdAt:
 *            type: string
 *            example: 2022-09-30T16:07:11.218Z
 *     getRatingsByPlaceId:
 *      type: array
 *      items:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            example: bbe6fa3f-b11b-4b89-87e6-bb54511b8890
 *          comment:
 *            type: string
 *          placeId:
 *            type: string
 *          grade:
 *            type: number
 *            example: 4
 *          user:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Fabricio
 *              photoUrl:
 *                type: string
 *                example: foto.com
 *          createdAt:
 *            type: string
 *            example: 2022-09-30T16:07:11.218Z
 */

const create = {
  body: object({
    placeId: string().defined('placeId is required'),
    grade: number().defined('grade is required').min(1).max(5),
    comment: string().defined('comment is required'),
  }).defined(),
};

const placeIdParams = {
  params: object({ placeId: string().defined('placeId is required') }),
};

export const createRatingSchema = object({
  ...create,
});

export const placeIdParamRatingSchema = object({
  ...placeIdParams,
});

export type CreateRatingInput = InferType<typeof createRatingSchema>;
export type ReadRatingByPlaceIdInput = InferType<
  typeof placeIdParamRatingSchema
>;
