import { object, string, InferType, number } from 'yup';

/**
 * @openapi
 * components:
 *   error:
 *     NonexistentCategoryId:
 *        properties:
 *            status:
 *              type: number
 *              example: 404
 *            message:
 *              type: string
 *              example: CATEGORY_ID_DOES_NOT_EXIST
 *     NonexistentPostId:
 *        properties:
 *            status:
 *              type: number
 *              example: 404
 *            message:
 *              type: string
 *              example: POST_ID_DOES_NOT_EXIST
 *   schemas:
 *     createPost:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *              example: Saiba mais sobre o clean code
 *            categoryId:
 *              type: string
 *              example: 169d28a2-5e3d-407e-ac39-7541812c9f88
 *            content:
 *              type: string
 *              example: string
 *     getAllPosts:
 *      type: array
 *      items:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            example: bbe6fa3f-b11b-4b89-87e6-bb54511b8890
 *          title:
 *            type: string
 *            example: Saiba mais sobre o clean code
 *          author:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Fabricio
 *          category:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Entretenimento
 *          createdAt:
 *            type: string
 *            example: 2022-09-30T16:07:11.218Z
 *     getUserPosts:
 *      type: array
 *      items:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            example: bbe6fa3f-b11b-4b89-87e6-bb54511b8890
 *          title:
 *            type: string
 *            example: Saiba mais sobre o clean code
 *          content:
 *            type: string
 *            example: string
 *          category:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Entretenimento
 *          createdAt:
 *            type: string
 *            example: 2022-09-30T16:07:11.218Z
 *     getPostById:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            example: bbe6fa3f-b11b-4b89-87e6-bb54511b8890
 *          title:
 *            type: string
 *            example: Saiba mais sobre o clean code
 *          content:
 *            type: string
 *            example: string
 *          category:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Entretenimento
 *          author:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Fabricio
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
