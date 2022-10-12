import PostRepository from '../../../database/repositories/implementations/rating.repository';
import ReadUserPostsController from './readUserPostsController';
import ReadUserPostsUseCase from './readUserPostsUseCase';

const postRepository = new PostRepository();

const useCase = new ReadUserPostsUseCase(postRepository);

const controller = new ReadUserPostsController(useCase);

export default controller;
