import mysql from "mysql2/promise";
let posts;
export default class postsPage{
    static async injectSQL(req, res, sql, params) {
        if(posts){
            return;
        }
        try {
            posts= await mysql.createConnection({ 
                host: "localhost",
                database: "ietech",
                user: "root",
                password: "",
                port: "3306",
            }).collection("posts");
        } catch (error) {
            console.error(`Unable to establish a connection handle in postPage: ${error}`);
            return;
        }
    }
    static async addPost(req, res) {
        try {
            const {title, content,slug, category_id, user_id, image} = req.body;
            const result = await posts.insertOne({
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
        } finally {
            connection.end();
            }
    }
    static async updatePost(req, res) {
        try {
            const {title, content,slug, category_id, user_id, image} = req.body;
            const result = await posts.updateOne({
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
        }    finally {
            connection.end();
            }
    }
    static async deletePost(req, res) {
        try {
            const {title, content,slug, category_id, user_id, image} = req.body;
            const result = await posts.deleteOne({
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
        } finally {
            connection.end();
        }   
    }    
}