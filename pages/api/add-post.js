import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "ietech",
    user: "root",
    password: "",
    port: "3306",
  });
  try {
    await connection.ping();
    console.log("MySQL server responded");
    } catch (error) {
    console.error("Error pinging MySQL server:", error);
    }

  if (req.method === "POST") {
    const { title, content, slug, category_id, user_id, image } = req.body;

    const query = `
      INSERT INTO posts (title, content, slug, category_id, user_id, image)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    try {
      await connection.execute(query, [
        title,
        content,
        slug,
        category_id,
        user_id,
        image,
      ]);
      res.status(200).json({ message: "Post đã được thêm thành công" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }
}
