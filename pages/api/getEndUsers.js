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
      const query = "SELECT * FROM users WHERE is_admin = ?";
      const values = [0];
      const [rows] = await connection.execute(query, values);
      connection.end();
      res.status(200).json(rows);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  } else if (req.method === "POST") {
    try {
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
