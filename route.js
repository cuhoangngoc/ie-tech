import PostController from './Posts.Controller';
import express from 'express';
import GetPostsBy from './getPostsBy';
const router = express.Router();
router.get('/posts/:category_id', GetPostsBy.getPostByCategory);
router.get('/posts/:user_id', GetPostsBy.getPostByUser_id);
export default router;
