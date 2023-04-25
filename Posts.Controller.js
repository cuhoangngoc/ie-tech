import PostsPage from './postsPage';
import mysql from "mysql2/promise";
export default class PostsController{
    static async apiAddPost(req, res) {
        try {
            const {title, content,slug, category_id, user_id, image} = req.body;
            const result = await PostsPage.addPost({
                title,
                content,
                slug,
                category_id,
                user_id,
                image
            });
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }    
    }
    static async apiUpdatePost(req, res) {
        try {
            const {title, content,slug, category_id, user_id, image} = req.body;
            const result = await PostsPage.updatePost({
                title,
                content,
                slug,
                category_id,
                user_id,
                image
            });
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    static async apiDeletePost(req, res) {
        try {
            const {title, content,slug, category_id, user_id, image} = req.body;
            const result = await PostsPage.deletePost({
                title,
                content,
                slug,
                category_id,
                user_id,
                image
            });
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}