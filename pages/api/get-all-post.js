import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "ietech",
    user: "root",
    password: "",
    port: "3306",
  });

  if (req.method === "GET") {
    try {
      const [rows, fields] = await connection.execute(
        "SELECT id, title, slug, content, category_id, user_id, image, created_at, updated_at FROM posts"
      );
      res.status(200).json(rows);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    } finally {
      connection.end();
    }
  }
}
