import PostsPage from './postsPage';
import mysql from "mysql2/promise";
export default class PostsController{
    static async getAllPostByCategory(req, res) {
        const connection = await mysql.createConnection({
            host: "localhost",
            database: "ietech",
            user: "root",
            password: "",
            port: "3306",
      });
        try {
            const [rows,fields] = await connection.execute(
                "SELECT * FROM post WHERE category_id = ?",
                [req.params.category_id]
            );
            res.status(200).json(rows);
        } catch (error) {
            res.status(500).json(error);
        } finally {
            connection.end();
        }
    }
    static async getAllPostByUser_id(req, res) {
        const connection = await mysql.createConnection({
            host: "localhost",
            database: "ietech",
            user: "root",
            password: "",
            port: "3306",
      });
        try {
            const [rows] = await connection.execute(
                "SELECT * FROM post WHERE user_id = ?",
                [req.params.user_id]
            );
            res.status(200).json(rows);
        }
    catch (error) {
        res.status(500).json(error);
    } finally {
        connection.end();
        }
    }
}